/**
 * MOMO ODYSSEY - JAVASCRIPT LOGIC & ANIMATIONS
 * - Interactive Steam Particle Canvas Engine
 * - Scalable Recipe Database & Servings Calculator
 * - Interactive Checklist & Modal Controller
 * - Precision Kitchen Timer with Web Audio Chimes
 * - Pleating Masterclass Switcher
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. RECIPE DATABASE (4 Master Himalayan Momo Styles)
     ========================================================================== */
  const RECIPES = {
    'veg-momo': {
      id: 'veg-momo',
      title: 'Classic Steamed Veg Momo',
      subtitle: 'Bamboo-steamed translucent dumplings with spiced vegetable filling & sesame achaar',
      category: 'Steamed',
      badgeClass: 'badge-nature',
      image: 'images/veg_momo.jpg',
      defaultTime: 660, // 11 minutes
      timerLabel: 'Steaming Veg Momo (11 min)',
      yieldBase: 4, // 4 servings = 32 momos (8 per person)
      ingredients: [
        {
          group: 'Dough Wrappers',
          items: [
            { name: 'All-purpose flour (Maida)', amount: 400, unit: 'g' },
            { name: 'Lukewarm water', amount: 200, unit: 'ml' },
            { name: 'Vegetable oil', amount: 1, unit: 'tbsp' },
            { name: 'Salt', amount: 0.5, unit: 'tsp' }
          ]
        },
        {
          group: 'Vegetable Filling',
          items: [
            { name: 'Cabbage (very finely shredded & squeezed)', amount: 450, unit: 'g' },
            { name: 'Carrots (finely grated)', amount: 150, unit: 'g' },
            { name: 'Red onions (minced fine)', amount: 150, unit: 'g' },
            { name: 'Fresh ginger (grated fine)', amount: 2, unit: 'tbsp' },
            { name: 'Garlic cloves (minced fine)', amount: 2, unit: 'tbsp' },
            { name: 'Fresh cilantro (finely chopped)', amount: 4, unit: 'tbsp' },
            { name: 'Green chilies (finely minced)', amount: 2, unit: 'pcs' },
            { name: 'Nepalese Momo Masala / Meat Masala', amount: 1.5, unit: 'tbsp' },
            { name: 'Roasted cumin & coriander powder', amount: 1, unit: 'tsp' },
            { name: 'Melted ghee or hot mustard oil', amount: 3, unit: 'tbsp' },
            { name: 'Salt & black pepper', amount: 1.25, unit: 'tsp' }
          ]
        },
        {
          group: 'Classic Sesame-Tomato Achaar',
          items: [
            { name: 'Ripe red tomatoes (roasted)', amount: 4, unit: 'pcs' },
            { name: 'White sesame seeds (toasted golden)', amount: 4, unit: 'tbsp' },
            { name: 'Garlic cloves', amount: 4, unit: 'cloves' },
            { name: 'Fresh lemon juice', amount: 1.5, unit: 'tbsp' },
            { name: 'Mustard oil', amount: 1, unit: 'tbsp' },
            { name: 'Timur (Himalayan Sichuan pepper)', amount: 0.5, unit: 'tsp' }
          ]
        }
      ],
      steps: [
        {
          title: 'Knead the Supple Dough',
          desc: 'Mix flour and salt in a bowl. Gradually add lukewarm water and knead for 8–10 minutes until you achieve a smooth, elastic, non-sticky dough. Coat with a drop of oil, cover with a damp cloth, and rest for 25 minutes.'
        },
        {
          title: 'Prepare Filling with Moisture Balance',
          desc: 'Toss shredded cabbage and grated carrot with 1/2 tsp salt; let sit for 10 minutes, then squeeze firmly in a muslin cloth to drain excess moisture. In a bowl, combine squeezed veggies, minced onion, ginger, garlic, chilies, cilantro, spices, and pour sizzling melted ghee over the spices to bloom their aromas. Mix thoroughly.'
        },
        {
          title: 'Roll Wrappers to Precision',
          desc: 'Pinch dough into small equal balls (about 12–14g each). On a lightly floured surface, roll each ball into a 3-inch circle, ensuring edges are significantly thinner than the center.'
        },
        {
          title: 'Stuff & Pleat (Traditional Round Pouch)',
          desc: 'Place 1 heaped tablespoon of filling in the center. With your thumb and index finger, make small accordion pleats clockwise, pressing them together at the crown to form a sealed round pouch.'
        },
        {
          title: 'Steam to Translucent Perfection',
          desc: 'Generously oil the steamer tiers. Arrange momos leaving 1/2-inch space between each for steam circulation. Place tier over vigorously boiling water, cover tightly, and steam for 10–12 minutes until skins turn glossy, translucent, and non-sticky.'
        },
        {
          title: 'Serve Sizzling Hot',
          desc: 'Transfer immediately to warm plates. Serve accompanied by freshly blended roasted sesame tomato achaar and fresh coriander leaves.'
        }
      ],
      proTip: '🌟 Chef’s Secret: Squeezing excess liquid out of the cabbage is crucial. If omitted, the filling will weep during steaming and cause the dough wrappers to tear or become waterlogged!'
    },

    'c-momo': {
      id: 'c-momo',
      title: 'Fiery C Momo (Chilli Momo)',
      subtitle: 'Crispy pan-fried or steamed momos tossed in a smoking wok with fiery chili-garlic glaze',
      category: 'Chilli',
      badgeClass: 'badge-spice',
      image: 'images/c_momo.jpg',
      defaultTime: 240, // 4 minutes
      timerLabel: 'C Momo Wok Glazing (4 min)',
      yieldBase: 4, // 4 servings = 32 momos
      ingredients: [
        {
          group: 'Momo Base',
          items: [
            { name: 'Prepared Veg Momos (steamed or shallow fried)', amount: 32, unit: 'pcs' },
            { name: 'Vegetable oil for searing or frying', amount: 3, unit: 'tbsp' }
          ]
        },
        {
          group: 'Chilli Wok Aromatics',
          items: [
            { name: 'Red onion (cut into 1-inch squares/petals)', amount: 1.5, unit: 'pcs' },
            { name: 'Green bell pepper / Capsicum (cubed)', amount: 1.5, unit: 'pcs' },
            { name: 'Red bell pepper (cubed)', amount: 1, unit: 'pc' },
            { name: 'Fresh garlic (coarsely chopped)', amount: 2.5, unit: 'tbsp' },
            { name: 'Fresh ginger (julienned)', amount: 1.5, unit: 'tbsp' },
            { name: 'Green chilies (slit lengthwise)', amount: 4, unit: 'pcs' },
            { name: 'Spring onion greens (chopped)', amount: 4, unit: 'tbsp' }
          ]
        },
        {
          group: 'Fiery Sweet-Savory Sauce Glaze',
          items: [
            { name: 'Red chili paste / Sriracha / Hot chili sauce', amount: 3, unit: 'tbsp' },
            { name: 'Tomato ketchup', amount: 3, unit: 'tbsp' },
            { name: 'Dark soy sauce', amount: 1.5, unit: 'tbsp' },
            { name: 'Rice vinegar or white vinegar', amount: 1, unit: 'tbsp' },
            { name: 'Toasted sesame oil', amount: 1, unit: 'tsp' },
            { name: 'Cornstarch slurry (1 tsp starch + 3 tbsp water)', amount: 1, unit: 'portion' },
            { name: 'Crushed black pepper & sugar', amount: 0.5, unit: 'tsp' }
          ]
        }
      ],
      steps: [
        {
          title: 'Pan-Fry or Steam Momos',
          desc: 'Have 32 cooked momos ready. For optimal C Momo texture, shallow fry steamed momos in 2 tbsp oil over medium-high heat until light golden and crisp on the outside.'
        },
        {
          title: 'Whisk the Signature Sauce',
          desc: 'In a bowl, mix red chili paste, tomato ketchup, dark soy sauce, vinegar, black pepper, sugar, and cornstarch slurry until smooth.'
        },
        {
          title: 'Smoke the Wok (High Heat)',
          desc: 'Heat 2 tbsp oil in a heavy wok or skillet until smoking hot. Add chopped garlic, ginger juliennes, and green chilies. Stir-fry aggressively for 30 seconds until intensely aromatic.'
        },
        {
          title: 'Flash-Sear Crunchy Vegetables',
          desc: 'Toss in the onion petals and diced bell peppers. Stir-fry on high heat for 1.5 minutes—they should gain a smoky wok-char (wok hei) while maintaining a crunchy bite.'
        },
        {
          title: 'Glossy Sauce Reduction',
          desc: 'Pour in the whisked chili-soy sauce blend. Stir quickly as it bubbles and reduces into a thick, glossy, clingy glaze in about 45–60 seconds.'
        },
        {
          title: 'Toss Momos & Garnish',
          desc: 'Add the crispy momos directly into the smoking wok. Toss gently but swiftly for 45 seconds until every single dumpling is enveloped in fiery glaze. Finish with toasted sesame oil and green spring onions.'
        }
      ],
      proTip: '🌟 Chef’s Secret: High heat is everything! Don’t let the onions and peppers turn soft—keep the heat roaring so the veggies retain their crunch against the juicy momos.'
    },

    'kothey-momo': {
      id: 'kothey-momo',
      title: 'Crispy Kothey Momo',
      subtitle: 'Pan-seared crescent dumplings with a crunchy caramelized bottom and juicy steamed top',
      category: 'Pan-fried',
      badgeClass: 'badge-gold',
      image: 'images/kothey_momo.jpg',
      defaultTime: 480, // 8 minutes
      timerLabel: 'Kothey Pan-Sear & Steam (8 min)',
      yieldBase: 4, // 4 servings = 32 momos
      ingredients: [
        {
          group: 'Crescent Momo Parcels',
          items: [
            { name: 'Prepared un-cooked momos (half-moon folded)', amount: 32, unit: 'pcs' },
            { name: 'High-heat cooking oil (peanut or mustard)', amount: 2.5, unit: 'tbsp' },
            { name: 'Toasted sesame oil for finishing', amount: 1, unit: 'tbsp' }
          ]
        },
        {
          group: 'Steam & Crisp Slurry',
          items: [
            { name: 'Warm water or light vegetable broth', amount: 120, unit: 'ml' },
            { name: 'Cornstarch or rice flour (for crispy lace)', amount: 1, unit: 'tsp' },
            { name: 'Pinch of salt', amount: 1, unit: 'pinch' }
          ]
        },
        {
          group: 'Garnish & Dipping Pairing',
          items: [
            { name: 'Toasted white & black sesame seeds', amount: 1, unit: 'tbsp' },
            { name: 'Fresh micro cilantro', amount: 2, unit: 'tbsp' },
            { name: 'Garlic-chili dipping oil or tomato achaar', amount: 1, unit: 'bowl' }
          ]
        }
      ],
      steps: [
        {
          title: 'Fold Crescent Half-Moons',
          desc: 'Kothey momos require a flat bottom. Fold wrappers into a crescent half-moon, pleating only the top curved edge while keeping the bottom edge straight and pressing down slightly on the counter to create a broad flat base.'
        },
        {
          title: 'Heat the Heavy Skillet',
          desc: 'Heat 2 tbsp oil in a flat-bottomed cast iron or non-stick skillet over medium-high heat until shimmering hot.'
        },
        {
          title: 'Sear the Golden Bottom',
          desc: 'Arrange momos flat-side down in a neat spiral or rows, touching lightly. Fry undisturbed for 3 minutes until bottoms turn a rich, crackling, amber golden-brown.'
        },
        {
          title: 'The Steam Splash & Seal',
          desc: 'Whisk the water with 1 tsp cornstarch. Pour the mixture directly into the sizzling pan and IMMEDIATELY cover with a tight-fitting lid. The water will erupt into dense steam.'
        },
        {
          title: 'Steam for 5 Minutes',
          desc: 'Keep covered over medium heat for 5 minutes. The trapped steam cooks the wrapper tops and interior filling to succulent tenderness while the bottoms continue caramelizing.'
        },
        {
          title: 'Uncover & Recrisp the Lace',
          desc: 'Remove lid. Let remaining moisture evaporate over medium-high heat (approx 1–2 mins). Drizzle 1 tsp sesame oil around the perimeter. The cornstarch slurry forms a crispy, delicate lace!'
        },
        {
          title: 'Invert & Serve Crispy Side Up',
          desc: 'Slide a thin spatula under the momos and invert onto a serving platter so the crunchy caramelized bottoms are facing upwards. Garnish with toasted sesame and fresh herbs.'
        }
      ],
      proTip: '🌟 Chef’s Secret: Do not touch or slide the momos during the first 3 minutes of searing. Let the natural Maillard reaction form a crisp non-stick crust before adding steam liquid!'
    },

    'jhol-momo': {
      id: 'jhol-momo',
      title: 'Royal Jhol Momo',
      subtitle: 'Steamed momos drowned in a hot, fragrant, nutty sesame-tomato & Himalayan Timur soup',
      category: 'Broth',
      badgeClass: 'badge-soup',
      image: 'images/jhol_momo.jpg',
      defaultTime: 720, // 12 minutes
      timerLabel: 'Jhol Broth Simmer (12 min)',
      yieldBase: 4, // 4 servings = 32 momos
      ingredients: [
        {
          group: 'Steamed Momos',
          items: [
            { name: 'Freshly steamed Veg or Chicken momos', amount: 32, unit: 'pcs' }
          ]
        },
        {
          group: 'Jhol Broth Core Base',
          items: [
            { name: 'White sesame seeds (toasted golden)', amount: 120, unit: 'g' },
            { name: 'Yellow soybeans / Bhatmas (roasted dry)', amount: 40, unit: 'g' },
            { name: 'Ripe red tomatoes (fire-roasted or boiled)', amount: 5, unit: 'pcs' },
            { name: 'Fresh ginger root', amount: 2, unit: 'inch' },
            { name: 'Garlic cloves', amount: 6, unit: 'cloves' },
            { name: 'Green chilies', amount: 3, unit: 'pcs' }
          ]
        },
        {
          group: 'Aromatic Himalayan Spices',
          items: [
            { name: 'Himalayan Timur (Sichuan pepper, roasted)', amount: 1, unit: 'tsp' },
            { name: 'Cumin & coriander seeds (toasted & ground)', amount: 1.5, unit: 'tbsp' },
            { name: 'Turmeric powder', amount: 0.5, unit: 'tsp' },
            { name: 'Cold-pressed mustard oil', amount: 2, unit: 'tbsp' },
            { name: 'Fenugreek seeds (Methi)', amount: 0.5, unit: 'tsp' },
            { name: 'Fresh lemon juice', amount: 2.5, unit: 'tbsp' },
            { name: 'Rich vegetable broth or warm water', amount: 750, unit: 'ml' },
            { name: 'Rock salt / Himalayan pink salt', amount: 1.5, unit: 'tsp' }
          ]
        }
      ],
      steps: [
        {
          title: 'Roast the Seeds & Nuts',
          desc: 'In a dry pan on medium-low heat, slowly toast white sesame seeds and yellow soybeans until golden, fragrant, and slightly popping. Do not burn! Let cool.'
        },
        {
          title: 'Roast Tomatoes & Aromatics',
          desc: 'Char whole tomatoes over an open flame or in a skillet until skins blister and turn blackened. Peel loosely. Roughly chop ginger, garlic, and green chilies.'
        },
        {
          title: 'Grind the Silky Paste',
          desc: 'Transfer toasted sesame, roasted soybeans, roasted timur, charred tomatoes, ginger, garlic, chilies, cumin-coriander powder, and salt into a high-speed blender. Add 200ml warm broth and blend until completely smooth and velvety.'
        },
        {
          title: 'Temper with Mustard & Methi (Jhaneko)',
          desc: 'Heat 2 tbsp mustard oil in a pot until light smoking. Add fenugreek seeds (methi) and let them turn dark brown (gives authentic Kathmandu nutty aroma). Add turmeric, then immediately pour in the blended puree.'
        },
        {
          title: 'Simmer the Jhol Broth',
          desc: 'Add the remaining 550ml warm vegetable broth. Bring to a gentle boil, then simmer on low heat for 10–12 minutes until all the flavors harmonize into a rich, fragrant, drinkable soup. Stir in fresh lemon juice.'
        },
        {
          title: 'Assembly & Submersion',
          desc: 'Place 8 steaming hot momos into a wide, deep ceramic bowl. Ladle boiling hot Jhol broth directly over the dumplings until they are swimming. Garnish with chopped cilantro, toasted sesame seeds, and a pinch of ground timur.'
        }
      ],
      proTip: '🌟 Chef’s Secret: Pour the jhol hot over piping hot momos right at the table! Letting momos sit in broth for too long softens the skin too much, so enjoy immediately with a brass soup spoon!'
    }
  };

  /* ==========================================================================
     2. STEAM PARTICLE CANVAS ANIMATION
     ========================================================================== */
  const canvas = document.getElementById('hero-steam-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    const maxParticles = 45;

    function resizeCanvas() {
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    }

    class SteamParticle {
      constructor(x, y, extraBoost = false) {
        this.reset(x, y, extraBoost);
      }

      reset(x, y, extraBoost = false) {
        // Spawn origin near bottom-right or hero image location
        const heroVisual = document.querySelector('.hero-visual');
        let originX = width * 0.72;
        let originY = height * 0.65;

        if (heroVisual) {
          const rect = heroVisual.getBoundingClientRect();
          const canvasRect = canvas.getBoundingClientRect();
          originX = (rect.left - canvasRect.left) + rect.width * 0.5 + (Math.random() * 80 - 40);
          originY = (rect.top - canvasRect.top) + rect.height * 0.45;
        }

        this.x = x !== undefined ? x : originX;
        this.y = y !== undefined ? y : originY;
        this.radius = Math.random() * 18 + 12;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = -(Math.random() * 1.5 + (extraBoost ? 2.5 : 1.0));
        this.alpha = Math.random() * 0.25 + 0.15;
        this.maxAlpha = this.alpha;
        this.growth = Math.random() * 0.25 + 0.2;
        this.life = 0;
        this.maxLife = Math.random() * 100 + 80;
      }

      update() {
        this.x += this.vx + Math.sin(this.life * 0.05) * 0.4;
        this.y += this.vy;
        this.radius += this.growth;
        this.life++;

        // Fade out as it reaches maxLife
        const progress = this.life / this.maxLife;
        if (progress > 0.5) {
          this.alpha = this.maxAlpha * (1 - (progress - 0.5) / 0.5);
        }

        if (this.life >= this.maxLife || this.y < 0) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius
        );
        gradient.addColorStop(0, `rgba(215, 175, 168, ${this.alpha * 0.45})`);
        gradient.addColorStop(0.5, `rgba(235, 210, 205, ${this.alpha * 0.25})`);
        gradient.addColorStop(1, 'rgba(251, 249, 246, 0)');

        ctx.fillStyle = gradient;
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    function initSteam() {
      resizeCanvas();
      particles = [];
      for (let i = 0; i < maxParticles; i++) {
        const p = new SteamParticle();
        p.life = Math.random() * p.maxLife; // Stagger spawn
        particles.push(p);
      }
    }

    function animateSteam() {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      requestAnimationFrame(animateSteam);
    }

    window.addEventListener('resize', resizeCanvas);
    initSteam();
    animateSteam();

    // Trigger steam burst on click
    const steamTrigger = document.getElementById('interactive-steam-trigger');
    if (steamTrigger) {
      steamTrigger.addEventListener('click', () => {
        for (let i = 0; i < 20; i++) {
          particles.push(new SteamParticle(undefined, undefined, true));
        }
        if (particles.length > maxParticles + 30) {
          particles.splice(0, 20);
        }
      });
    }
  }

  /* ==========================================================================
     3. INTERACTIVE RECIPE MODAL & SERVING SCALER
     ========================================================================== */
  const modal = document.getElementById('recipe-modal');
  const modalClose = document.getElementById('modal-close');
  const modalImg = document.getElementById('modal-img');
  const modalBadge = document.getElementById('modal-category-badge');
  const modalTitle = document.getElementById('modal-title');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalIngredientsList = document.getElementById('modal-ingredients-list');
  const modalStepsList = document.getElementById('modal-steps-list');
  const modalProTip = document.getElementById('modal-pro-tip');
  const currentServingsText = document.getElementById('current-servings-text');
  const progressBar = document.getElementById('ingredients-progress');
  const progressText = document.getElementById('ingredients-progress-text');
  const modalSyncTimerBtn = document.getElementById('modal-sync-timer-btn');
  const scalerBtns = document.querySelectorAll('.scaler-btn');

  let currentRecipeId = 'veg-momo';
  let currentServings = 4;

  function openRecipeModal(recipeId) {
    const recipe = RECIPES[recipeId];
    if (!recipe) return;

    currentRecipeId = recipeId;
    currentServings = 4; // Reset to standard 4 servings
    
    // Update active state on scaler buttons
    scalerBtns.forEach(btn => {
      btn.classList.toggle('active', parseInt(btn.dataset.servings) === 4);
    });

    // Populate static modal info
    modalImg.src = recipe.image;
    modalImg.alt = recipe.title;
    modalBadge.className = `badge ${recipe.badgeClass}`;
    modalBadge.textContent = recipe.category;
    modalTitle.textContent = recipe.title;
    modalSubtitle.textContent = recipe.subtitle;
    modalProTip.innerHTML = recipe.proTip;

    // Render ingredients and steps
    renderIngredients();
    renderSteps();

    // Show modal with animation
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeRecipeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeRecipeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeRecipeModal();
    });
  }

  // Keyboard escape closes modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeRecipeModal();
    }
  });

  // Attach click listener to all recipe open buttons
  document.querySelectorAll('.open-recipe-btn, .open-recipe-link').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const recipeId = btn.getAttribute('data-recipe-id');
      openRecipeModal(recipeId);
    });
  });

  // Servings Scaler buttons
  scalerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      scalerBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentServings = parseInt(btn.dataset.servings);
      renderIngredients();
    });
  });

  function formatQuantity(amount, baseServings, targetServings) {
    const scaled = (amount / baseServings) * targetServings;
    // Format nicely without ugly decimals
    if (Number.isInteger(scaled)) return scaled;
    if (scaled < 1) {
      if (Math.abs(scaled - 0.25) < 0.05) return '¼';
      if (Math.abs(scaled - 0.33) < 0.05) return '⅓';
      if (Math.abs(scaled - 0.5) < 0.05) return '½';
      if (Math.abs(scaled - 0.75) < 0.05) return '¾';
      return scaled.toFixed(1);
    }
    return scaled % 1 === 0 ? scaled : scaled.toFixed(1);
  }

  function renderIngredients() {
    const recipe = RECIPES[currentRecipeId];
    if (!recipe) return;

    const pieces = currentServings * 8;
    currentServingsText.textContent = `(for ${currentServings} servings · ${pieces} momos)`;

    let html = '';
    let totalItems = 0;

    recipe.ingredients.forEach((group, gIdx) => {
      html += `<div class="ingredient-group">
        <h4 class="ingredient-group-title">${group.group}</h4>`;

      group.items.forEach((item, iIdx) => {
        totalItems++;
        const itemId = `ing-${gIdx}-${iIdx}`;
        const scaledAmount = formatQuantity(item.amount, recipe.yieldBase, currentServings);

        html += `
          <div class="ingredient-item" data-id="${itemId}">
            <input type="checkbox" id="${itemId}" class="ingredient-checkbox">
            <label for="${itemId}" class="ingredient-label">
              <strong>${scaledAmount} ${item.unit}</strong> ${item.name}
            </label>
          </div>
        `;
      });

      html += `</div>`;
    });

    modalIngredientsList.innerHTML = html;
    updateProgress();

    // Attach listeners to newly generated checkboxes
    modalIngredientsList.querySelectorAll('.ingredient-checkbox').forEach(cb => {
      cb.addEventListener('change', (e) => {
        const itemContainer = e.target.closest('.ingredient-item');
        itemContainer.classList.toggle('checked', e.target.checked);
        updateProgress();
      });
    });
  }

  function updateProgress() {
    const allCbs = modalIngredientsList.querySelectorAll('.ingredient-checkbox');
    const checkedCbs = modalIngredientsList.querySelectorAll('.ingredient-checkbox:checked');
    const total = allCbs.length;
    const count = checkedCbs.length;
    const percentage = total > 0 ? (count / total) * 100 : 0;

    progressBar.style.width = `${percentage}%`;
    progressText.textContent = `${count} / ${total} gathered`;
  }

  const resetChecklistBtn = document.getElementById('reset-checklist');
  if (resetChecklistBtn) {
    resetChecklistBtn.addEventListener('click', () => {
      modalIngredientsList.querySelectorAll('.ingredient-checkbox').forEach(cb => {
        cb.checked = false;
        cb.closest('.ingredient-item').classList.remove('checked');
      });
      updateProgress();
    });
  }

  function renderSteps() {
    const recipe = RECIPES[currentRecipeId];
    if (!recipe) return;

    let html = '';
    recipe.steps.forEach((step, idx) => {
      html += `
        <div class="step-card">
          <div class="step-num-bubble">${idx + 1}</div>
          <div class="step-content">
            <strong>${step.title}</strong>
            <p>${step.desc}</p>
          </div>
        </div>
      `;
    });
    modalStepsList.innerHTML = html;
  }

  // Sync Timer button inside Modal
  if (modalSyncTimerBtn) {
    modalSyncTimerBtn.addEventListener('click', () => {
      const recipe = RECIPES[currentRecipeId];
      if (recipe) {
        setTimerSeconds(recipe.defaultTime, recipe.timerLabel);
        closeRecipeModal();
        const timerSection = document.getElementById('timer-section');
        if (timerSection) {
          timerSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }

  /* ==========================================================================
     4. RECIPE FILTER TABS
     ========================================================================== */
  const filterTabs = document.querySelectorAll('.filter-tab');
  const recipeCards = document.querySelectorAll('.recipe-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;

      recipeCards.forEach(card => {
        const category = card.dataset.category;
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInCard 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Quick timer button directly on cards
  document.querySelectorAll('.card-quick-timer-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const minutes = parseInt(btn.dataset.time);
      const card = btn.closest('.recipe-card');
      const title = card ? card.querySelector('.card-title').textContent : 'Timer';
      setTimerSeconds(minutes * 60, `${title} (${minutes} min)`);
      
      const timerSection = document.getElementById('timer-section');
      if (timerSection) {
        timerSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ==========================================================================
     5. PLEATING TECHNIQUE VISUALIZER
     ========================================================================== */
  const PLEAT_DATA = {
    round: {
      diagram: '🥟',
      label: 'Difficulty: Moderate | Pleats: 14–18',
      title: 'The Classic Round Pouch Pleat (Pokha)',
      desc: 'The iconic Kathmandu Valley dumpling fold. Gather small uniform pleats in a circular motion around the filling, then pinch tight at the crown like a gathered pouch.',
      steps: [
        'Cup the rolled wrapper (3-inch diameter, thin edges, thicker center) in your non-dominant palm.',
        'Place 1 heaped tablespoon of chilled vegetable filling right into the center.',
        'Using thumb and index finger, make your first accordion pleat. Pinch together firmly.',
        'Continue rotating the dumpling 360°, gathering 14 to 18 clockwise pleats into a spiral crown.',
        'Twist gently at the top to seal completely, or leave a pinpoint breathing chimney for steam release.'
      ],
      tip: '💡 <strong>Pro Tip:</strong> Keep the edges slightly thinner than the center so the gathered crown cooks at the exact same rate as the base.'
    },
    crescent: {
      diagram: '🌙',
      label: 'Difficulty: Easy-Moderate | Pleats: 8–12',
      title: 'The Crescent Half-Moon (Kothey Shape)',
      desc: 'Specifically engineered for pan-searing. The flat bottom maximizes surface area against the hot skillet, while the pleated crescent top creates airy pockets for steaming.',
      steps: [
        'Hold the wrapper flat across fingers and spoon filling along the center axis.',
        'Fold in half without sealing to form a semicircle.',
        'Starting at the right corner, pinch the bottom and top wrappers together to lock the edge.',
        'Make 8 to 10 forward pleats on the FRONT wrapper only, pressing each fold firmly against the flat back wrapper.',
        'Press gently against a flat cutting board to create the signature flat base for golden pan-searing.'
      ],
      tip: '💡 <strong>Pro Tip:</strong> Pressing down gently creates a wide, flat bottom that sears evenly without toppling over in the hot oil!'
    },
    leaf: {
      diagram: '🍃',
      label: 'Difficulty: Advanced | Pleats: 12–16',
      title: 'The Fish-Scale / Leaf Pleat (Artisan)',
      desc: 'A gourmet presentation fold found in Himalayan banquet feasts. Features alternating left-and-right braided folds that mimic an intricate braided leaf.',
      steps: [
        'Place filling along the center of the circular wrapper.',
        'Pinch the far end together to create an anchor point.',
        'Take a fold from the left side and press it into the center crease.',
        'Take an alternating fold from the right side and press it into the same central junction.',
        'Repeat alternating left and right folds down the length of the dumpling, pressing firmly until sealed.'
      ],
      tip: '💡 <strong>Pro Tip:</strong> Ensure your fingers are dry when forming alternating braids so the delicate dough edges weld tightly together without slipping.'
    }
  };

  const pleatBtns = document.querySelectorAll('.pleat-btn');
  const pleatDiagram = document.getElementById('pleat-diagram-icon');
  const pleatLabel = document.getElementById('pleat-step-label');
  const pleatTitle = document.getElementById('pleat-title');
  const pleatDesc = document.getElementById('pleat-desc');
  const pleatSteps = document.getElementById('pleat-steps');
  const pleatTip = document.getElementById('pleat-tip');

  pleatBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      pleatBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const style = btn.dataset.pleat;
      const data = PLEAT_DATA[style];
      if (!data) return;

      pleatDiagram.textContent = data.diagram;
      pleatLabel.textContent = data.label;
      pleatTitle.textContent = data.title;
      pleatDesc.textContent = data.desc;
      pleatTip.innerHTML = data.tip;

      let stepsHtml = '';
      data.steps.forEach((step, i) => {
        stepsHtml += `
          <div class="step-item">
            <span class="step-badge">${i + 1}</span>
            <p>${step}</p>
          </div>
        `;
      });
      pleatSteps.innerHTML = stepsHtml;
    });
  });

  /* ==========================================================================
     6. PRECISION KITCHEN STEAMING TIMER WITH WEB AUDIO CHIMES
     ========================================================================== */
  let totalTime = 660; // 11 mins default
  let remainingTime = 660;
  let timerInterval = null;
  let isRunning = false;
  let soundEnabled = true;

  const timerDigits = document.getElementById('timer-digits');
  const timerCurrentPreset = document.getElementById('timer-current-preset');
  const timerStatus = document.getElementById('timer-status');
  const timerStartBtn = document.getElementById('timer-start-btn');
  const timerPauseBtn = document.getElementById('timer-pause-btn');
  const timerResetBtn = document.getElementById('timer-reset-btn');
  const timerProgressCircle = document.getElementById('timer-progress-circle');
  const soundToggleBtn = document.getElementById('sound-toggle-btn');
  const soundIcon = document.getElementById('sound-icon');
  const customMinInput = document.getElementById('custom-min');
  const setCustomBtn = document.getElementById('set-custom-timer-btn');
  const presetButtons = document.querySelectorAll('.preset-btn');

  const circleCircumference = 2 * Math.PI * 100; // r = 100 -> ~628.3

  // Web Audio Chime Synthesizer
  function playHimalayanChime() {
    if (!soundEnabled) return;

    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const audioCtx = new AudioContext();

      // Play a harmonic 3-tone Tibetan singing bowl bell chord
      const frequencies = [528, 792, 1056]; // Solfeggio 528Hz healing harmony

      frequencies.forEach((freq, index) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

        const startTime = audioCtx.currentTime + index * 0.12;
        const stopTime = startTime + 3.2;

        gain.gain.setValueAtTime(0.001, startTime);
        gain.gain.exponentialRampToValueAtTime(0.25 / (index + 1), startTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, stopTime);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(startTime);
        osc.stop(stopTime);
      });
    } catch (e) {
      console.log('Audio chime not permitted or supported yet:', e);
    }
  }

  function updateTimerDisplay() {
    const mins = Math.floor(remainingTime / 60);
    const secs = remainingTime % 60;
    timerDigits.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

    // Update circular progress SVG
    if (timerProgressCircle) {
      const offset = circleCircumference - (remainingTime / totalTime) * circleCircumference;
      timerProgressCircle.style.strokeDashoffset = offset;
    }
  }

  function setTimerSeconds(seconds, label = 'Custom Timer') {
    pauseTimer();
    totalTime = seconds;
    remainingTime = seconds;
    timerCurrentPreset.textContent = label;
    timerStatus.textContent = 'Ready';
    timerStatus.style.background = '#f7ebe6';
    timerStatus.style.color = '#7e3e33';
    timerStartBtn.disabled = false;
    timerPauseBtn.disabled = true;
    updateTimerDisplay();
  }

  function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timerStatus.textContent = 'Steaming...';
    timerStatus.style.background = '#fdf2f0';
    timerStatus.style.color = '#b56c5e';
    timerStartBtn.disabled = true;
    timerPauseBtn.disabled = false;

    timerInterval = setInterval(() => {
      if (remainingTime > 0) {
        remainingTime--;
        updateTimerDisplay();
      } else {
        completeTimer();
      }
    }, 1000);
  }

  function pauseTimer() {
    if (!isRunning) return;
    isRunning = false;
    clearInterval(timerInterval);
    timerStatus.textContent = 'Paused';
    timerStatus.style.background = '#faf3ec';
    timerStatus.style.color = '#8c6331';
    timerStartBtn.disabled = false;
    timerPauseBtn.disabled = true;
  }

  function resetTimer() {
    pauseTimer();
    remainingTime = totalTime;
    timerStatus.textContent = 'Ready';
    timerStatus.style.background = '#f7ebe6';
    timerStatus.style.color = '#7e3e33';
    timerStartBtn.disabled = false;
    timerPauseBtn.disabled = true;
    updateTimerDisplay();
  }

  function completeTimer() {
    pauseTimer();
    timerStatus.textContent = '🎉 DONE! Ready to Eat';
    timerStatus.style.background = '#edf3f0';
    timerStatus.style.color = '#41675b';
    playHimalayanChime();

    // Subtle celebration pulse
    timerDigits.style.animation = 'pulse-ring 1s 3';
    setTimeout(() => {
      timerDigits.style.animation = '';
    }, 3000);
  }

  // Timer Controls Events
  if (timerStartBtn) timerStartBtn.addEventListener('click', startTimer);
  if (timerPauseBtn) timerPauseBtn.addEventListener('click', pauseTimer);
  if (timerResetBtn) timerResetBtn.addEventListener('click', resetTimer);

  // Preset Buttons
  presetButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      presetButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const sec = parseInt(btn.dataset.presetSeconds);
      const label = btn.dataset.label;
      setTimerSeconds(sec, label);
    });
  });

  // Custom Input
  if (setCustomBtn) {
    setCustomBtn.addEventListener('click', () => {
      const mins = parseInt(customMinInput.value) || 10;
      presetButtons.forEach(b => b.classList.remove('active'));
      setTimerSeconds(mins * 60, `Custom Steamer (${mins} min)`);
    });
  }

  // Audio Mute Toggle
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      soundIcon.textContent = soundEnabled ? '🔔' : '🔕';
      soundToggleBtn.title = soundEnabled ? 'Kitchen Chime On' : 'Kitchen Chime Muted';
      if (soundEnabled) playHimalayanChime();
    });
  }

  // Initialize display
  updateTimerDisplay();
});
