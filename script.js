/* ==========================================================================
   sabrea.nl — script.js
   Vanilla JS: preloader, sticky nav, language switcher, scroll reveal,
   mobile menu, cart drawer, wishlist, newsletter form.
   ========================================================================== */


  "use strict";

  /* ----------------------------------------------------------------------
     Translations
     -------------------------------------------------------------------- */
  const translations = {
    en: {
      nav_home: "Home", nav_shop: "Shop", nav_collections: "Collections", nav_about: "About", nav_contact: "Contact",
      hero_eyebrow: "The Autumn Atelier Edit",
      hero_title_1: "Jewelry, made",
      hero_title_2: "to be noticed quietly.",
      hero_subtitle: "Hand-finished in small batches. Each piece carries the mark of the hand that made it — nothing mass, nothing loud.",
      hero_cta: "Explore Collection",
      hero_scroll: "Scroll",
      collections_eyebrow: "Featured", collections_title: "Collections",
      col_1_title: "The Lumière Line", col_1_sub: "Necklaces & pendants",
      col_2_title: "Solitaire", col_2_sub: "Rings",
      col_3_title: "Halo", col_3_sub: "Earrings",
      col_link: "Discover →",
      best_eyebrow: "Most Loved", best_title: "Best Sellers",
      tag_new: "New", tag_limited: "Limited",
      prod_1_name: "Aurore Solitaire Ring",
      prod_2_name: "Lumière Layer Necklace",
      prod_3_name: "Halo Hoop Earrings",
      prod_4_name: "Ondine Chain Bracelet",
      add_cart: "Add to Cart",
      cat_eyebrow: "Shop By", cat_title: "Category",
      cat_rings: "Rings", cat_necklaces: "Necklaces", cat_earrings: "Earrings", cat_bracelets: "Bracelets",
      about_eyebrow: "Our Story",
      about_title: "Made by hand, worn for a lifetime.",
      about_p1: "sabrea.nl began at a small workbench in the Netherlands, where every piece was — and still is — shaped, set and polished by hand. We work with recycled gold and ethically sourced stones, in runs small enough that a single jeweler sees a piece from sketch to box.",
      about_p2: "We don't chase trends. We build quiet, considered pieces meant to be worn daily and passed down eventually — jewelry as an heirloom, not an impulse.",
      about_stat1: "Pieces crafted", about_stat2: "Average rating", about_stat3: "Hand-finished",
      about_badge: "years of craft",
      about_cta: "Our Atelier",
      news_eyebrow: "Stay Close", news_title: "Be first to new arrivals",
      news_sub: "One email a month. New pieces, atelier notes, private previews. No noise.",
      news_placeholder: "your@email.com", news_cta: "Subscribe",
      news_success: "Thank you — you're on the list.",
      news_error: "Please enter a valid email address.",
      contact_eyebrow: "Get in Touch", contact_title: "Visit or write to us",
      contact_atelier: "Atelier", contact_email: "Email", contact_phone: "Phone",
      cart_title: "Your Cart", cart_empty: "Your cart is empty.", cart_total: "Total", cart_checkout: "Checkout",
      footer_rights: "All rights reserved.", footer_fine: "Handcrafted in the Netherlands.",
      remove_word: "Remove"
    },
    fr: {
      nav_home: "Accueil", nav_shop: "Boutique", nav_collections: "Collections", nav_about: "À propos", nav_contact: "Contact",
      hero_eyebrow: "L'Édition Atelier d'Automne",
      hero_title_1: "Des bijoux, faits",
      hero_title_2: "pour se remarquer discrètement.",
      hero_subtitle: "Finis à la main en petites séries. Chaque pièce porte la marque de la main qui l'a façonnée — rien d'industriel, rien de tape-à-l'œil.",
      hero_cta: "Explorer la Collection",
      hero_scroll: "Défiler",
      collections_eyebrow: "En vedette", collections_title: "Collections",
      col_1_title: "La Ligne Lumière", col_1_sub: "Colliers & pendentifs",
      col_2_title: "Solitaire", col_2_sub: "Bagues",
      col_3_title: "Halo", col_3_sub: "Boucles d'oreilles",
      col_link: "Découvrir →",
      best_eyebrow: "Les plus aimés", best_title: "Meilleures Ventes",
      tag_new: "Nouveau", tag_limited: "Édition limitée",
      prod_1_name: "Bague Solitaire Aurore",
      prod_2_name: "Collier Superposé Lumière",
      prod_3_name: "Créoles Halo",
      prod_4_name: "Bracelet Chaîne Ondine",
      add_cart: "Ajouter au Panier",
      cat_eyebrow: "Acheter par", cat_title: "Catégorie",
      cat_rings: "Bagues", cat_necklaces: "Colliers", cat_earrings: "Boucles d'oreilles", cat_bracelets: "Bracelets",
      about_eyebrow: "Notre Histoire",
      about_title: "Fabriqués à la main, portés toute une vie.",
      about_p1: "sabrea.nl est né sur un petit établi aux Pays-Bas, où chaque pièce était — et est toujours — façonnée, sertie et polie à la main. Nous travaillons avec de l'or recyclé et des pierres d'origine éthique, en petites séries permettant à un seul artisan de suivre une pièce du croquis à l'écrin.",
      about_p2: "Nous ne suivons pas les tendances. Nous créons des pièces discrètes et réfléchies, faites pour être portées au quotidien et transmises — le bijou comme héritage, non comme impulsion.",
      about_stat1: "Pièces créées", about_stat2: "Note moyenne", about_stat3: "Finition main",
      about_badge: "années de savoir-faire",
      about_cta: "Notre Atelier",
      news_eyebrow: "Restons proches", news_title: "Soyez informé des nouveautés",
      news_sub: "Un e-mail par mois. Nouvelles pièces, notes d'atelier, avant-premières privées. Sans bruit.",
      news_placeholder: "votre@email.com", news_cta: "S'abonner",
      news_success: "Merci — vous êtes inscrit.",
      news_error: "Veuillez saisir une adresse e-mail valide.",
      contact_eyebrow: "Nous contacter", contact_title: "Venez nous voir ou écrivez-nous",
      contact_atelier: "Atelier", contact_email: "E-mail", contact_phone: "Téléphone",
      cart_title: "Votre Panier", cart_empty: "Votre panier est vide.", cart_total: "Total", cart_checkout: "Commander",
      footer_rights: "Tous droits réservés.", footer_fine: "Fabriqué à la main aux Pays-Bas.",
      remove_word: "Retirer"
    },
    nl: {
      nav_home: "Home", nav_shop: "Shop", nav_collections: "Collecties", nav_about: "Over ons", nav_contact: "Contact",
      hero_eyebrow: "De Herfst Atelier Editie",
      hero_title_1: "Sieraden, gemaakt",
      hero_title_2: "om stilletjes op te vallen.",
      hero_subtitle: "Met de hand afgewerkt in kleine oplages. Elk stuk draagt het teken van de hand die het maakte — niets massaal, niets luid.",
      hero_cta: "Ontdek de Collectie",
      hero_scroll: "Scroll",
      collections_eyebrow: "Uitgelicht", collections_title: "Collecties",
      col_1_title: "De Lumière Lijn", col_1_sub: "Kettingen & hangers",
      col_2_title: "Solitaire", col_2_sub: "Ringen",
      col_3_title: "Halo", col_3_sub: "Oorbellen",
      col_link: "Ontdek →",
      best_eyebrow: "Meest geliefd", best_title: "Bestsellers",
      tag_new: "Nieuw", tag_limited: "Beperkt",
      prod_1_name: "Aurore Solitaire Ring",
      prod_2_name: "Lumière Laagjes Ketting",
      prod_3_name: "Halo Hoepel Oorbellen",
      prod_4_name: "Ondine Schakel Armband",
      add_cart: "In Winkelwagen",
      cat_eyebrow: "Shop op", cat_title: "Categorie",
      cat_rings: "Ringen", cat_necklaces: "Kettingen", cat_earrings: "Oorbellen", cat_bracelets: "Armbanden",
      about_eyebrow: "Ons Verhaal",
      about_title: "Met de hand gemaakt, een leven lang gedragen.",
      about_p1: "sabrea.nl begon aan een kleine werkbank in Nederland, waar elk stuk met de hand werd — en nog steeds wordt — gevormd, gezet en gepolijst. We werken met gerecycled goud en verantwoord gewonnen stenen, in oplages klein genoeg dat één juwelier een stuk van schets tot doosje volgt.",
      about_p2: "Wij volgen geen trends. Wij maken stille, doordachte stukken, bedoeld om dagelijks te dragen en ooit door te geven — sieraden als erfstuk, niet als impuls.",
      about_stat1: "Stuks gemaakt", about_stat2: "Gemiddelde score", about_stat3: "Handafwerking",
      about_badge: "jaar vakmanschap",
      about_cta: "Ons Atelier",
      news_eyebrow: "Blijf op de hoogte", news_title: "Als eerste nieuwe items zien",
      news_sub: "Eén e-mail per maand. Nieuwe stukken, atelier-notities, privé previews. Geen ruis.",
      news_placeholder: "jouw@email.com", news_cta: "Aanmelden",
      news_success: "Bedankt — je staat op de lijst.",
      news_error: "Voer een geldig e-mailadres in.",
      contact_eyebrow: "Neem contact op", contact_title: "Bezoek ons of schrijf ons",
      contact_atelier: "Atelier", contact_email: "E-mail", contact_phone: "Telefoon",
      cart_title: "Jouw Winkelwagen", cart_empty: "Je winkelwagen is leeg.", cart_total: "Totaal", cart_checkout: "Afrekenen",
      footer_rights: "Alle rechten voorbehouden.", footer_fine: "Handgemaakt in Nederland.",
      remove_word: "Verwijderen"
    }
  };

  const langNames = { en: "EN", fr: "FR", nl: "NL" };
  let currentLang = "en";

  /* ----------------------------------------------------------------------
     Apply translations to the DOM
     -------------------------------------------------------------------- */
  function applyLanguage(lang) {
    currentLang = lang;
    const dict = translations[lang];

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) el.setAttribute("placeholder", dict[key]);
    });

    document.documentElement.setAttribute("lang", lang);
    const langLabel = document.getElementById("langLabel");
    if (langLabel) langLabel.textContent = langNames[lang];

    document.querySelectorAll(".lang-menu li").forEach((li) => {
      li.classList.toggle("selected", li.getAttribute("data-lang") === lang);
    });

    renderCart(); // cart drawer strings depend on language
  }

  /* ----------------------------------------------------------------------
     Preloader
     -------------------------------------------------------------------- */
  window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    setTimeout(() => {
      preloader.classList.add("hidden");
    }, 400);
  });

  /* ----------------------------------------------------------------------
     Custom cursor dot
     -------------------------------------------------------------------- */
  const cursorDot = document.querySelector(".cursor-dot");
  if (cursorDot && matchMedia("(hover: hover) and (pointer: fine)").matches) {
    window.addEventListener("mousemove", (e) => {
      cursorDot.style.left = e.clientX + "px";
      cursorDot.style.top = e.clientY + "px";
    });
  }

  /* ----------------------------------------------------------------------
     Sticky navbar background on scroll
     -------------------------------------------------------------------- */
  const navbar = document.getElementById("navbar");
  function handleScrollNav() {
    if (window.scrollY > 40) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  }
  window.addEventListener("scroll", handleScrollNav, { passive: true });
  handleScrollNav();

  /* ----------------------------------------------------------------------
     Active nav link highlighting on scroll
     -------------------------------------------------------------------- */
  const sections = document.querySelectorAll("section[id]");
  const navAnchors = document.querySelectorAll(".nav-links a");
  function handleActiveLink() {
    let currentId = "home";
    const scrollPos = window.scrollY + 140;
    sections.forEach((sec) => {
      if (scrollPos >= sec.offsetTop) currentId = sec.id;
    });
    navAnchors.forEach((a) => {
      a.classList.toggle("active", a.getAttribute("href") === `#${currentId}`);
    });
  }
  window.addEventListener("scroll", handleActiveLink, { passive: true });
  handleActiveLink();

  /* ----------------------------------------------------------------------
     Mobile hamburger menu
     -------------------------------------------------------------------- */
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");
  hamburger.addEventListener("click", () => {
    const isOpen = hamburger.classList.toggle("open");
    mobileNav.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });
  mobileNav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      hamburger.classList.remove("open");
      mobileNav.classList.remove("open");
      document.body.style.overflow = "";
    });
  });

  /* ----------------------------------------------------------------------
     Language switcher dropdown
     -------------------------------------------------------------------- */
  const langSwitch = document.getElementById("langSwitch");
  const langCurrent = document.getElementById("langCurrent");
  const langMenu = document.getElementById("langMenu");

  langCurrent.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = langSwitch.classList.toggle("open");
    langCurrent.setAttribute("aria-expanded", String(isOpen));
  });

  langMenu.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
      const lang = li.getAttribute("data-lang");
      applyLanguage(lang);
      langSwitch.classList.remove("open");
      langCurrent.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", () => {
    langSwitch.classList.remove("open");
    langCurrent.setAttribute("aria-expanded", "false");
  });

  /* ----------------------------------------------------------------------
     Scroll reveal (IntersectionObserver)
     -------------------------------------------------------------------- */
  const revealEls = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Stagger children inside grids slightly for a premium feel
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );
  revealEls.forEach((el) => revealObserver.observe(el));

  // Hero reveals immediately since it's above the fold
  document.querySelector(".hero-content")?.classList.add("in-view");

  /* ----------------------------------------------------------------------
     Wishlist
     -------------------------------------------------------------------- */
  let wishlistCount = 0;
  const wishlistBadge = document.getElementById("wishlistCount");
  const wishlistBtn = document.getElementById("wishlistBtn");

  function updateWishlistBadge() {
    wishlistBadge.textContent = wishlistCount;
    wishlistBadge.classList.toggle("show", wishlistCount > 0);
  }

  document.querySelectorAll(".product-wish").forEach((btn) => {
    btn.addEventListener("click", () => {
      const active = btn.classList.toggle("active");
      wishlistCount += active ? 1 : -1;
      updateWishlistBadge();
      // small heart pulse animation
      btn.animate(
        [{ transform: "scale(1)" }, { transform: "scale(1.25)" }, { transform: "scale(1)" }],
        { duration: 350, easing: "ease-out" }
      );
    });
  });

  wishlistBtn.addEventListener("click", () => {
    wishlistBtn.animate(
      [{ transform: "scale(1)" }, { transform: "scale(1.15)" }, { transform: "scale(1)" }],
      { duration: 300 }
    );
  });

  /* ----------------------------------------------------------------------
     Cart
     -------------------------------------------------------------------- */
  const cart = []; // { name, price }
  const cartCountEl = document.getElementById("cartCount");
  const cartBtn = document.getElementById("cartBtn");
  const cartDrawer = document.getElementById("cartDrawer");
  const drawerBackdrop = document.getElementById("drawerBackdrop");
  const closeCartBtn = document.getElementById("closeCart");
  const cartItemsEl = document.getElementById("cartItems");
  const cartTotalEl = document.getElementById("cartTotal");

  function formatEUR(amount) {
    return "€ " + amount.toLocaleString("en-US");
  }

  function renderCart() {
    const dict = translations[currentLang];

    if (cart.length === 0) {
      cartItemsEl.innerHTML = `<p class="cart-empty">${dict.cart_empty}</p>`;
    } else {
      cartItemsEl.innerHTML = cart
        .map(
          (item, i) => `
        <div class="cart-line" data-index="${i}">
          <div>
            <div class="cart-line-name">${item.name}</div>
            <button class="cart-line-remove" data-index="${i}">${dict.remove_word}</button>
          </div>
          <div class="cart-line-price">${formatEUR(item.price)}</div>
        </div>`
        )
        .join("");

      cartItemsEl.querySelectorAll(".cart-line-remove").forEach((btn) => {
        btn.addEventListener("click", () => {
          const idx = Number(btn.getAttribute("data-index"));
          cart.splice(idx, 1);
          renderCart();
          updateCartBadge();
        });
      });
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotalEl.textContent = formatEUR(total);
  }

  function updateCartBadge() {
    cartCountEl.textContent = cart.length;
    cartCountEl.classList.toggle("show", cart.length > 0);
  }

  function openCart() {
    cartDrawer.classList.add("open");
    drawerBackdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeCart() {
    cartDrawer.classList.remove("open");
    drawerBackdrop.classList.remove("open");
    document.body.style.overflow = "";
  }

  cartBtn.addEventListener("click", openCart);
  closeCartBtn.addEventListener("click", closeCart);
  drawerBackdrop.addEventListener("click", closeCart);

  document.querySelectorAll(".btn-add").forEach((btn) => {
    btn.addEventListener("click", () => {
      const name = btn.getAttribute("data-name");
      const price = Number(btn.getAttribute("data-price"));
      cart.push({ name, price });
      renderCart();
      updateCartBadge();

      // Micro feedback on the button itself
      btn.classList.add("added");
      const label = btn.querySelector("span");
      const original = label.textContent;
      label.textContent = "✓";
      setTimeout(() => {
        btn.classList.remove("added");
        label.textContent = original;
      }, 900);

      openCart();
    });
  });

  /* ----------------------------------------------------------------------
     Newsletter form
     -------------------------------------------------------------------- */
  const newsletterForm = document.getElementById("newsletterForm");
  const newsletterMsg = document.getElementById("newsletterMsg");
  const newsletterEmail = document.getElementById("newsletterEmail");

  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const dict = translations[currentLang];
    const email = newsletterEmail.value.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValid) {
      newsletterMsg.textContent = dict.news_error;
      newsletterMsg.classList.remove("success");
      return;
    }

    newsletterMsg.textContent = dict.news_success;
    newsletterMsg.classList.add("success");
    newsletterForm.reset();
  });

  /* ----------------------------------------------------------------------
     Search icon — simple focus affordance placeholder
     -------------------------------------------------------------------- */
  const searchBtn = document.getElementById("searchBtn");
  searchBtn.addEventListener("click", () => {
    document.getElementById("shop")?.scrollIntoView({ behavior: "smooth" });
  });

  /* ----------------------------------------------------------------------
     Footer year
     -------------------------------------------------------------------- */
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ----------------------------------------------------------------------
     Init
     -------------------------------------------------------------------- */
  applyLanguage("en");