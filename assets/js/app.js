(function () {
  "use strict";

  const STORAGE_KEYS = {
    language: "konautt-language",
    theme: "konautt-theme"
  };

  // Substitua os valores de exemplo pelos destinos oficiais quando estiverem disponíveis.
  const EXTERNAL_LINKS = {
    pressKit: "https://example.com/konautt/press-kit.pdf",
    photos: "https://example.com/konautt/photos",
    spotify: "https://open.spotify.com/artist/REPLACE_WITH_ARTIST_ID",
    appleMusic: "https://music.apple.com/artist/REPLACE_WITH_ARTIST_ID",
    youtubeMusic: "https://music.youtube.com/channel/REPLACE_WITH_CHANNEL_ID",
    soundCloud: "https://soundcloud.com/REPLACE_WITH_USERNAME",
    deezer: "https://www.deezer.com/artist/REPLACE_WITH_ARTIST_ID",
    amazonMusic: "https://music.amazon.com/artists/REPLACE_WITH_ARTIST_ID",
    youtube: "https://youtube.com/konautt",
    anghami: "https://play.anghami.com/artist/24107273",
    spinnRadio: "https://spinnradio.com/artist/konautt"
  };

  const translations = {
    "pt-BR": {
      "common.skip": "Pular para o conteúdo",
      "common.navLabel": "Navegação principal",
      "common.home": "Início",
      "common.music": "Prods",
      "common.shows": "Sets",
      "common.contact": "Contato",
      "common.pressKit": "Press Kit em PDF",
      "common.photos": "Fotos",
      "common.theme": "Tema",
      "common.themeDark": "Escuro",
      "common.themeLight": "Claro",
      "common.language": "Idioma",
      "common.menuOpen": "Abrir menu",
      "common.menuClose": "Fechar menu",
      "common.booking": "Fale sobre bookings",
      "common.rights": "© 2026 KONAUTT",
      "common.credit": "Desenvolvido por",
      "common.noScript": "Ative o JavaScript para usar os seletores de tema e idioma.",
      "home.title": "KONAUTT — DJ e produtor musical",
      "home.description": "Site oficial de KONAUTT, artista eletrônico independente, DJ e produtor musical.",
      "home.eyebrow": "Artista eletrônico independente / DJ e produtor musical",
      "home.hero": "KONAUTT",
      "home.lede": "Explorando o som além das fronteiras.",
      "home.cta": "Entrar no som",
      "home.imageAlt": "Textura oceânica em preto e branco",
      "home.imageCaption": "Som em movimento",
      "home.metaOne": "Música eletrônica / prática independente",
      "home.metaTwo": "House — Techno — Além",
      "home.aboutEyebrow": "01 / Manifesto do artista",
      "home.aboutTitle": "Open Format",
      "home.aboutLead": "KONAUTT é um projeto independente que atravessa a música eletrônica sem se acomodar em uma única definição.",
      "home.aboutBody": "Dos DJ sets às produções autorais, o trabalho segue a curiosidade: House, Techno, Melodic Techno, Trance, UK Garage, Hyperpop e sons que ainda estão tomando forma. Cada lançamento e set testa novas bordas.",
      "home.exploreEyebrow": "02 / Explore",
      "home.exploreTitle": "ESCOLHA UMA FREQUÊNCIA.",
      "home.cardMusicTitle": "Prods",
      "home.cardMusicBody": "Lançamentos oficiais e trabalhos em som.",
      "home.cardShowsTitle": "Sets",
      "home.cardShowsBody": "Próximos sets e arquivo de apresentações.",
      "home.cardContactTitle": "Contato",
      "home.cardContactBody": "Bookings, colaborações e outras conversas.",
      "music.title": "Prods — KONAUTT",
      "music.description": "Discografia oficial e lançamentos de KONAUTT.",
      "music.eyebrow": "Prods / Discografia oficial",
      "music.hero": "Releases",
      "music.lede": "Um índice objetivo dos lançamentos de KONAUTT, do primeiro título em diante.",
      "music.body": "Capas, detalhes, tracklists, notas e destinos oficiais de streaming serão incluídos quando estiverem disponíveis.",
      "music.meta": "House / Techno / Além",
      "music.archiveEyebrow": "01 / Arquivo de lançamentos",
      "music.archiveTitle": "O CATÁLOGO",
      "music.archiveBody": "Títulos oficiais com informações restritas ao que já foi confirmado.",
      "music.official": "Lançamento oficial",
      "music.pending": "Links oficiais em breve",
      "music.k1Body": "Primeiro título listado no catálogo oficial de KONAUTT.",
      "music.loveBody": "Lançamento listado no catálogo oficial de KONAUTT.",
      "music.artLabel": "KONAUTT / LANÇAMENTO",
      "shows.title": "Sets — KONAUTT",
      "shows.description": "Próximos sets e arquivo de apresentações de KONAUTT.",
      "shows.eyebrow": "Ao vivo / KONAUTT na pista",
      "shows.hero": "LIVESETS",
      "shows.lede": "Próximas datas e apresentações passadas reunidas em um só lugar.",
      "shows.cta": "Ver datas",
      "shows.imageAlt": "Público reunido sob as luzes de um evento de música ao vivo",
      "shows.imageCaption": "Na pista / no momento",
      "shows.metaOne": "Próximos sets / apresentações passadas",
      "shows.metaTwo": "House — Techno — Além",
      "shows.upcomingEyebrow": "01 / Próximas apresentações",
      "shows.upcomingTitle": "A SEGUIR.",
      "shows.emptyTitle": "Nenhum set confirmado no momento.",
      "shows.emptyBody": "Quando uma data for confirmada, você encontrará aqui nome, local, cidade, data, fotos e link de ingressos.",
      "shows.archiveEyebrow": "02 / O arquivo",
      "shows.archiveTitle": "APRESENTAÇÕES PASSADAS",
      "shows.archiveLead": "Um registro de pistas, públicos e noites em movimento.",
      "shows.archiveAlt": "DJ se apresentando sob luzes de palco",
      "shows.archiveCaption": "Do arquivo",
      "shows.archiveStatus": "Arquivo / Passado",
      "shows.archiveEmpty": "Ainda não há apresentações anteriores listadas.",
      "shows.archiveBody": "Eventos anteriores confirmados serão reunidos aqui com local, cidade, data e fotografia.",
      "contact.title": "Contato — KONAUTT",
      "contact.description": "Contato de KONAUTT para bookings, colaborações e outras propostas.",
      "contact.eyebrow": "Bookings / Colaborações / Contato",
      "contact.hero": "VAMOS CONVERSAR.",
      "contact.lede": "Para bookings, colaborações e outros assuntos, entre em contato diretamente. Conte alguns detalhes do projeto ou evento para que KONAUTT possa responder.",
      "contact.direct": "Contato direto",
      "contact.bookingTitle": "Bookings",
      "contact.bookingBody": "Inclua data, local e detalhes do evento em propostas de apresentação.",
      "contact.collabTitle": "Colaborações",
      "contact.collabBody": "Adicione uma breve apresentação e links ou referências relevantes à mensagem.",
      "contact.metaOne": "Artista eletrônico independente / DJ e produtor musical",
      "contact.metaTwo": "House — Techno — Além",
      "contact.channelsEyebrow": "Continue conectado",
      "contact.channelsTitle": "CANAIS OFICIAIS.",
      "contact.channelsLead": "Ouça KONAUTT nos perfis de streaming disponíveis.",
      "contact.profile": "Perfil do artista",
      "contact.openProfile": "Abrir perfil"
    },
    en: {
      "common.skip": "Skip to content",
      "common.navLabel": "Main navigation",
      "common.home": "Home",
      "common.music": "Prods",
      "common.shows": "Sets",
      "common.contact": "Contact",
      "common.pressKit": "Press Kit PDF",
      "common.photos": "Photos",
      "common.theme": "Theme",
      "common.themeDark": "Dark",
      "common.themeLight": "Light",
      "common.language": "Language",
      "common.menuOpen": "Open menu",
      "common.menuClose": "Close menu",
      "common.booking": "Booking inquiries",
      "common.rights": "© 2026 KONAUTT",
      "common.credit": "Built by",
      "common.noScript": "Enable JavaScript to use the theme and language selectors.",
      "home.title": "KONAUTT — DJ and music producer",
      "home.description": "Official site of KONAUTT, an independent electronic artist, DJ and music producer.",
      "home.eyebrow": "Independent electronic artist / DJ and music producer",
      "home.hero": "KONAUTT",
      "home.lede": "Exploring sound beyond boundaries.",
      "home.cta": "Enter the sound",
      "home.imageAlt": "Black-and-white study of ocean texture",
      "home.imageCaption": "Sound in motion",
      "home.metaOne": "Electronic music / independent practice",
      "home.metaTwo": "House — Techno — Elsewhere",
      "home.aboutEyebrow": "01 / Artist statement",
      "home.aboutTitle": "Open Format",
      "home.aboutLead": "KONAUTT is an independent project moving through electronic music without settling into a single definition.",
      "home.aboutBody": "From DJ sets to original productions, the work follows curiosity: House, Techno, Melodic Techno, Trance, UK Garage, Hyperpop and sounds still taking shape. Each release and set tests new edges.",
      "home.exploreEyebrow": "02 / Explore",
      "home.exploreTitle": "CHOOSE A FREQUENCY.",
      "home.cardMusicTitle": "Prods",
      "home.cardMusicBody": "Official releases and work in sound.",
      "home.cardShowsTitle": "Sets",
      "home.cardShowsBody": "Upcoming sets and past appearances.",
      "home.cardContactTitle": "Contact",
      "home.cardContactBody": "Bookings, collaborations and other conversations.",
      "music.title": "Prods — KONAUTT",
      "music.description": "Official discography and releases by KONAUTT.",
      "music.eyebrow": "Prods / Official discography",
      "music.hero": "Releases",
      "music.lede": "A considered index of KONAUTT releases, from the first title onward.",
      "music.body": "Artwork, release details, tracklists, notes and official streaming destinations will be included when available.",
      "music.meta": "House / Techno / Elsewhere",
      "music.archiveEyebrow": "01 / Release archive",
      "music.archiveTitle": "THE CATALOGUE",
      "music.archiveBody": "Official titles, with details kept to what has been confirmed.",
      "music.official": "Official release",
      "music.pending": "Official links coming soon",
      "music.k1Body": "The first title listed in KONAUTT's official catalogue.",
      "music.loveBody": "A release listed in KONAUTT's official catalogue.",
      "music.artLabel": "KONAUTT / RELEASE",
      "shows.title": "Sets — KONAUTT",
      "shows.description": "Upcoming sets and past appearances by KONAUTT.",
      "shows.eyebrow": "Live / KONAUTT on the floor",
      "shows.hero": "LIVESETS",
      "shows.lede": "Upcoming dates and past appearances, gathered in one place.",
      "shows.cta": "View dates",
      "shows.imageAlt": "Crowd gathered beneath the lights at a live music event",
      "shows.imageCaption": "In the room / in the moment",
      "shows.metaOne": "Upcoming sets / past appearances",
      "shows.metaTwo": "House — Techno — Elsewhere",
      "shows.upcomingEyebrow": "01 / Next appearances",
      "shows.upcomingTitle": "UP NEXT.",
      "shows.emptyTitle": "No confirmed sets announced.",
      "shows.emptyBody": "When a date is confirmed, you will find its name, venue, city, date, photography and ticket link here.",
      "shows.archiveEyebrow": "02 / The archive",
      "shows.archiveTitle": "PAST APPEARANCES",
      "shows.archiveLead": "A record of rooms, crowds and nights in motion.",
      "shows.archiveAlt": "DJ performing beneath stage lights",
      "shows.archiveCaption": "From the archive",
      "shows.archiveStatus": "Past / Archive",
      "shows.archiveEmpty": "No past appearances listed yet.",
      "shows.archiveBody": "Confirmed past events will be collected here with their venue, city, date and photography.",
      "contact.title": "Contact — KONAUTT",
      "contact.description": "Contact KONAUTT for bookings, collaborations and other inquiries.",
      "contact.eyebrow": "Bookings / Collaborations / Inquiries",
      "contact.hero": "LET'S CONNECT.",
      "contact.lede": "For bookings, collaborations and other inquiries, get in touch directly. Share a few details about your project or event so KONAUTT can get back to you.",
      "contact.direct": "Direct contact",
      "contact.bookingTitle": "Bookings",
      "contact.bookingBody": "Include the date, location and event details for performance inquiries.",
      "contact.collabTitle": "Collaborations",
      "contact.collabBody": "Add a short introduction and any relevant links or references to your message.",
      "contact.metaOne": "Independent electronic artist / DJ and music producer",
      "contact.metaTwo": "House — Techno — Elsewhere",
      "contact.channelsEyebrow": "Stay connected",
      "contact.channelsTitle": "OFFICIAL CHANNELS.",
      "contact.channelsLead": "Listen to KONAUTT on the available streaming profiles.",
      "contact.profile": "Artist profile",
      "contact.openProfile": "Open profile"
    }
  };

  const getStoredValue = (key) => {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  };

  const storeValue = (key, value) => {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      // The interface still works when storage is disabled.
    }
  };

  const getInitialLanguage = () => {
    const storedLanguage = getStoredValue(STORAGE_KEYS.language);
    if (translations[storedLanguage]) return storedLanguage;
    return navigator.language.toLowerCase().startsWith("pt") ? "pt-BR" : "en";
  };

  const getInitialTheme = () => {
    const storedTheme = getStoredValue(STORAGE_KEYS.theme);
    if (storedTheme === "light" || storedTheme === "dark") return storedTheme;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  };

  const translatePage = (language) => {
    const dictionary = translations[language];
    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const value = dictionary[element.dataset.i18n];
      if (value) element.textContent = value;
    });

    document.querySelectorAll("[data-i18n-title]").forEach((element) => {
      const value = dictionary[element.dataset.i18nTitle];
      if (value) element.title = value;
    });

    document.querySelectorAll("[data-i18n-content]").forEach((element) => {
      const value = dictionary[element.dataset.i18nContent];
      if (value) element.setAttribute("content", value);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
      const value = dictionary[element.dataset.i18nAlt];
      if (value) element.alt = value;
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const value = dictionary[element.dataset.i18nAriaLabel];
      if (value) element.setAttribute("aria-label", value);
    });

    document.querySelectorAll(".language-select").forEach((select) => {
      select.value = language;
    });

    const toggle = document.querySelector(".menu-toggle");
    if (toggle) {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-label", dictionary[isOpen ? "common.menuClose" : "common.menuOpen"]);
    }
  };

  const setTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    document.querySelectorAll(".theme-select").forEach((select) => {
      select.value = theme;
    });
  };

  const closeMenu = (toggle, panel) => {
    toggle.setAttribute("aria-expanded", "false");
    panel.classList.remove("is-open");
    panel.hidden = true;
    document.body.classList.remove("menu-open");
    const language = document.documentElement.lang === "pt-BR" ? "pt-BR" : "en";
    toggle.setAttribute("aria-label", translations[language]["common.menuOpen"]);
  };

  const initializeMenu = () => {
    const toggle = document.querySelector(".menu-toggle");
    const panel = document.querySelector(".mobile-nav");
    if (!toggle || !panel) return;

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      if (isOpen) {
        closeMenu(toggle, panel);
        return;
      }

      toggle.setAttribute("aria-expanded", "true");
      panel.hidden = false;
      panel.classList.add("is-open");
      document.body.classList.add("menu-open");
      const language = document.documentElement.lang === "pt-BR" ? "pt-BR" : "en";
      toggle.setAttribute("aria-label", translations[language]["common.menuClose"]);
    });

    panel.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => closeMenu(toggle, panel));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu(toggle, panel);
    });

    window.matchMedia("(min-width: 62.01rem)").addEventListener("change", (event) => {
      if (event.matches) closeMenu(toggle, panel);
    });
  };

  const initializeSelectors = (language, theme) => {
    document.querySelectorAll(".language-select").forEach((select) => {
      select.value = language;
      select.addEventListener("change", (event) => {
        const nextLanguage = event.target.value;
        storeValue(STORAGE_KEYS.language, nextLanguage);
        translatePage(nextLanguage);
      });
    });

    document.querySelectorAll(".theme-select").forEach((select) => {
      select.value = theme;
      select.addEventListener("change", (event) => {
        const nextTheme = event.target.value;
        storeValue(STORAGE_KEYS.theme, nextTheme);
        setTheme(nextTheme);
      });
    });
  };

  const initializeExternalLinks = () => {
    document.querySelectorAll("[data-link-key]").forEach((link) => {
      const target = EXTERNAL_LINKS[link.dataset.linkKey];
      if (target) link.href = target;
    });
  };

  const initialize = () => {
    const language = getInitialLanguage();
    const theme = getInitialTheme();
    setTheme(theme);
    translatePage(language);
    initializeSelectors(language, theme);
    initializeExternalLinks();
    initializeMenu();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialize);
  } else {
    initialize();
  }
})();
