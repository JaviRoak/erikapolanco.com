/* Lógica del portafolio. support.js proporciona DCLogic y React al montar la página. */
"use strict";

/* Textos legales del pie de página. Son una base general: conviene que un abogado
   los revise y los adapte a tu país antes de publicar el sitio. */

/* Google Analytics: pega aquí tu ID de medición (por ejemplo "G-AB12CD34EF").
   Mientras conserve las X no se carga nada, aunque el visitante acepte las cookies. */
const GA_ID = "G-XXXXXXXXXX";
const PROJECT_GALLERY_ENABLED = false; // Reactivar cuando vuelvan las fichas de imágenes.
const CONSENT_KEY = "ep-cookies";
const CONSENT_MONTHS = 12;

const LEGAL = {
  terminos: {
    title: "Términos y condiciones",
    updated: "Última actualización: noviembre de 2026",
    sections: [
      [
        "1. Quién es la titular",
        "Este sitio web es el portafolio profesional de Erika Polanco, diseñadora gráfica e ilustradora. Al navegarlo aceptas estos términos; si no estás de acuerdo con ellos, te pedimos que no lo uses.",
      ],
      [
        "2. Finalidad del sitio",
        "El sitio muestra proyectos de identidad visual, ilustración, diseño editorial y packaging con fines informativos y de presentación profesional. Nada en él constituye una oferta vinculante ni un contrato. Cualquier servicio se acuerda por separado y por escrito.",
      ],
      [
        "3. Uso permitido",
        "Puedes consultar el sitio y compartir sus enlaces. No está permitido copiar, descargar con fines comerciales, modificar, redistribuir ni usar su contenido para entrenar sistemas automáticos sin autorización previa y por escrito. Tampoco puedes interferir con el funcionamiento del sitio ni intentar acceder a áreas no públicas.",
      ],
      [
        "4. Contenido de terceros",
        "Algunos proyectos incluyen marcas, logotipos o productos de sus respectivos titulares. Se muestran únicamente como muestra del trabajo realizado y no implican patrocinio ni respaldo de esas marcas hacia este sitio.",
      ],
      [
        "5. Exactitud de la información",
        "Me esfuerzo por que la información sea correcta y esté al día, pero se ofrece «tal cual», sin garantías de que esté libre de errores o de interrupciones. Puedo modificar o retirar contenidos sin previo aviso.",
      ],
      [
        "6. Enlaces externos",
        "El sitio puede enlazar a páginas o redes sociales de terceros. No controlo su contenido ni sus políticas y no me hago responsable de ellas.",
      ],
      [
        "7. Limitación de responsabilidad",
        "En la medida permitida por la ley, no respondo por daños derivados del uso del sitio o de la imposibilidad de usarlo.",
      ],
      [
        "8. Cambios y ley aplicable",
        "Estos términos pueden actualizarse; la versión vigente es la publicada aquí. Se rigen por la legislación aplicable en el lugar de residencia de la titular.",
      ],
      [
        "9. Privacidad y cookies",
        "El tratamiento de datos personales y el uso de cookies se explican en la política de privacidad y en la política de cookies de este sitio.",
      ],
      [
        "10. Contacto",
        "Para cualquier consulta sobre estos términos, usa los datos de la sección Contacto de este sitio.",
      ],
    ],
  },
  privacidad: {
    title: "Política de privacidad",
    updated: "Última actualización: noviembre de 2026",
    sections: [
      [
        "1. Quién trata tus datos",
        "La responsable es Erika Polanco, titular de este sitio web. Puedes contactarla con los datos de la sección Contacto de este sitio para cualquier asunto relacionado con tus datos personales.",
      ],
      [
        "2. Qué datos se tratan",
        "Este sitio no tiene formularios, cuentas de usuario ni comentarios. Si me escribes por correo, trataré tu nombre, tu dirección de correo y el contenido del mensaje solo para responderte. Si aceptas las cookies de analítica, Google Analytics recoge datos de uso como las páginas que visitas, el tiempo de visita, el tipo de dispositivo y navegador, el idioma y tu ubicación aproximada. No se recogen datos que te identifiquen directamente.",
      ],
      [
        "3. Para qué se usan y con qué base",
        "• Responder a tus mensajes: es necesario para atender tu solicitud.\n• Medir y mejorar el sitio con estadísticas de uso: solo con tu consentimiento, que puedes retirar en cualquier momento.\n• Mantener la seguridad y el funcionamiento técnico del sitio: interés legítimo.",
      ],
      [
        "4. Con quién se comparten",
        "Google (Google Analytics) recibe los datos de uso únicamente si aceptas las cookies de analítica y puede tratarlos en servidores fuera de tu país, incluidos los de Estados Unidos, bajo las garantías que Google ofrece. Al cargar el sitio, tu navegador también solicita algunas bibliotecas técnicas a una red de distribución de contenidos (unpkg.com), por lo que ese proveedor puede recibir tu dirección IP. Las tipografías se sirven desde este mismo sitio. No vendo tus datos ni los uso con fines publicitarios.",
      ],
      [
        "5. Cuánto tiempo se conservan",
        "Los mensajes de correo se conservan mientras dure la conversación y durante el tiempo necesario para atender obligaciones legales. Los datos de analítica se conservan durante el periodo configurado en Google Analytics, que no supera los 14 meses.",
      ],
      [
        "6. Tus derechos",
        "Según la normativa de protección de datos que te sea aplicable (por ejemplo, el RGPD en la Unión Europea), puedes solicitar el acceso a tus datos, su rectificación o supresión, la limitación o la oposición al tratamiento y la portabilidad. Puedes retirar tu consentimiento en cualquier momento desde «Preferencias de cookies» en el pie de página. Para ejercer tus derechos, contáctala desde la sección Contacto de este sitio. Si consideras que no se han respetado, puedes presentar una reclamación ante la autoridad de protección de datos de tu país.",
      ],
      [
        "7. Menores",
        "El sitio no está dirigido a menores de edad y no recoge conscientemente sus datos.",
      ],
      [
        "8. Cambios en esta política",
        "Puedo actualizar esta política. La versión vigente es siempre la publicada aquí, con su fecha de actualización.",
      ],
    ],
  },
  cookies: {
    title: "Política de cookies",
    updated: "Última actualización: noviembre de 2026",
    sections: [
      [
        "¿Qué son las cookies?",
        "Son pequeños archivos que un sitio guarda en tu navegador para recordar información. Algunas son imprescindibles y otras sirven para medir el uso del sitio.",
      ],
      [
        "Cookies técnicas (necesarias)",
        "Este sitio guarda en tu navegador una única preferencia, «ep-cookies», para recordar si aceptaste o rechazaste las cookies de analítica. No requiere consentimiento porque es imprescindible para respetar tu decisión. Dura 12 meses.",
      ],
      [
        "Cookies de analítica (opcionales)",
        "Solo se instalan si pulsas «Aceptar». Las usa Google Analytics, un servicio de Google, para saber cuántas personas visitan el sitio y qué secciones consultan, de forma agregada.\n\n• _ga — distingue usuarios únicos. Duración: hasta 2 años.\n• _ga_<ID> — conserva el estado de la sesión. Duración: hasta 2 años.",
      ],
      [
        "Cómo gestionar tu elección",
        "Al entrar por primera vez verás un aviso para aceptar o rechazar las cookies de analítica. Rechazar es tan fácil como aceptar y el sitio funciona igual. Puedes cambiar tu decisión en cualquier momento con «Preferencias de cookies» en el pie de página. También puedes borrar las cookies desde la configuración de tu navegador.",
      ],
      [
        "Más información",
        "Consulta la política de privacidad para saber cómo se tratan tus datos, o usa los datos de la sección Contacto de este sitio.",
      ],
    ],
  },
  copyright: {
    title: "Propiedad intelectual / Copyright",
    updated: "© 2026 Erika Polanco. Todos los derechos reservados.",
    sections: [
      [
        "Obras protegidas",
        "Las ilustraciones, identidades visuales, logotipos, piezas editoriales, diseños de packaging, fotografías, textos, tipografía aplicada y la composición general de este sitio son obras creadas por Erika Polanco y están protegidas por las leyes de propiedad intelectual y derechos de autor.",
      ],
      [
        "Titularidad",
        "Salvo indicación expresa, los derechos de autor de estas obras pertenecen a Erika Polanco. Verlas en este sitio no transfiere ningún derecho de uso, reproducción, distribución ni transformación.",
      ],
      [
        "Marcas y trabajos para terceros",
        "Los nombres, marcas y logotipos de terceros que aparecen en los proyectos pertenecen a sus respectivos titulares y se exhiben solo como parte de un portafolio profesional. Los derechos sobre los trabajos realizados por encargo se rigen por el acuerdo con cada cliente.",
      ],
      [
        "Usos que requieren autorización",
        "Cualquier reproducción, publicación, modificación, venta o uso comercial —total o parcial— de los contenidos de este sitio requiere autorización previa y por escrito. Esto incluye redes sociales, impresiones, productos y el uso de las imágenes para entrenar sistemas de inteligencia artificial.",
      ],
      [
        "Cómo solicitar un permiso o reportar un uso indebido",
        "Contáctala desde la sección Contacto de este sitio indicando qué obra deseas usar y con qué fin, o la dirección donde viste un uso no autorizado.",
      ],
    ],
  },
};

/* Proyectos organizados por disciplina.
   - folder: nombre exacto de la carpeta en assets/portafolio-preview/.
   - cover: imagen de portada; backdrop (opcional) va detrás de cover.
   - beetle: escarabajo de assets/ que abre la disciplina.
   - theme: colores que adopta la sección al entrar en la disciplina. */
const PROJECTS_BASE_THEME = {
  bg: "#FFFEF1",
  ink: "#1C1D27",
  head: "#332E79",
  soft: "#B9B3D5",
  accent: "#332E79",
  onAccent: "#FFFEF1",
  line: "rgba(28,29,39,0.16)",
  dot: "rgba(51,46,121,0.14)",
  cover: "#332E79",
  coverInk: "#FFFEF1",
  coverSoft: "#B9B3D5",
};

const DISCIPLINES = [
  {
    id: "aprendizaje",
    num: "01",
    lead: "Diseño para",
    title: "el aprendizaje",
    beetle: "joya_japones",
    focus:
      "Ilustración educativa, señalética, diseño de información y recursos visuales para transmitir conocimientos.",
    theme: {
      bg: "#332E79",
      ink: "#FFFEF1",
      head: "#FFFEF1",
      soft: "#5E4F9C",
      accent: "#8CBD3F",
      onAccent: "#1C1D27",
      line: "rgba(255,254,241,0.26)",
      dot: "rgba(255,254,241,0.12)",
      cover: "#8CBD3F",
      coverInk: "#1C1D27",
      coverSoft: "#332E79",
    },
    projects: [
      {
        folder: "Garras y Bigotes",
        name: "Garras y Bigotes",
        tag: "Doce especies, una historia",
        cat: "Ilustración · Diseño educativo",
        cover: "Ilustración_sin_título 1.png",
      },
      {
        folder: "Imborrable",
        name: "Imborrable",
        tag: "Memorias que permanecen",
        cat: "Identidad visual · Ilustración",
        cover: "IMG_4051.JPG",
      },
      {
        folder: "JardinBotanico",
        name: "Jardín Botánico",
        tag: "Naturaleza para descubrir",
        cat: "Diseño de información",
        cover: "Abeja_JB.png",
      },
    ],
  },
  {
    id: "producto",
    num: "02",
    lead: "Diseño para",
    title: "la experiencia de producto",
    beetle: "joya_esmeralda",
    focus:
      "Packaging, diseño de empaques, presentación de productos y construcción de experiencias visuales alrededor de un producto.",
    theme: {
      bg: "#5E4F9C",
      ink: "#FFFEF1",
      head: "#FFFEF1",
      soft: "#332E79",
      accent: "#8CBD3F",
      onAccent: "#1C1D27",
      line: "rgba(255,254,241,0.28)",
      dot: "rgba(255,254,241,0.14)",
      cover: "#332E79",
      coverInk: "#FFFEF1",
      coverSoft: "#B9B3D5",
    },
    projects: [
      {
        folder: "Tuareg Coco",
        name: "Tuareg Coco",
        tag: "El lado más cremoso",
        cat: "Packaging · Producto",
        cover: "tuareg_Imagenesempaque-02.png",
      },
      {
        folder: "Kit Matcha",
        name: "Kit de Matcha",
        tag: "Un ritual para los sentidos",
        cat: "Packaging · Experiencia",
        cover: "Tabla_MATCHA.png",
      },
      {
        folder: "Arizona",
        name: "Arizona",
        tag: "Watermelon vibes",
        cat: "Ilustración · Gráfica aplicada",
        cover: "ArizonaEmpaqueAbierto.png",
      },
    ],
  },
  {
    id: "identidad",
    num: "03",
    lead: "Diseño para",
    title: "la construcción de identidad",
    beetle: "stolas",
    focus:
      "Branding, identidad visual, sistemas gráficos, construcción de marcas y comunicación visual.",
    theme: {
      bg: "#B9B3D5",
      ink: "#1C1D27",
      head: "#332E79",
      soft: "#FFFEF1",
      accent: "#332E79",
      onAccent: "#FFFEF1",
      line: "rgba(51,46,121,0.3)",
      dot: "rgba(51,46,121,0.16)",
      cover: "#5E4F9C",
      coverInk: "#FFFEF1",
      coverSoft: "#FFFEF1",
    },
    projects: [
      {
        folder: "UMBRA",
        name: "Umbra",
        cat: "Branding · Identidad",
        cover: "01. Horizontal Book.png",
      },
      {
        folder: "MACHIO",
        name: "Machio",
        cat: "Gestión de identidad",
        cover: "Moda mostaza y libreta rosa.png",
      },
      {
        folder: "AMBU",
        name: "Ambú",
        cat: "Editorial · Identidad",
        cover: "Monktails_AMB.png",
      },
    ],
  },
  {
    id: "narrativa",
    num: "04",
    lead: "Diseño para",
    title: "la expresión narrativa",
    beetle: "hercules",
    focus:
      "Ilustración aplicada, creación de personajes, narrativa visual, exploración gráfica y expresión artística.",
    theme: {
      bg: "#8CBD3F",
      ink: "#1C1D27",
      head: "#1C1D27",
      soft: "#FFFEF1",
      accent: "#332E79",
      onAccent: "#FFFEF1",
      line: "rgba(28,29,39,0.28)",
      dot: "rgba(28,29,39,0.16)",
      cover: "#332E79",
      coverInk: "#FFFEF1",
      coverSoft: "#8CBD3F",
    },
    projects: [
      {
        folder: "Cadejos",
        name: "Los Cadejos",
        cat: "Personajes · 3D",
        cover: "Cadejos_FondoRojo.png",
      },
      {
        folder: "Pollo Bonanza",
        name: "Pollo Bonanza",
        cover: "LogoPolloBonanza.png",
        backdrop: "FondoRojo.jpg",
      },
      {
        folder: "COFFEE NEST",
        name: "Coffee Nest",
        cover: "IMG_3141.jpg",
      },
      {
        folder: "Coex Criollo",
        name: "Café Criollo",
        cat: "Ilustración · Packaging",
        cover: "MckupCriollo.png",
      },
      {
        folder: "ElAmanteJapones",
        name: "El Amante Japonés",
        cat: "Ilustración · Editorial",
        cover: "Ilustración_sin_título.png",
      },
      {
        folder: "DORITOS DINAMITA",
        name: "Doritos Dinamita",
        cover: "KeyVisual_DinaMita.png",
      },
    ],
  },
];

window.createPortfolioComponent = function createPortfolioComponent(
  DCLogic,
  React,
) {
  return class Component extends DCLogic {
    // 01. Referencias a los elementos de la plantilla.
    cursorRef = React.createRef();
    defsRef = React.createRef();
    principlesRef = React.createRef();
    heroTextRef = React.createRef();
    fallRef = React.createRef();
    navRef = React.createRef();
    heroImgRef = React.createRef();
    asciiRef = React.createRef();
    disciplinesRef = React.createRef();

    // 02. Inicio: apariciones, navegación y animaciones de la página.
    componentDidMount() {
      this._i18nOff = window.PortfolioI18n.init(
        this.navRef.current.closest(".portfolio"),
      );
      const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
      const ease = "cubic-bezier(.2,.7,.2,1)";
      document.querySelectorAll("[data-intro]").forEach((el) => {
        if (reduce) return;
        el.animate(
          [{ transform: "translateY(105%)" }, { transform: "translateY(0)" }],
          {
            duration: 1100,
            delay: 150 + Number(el.dataset.intro) * 140,
            easing: ease,
            fill: "backwards",
          },
        );
      });
      if (!reduce) {
        const reveal = [...document.querySelectorAll("[data-reveal]")];
        const frames = [...document.querySelectorAll("[data-frame]")];
        reveal.forEach((el) => {
          el.style.opacity = "0";
          el.style.transform = "translateY(36px)";
          el.style.transition = `opacity .9s ${ease}, transform .9s ${ease}`;
        });
        frames.forEach((el) => {
          el.style.clipPath = "inset(8% 0% 8% 0%)";
          el.style.transition = `clip-path 1.2s ${ease}`;
        });
        this._io = new IntersectionObserver(
          (entries) => {
            entries.forEach((en) => {
              if (!en.isIntersecting) return;
              const el = en.target;
              if (el.hasAttribute("data-reveal")) {
                el.style.opacity = "1";
                el.style.transform = "none";
              }
              if (el.hasAttribute("data-frame"))
                el.style.clipPath = "inset(0% 0% 0% 0%)";
              this._io.unobserve(el);
            });
          },
          { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
        );
        [...reveal, ...frames].forEach((el) => this._io.observe(el));
        document.querySelectorAll("[data-rise]").forEach((el) => {
          el.style.transform = "translateY(105%)";
          el.style.transition = `transform 1.2s ${ease}`;
          const io = new IntersectionObserver(
            ([en]) => {
              if (en.isIntersecting) {
                el.style.transform = "none";
                io.disconnect();
              }
            },
            { threshold: 0.3 },
          );
          io.observe(el.parentElement);
        });
      }
      this.initPrinciples(reduce);
      this.initBeetles();
      this.initAscii(reduce);
      this.initDisciplines(reduce);
      this.initLegal(reduce);
      this.initConsent(reduce);
      this.initHero(reduce);
      this.initFall(reduce);
      const nav = this.navRef.current;
      this._navScroll = () => {
        // El fondo se vuelve blanco justo cuando el espacio blanco que sigue a la cinta
        // llega bajo la barra: de transparente a sólido mientras el borde de la cinta sube.
        const band = document.querySelector(".marquee"),
          edge = band ? band.getBoundingClientRect().bottom : 0,
          t = Math.max(0, Math.min(1, 1 - edge / 72));
        nav.style.backgroundColor = `rgba(255,255,255,${t})`;
      };
      window.addEventListener("scroll", this._navScroll, { passive: true });
      this._navScroll();
      const menuButton = nav.querySelector(".site-nav__toggle");
      const menuLinks = nav.querySelector(".site-nav__links");
      this._closeMenu = () => {
        nav.classList.remove("site-nav--open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Abrir menú");
      };
      this._toggleMenu = () => {
        const open = nav.classList.toggle("site-nav--open");
        menuButton.setAttribute("aria-expanded", String(open));
        menuButton.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
      };
      this._menuKeydown = (event) => {
        if (event.key === "Escape") this._closeMenu();
      };
      menuButton.addEventListener("click", this._toggleMenu);
      menuLinks.addEventListener("click", this._closeMenu);
      document.addEventListener("keydown", this._menuKeydown);
      this.initIntro(reduce);
    }

    // La marca real viaja desde el centro hasta su posición en la navegación.
    initIntro(reduce) {
      const nav = this.navRef.current;
      const root = nav.closest(".portfolio");
      const overlay = root.querySelector(".intro-screen");
      const brand = nav.querySelector(".site-nav__brand");
      const mark = brand.querySelector(".site-nav__logo");
      const name = brand.querySelector(".site-nav__name");
      const links = nav.querySelector(".site-nav__links");
      const toggle = nav.querySelector(".site-nav__toggle");
      if (!overlay || !mark || !name || !links || !toggle) return;

      [brand, links, toggle].forEach((element) => { element.inert = true; });

      let finished = false;
      let waitTimer;
      const animations = [];
      const finish = () => {
        if (finished) return;
        finished = true;
        clearTimeout(waitTimer);
        animations.forEach((animation) => animation.cancel());
        root.classList.remove("portfolio--intro");
        overlay.remove();
        [brand, links, toggle].forEach((element) => { element.inert = false; });
      };
      this._introOff = finish;
      if (reduce) {
        finish();
        return;
      }

      const start = () => {
        if (finished || this._dead) return;
        const b = brand.getBoundingClientRect();
        const l = mark.getBoundingClientRect();
        if (!b.width || !l.width) return finish();
        const scale = Math.min(3.4, (innerWidth * 0.82) / b.width);
        const iconX = l.left - b.left + l.width / 2;
        const iconY = l.top - b.top + l.height / 2;
        const centeredIcon = `translate(${innerWidth / 2 - b.left - scale * iconX}px, ${innerHeight / 2 - b.top - scale * iconY}px) scale(${scale})`;
        const centeredBrand = `translate(${innerWidth / 2 - b.left - scale * b.width / 2}px, ${innerHeight / 2 - b.top - scale * b.height / 2}px) scale(${scale})`;
        const rest = "translate(0px, 0px) scale(1)";
        const duration = 5200;
        const at = (seconds) => seconds * 1000 / duration;
        const ease = "cubic-bezier(.65,0,.25,1)";

        const flight = brand.animate([
          { transform: centeredIcon, opacity: 1, offset: 0 },
          { transform: centeredIcon, offset: at(1.5), easing: ease },
          { transform: centeredBrand, offset: at(2.5) },
          { transform: centeredBrand, offset: at(3.4), easing: ease },
          { transform: rest, offset: at(4.5) },
          { transform: rest, opacity: 1, offset: 1 },
        ], { duration, fill: "both" });
        animations.push(flight);
        animations.push(mark.animate([
          { opacity: 0, transform: "scale(.82)", offset: 0 },
          { opacity: 1, transform: "scale(1)", offset: at(.9) },
          { opacity: 1, transform: "scale(1)", offset: 1 },
        ], { duration, fill: "both", easing: "cubic-bezier(.2,.8,.2,1)" }));
        animations.push(name.animate([
          { opacity: 0, clipPath: "inset(0 100% 0 0)", transform: "translateX(-12px)", offset: 0 },
          { opacity: 0, clipPath: "inset(0 100% 0 0)", transform: "translateX(-12px)", offset: at(1.75), easing: ease },
          { opacity: 1, clipPath: "inset(0 0% 0 0)", transform: "translateX(0)", offset: at(2.75) },
          { opacity: 1, clipPath: "inset(0 0% 0 0)", transform: "translateX(0)", offset: 1 },
        ], { duration, fill: "both" }));
        [links, toggle].forEach((element) => animations.push(element.animate([
          { opacity: 0, transform: "translateY(-6px)" },
          { opacity: 1, transform: "none" },
        ], { duration: 500, delay: 4300, fill: "both", easing: "ease-out" })));
        animations.push(overlay.animate([
          { opacity: 1 }, { opacity: 0 },
        ], { duration: 700, delay: 4500, fill: "both" }));
        flight.finished.then(finish, () => {});
      };
      const fonts = document.fonts && document.fonts.ready
        ? document.fonts.ready : Promise.resolve();
      Promise.race([fonts, new Promise((resolve) => {
        waitTimer = setTimeout(resolve, 1500);
      })]).then(start);
    }

    // 03. Descubrimiento, carga y animación de los stickers PNG.
    async initFall(reduce) {
      const host = this.fallRef.current;
      if (!host) return;
      const folder = new URL("assets/stickers/", document.baseURI);
      let files;
      try {
        // Descubre los PNG directamente cuando el servidor lista el directorio.
        const response = await fetch(folder, { cache: "no-store" });
        if (!response.ok) throw new Error("Directorio no disponible");
        const listing = new DOMParser().parseFromString(
          await response.text(),
          "text/html",
        );
        files = [
          ...new Set(
            [...listing.querySelectorAll("a[href]")]
              .map((link) => new URL(link.getAttribute("href"), folder))
              .filter(
                (url) =>
                  url.origin === folder.origin &&
                  url.pathname.startsWith(folder.pathname) &&
                  /\.png$/i.test(url.pathname),
              )
              .map((url) => url.href),
          ),
        ].sort();
        if (!files.length && !/directory listing|index of/i.test(listing.title))
          throw new Error("Sin listado de stickers");
      } catch {
        try {
          // Manifiesto de stickers para alojamientos estáticos.
          const response = await fetch(new URL("stickers.json", folder), {
            cache: "no-store",
          });
          if (!response.ok) throw new Error("Lista de stickers no disponible");
          const names = await response.json();
          files = [
            ...new Set(
              names
                .map((name) => new URL(name, folder))
                .filter(
                  (url) =>
                    url.origin === folder.origin &&
                    url.pathname.startsWith(folder.pathname) &&
                    /\.png$/i.test(url.pathname),
                )
                .map((url) => url.href),
            ),
          ];
        } catch (error) {
          console.warn("No se pudieron descubrir los stickers PNG", error);
          return;
        }
      }
      const images = (
        await Promise.all(
          files.map(
            (file) =>
              new Promise((resolve) => {
                const img = new Image();
                img.alt = "";
                img.draggable = false;
                img.decoding = "async";
                img.onload = () => resolve(img);
                img.onerror = () => {
                  console.warn("No se pudo cargar el sticker:", file);
                  resolve(null);
                };
                img.src = file;
              }),
          ),
        )
      ).filter(Boolean);
      if (!images.length || this._dead) return;
      host.replaceChildren();
      const count = Math.max(images.length, innerWidth < 700 ? 10 : 14);
      const stickers = Array.from({ length: count }, (_, i) => {
        const img = images[i % images.length].cloneNode();
        img.className = "falling-sticker";
        host.appendChild(img);
        return {
          img,
          lane: (i + Math.random() * 0.6) / count,
          scale: 0.75 + Math.random() * 0.5,
          angle: -35 + Math.random() * 70,
          spin: (Math.random() < 0.5 ? -1 : 1) * (70 + Math.random() * 100),
          duration: 18000 + Math.random() * 14000,
          progress: Math.random(),
          sway: 20 + Math.random() * 45,
        };
      });
      let visible = true;
      this._fallAnimations = [];
      const resize = () => {
        const w = host.clientWidth,
          h = host.clientHeight;
        if (!w || !h) return;
        this._fallAnimations = [];
        stickers.forEach((sticker) => {
          const { img, lane, scale, angle, spin, duration, sway } = sticker;
          const progress = sticker.animation
            ? (Number(sticker.animation.currentTime || 0) % duration) / duration
            : sticker.progress;
          if (sticker.animation) sticker.animation.cancel();
          const size = Math.min(190, Math.max(85, w * 0.12)) * scale;
          const x = lane * Math.max(0, w - size);
          img.style.width = img.style.height = size + "px";
          if (reduce) {
            img.style.transform = `translate(${x}px, ${sticker.progress * Math.max(0, h - size)}px) rotate(${angle}deg)`;
            img.style.willChange = "auto";
            return;
          }
          const frames = Array.from({ length: 5 }, (_, i) => {
            const t = i / 4;
            return {
              transform: `translate(${x + Math.sin(t * Math.PI * 2) * sway}px, ${-size * 2 + t * (h + size * 4)}px) rotate(${angle + spin * t}deg)`,
            };
          });
          sticker.animation = img.animate(frames, {
            duration,
            iterations: Infinity,
            easing: "linear",
          });
          sticker.animation.currentTime = progress * duration;
          if (!visible) sticker.animation.pause();
          this._fallAnimations.push(sticker.animation);
        });
      };
      resize();
      this._fallRO = new ResizeObserver(resize);
      this._fallRO.observe(host);
      this._fallIO = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        this._fallAnimations.forEach((animation) =>
          visible ? animation.play() : animation.pause(),
        );
      });
      this._fallIO.observe(host);
    }

    // 04. Posición del retrato y movimiento de la portada.
    initHero(reduce) {
      const txt = this.heroTextRef.current,
        img = this.heroImgRef.current;
      if (!txt || !img || reduce) return;
      if (!reduce)
        img.animate(
          [
            { transform: "translateY(8%) scale(1.04)", opacity: 0 },
            { transform: "none", opacity: 1 },
          ],
          {
            duration: 1400,
            delay: 250,
            easing: "cubic-bezier(.2,.7,.2,1)",
            fill: "backwards",
          },
        );
      let mx = 0,
        my = 0,
        cx = 0,
        cy = 0;
      this._heroMove = (e) => {
        mx = e.clientX / innerWidth - 0.5;
        my = e.clientY / innerHeight - 0.5;
      };
      window.addEventListener("mousemove", this._heroMove);
      const tick = () => {
        cx += (mx - cx) * 0.06;
        cy += (my - cy) * 0.06;
        const sy = Math.min(scrollY, innerHeight);
        this._txtX = cx * -22;
        txt.style.transform = `translate(${this._txtX}px, ${cy * -10}px)`;
        img.style.transform = `translate(${cx * 30}px, ${Math.max(0, cy * 10)}px) scale(${1 + sy * 0.00012})`;
        this._heroRaf = requestAnimationFrame(tick);
      };
      this._heroRaf = requestAnimationFrame(tick);
    }

    // 05. Escarabajo por partes: torso + 6 patas articuladas en la cadera.
    buildBeetle(host) {
      const NS = "http://www.w3.org/2000/svg";
      const LEG = {
        front: {
          src: "assets/partes/pata-delantera.png",
          w: 1105,
          h: 1424,
          hx: 0.77,
          hy: 0.83,
        },
        back: {
          src: "assets/partes/pata-trasera.png",
          w: 1126,
          h: 1397,
          hx: 0.78,
          hy: 0.09,
        },
      };
      const s = 0.62;
      const defs = [
        { k: "front", hip: [-370, -330], base: 22, ph: 0 },
        { k: "back", hip: [-395, -40], base: 22, ph: Math.PI },
        { k: "back", hip: [-360, 280], base: -12, ph: 0 },
      ];
      const joints = [];
      const mk = (d, side) => {
        const L = LEG[d.k];
        const outer = document.createElementNS(NS, "g");
        if (side < 0) outer.setAttribute("transform", "scale(-1 1)");
        const g = document.createElementNS(NS, "g");
        const im = document.createElementNS(NS, "image");
        im.setAttribute("href", L.src);
        im.setAttribute("width", L.w * s);
        im.setAttribute("height", L.h * s);
        im.setAttribute("x", -L.hx * L.w * s);
        im.setAttribute("y", -L.hy * L.h * s);
        g.appendChild(im);
        outer.appendChild(g);
        host.appendChild(outer);
        joints.push({ g, d, side });
      };
      defs.forEach((d) => {
        mk(d, 1);
        mk(d, -1);
      });
      const torso = document.createElementNS(NS, "image");
      torso.setAttribute("href", "assets/partes/torso.png");
      torso.setAttribute("x", -470.5);
      torso.setAttribute("y", -836);
      torso.setAttribute("width", 941);
      torso.setAttribute("height", 1672);
      host.appendChild(torso);
      return (ph, amp) => {
        joints.forEach(({ g, d, side }) => {
          const tri = side > 0 ? d.ph : d.ph + Math.PI;
          // Ciclo de paso: apoyo (pata extendida empuja hacia atrás) / recuperación (se recoge y avanza)
          const f = ph + tri,
            sw = Math.sin(f) * amp * 0.7;
          const lift = Math.max(0, Math.cos(f)) * Math.min(1, amp / 10);
          const tuck = 1 - 0.18 * lift;
          g.setAttribute(
            "transform",
            `translate(${d.hip[0] + 18 * lift} ${d.hip[1]}) rotate(${d.base + sw}) scale(${tuck})`,
          );
        });
      };
    }

    // El escarabajo cruza los principios y activa cada recuadro.
    initPrinciples(reduce) {
      const host = this.principlesRef.current;
      if (!host) return;
      const cards = [...host.querySelectorAll('[class^="principle-card--"]')];
      const svg = host.querySelector(".principles__beetle");
      if (!svg || !cards.length) return;
      if (reduce) {
        svg.hidden = true;
        return;
      }

      const NS = "http://www.w3.org/2000/svg";
      const path = document.createElementNS(NS, "path");
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", "none");
      svg.appendChild(path);
      const walker = document.createElementNS(NS, "g");
      svg.appendChild(walker);
      const moveLegs = this.buildBeetle(walker);
      let length = 0;
      let vertical = false;
      let scale = 0.05;
      let progress = 0;
      let started = false;
      let frame;

      const draw = (p) => {
        if (!length) return;
        const distance = p * length;
        const point = path.getPointAtLength(distance);
        const next = path.getPointAtLength(Math.min(distance + 2, length));
        const angle = Math.atan2(next.y - point.y, next.x - point.x) * 180 / Math.PI;
        const phase = distance * 0.12;
        walker.setAttribute(
          "transform",
          `translate(${point.x} ${point.y}) rotate(${angle + 90 + Math.sin(phase) * 2}) scale(${scale})`,
        );
        moveLegs(phase, 16);
        cards.forEach((card) => {
          const crossed = vertical
            ? point.y >= card.offsetTop + card.offsetHeight * 0.2
            : point.x >= card.offsetLeft + card.offsetWidth * 0.2;
          card.classList.toggle("is-active", crossed);
        });
      };

      const layout = () => {
        const width = host.clientWidth;
        const height = host.clientHeight;
        if (!width || !height) return;
        vertical = cards[1].offsetTop > cards[0].offsetTop + 10;
        scale = Math.min(0.065, Math.max(0.04, cards[0].offsetWidth / 9000));
        svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
        const points = cards.map((card) => [
          card.offsetLeft + card.offsetWidth * (vertical ? 0.77 : 0.5),
          card.offsetTop + card.offsetHeight * 0.5,
        ]);
        const start = vertical ? [points[0][0], -80] : [-80, points[0][1]];
        const end = vertical
          ? [points.at(-1)[0], height + 80]
          : [width + 80, points.at(-1)[1]];
        path.setAttribute(
          "d",
          `M${start.join(" ")} ${[...points, end].map((point) => `L${point.join(" ")}`).join(" ")}`,
        );
        length = path.getTotalLength();
        draw(progress);
      };

      host.classList.add("principles--animated");
      layout();
      const observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        observer.disconnect();
        const duration = vertical ? 8500 : 6500;
        let begin;
        const tick = (time) => {
          if (begin === undefined) begin = time;
          progress = Math.min(1, (time - begin) / duration);
          draw(progress);
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      }, { threshold: 0.15 });
      observer.observe(host);
      const resize = new ResizeObserver(layout);
      resize.observe(host);
      this._principlesOff = () => {
        observer.disconnect();
        resize.disconnect();
        cancelAnimationFrame(frame);
      };
    }

    // Cursor personalizado con el escarabajo articulado.
    initBeetles() {
      const cur = this.cursorRef.current,
        coarse = matchMedia("(pointer: coarse)").matches;
      const closed = cur.querySelector('[data-c="closed"]'),
        opened = cur.querySelector('[data-c="open"]');
      const legsC = this.buildBeetle(closed);
      let x = innerWidth / 2,
        y = innerHeight / 2,
        tx = x,
        ty = y,
        ang = 0,
        hover = false,
        ph = 0;
      this._move = (e) => {
        tx = e.clientX;
        ty = e.clientY;
        cur.style.opacity = "1";
        const h2 = !!(
          e.target.closest && e.target.closest("a,button,figure,[data-frame]")
        );
        if (h2 !== hover) {
          hover = h2;
          closed.style.opacity = hover ? "0" : "1";
          opened.style.opacity = hover ? "1" : "0";
        }
      };
      this._leave = () => {
        cur.style.opacity = "0";
      };
      if (!coarse) {
        window.addEventListener("mousemove", this._move);
        document.addEventListener("mouseleave", this._leave);
      }
      const loop = (t) => {
        if (!coarse) {
          const dx = tx - x,
            dy = ty - y,
            d = Math.hypot(dx, dy);
          x += dx * 0.18;
          y += dy * 0.18;
          // El escarabajo pasa por detrás del retrato (z-index 2), pero no de la barra
          // de navegación, que queda por encima del retrato.
          const hero = this.heroImgRef.current,
            hr = hero && hero.getBoundingClientRect();
          const behind =
            !!hr && y > 72 && x > hr.left && x < hr.right && y > hr.top && y < hr.bottom;
          if (behind !== this._behind) {
            this._behind = behind;
            cur.style.zIndex = behind ? "1" : "";
          }
          if (d > 2) {
            const tg = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
            ang += (((tg - ang + 540) % 360) - 180) * 0.15;
          }
          ph += Math.min(d, 40) * 0.08;
          const wob = hover ? 0 : Math.sin(ph) * 2 * Math.min(1, d / 10);
          legsC(ph, 18 * Math.min(1, d / 6));
          const flap = hover
            ? 1 + Math.sin((t / 1000) * Math.PI * 2 * 4) * 0.08
            : 1;
          opened.style.transform = `scale(${1.08 * flap}, 1.08)`;
          cur.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%) rotate(${ang + wob}deg)`;
        }
        this._raf = requestAnimationFrame(loop);
      };
      this._raf = requestAnimationFrame(loop);
    }

    // 06b. Escarabajo ASCII del footer: una estela de calor deja caracteres más densos.
    initAscii(reduce) {
      const cv = this.asciiRef.current,
        frame = cv && cv.closest(".contact__frame");
      if (!cv || !frame) return;
      const RAMP = [" ", ".", ":", "-", "=", "+", "*", "#", "%", "@"],
        TOP = RAMP.length - 1,
        COLD = 0.04,
        RING_S = 2.2,
        SIZE = 8,
        REACH = 0.11,
        TRAIL = 1.2,
        PULL = 0.4;
      const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
      const hash = (k, n) => {
        let h = (k * 374761393 + n * 668265263) | 0;
        h = Math.imul(h ^ (h >>> 13), 1274126177);
        return ((h ^ (h >>> 16)) >>> 0) / 4294967296;
      };
      const s = {
        cols: 0,
        rows: 0,
        W: 0,
        H: 0,
        base: null,
        heat: null,
        hx: -999,
        hy: -999,
        lx: NaN,
        ly: NaN,
        near: 0,
        inside: false,
        rings: [],
        deal: 0,
        tick: 0,
        ratio: 1,
      };
      // Celda con proporción de carácter monoespaciado (~1:2) para que el dibujo no se deforme.
      const cw = SIZE * 0.6,
        ch = SIZE * 1;
      const g = cv.getContext("2d");
      const radius = () => s.W * REACH;
      const sizeCanvas = () => {
        const r = cv.getBoundingClientRect();
        if (!r.width || !s.W) return;
        s.ratio = Math.min(2, window.devicePixelRatio || 1) * (r.width / s.W);
        cv.width = Math.round(s.W * s.ratio);
        cv.height = Math.round(s.H * s.ratio);
      };
      const paint = () => {
        if (!s.base) return;
        const k = s.W / 360,
          rad = radius(),
          R2 = rad * rad,
          far = rad * 2,
          far2 = far * far,
          lean = PULL * s.near;
        g.setTransform(s.ratio, 0, 0, s.ratio, 0, 0);
        g.clearRect(0, 0, s.W, s.H);
        g.fillStyle = getComputedStyle(cv).color;
        g.font = `500 ${SIZE}px ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, monospace`;
        g.textAlign = "center";
        g.textBaseline = "middle";
        const rings = s.rings.map((r) => {
          const p = r.t / RING_S,
            e = 1 - Math.pow(1 - p, 3);
          return {
            x: r.x,
            y: r.y,
            R: (8 + e * 260) * k,
            amp: 0.6 * (1 - p) * (1 - p) * Math.min(1, p * 6),
          };
        });
        for (let j = 0; j < s.rows; j++) {
          const y = (j + 0.5) * ch;
          for (let i = 0; i < s.cols; i++) {
            const n = j * s.cols + i,
              b = s.base[n];
            if (!b) continue;
            const cx = (i + 0.5) * cw;
            let h = s.heat[n];
            if (s.near > 0.002) {
              const q = ((cx - s.hx) ** 2 + (y - s.hy) ** 2) / R2;
              if (q < 1) h = Math.max(h, 0.95 * s.near * (1 - q) * (1 - q));
            }
            let rr = 0;
            for (const r of rings) {
              const d = (Math.hypot(cx - r.x, y - r.y) - r.R) / (24 * k);
              if (d > -2.5 && d < 2.5) rr += r.amp * Math.exp(-d * d);
            }
            let u = Math.min(1, h) * TOP + 0.5;
            if (h > COLD)
              u += (hash(n, s.deal) - 0.5) * 1.6 * Math.min(1, h * 2);
            let idx = Math.max(b, clamp(Math.floor(u), 1, TOP));
            // El dibujo ya es denso: el anillo del clic lo aclara al pasar, con un leve parpadeo.
            if (rr > 0.01) {
              const w = Math.min(1, rr / 0.5) * (0.75 + 0.25 * hash(n, s.deal));
              idx = Math.max(1, Math.round(idx - w * (idx - 1)));
            }
            let x = cx,
              yy = y;
            if (lean > 0.002) {
              const dx = s.hx - x,
                dy = s.hy - yy,
                d2 = dx * dx + dy * dy;
              if (d2 < far2) {
                const f = 1 - d2 / far2,
                  d = Math.sqrt(d2) || 1,
                  m = Math.min(d * 0.6, 14 * k * lean * f * f);
                x += (dx / d) * m;
                yy += (dy / d) * m;
              }
            }
            g.fillText(RAMP[idx], x, yy);
          }
        }
      };
      const stamp = (x, y, rad, amt) => {
        const c0 = Math.max(0, Math.floor((x - rad) / cw)),
          c1 = Math.min(s.cols - 1, Math.ceil((x + rad) / cw)),
          r0 = Math.max(0, Math.floor((y - rad) / ch)),
          r1 = Math.min(s.rows - 1, Math.ceil((y + rad) / ch)),
          R2 = rad * rad;
        for (let j = r0; j <= r1; j++) {
          const dy = (j + 0.5) * ch - y;
          for (let i = c0; i <= c1; i++) {
            const dx = (i + 0.5) * cw - x,
              q = (dx * dx + dy * dy) / R2;
            if (q >= 1) continue;
            const t = 1 - q,
              n = j * s.cols + i;
            s.heat[n] = Math.min(1, s.heat[n] + amt * t * t);
          }
        }
      };
      // El bucle corre solo mientras la estela está caliente o la mano se mueve.
      const run = () => {
        if (reduce || s.raf || this._dead) return;
        let prev = performance.now();
        const step = (t) => {
          const dt = Math.min(0.05, (t - prev) / 1000);
          prev = t;
          const keep = Math.exp((-dt * 3) / TRAIL);
          let warm = 0;
          for (let n = 0; n < s.heat.length; n++) {
            const h = s.heat[n] * keep;
            s.heat[n] = h < 0.003 ? 0 : h;
            if (h > warm) warm = h;
          }
          s.rings = s.rings.filter((r) => (r.t += dt) < RING_S);
          s.near += ((s.inside ? 1 : 0) - s.near) * (1 - Math.pow(0.004, dt));
          s.tick += dt;
          if (s.tick > 0.07) {
            s.tick = 0;
            s.deal++;
          }
          paint();
          const still =
            warm === 0 &&
            !s.rings.length &&
            Math.abs((s.inside ? 1 : 0) - s.near) < 0.004;
          s.raf = still ? 0 : requestAnimationFrame(step);
          this._asciiRaf = s.raf;
        };
        s.raf = this._asciiRaf = requestAnimationFrame(step);
      };
      const where = (e) => {
        const r = cv.getBoundingClientRect(),
          k = r.width / s.W;
        return { x: (e.clientX - r.left) / k, y: (e.clientY - r.top) / k };
      };
      // La mano estampa a lo largo de todo su recorrido, para que un trazo rápido no deje huecos.
      const move = (e) => {
        const { x, y } = where(e),
          rad = radius();
        if (Number.isNaN(s.lx)) {
          s.lx = x;
          s.ly = y;
        }
        const d = Math.hypot(x - s.lx, y - s.ly),
          n = Math.max(1, Math.ceil(d / (rad / 3)));
        for (let k = 1; k <= n; k++) {
          const f = k / n;
          stamp(s.lx + (x - s.lx) * f, s.ly + (y - s.ly) * f, rad, 0.5);
        }
        s.lx = x;
        s.ly = y;
        s.hx = x;
        s.hy = y;
        s.inside = true;
        run();
      };
      const leave = () => {
        s.inside = false;
        s.lx = NaN;
        run();
      };
      const down = (e) => {
        const { x, y } = where(e);
        s.rings.push({ x, y, t: 0 });
        run();
      };
      this._asciiOff = () => {
        frame.removeEventListener("pointermove", move);
        frame.removeEventListener("pointerleave", leave);
        frame.removeEventListener("pointerdown", down);
        this._asciiRO && this._asciiRO.disconnect();
        cancelAnimationFrame(this._asciiRaf);
      };
      fetch("assets/escarabajo-ascii.txt")
        .then((r) => r.text())
        .then((txt) => {
          if (this._dead) return;
          const lines = txt.replace(/\s+$/, "").split(/\r?\n/);
          s.rows = lines.length;
          s.cols = Math.max(...lines.map((l) => l.length));
          s.W = s.cols * cw;
          s.H = s.rows * ch;
          s.base = new Uint8Array(s.cols * s.rows);
          s.heat = new Float32Array(s.cols * s.rows);
          lines.forEach((l, j) => {
            for (let i = 0; i < l.length; i++)
              s.base[j * s.cols + i] = Math.max(0, RAMP.indexOf(l[i]));
          });
          cv.style.aspectRatio = `${s.W} / ${s.H}`;
          sizeCanvas();
          paint();
          this._asciiRO = new ResizeObserver(() => {
            sizeCanvas();
            paint();
          });
          this._asciiRO.observe(cv);
          frame.addEventListener("pointermove", move);
          frame.addEventListener("pointerleave", leave);
          frame.addEventListener("pointerdown", down);
        });
    }

    // 06c. Proyectos por disciplina: los cuatro escarabajos abren cada colección.
    initDisciplines(reduce) {
      const root = this.disciplinesRef.current,
        section = root && root.closest(".projects");
      if (!root || !section) return;
      // La lámina de transición va dentro de .portfolio, junto al cursor de
      // escarabajo; en <body> quedaría por encima y lo ocultaría.
      const layer = section.closest(".portfolio") || document.body;
      const PREVIEW = "assets/portafolio-preview",
        EASE = "cubic-bezier(.2,.7,.2,1)",
        WIPE = "cubic-bezier(.76,0,.24,1)";
      const enc = encodeURIComponent,
        stem = (f) => f.replace(/\.[^.]+$/, ""),
        pad = (n) => String(n).padStart(2, "0");
      // Algunos nombres con tilde están en Unicode descompuesto (NFD): se comparan
      // normalizados y las rutas usan el nombre real que guarda el manifiesto.
      const same = (a, b) => a.normalize("NFC") === b.normalize("NFC");
      const real = (folder, file) => (info(folder, file) || { file }).file;
      const previewSrc = (folder, file) =>
        `${PREVIEW}/${enc(folder)}/${enc(stem(real(folder, file)))}.webp`;
      const originalSrc = previewSrc;
      const beetleSrc = (d) => `${PREVIEW}/escarabajos/${d.beetle}.webp`;
      const h = (tag, attrs, ...kids) => {
        const el = document.createElement(tag);
        for (const [k, v] of Object.entries(attrs || {})) {
          if (v == null || v === false) continue;
          if (k === "class") el.className = v;
          else if (k === "style")
            for (const [p, val] of Object.entries(v)) el.style.setProperty(p, val);
          else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
          else el.setAttribute(k, v);
        }
        el.append(...kids.flat(2).filter((c) => c != null && c !== false));
        return el;
      };
      const setTheme = (el, t) => {
        const vars = {
          "--p-bg": t.bg,
          "--p-ink": t.ink,
          "--p-head": t.head,
          "--p-soft": t.soft,
          "--p-accent": t.accent,
          "--p-on-accent": t.onAccent,
          "--p-line": t.line,
          "--p-dot": t.dot,
          "--p-cover": t.cover,
          "--p-cover-ink": t.coverInk,
          "--p-cover-soft": t.coverSoft,
        };
        for (const [k, v] of Object.entries(vars)) el.style.setProperty(k, v);
      };
      let manifest = null,
        current = -1,
        busy = false,
        detail = null,
        lastFocus = null,
        frameIO = null;
      const info = (folder, file) =>
        manifest && manifest[folder] && manifest[folder].find((f) => same(f.file, file));
      fetch(`${PREVIEW}/manifest.json`)
        .then((r) => (r.ok ? r.json() : null))
        .then((m) => {
          manifest = m;
          // Si la colección se abrió antes de cargar, se ajustan las proporciones.
          root.querySelectorAll(".dproj__media[data-folder]").forEach((el) => {
            const f = info(el.dataset.folder, el.dataset.file);
            if (!f) return;
            el.style.aspectRatio = `${f.w} / ${f.h}`;
            el.style.setProperty("--ar", String(f.w / f.h));
            const img = el.querySelector("img"),
              p = DISCIPLINES.flatMap((d) => d.projects).find(
                (q) => q.folder === el.dataset.folder && same(q.backdrop || q.cover, el.dataset.file),
              );
            if (img && p) img.src = previewSrc(p.folder, p.cover);
          });
        })
        .catch(() => {});

      const reveal = (els) => {
        if (reduce) return;
        [...els].forEach((el, n) =>
          el.animate(
            [
              { opacity: 0, transform: "translateY(36px)" },
              { opacity: 1, transform: "none" },
            ],
            {
              duration: 900,
              delay: 70 * Math.min(n, 10),
              easing: EASE,
              fill: "backwards",
            },
          ),
        );
      };

      // Transición entre vistas: una lámina del color de destino cubre la pantalla,
      // se cambia el contenido debajo y la lámina se disuelve.
      const transition = ({ color, dot, from, grow, beetle, emblem, swap, after }) => {
        if (reduce) {
          swap();
          after && after();
          return;
        }
        busy = true;
        const vw = innerWidth,
          vh = innerHeight,
          r = from.getBoundingClientRect(),
          cx = r.left + r.width / 2,
          cy = r.top + r.height / 2;
        const wipe = h("div", {
          class: "dwipe",
          "aria-hidden": "true",
          style: { background: color, "--w-dot": dot },
        });
        const start = grow
          ? `inset(${r.top}px ${vw - r.right}px ${vh - r.bottom}px ${r.left}px)`
          : `circle(0px at ${cx}px ${cy}px)`;
        const end = grow
          ? "inset(0px 0px 0px 0px)"
          : `circle(${Math.hypot(vw, vh)}px at ${cx}px ${cy}px)`;
        if (beetle) {
          const b = beetle.getBoundingClientRect(),
            w = beetle.offsetWidth || b.width,
            hh = beetle.offsetHeight || b.height,
            bx = b.left + b.width / 2,
            by = b.top + b.height / 2,
            rot =
              getComputedStyle(beetle).getPropertyValue("--b-rot").trim() || "0deg",
            s = (Math.min(vw, vh) * 0.46) / Math.max(w, hh);
          const fly = h("img", {
            class: "dwipe__beetle",
            src: beetle.currentSrc || beetle.src,
            alt: "",
            style: {
              left: `${bx - w / 2}px`,
              top: `${by - hh / 2}px`,
              width: `${w}px`,
              height: `${hh}px`,
            },
          });
          wipe.append(fly);
          fly.animate(
            [
              { transform: `translate(0px,0px) rotate(${rot}) scale(1)` },
              {
                transform: `translate(${vw / 2 - bx}px,${vh / 2 - by}px) rotate(0deg) scale(${s})`,
              },
            ],
            { duration: 1000, easing: EASE, fill: "forwards" },
          );
        }
        if (emblem) {
          // Al volver a la selección, la Gloriosa ocupa el centro de la lámina.
          const em = h("img", { class: "dwipe__emblem", src: emblem, alt: "" });
          wipe.append(em);
          em.animate(
            [
              { opacity: 0, transform: "translate(-50%,-50%) scale(0.6) rotate(-18deg)" },
              { opacity: 1, transform: "translate(-50%,-50%) scale(1) rotate(0deg)" },
            ],
            { duration: 1000, easing: EASE, fill: "forwards" },
          );
        }
        layer.append(wipe);
        const done = () => {
          wipe.remove();
          busy = false;
        };
        wipe
          .animate([{ clipPath: start }, { clipPath: end }], {
            duration: 720,
            easing: WIPE,
            fill: "forwards",
          })
          .finished.then(() => {
            swap();
            return new Promise((res) => setTimeout(res, beetle || emblem ? 300 : 60));
          })
          .then(() => {
            after && after();
            return wipe.animate([{ opacity: 1 }, { opacity: 0 }], {
              duration: 520,
              easing: "ease",
              fill: "forwards",
            }).finished;
          })
          .then(done, done);
      };

      const applySection = (i) => {
        setTheme(section, i < 0 ? PROJECTS_BASE_THEME : DISCIPLINES[i].theme);
        section.dataset.discipline = i < 0 ? "" : DISCIPLINES[i].id;
      };
      const scrollToStage = () => {
        const first = root.firstElementChild || root,
          y = first.getBoundingClientRect().top + scrollY - 72;
        window.scrollTo({ top: y, behavior: "instant" });
      };

      // Vista 1: los cuatro marcos.
      const renderSelect = () =>
        h(
          "div",
          { class: "dsel" },
          h(
            "header",
            { class: "dsel__head" },
            h("span", { class: "dsel__eyebrow" }, "Cuatro disciplinas · Una identidad"),
            h(
              "h3",
              { class: "dsel__title" },
              "Diferentes formas, ",
              h("em", null, "funciones extraordinarias."),
            ),
            h(
              "p",
              { class: "dsel__hint" },
              "Cada escarabajo representa una dimensión de mi práctica. Elige uno para entrar en su colección.",
            ),
          ),
          h(
            "div",
            { class: "dsel__board" },
            DISCIPLINES.map((d, i) =>
              h(
                "button",
                {
                  type: "button",
                  class: `dframe dframe--${i + 1}`,
                  "data-i": i,
                  style: {
                    "--f-bg": d.theme.bg,
                    "--f-ink": d.theme.head,
                    "--f-line": d.theme.line,
                    "--f-dot": d.theme.dot,
                  },
                  onclick: (e) => openDiscipline(i, e.currentTarget, true),
                },
                h("span", { class: "dframe__halftone", "aria-hidden": "true" }),
                h("span", { class: "dframe__seam", "aria-hidden": "true" }),
                h("span", { class: "dframe__num" }, d.num),
                h("img", {
                  class: "dframe__beetle",
                  src: beetleSrc(d),
                  alt: "",
                  draggable: "false",
                }),
                h(
                  "span",
                  { class: "dframe__label" },
                  h("span", { class: "dframe__lead" }, d.lead),
                  h("span", { class: "dframe__title" }, d.title),
                  h("span", { class: "dframe__enter" }, "Entrar"),
                ),
              ),
            ),
          ),
        );

      const observeFrames = (now) => {
        frameIO && frameIO.disconnect();
        const frames = root.querySelectorAll(".dframe");
        if (reduce || now) {
          frames.forEach((f) => f.classList.add("is-in"));
          return;
        }
        frameIO = new IntersectionObserver(
          (entries) =>
            entries.forEach((en) => {
              if (!en.isIntersecting) return;
              en.target.classList.add("is-in");
              frameIO.unobserve(en.target);
            }),
          { threshold: 0.2 },
        );
        frames.forEach((f) => frameIO.observe(f));
      };

      // Vista 2: la colección de una disciplina.
      const projectItem = (di, p, k) => {
        const main = p.backdrop || p.cover,
          f = info(p.folder, main);
        const media = h(
          "span",
          {
            class: `dproj__media${p.backdrop ? " has-backdrop" : ""}`,
            "data-folder": p.folder,
            "data-file": main,
            style: {
              "aspect-ratio": f ? `${f.w} / ${f.h}` : "4 / 5",
              "--ar": f ? String(f.w / f.h) : "0.8",
              ...(p.backdrop
                ? { "background-image": `url("${previewSrc(p.folder, p.backdrop)}")` }
                : {}),
            },
          },
          h("img", {
            src: previewSrc(p.folder, p.cover),
            alt: "",
            loading: "lazy",
            decoding: "async",
          }),
        );
        return h(
          PROJECT_GALLERY_ENABLED ? "button" : "article",
          {
            class: "dproj",
            ...(PROJECT_GALLERY_ENABLED ? {
              type: "button",
              "data-gallery": "",
              "data-k": k,
              onclick: (e) => {
                // Un arrastre del carrusel no abre el proyecto.
                if (dragMoved) return e.preventDefault();
                openDetail(di, k, media);
              },
            } : {}),
          },
          media,
          h(
            "span",
            { class: "dproj__caption" },
            h("span", { class: "dproj__num" }, pad(k + 1)),
            h(
              "span",
              { class: "dproj__info" },
              h("span", { class: "dproj__name" }, p.name),
              p.cat && h("span", { class: "dproj__cat" }, p.cat),
            ),
            PROJECT_GALLERY_ENABLED && h("span", { class: "dproj__more" }, "Ver proyecto"),
          ),
        );
      };

      const renderView = (i) => {
        const d = DISCIPLINES[i];
        return h(
          "div",
          { class: "dview" },
          h(
            "div",
            { class: "dview__bar" },
            h(
              "button",
              {
                type: "button",
                class: "dview__back",
                onclick: (e) => backToSelect(e.currentTarget),
              },
              h("span", { "aria-hidden": "true" }, "←"),
              " Las cuatro disciplinas",
            ),
            h(
              "nav",
              { class: "dview__switch", "aria-label": "Cambiar de disciplina" },
              DISCIPLINES.map((o, j) =>
                h(
                  "button",
                  {
                    type: "button",
                    class: "dview__switch-btn",
                    style: { "--f-bg": o.theme.bg, "--f-ink": o.theme.head },
                    "aria-current": j === i ? "true" : null,
                    "aria-label": `${o.num}. ${o.lead} ${o.title}`,
                    title: `${o.lead} ${o.title}`,
                    onclick: (e) => j !== i && openDiscipline(j, e.currentTarget, false),
                  },
                  h("img", { src: beetleSrc(o), alt: "" }),
                  h("span", null, o.num),
                ),
              ),
            ),
          ),
          h(
            "header",
            { class: "dview__head" },
            h(
              "div",
              { class: "dview__art", "aria-hidden": "true" },
              h("img", { class: "dview__beetle", src: beetleSrc(d), alt: "" }),
            ),
            h(
              "h3",
              { class: "dview__title", tabindex: "-1" },
              h("span", { class: "dview__lead" }, `${d.num} · ${d.lead}`),
              d.title,
            ),
            h(
              "div",
              { class: "dview__aside" },
              h("p", { class: "dview__focus" }, d.focus),
            ),
          ),
          carousel(i),
        );
      };

      // Carrusel horizontal de proyectos en bucle continuo.
      let dragMoved = false,
        drag = null;
      const onDragMove = (e) => {
        if (!drag) return;
        const dx = e.clientX - drag.x;
        if (!dragMoved && Math.abs(dx) > 6) {
          dragMoved = true;
          drag.track.classList.add("is-dragging");
        }
        if (dragMoved) drag.track.scrollLeft = drag.left - dx;
      };
      const onDragEnd = () => {
        if (!drag) return;
        const d = drag;
        drag = null;
        d.track.classList.remove("is-dragging");
        if (dragMoved) {
          d.settle();
          setTimeout(() => (dragMoved = false), 0);
        }
      };
      window.addEventListener("pointermove", onDragMove);
      window.addEventListener("pointerup", onDragEnd);
      const carousel = (i) => {
        const d = DISCIPLINES[i],
          n = d.projects.length,
          SPEED = 38, // px por segundo
          FAST = 7; // veces la velocidad normal mientras se mantiene una flecha
        // La serie se repite cinco veces para que el bucle no muestre cortes en
        // ningún sentido; las copias no se anuncian ni reciben foco.
        const track = h(
          "div",
          { class: "dcar__track", "aria-label": "Proyectos" },
          [0, 1, 2, 3, 4].map((copy) =>
            d.projects.map((p, k) => {
              const s = projectItem(i, p, k);
              if (copy) {
                s.setAttribute("aria-hidden", "true");
                s.tabIndex = -1;
              }
              return s;
            }),
          ),
        );
        const setW = () => track.children[n].offsetLeft - track.children[0].offsetLeft;
        let pos = 0,
          last = 0,
          mult = reduce ? 0 : 1,
          boost = 0,
          ready = false,
          visible = true;
        // Fuera de pantalla no hace falta mover nada.
        const io = new IntersectionObserver(([en]) => (visible = en.isIntersecting));
        io.observe(track);
        // Avance continuo y sin pausas; si el usuario lo arrastra o desliza,
        // el bucle sigue desde donde lo deja.
        const tick = (t) => {
          if (!track.isConnected) {
            io.disconnect();
            return;
          }
          const dt = last ? Math.min(0.05, (t - last) / 1000) : 0;
          last = t;
          const w = setW();
          // El bucle vive en la copia central ([w, 2w)); así se puede ir en ambos sentidos.
          if (w > 0 && !ready) {
            ready = true;
            pos = w;
            track.scrollLeft = w;
          }
          if (Math.abs(track.scrollLeft - Math.round(pos)) > 1) pos = track.scrollLeft;
          // Las flechas solo aceleran: mantenidas, el carrusel corre más rápido
          // hacia delante o hacia atrás, y al soltarlas vuelve a la velocidad normal.
          const target = boost ? boost * FAST : reduce ? 0 : 1;
          mult += (target - mult) * Math.min(1, dt * 6);
          if (ready && !drag && visible && Math.abs(mult) > 0.001) {
            pos += SPEED * mult * dt;
            if (pos >= 2 * w) pos -= w;
            else if (pos < w) pos += w;
            track.scrollLeft = pos;
          }
          requestAnimationFrame(tick);
        };
        // Flecha compacta dentro de una placa con la paleta de cada disciplina.
        const arrowSvg = () => {
          const NS = "http://www.w3.org/2000/svg",
            svg = document.createElementNS(NS, "svg");
          svg.setAttribute("viewBox", "0 0 56 56");
          svg.setAttribute("aria-hidden", "true");
          const path = document.createElementNS(NS, "path");
          path.setAttribute("d", "M10 28H45M32 15L45 28L32 41");
          path.setAttribute("class", "dcar__stroke");
          svg.append(path);
          return svg;
        };
        const arrow = (dir, label) => {
          const btn = h(
            "button",
            { type: "button", class: `dcar__arrow dcar__arrow--${dir > 0 ? "next" : "prev"}`, "aria-label": label },
            arrowSvg(),
          );
          const on = () => (boost = dir),
            off = () => boost === dir && (boost = 0);
          btn.addEventListener("pointerenter", (e) => e.pointerType === "mouse" && on());
          btn.addEventListener("pointerdown", on);
          btn.addEventListener("pointerleave", off);
          btn.addEventListener("pointerup", (e) => e.pointerType !== "mouse" && off());
          btn.addEventListener("pointercancel", off);
          btn.addEventListener("keydown", (e) => (e.key === "Enter" || e.key === " ") && on());
          btn.addEventListener("keyup", off);
          btn.addEventListener("blur", off);
          return btn;
        };
        // Arrastre con el ratón (movimiento y soltar se escuchan en window, una sola vez).
        track.addEventListener("pointerdown", (e) => {
          if (e.pointerType !== "mouse" || e.button !== 0) return;
          drag = { track, x: e.clientX, left: track.scrollLeft, settle: () => {} };
          dragMoved = false;
        });
        requestAnimationFrame(tick);
        return h(
          "section",
          { class: "dcar", "aria-label": `Proyectos de ${d.lead} ${d.title}` },
          track,
          arrow(-1, "Retroceder más rápido"),
          arrow(1, "Avanzar más rápido"),
        );
      };

      const openDiscipline = (i, from, grow) => {
        if (busy) return;
        const d = DISCIPLINES[i];
        transition({
          color: d.theme.bg,
          dot: d.theme.dot,
          from,
          grow,
          beetle: from.querySelector("img"),
          swap: () => {
            current = i;
            frameIO && frameIO.disconnect();
            root.replaceChildren(renderView(i));
            applySection(i);
            scrollToStage();
          },
          after: () => {
            reveal(root.querySelectorAll(".dview__head > *, .dproj"));
            const t = root.querySelector(".dview__title");
            t && t.focus({ preventScroll: true });
          },
        });
      };

      const backToSelect = (from) => {
        if (busy) return;
        const prev = current;
        transition({
          color: PROJECTS_BASE_THEME.bg,
          dot: PROJECTS_BASE_THEME.dot,
          from,
          grow: false,
          emblem: `${PREVIEW}/escarabajos/gloriosa.webp`,
          swap: () => {
            current = -1;
            root.replaceChildren(renderSelect());
            observeFrames(true);
            applySection(-1);
            scrollToStage();
          },
          after: () => {
            reveal(root.querySelectorAll(".dsel__head > *, .dframe"));
            const f = root.querySelector(`.dframe[data-i="${prev}"]`);
            f && f.focus({ preventScroll: true });
          },
        });
      };

      // Vista 3: ficha de un proyecto, con todas sus imágenes.
      const detailContent = (di, k) => {
        const d = DISCIPLINES[di],
          p = d.projects[k],
          n = d.projects.length,
          files = (manifest && manifest[p.folder]) || [{ file: p.cover }],
          rest = files.filter(
            (f) => !same(f.file, p.cover) && !(p.backdrop && same(f.file, p.backdrop)),
          ),
          prev = (k - 1 + n) % n,
          next = (k + 1) % n;
        const picture = (f, cls, i) =>
          h(
            "a",
            {
              class: cls,
              href: originalSrc(p.folder, f.file),
              target: "_blank",
              rel: "noopener",
              "aria-label": `${p.name}, imagen ${i + 1}: abrir imagen ampliada`,
            },
            h("img", {
              src: previewSrc(p.folder, f.file),
              alt: "",
              loading: i ? "lazy" : "eager",
              decoding: "async",
              width: f.w,
              height: f.h,
            }),
          );
        const lead = p.backdrop
          ? h(
              "div",
              {
                class: "pdetail__lead has-backdrop",
                style: {
                  "background-image": `url("${previewSrc(p.folder, p.backdrop)}")`,
                },
              },
              picture(info(p.folder, p.cover) || { file: p.cover }, "pdetail__lead-link", 0),
            )
          : h(
              "div",
              { class: "pdetail__lead" },
              picture(info(p.folder, p.cover) || { file: p.cover }, "pdetail__lead-link", 0),
            );
        return h(
          "div",
          { class: "pdetail__inner" },
          h(
            "div",
            { class: "pdetail__bar" },
            h(
              "span",
              { class: "pdetail__crumb" },
              `${d.num} · ${d.lead} ${d.title}`,
            ),
            h(
              "button",
              { type: "button", class: "pdetail__close", onclick: closeDetail },
              "Cerrar ",
              h("span", { "aria-hidden": "true" }, "×"),
            ),
          ),
          h(
            "header",
            { class: "pdetail__head" },
            h("span", { class: "pdetail__num" }, `${pad(k + 1)} / ${pad(n)}`),
            h("h3", { class: "pdetail__name" }, p.name),
            h(
              "div",
              { class: "pdetail__meta" },
              p.cat && h("span", null, p.cat),
              p.tag && h("span", null, p.tag),
              manifest && h("span", null, `${pad(files.length)} imágenes`),
            ),
          ),
          lead,
          rest.length > 0 &&
            h(
              "div",
              { class: "pdetail__gallery" },
              rest.map((f, i) => picture(f, "pdetail__item", i + 1)),
            ),
          n > 1 &&
            h(
              "nav",
              { class: "pdetail__pager", "aria-label": "Otros proyectos de la disciplina" },
              h(
                "button",
                { type: "button", class: "pdetail__step", onclick: () => detail.fill(prev) },
                h("small", null, "← Anterior"),
                d.projects[prev].name,
              ),
              h(
                "button",
                {
                  type: "button",
                  class: "pdetail__step pdetail__step--next",
                  onclick: () => detail.fill(next),
                },
                h("small", null, "Siguiente →"),
                d.projects[next].name,
              ),
            ),
        );
      };

      const openDetail = (di, k, media) => {
        if (detail || busy) return;
        lastFocus = document.activeElement;
        const el = h("div", {
          class: "pdetail",
          role: "dialog",
          "aria-modal": "true",
          tabindex: "-1",
        });
        setTheme(el, DISCIPLINES[di].theme);
        const fill = (kk) => {
          detail.k = kk;
          el.replaceChildren(detailContent(di, kk));
          el.setAttribute("aria-label", DISCIPLINES[di].projects[kk].name);
          el.scrollTop = 0;
          el.querySelector(".pdetail__close").focus({ preventScroll: true });
          reveal(el.querySelectorAll(".pdetail__head > *, .pdetail__lead"));
        };
        detail = { el, di, k, fill };
        layer.append(el);
        document.documentElement.style.overflow = "hidden";
        fill(k);
        if (!reduce && media) {
          const r = media.getBoundingClientRect();
          el.animate(
            [
              {
                clipPath: `inset(${r.top}px ${innerWidth - r.right}px ${innerHeight - r.bottom}px ${r.left}px)`,
              },
              { clipPath: "inset(0px 0px 0px 0px)" },
            ],
            { duration: 760, easing: WIPE },
          );
        }
      };

      function closeDetail() {
        if (!detail) return;
        const el = detail.el;
        detail = null;
        document.documentElement.style.overflow = "";
        const done = () => el.remove();
        if (reduce) done();
        else
          el.animate(
            [
              { opacity: 1, transform: "none" },
              { opacity: 0, transform: "translateY(28px)" },
            ],
            { duration: 380, easing: "ease", fill: "forwards" },
          ).finished.then(done, done);
        lastFocus && lastFocus.focus && lastFocus.focus({ preventScroll: true });
      }

      const onKey = (e) => {
        if (!detail) return;
        const n = DISCIPLINES[detail.di].projects.length;
        if (e.key === "Escape") closeDetail();
        else if (e.key === "ArrowRight" && n > 1) detail.fill((detail.k + 1) % n);
        else if (e.key === "ArrowLeft" && n > 1) detail.fill((detail.k - 1 + n) % n);
      };
      // El foco no sale de la ficha mientras está abierta.
      const onFocus = (e) => {
        if (detail && !detail.el.contains(e.target))
          detail.el.querySelector(".pdetail__close").focus({ preventScroll: true });
      };
      document.addEventListener("keydown", onKey);
      document.addEventListener("focusin", onFocus);
      this._disciplinesOff = () => {
        document.removeEventListener("keydown", onKey);
        document.removeEventListener("focusin", onFocus);
        window.removeEventListener("pointermove", onDragMove);
        window.removeEventListener("pointerup", onDragEnd);
        frameIO && frameIO.disconnect();
        detail && detail.el.remove();
        layer.querySelectorAll(".dwipe").forEach((w) => w.remove());
        document.documentElement.style.overflow = "";
      };

      applySection(-1);
      root.replaceChildren(renderSelect());
      observeFrames(false);
    }

    // 06d. Ventana con los textos legales del pie de página.
    initLegal(reduce) {
      const layer = document.querySelector(".portfolio") || document.body;
      let box = null,
        lastFocus = null;
      const h = (tag, cls, ...kids) => {
        const el = document.createElement(tag);
        if (cls) el.className = cls;
        el.append(...kids);
        return el;
      };
      const close = () => {
        if (!box) return;
        const el = box;
        box = null;
        document.documentElement.style.overflow = "";
        const done = () => el.remove();
        if (reduce) done();
        else
          el
            .animate([{ opacity: 1 }, { opacity: 0 }], {
              duration: 250,
              easing: "ease",
              fill: "forwards",
            })
            .finished.then(done, done);
        lastFocus && lastFocus.focus && lastFocus.focus({ preventScroll: true });
      };
      const open = (key, from) => {
        const doc = LEGAL[key];
        if (!doc || box) return;
        lastFocus = from;
        const closeBtn = h("button", "legal__close", "Cerrar ", h("span", null, "×"));
        closeBtn.type = "button";
        closeBtn.addEventListener("click", close);
        box = h(
          "div",
          "legal",
          h(
            "div",
            "legal__panel",
            h("div", "legal__bar", h("span", "legal__crumb", "Erika Polanco"), closeBtn),
            h(
              "div",
              "legal__body",
              h("h2", "legal__title", doc.title),
              h("p", "legal__updated", doc.updated),
              ...doc.sections.map(([t, p]) =>
                h("section", "legal__section", h("h3", null, t), h("p", null, p)),
              ),
            ),
          ),
        );
        box.setAttribute("role", "dialog");
        box.setAttribute("aria-modal", "true");
        box.setAttribute("aria-label", doc.title);
        box.addEventListener("click", (e) => e.target === box && close());
        layer.append(box);
        document.documentElement.style.overflow = "hidden";
        closeBtn.focus({ preventScroll: true });
        if (!reduce)
          box.animate([{ opacity: 0 }, { opacity: 1 }], {
            duration: 300,
            easing: "ease",
          });
      };
      const onClick = (e) => {
        const b = e.target.closest && e.target.closest("[data-legal]");
        if (b) open(b.dataset.legal, b);
      };
      const onKey = (e) => e.key === "Escape" && close();
      // El foco no sale de la ventana mientras está abierta.
      const onFocus = (e) => {
        if (box && !box.contains(e.target))
          box.querySelector(".legal__close").focus({ preventScroll: true });
      };
      document.addEventListener("click", onClick);
      document.addEventListener("keydown", onKey);
      document.addEventListener("focusin", onFocus);
      this._legalOff = () => {
        document.removeEventListener("click", onClick);
        document.removeEventListener("keydown", onKey);
        document.removeEventListener("focusin", onFocus);
        box && box.remove();
        document.documentElement.style.overflow = "";
      };
    }

    // 06e. Aviso de cookies y carga de Google Analytics solo con consentimiento.
    initConsent(reduce) {
      const layer = document.querySelector(".portfolio") || document.body;
      const valid = !!GA_ID && !/X{4,}/i.test(GA_ID);
      let banner = null,
        loaded = false;
      const read = () => {
        try {
          const v = JSON.parse(localStorage.getItem(CONSENT_KEY) || "null");
          if (!v || typeof v.analytics !== "boolean") return null;
          const age = (Date.now() - v.ts) / (1000 * 60 * 60 * 24 * 30);
          return age > CONSENT_MONTHS ? null : v;
        } catch (e) {
          return null;
        }
      };
      const save = (analytics) => {
        try {
          localStorage.setItem(CONSENT_KEY, JSON.stringify({ analytics, ts: Date.now() }));
        } catch (e) {}
      };
      const loadGA = () => {
        if (!valid || loaded) return;
        loaded = true;
        window["ga-disable-" + GA_ID] = false;
        window.dataLayer = window.dataLayer || [];
        window.gtag = function () {
          window.dataLayer.push(arguments);
        };
        window.gtag("js", new Date());
        window.gtag("config", GA_ID, { anonymize_ip: true });
        const s = document.createElement("script");
        s.async = true;
        s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA_ID);
        document.head.append(s);
      };
      const stopGA = () => {
        if (valid) window["ga-disable-" + GA_ID] = true;
        // Borra las cookies de Google Analytics del dominio actual.
        document.cookie.split(";").forEach((c) => {
          const name = c.split("=")[0].trim();
          if (name === "_ga" || name.startsWith("_ga_") || name === "_gid")
            document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        });
      };
      const hide = () => {
        if (!banner) return;
        const el = banner;
        banner = null;
        if (reduce) return el.remove();
        el
          .animate([{ opacity: 1 }, { opacity: 0 }], { duration: 250, fill: "forwards" })
          .finished.then(() => el.remove(), () => el.remove());
      };
      const choose = (analytics) => {
        save(analytics);
        analytics ? loadGA() : stopGA();
        hide();
      };
      const show = () => {
        if (banner) return;
        const btn = (cls, text, on) => {
          const b = document.createElement("button");
          b.type = "button";
          b.className = "cookies__btn " + cls;
          b.textContent = text;
          b.addEventListener("click", on);
          return b;
        };
        const more = document.createElement("button");
        more.type = "button";
        more.dataset.legal = "cookies";
        more.textContent = "política de cookies";
        const text = document.createElement("p");
        text.className = "cookies__text";
        text.append(
          "Uso cookies de Google Analytics para entender cómo se visita este sitio y mejorarlo. Solo se activan si las aceptas. Más información en la ",
          more,
          ".",
        );
        const title = document.createElement("h2");
        title.className = "cookies__title";
        title.textContent = "Tu privacidad";
        const actions = document.createElement("div");
        actions.className = "cookies__actions";
        actions.append(
          btn("cookies__btn--reject", "Rechazar", () => choose(false)),
          btn("cookies__btn--accept", "Aceptar", () => choose(true)),
        );
        banner = document.createElement("div");
        banner.className = "cookies";
        banner.setAttribute("role", "region");
        banner.setAttribute("aria-label", "Aviso de cookies");
        banner.append(title, text, actions);
        layer.append(banner);
        if (!reduce)
          banner.animate(
            [
              { opacity: 0, transform: "translateY(24px)" },
              { opacity: 1, transform: "none" },
            ],
            { duration: 500, easing: "cubic-bezier(.2,.7,.2,1)" },
          );
      };
      const onClick = (e) => {
        const b = e.target.closest && e.target.closest("[data-cookies]");
        if (b) show();
      };
      document.addEventListener("click", onClick);
      const saved = read();
      if (!saved) show();
      else if (saved.analytics) loadGA();
      this._consentOff = () => {
        document.removeEventListener("click", onClick);
        banner && banner.remove();
      };
    }

    // 07. Actualización y limpieza de eventos, observadores y animaciones.
    componentDidUpdate() {
      if (this._place) {
        requestAnimationFrame(this._place);
        setTimeout(this._place, 700);
        document.fonts && document.fonts.ready.then(this._place);
      }
    }

    componentWillUnmount() {
      this._dead = true;
      this._introOff && this._introOff();
      this._i18nOff && this._i18nOff();
      this._principlesOff && this._principlesOff();
      this._asciiOff && this._asciiOff();
      this._disciplinesOff && this._disciplinesOff();
      this._legalOff && this._legalOff();
      this._consentOff && this._consentOff();
      window.removeEventListener("scroll", this._navScroll);
      const nav = this.navRef.current;
      nav.querySelector(".site-nav__toggle").removeEventListener("click", this._toggleMenu);
      nav.querySelector(".site-nav__links").removeEventListener("click", this._closeMenu);
      document.removeEventListener("keydown", this._menuKeydown);
      this._fallAnimations &&
        this._fallAnimations.forEach((animation) => animation.cancel());
      this._fallRO && this._fallRO.disconnect();
      this._fallIO && this._fallIO.disconnect();
      cancelAnimationFrame(this._raf);
      cancelAnimationFrame(this._heroRaf);
      window.removeEventListener("mousemove", this._heroMove);
      window.removeEventListener("resize", this._place);
      this._ro && this._ro.disconnect();
      clearTimeout(this._wt);
      window.removeEventListener("mousemove", this._move);
      document.removeEventListener("mouseleave", this._leave);
      this._io && this._io.disconnect();
    }

    // 08. Contenido y configuración: proyectos, paletas, fuentes y cinta.
    renderVals() {
      const size = (this.props.cursorSize ?? 48) + "px";
      const words = [
        "Diseño gráfico",
        "Branding",
        "Ilustración",
        "Ideas con intención",
      ];
      const icons = ["assets/gloriosa-colores.png", "assets/gloriosa.png"];
      const fonts = {
        bricolage: {
          family: "'Bricolage Grotesque',sans-serif",
          weight: 800,
          style: "normal",
          size: "1em",
          ls: "-0.035em",
          lh: "0.84",
        },
        syne: {
          family: "'Syne',sans-serif",
          weight: 800,
          style: "normal",
          size: "0.86em",
          ls: "-0.03em",
          lh: "0.9",
        },
        instrument: {
          family: "'Instrument Serif',serif",
          weight: 400,
          style: "italic",
          size: "1.22em",
          ls: "-0.035em",
          lh: "0.8",
        },
        unbounded: {
          family: "'Unbounded',sans-serif",
          weight: 700,
          style: "normal",
          size: "0.74em",
          ls: "-0.03em",
          lh: "0.92",
        },
        nunito: {
          family: "'Neulis Cursive','Nunito',sans-serif",
          weight: 800,
          style: "normal",
          size: "1em",
          ls: "-0.055em",
          lh: "0.84",
        },
      };
      const hf = fonts[this.props.heroFont ?? "bricolage"] || fonts.bricolage;
      const marquee = [...words, ...words].map((w, i) => ({
        word: w,
        icon: icons[i % 2],
      }));
      return {
        hf,
        navRef: this.navRef,
        fallRef: this.fallRef,
        heroTextRef: this.heroTextRef,
        heroImgRef: this.heroImgRef,
        cursorRef: this.cursorRef,
        principlesRef: this.principlesRef,
        asciiRef: this.asciiRef,
        disciplinesRef: this.disciplinesRef,
        cursorSize: size,
        marquee,
      };
    }
  };
};
