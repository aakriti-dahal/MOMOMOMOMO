# ---- Multi-stage Dockerfile for Vite + React + TypeScript ----

# =========================
# Build stage
# =========================
FROM node:20-alpine AS builder

WORKDIR /app

# Build-time variables
ARG NODE_ENV=production

ENV NODE_ENV=${NODE_ENV}

# Install dependencies first for better layer caching
COPY package.json package-lock.json ./
RUN npm ci

# Copy application source
COPY . .

# Build production assets
RUN npm run build


# =========================
# Serve stage
# =========================
FROM nginx:alpine AS runner

# Configurable nginx values
ARG NGINX_HTML_DIR=/usr/share/nginx/html

# Remove default nginx assets
RUN rm -rf ${NGINX_HTML_DIR}/*

# Copy Vite build output
COPY --from=builder /app/dist ${NGINX_HTML_DIR}

# Configurable container port
ARG CONTAINER_PORT=80

EXPOSE ${CONTAINER_PORT}

# Keep nginx running in foreground
CMD ["nginx", "-g", "daemon off;"]