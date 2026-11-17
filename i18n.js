"use strict";

// Español es el idioma inicial. Los textos originales permanecen en el DOM para
// poder volver a ellos sin reconstruir las animaciones ni las fichas abiertas.
window.PortfolioI18n = (() => {
  const normalize = (value) => value.replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();
  const pairs = [
    // Navegación, portada y marquesina.
    ["Idioma", "Language"],
    ["Español", "Spanish"],
    ["Abrir menú", "Open menu"],
    ["Cerrar menú", "Close menu"],
    ["Identidad", "Identity"],
    ["Concepto", "Concept"],
    ["Historia", "Story"],
    ["Proyectos", "Projects"],
    ["Contacto", "Contact"],
    ["01 Portada", "01 Home"],
    ["02 Identidad", "02 Identity"],
    ["03 Concepto", "03 Concept"],
    ["05 Proyectos", "05 Projects"],
    ["06 Contacto", "06 Contact"],
    ["Diseñadora gráfica | Ilustradora", "Graphic designer | Illustrator"],
    ["Ideas con intención,", "Ideas with intention,"],
    ["diseño con propósito.", "design with purpose."],
    ["¡Hola!", "Hello!"],
    ["Diseño identidades, ilustraciones y piezas editoriales donde cada decisión tiene una razón.", "I create identities, illustrations and editorial pieces where every decision has a purpose."],
    ["Ver proyectos", "View projects"],
    ["Diseño gráfico", "Graphic design"],
    ["Branding", "Branding"],
    ["Ilustración", "Illustration"],
    ["Ideas con intención", "Ideas with intention"],

    // Identidad, concepto, historia y contacto.
    ["Identidad de marca", "Brand identity"],
    ["Una marca con mi nombre", "A brand that bears my name"],
    ["Erika Polanco es una marca personal construida a partir de mi propia identidad como diseñadora gráfica e ilustradora. Utilizar mi nombre representa una decisión consciente de vincular directamente mi trabajo, mis valores y mi trayectoria profesional.", "Erika Polanco is a personal brand built around my identity as a graphic designer and illustrator. Using my name is a conscious choice to connect my work, values and professional journey."],
    ["La marca busca consolidar una identidad auténtica y reconocible que evolucione conmigo, permitiéndome explorar diferentes disciplinas creativas sin perder una voz propia.", "The brand aims to establish an authentic, recognizable identity that evolves with me, allowing me to explore different creative disciplines while keeping a voice of my own."],
    ["Erika de niña, en estampilla", "Erika as a child, in a postage stamp"],
    ["Concepto de marca", "Brand concept"],
    ["El diseño como herramienta para comunicar", "Design as a tool for communication"],
    ["Entiendo el diseño como una herramienta para comunicar ideas, resolver necesidades y construir conexiones significativas. Cada proyecto requiere una mirada particular, capaz de comprender su contexto y transformar conceptos en soluciones visuales.", "I see design as a tool for communicating ideas, meeting needs and building meaningful connections. Each project calls for a distinct perspective that understands its context and turns concepts into visual solutions."],
    ["No busco definir mi trabajo mediante un único estilo, sino a través de la intención que sostiene cada decisión.", "I do not define my work by a single style, but by the intention behind each decision."],
    ["Principio", "Principle"],
    ["Versatilidad", "Versatility"],
    ["Cada proyecto pide una mirada particular, no una fórmula.", "Each project calls for its own perspective, not a formula."],
    ["Exploración", "Exploration"],
    ["Comprender el contexto antes de transformarlo en imagen.", "Understanding the context before turning it into an image."],
    ["Criterio creativo", "Creative judgment"],
    ["Una razón detrás de cada propuesta.", "A reason behind every idea."],
    ["Una identidad en constante evolución", "An identity in constant evolution"],
    ["Mi trayectoria en el diseño gráfico ha sido un proceso de exploración y aprendizaje. La curiosidad me ha llevado a trabajar con diferentes disciplinas, desde la ilustración y el diseño editorial hasta la identidad visual y el packaging.", "My journey in graphic design has been a process of exploration and learning. Curiosity has led me to work across disciplines, from illustration and editorial design to visual identity and packaging."],
    ["Con el tiempo, he comprendido que ser versátil no significa carecer de una identidad propia. Al contrario, mi identidad se encuentra en la manera en que observo, investigo, experimento y tomo decisiones.", "Over time, I have learned that versatility does not mean lacking an identity. My identity lies in the way I observe, research, experiment and make decisions."],
    ["Erika Polanco representa ese recorrido: una diseñadora que continúa aprendiendo, transformándose y construyendo una práctica creativa donde cada proyecto tiene un propósito.", "Erika Polanco represents that journey: a designer who keeps learning, evolving and building a creative practice in which every project has a purpose."],
    ["No me define un solo estilo, sino mi manera de entender y resolver el diseño.", "A single style does not define me; the way I understand and solve design challenges does."],
    ["Conoce algunos de mis", "Explore some of my"],
    ["IDENTIDAD VISUAL, ILUSTRACIÓN, DISEÑO EDITORIAL, DE INFORMACIÓN Y PACKAGING", "VISUAL IDENTITY, ILLUSTRATION, EDITORIAL AND INFORMATION DESIGN, AND PACKAGING"],
    ["Escríbeme", "Get in touch"],
    ["Evolucionemos", "Let's evolve"],
    ["tus ideas", "your ideas"],
    ["Información legal", "Legal information"],
    ["Escarabajo en ASCII", "ASCII beetle"],

    // Disciplinas, colecciones y fichas de proyecto.
    ["Cuatro disciplinas · Una identidad", "Four disciplines · One identity"],
    ["Diferentes formas,", "Different forms,"],
    ["funciones extraordinarias.", "extraordinary functions."],
    ["Cada escarabajo representa una dimensión de mi práctica. Elige uno para entrar en su colección.", "Each beetle represents a dimension of my practice. Choose one to explore its collection."],
    ["Diseño para", "Design for"],
    ["el aprendizaje", "learning"],
    ["la experiencia de producto", "the product experience"],
    ["la construcción de identidad", "building identity"],
    ["la expresión narrativa", "narrative expression"],
    ["Ilustración educativa, señalética, diseño de información y recursos visuales para transmitir conocimientos.", "Educational illustration, signage, information design and visual resources that share knowledge."],
    ["Packaging, diseño de empaques, presentación de productos y construcción de experiencias visuales alrededor de un producto.", "Packaging, product presentation and visual experiences built around a product."],
    ["Branding, identidad visual, sistemas gráficos, construcción de marcas y comunicación visual.", "Branding, visual identity, graphic systems, brand building and visual communication."],
    ["Ilustración aplicada, creación de personajes, narrativa visual, exploración gráfica y expresión artística.", "Applied illustration, character creation, visual storytelling, graphic exploration and artistic expression."],
    ["Entrar", "Explore"],
    ["Las cuatro disciplinas", "All four disciplines"],
    ["Cambiar de disciplina", "Switch discipline"],
    ["Ver proyecto", "View project"],
    ["Retroceder más rápido", "Move back faster"],
    ["Avanzar más rápido", "Move forward faster"],
    ["Cerrar", "Close"],
    ["Otros proyectos de la disciplina", "Other projects in this discipline"],
    ["← Anterior", "← Previous"],
    ["Siguiente →", "Next →"],
    ["Ilustración · Diseño educativo", "Illustration · Educational design"],
    ["Identidad visual · Ilustración", "Visual identity · Illustration"],
    ["Diseño de información", "Information design"],
    ["Packaging · Producto", "Packaging · Product"],
    ["Packaging · Experiencia", "Packaging · Experience"],
    ["Ilustración · Gráfica aplicada", "Illustration · Applied graphics"],
    ["Branding · Identidad", "Branding · Identity"],
    ["Gestión de identidad", "Identity management"],
    ["Editorial · Identidad", "Editorial · Identity"],
    ["Personajes · 3D", "Characters · 3D"],
    ["Ilustración · Packaging", "Illustration · Packaging"],
    ["Ilustración · Editorial", "Illustration · Editorial"],
    ["Doce especies, una historia", "Twelve species, one story"],
    ["Memorias que permanecen", "Memories that endure"],
    ["Naturaleza para descubrir", "Nature to discover"],
    ["El lado más cremoso", "The creamier side"],
    ["Un ritual para los sentidos", "A ritual for the senses"],

    // Pie de página, cookies y documentos legales.
    ["Términos y condiciones", "Terms and conditions"],
    ["Propiedad intelectual / Copyright", "Intellectual property / Copyright"],
    ["Política de privacidad", "Privacy policy"],
    ["Política de cookies", "Cookie policy"],
    ["Preferencias de cookies", "Cookie preferences"],
    ["política de cookies", "cookie policy"],
    ["Tu privacidad", "Your privacy"],
    ["Uso cookies de Google Analytics para entender cómo se visita este sitio y mejorarlo. Solo se activan si las aceptas. Más información en la", "I use Google Analytics cookies to understand how this site is used and improve it. They are enabled only if you accept them. Learn more in the"],
    ["Rechazar", "Reject"],
    ["Aceptar", "Accept"],
    ["Aviso de cookies", "Cookie notice"],
    ["Última actualización: noviembre de 2026", "Last updated: November 2026"],
    ["© 2026 Erika Polanco. Todos los derechos reservados.", "© 2026 Erika Polanco. All rights reserved."],
  ];
  const legalPairs = [
    ["1. Quién es la titular", "1. Who owns this site"],
    ["Este sitio web es el portafolio profesional de Erika Polanco, diseñadora gráfica e ilustradora. Al navegarlo aceptas estos términos; si no estás de acuerdo con ellos, te pedimos que no lo uses.", "This website is the professional portfolio of Erika Polanco, graphic designer and illustrator. By browsing it, you accept these terms. If you disagree with them, please do not use the site."],
    ["2. Finalidad del sitio", "2. Purpose of the site"],
    ["El sitio muestra proyectos de identidad visual, ilustración, diseño editorial y packaging con fines informativos y de presentación profesional. Nada en él constituye una oferta vinculante ni un contrato. Cualquier servicio se acuerda por separado y por escrito.", "This site presents visual identity, illustration, editorial design and packaging projects for information and professional presentation. Nothing here constitutes a binding offer or contract. Any services are agreed separately and in writing."],
    ["3. Uso permitido", "3. Permitted use"],
    ["Puedes consultar el sitio y compartir sus enlaces. No está permitido copiar, descargar con fines comerciales, modificar, redistribuir ni usar su contenido para entrenar sistemas automáticos sin autorización previa y por escrito. Tampoco puedes interferir con el funcionamiento del sitio ni intentar acceder a áreas no públicas.", "You may browse this site and share its links. You may not copy, download for commercial purposes, modify, redistribute or use its content to train automated systems without prior written permission. You may not interfere with the site or try to access non-public areas."],
    ["4. Contenido de terceros", "4. Third-party content"],
    ["Algunos proyectos incluyen marcas, logotipos o productos de sus respectivos titulares. Se muestran únicamente como muestra del trabajo realizado y no implican patrocinio ni respaldo de esas marcas hacia este sitio.", "Some projects feature brands, logos or products owned by their respective holders. They are shown solely as examples of completed work and do not imply sponsorship or endorsement of this site."],
    ["5. Exactitud de la información", "5. Accuracy of information"],
    ["Me esfuerzo por que la información sea correcta y esté al día, pero se ofrece «tal cual», sin garantías de que esté libre de errores o de interrupciones. Puedo modificar o retirar contenidos sin previo aviso.", "I strive to keep the information accurate and current, but it is provided as is, without any guarantee that it is free of errors or interruptions. I may change or remove content without notice."],
    ["6. Enlaces externos", "6. External links"],
    ["El sitio puede enlazar a páginas o redes sociales de terceros. No controlo su contenido ni sus políticas y no me hago responsable de ellas.", "This site may link to third-party websites or social media. I do not control their content or policies and am not responsible for them."],
    ["7. Limitación de responsabilidad", "7. Limitation of liability"],
    ["En la medida permitida por la ley, no respondo por daños derivados del uso del sitio o de la imposibilidad de usarlo.", "To the extent permitted by law, I am not liable for damages arising from using this site or being unable to use it."],
    ["8. Cambios y ley aplicable", "8. Changes and applicable law"],
    ["Estos términos pueden actualizarse; la versión vigente es la publicada aquí. Se rigen por la legislación aplicable en el lugar de residencia de la titular.", "These terms may be updated; the current version is the one published here. They are governed by the law applicable in the owner's place of residence."],
    ["9. Privacidad y cookies", "9. Privacy and cookies"],
    ["El tratamiento de datos personales y el uso de cookies se explican en la política de privacidad y en la política de cookies de este sitio.", "The handling of personal data and use of cookies are explained in this site's privacy policy and cookie policy."],
    ["10. Contacto", "10. Contact"],
    ["Para cualquier consulta sobre estos términos, usa los datos de la sección Contacto de este sitio.", "For questions about these terms, use the details in this site's Contact section."],

    ["1. Quién trata tus datos", "1. Who handles your data"],
    ["La responsable es Erika Polanco, titular de este sitio web. Puedes contactarla con los datos de la sección Contacto de este sitio para cualquier asunto relacionado con tus datos personales.", "Erika Polanco, the owner of this website, is responsible for handling your data. You can contact her using the details in this site's Contact section about any matter involving your personal data."],
    ["2. Qué datos se tratan", "2. What data is handled"],
    ["Este sitio no tiene formularios, cuentas de usuario ni comentarios. Si me escribes por correo, trataré tu nombre, tu dirección de correo y el contenido del mensaje solo para responderte. Si aceptas las cookies de analítica, Google Analytics recoge datos de uso como las páginas que visitas, el tiempo de visita, el tipo de dispositivo y navegador, el idioma y tu ubicación aproximada. No se recogen datos que te identifiquen directamente.", "This site has no forms, user accounts or comments. If you email me, I will use your name, email address and message only to reply. If you accept analytics cookies, Google Analytics collects usage data such as pages visited, visit duration, device and browser type, language and approximate location. Data that directly identifies you is not collected."],
    ["3. Para qué se usan y con qué base", "3. How and why the data is used"],
    ["• Responder a tus mensajes: es necesario para atender tu solicitud. • Medir y mejorar el sitio con estadísticas de uso: solo con tu consentimiento, que puedes retirar en cualquier momento. • Mantener la seguridad y el funcionamiento técnico del sitio: interés legítimo.", "• Reply to your messages: necessary to handle your request.\n• Measure and improve the site with usage statistics: only with your consent, which you may withdraw at any time.\n• Maintain the site's security and technical operation: legitimate interest."],
    ["4. Con quién se comparten", "4. Who receives the data"],
    ["Google (Google Analytics) recibe los datos de uso únicamente si aceptas las cookies de analítica y puede tratarlos en servidores fuera de tu país, incluidos los de Estados Unidos, bajo las garantías que Google ofrece. Al cargar el sitio, tu navegador también solicita algunas bibliotecas técnicas a una red de distribución de contenidos (unpkg.com), por lo que ese proveedor puede recibir tu dirección IP. Las tipografías se sirven desde este mismo sitio. No vendo tus datos ni los uso con fines publicitarios.", "Google (Google Analytics) receives usage data only if you accept analytics cookies and may process it on servers outside your country, including in the United States, under the safeguards Google provides. When the site loads, your browser also requests some technical libraries from a content delivery network (unpkg.com), so that provider may receive your IP address. Fonts are served from this site. I do not sell your data or use it for advertising."],
    ["5. Cuánto tiempo se conservan", "5. How long data is kept"],
    ["Los mensajes de correo se conservan mientras dure la conversación y durante el tiempo necesario para atender obligaciones legales. Los datos de analítica se conservan durante el periodo configurado en Google Analytics, que no supera los 14 meses.", "Email messages are kept for the duration of the conversation and as long as needed to meet legal obligations. Analytics data is kept for the period configured in Google Analytics, which does not exceed 14 months."],
    ["6. Tus derechos", "6. Your rights"],
    ["Según la normativa de protección de datos que te sea aplicable (por ejemplo, el RGPD en la Unión Europea), puedes solicitar el acceso a tus datos, su rectificación o supresión, la limitación o la oposición al tratamiento y la portabilidad. Puedes retirar tu consentimiento en cualquier momento desde «Preferencias de cookies» en el pie de página. Para ejercer tus derechos, contáctala desde la sección Contacto de este sitio. Si consideras que no se han respetado, puedes presentar una reclamación ante la autoridad de protección de datos de tu país.", "Under the data protection rules that apply to you (for example, the GDPR in the European Union), you may request access to, correction or deletion of your data, restrictions or objections to processing, and data portability. You can withdraw consent at any time using Cookie preferences in the footer. To exercise your rights, contact Erika through this site's Contact section. If you believe your rights have not been respected, you may complain to your country's data protection authority."],
    ["7. Menores", "7. Children"],
    ["El sitio no está dirigido a menores de edad y no recoge conscientemente sus datos.", "This site is not intended for children and does not knowingly collect their data."],
    ["8. Cambios en esta política", "8. Changes to this policy"],
    ["Puedo actualizar esta política. La versión vigente es siempre la publicada aquí, con su fecha de actualización.", "I may update this policy. The current version is always the one published here, with its update date."],

    ["¿Qué son las cookies?", "What are cookies?"],
    ["Son pequeños archivos que un sitio guarda en tu navegador para recordar información. Algunas son imprescindibles y otras sirven para medir el uso del sitio.", "Cookies are small files a site stores in your browser to remember information. Some are essential; others help measure how the site is used."],
    ["Cookies técnicas (necesarias)", "Technical cookies (necessary)"],
    ["Este sitio guarda en tu navegador una única preferencia, «ep-cookies», para recordar si aceptaste o rechazaste las cookies de analítica. No requiere consentimiento porque es imprescindible para respetar tu decisión. Dura 12 meses.", "This site stores one preference in your browser, ep-cookies, to remember whether you accepted or rejected analytics cookies. It does not require consent because it is necessary to respect your choice. It lasts 12 months."],
    ["Cookies de analítica (opcionales)", "Analytics cookies (optional)"],
    ["Solo se instalan si pulsas «Aceptar». Las usa Google Analytics, un servicio de Google, para saber cuántas personas visitan el sitio y qué secciones consultan, de forma agregada. • _ga — distingue usuarios únicos. Duración: hasta 2 años. • _ga_<ID> — conserva el estado de la sesión. Duración: hasta 2 años.", "They are set only if you select Accept. Google Analytics uses them to measure, in aggregate, how many people visit the site and which sections they view.\n\n• _ga — distinguishes unique users. Duration: up to 2 years.\n• _ga_<ID> — stores session state. Duration: up to 2 years."],
    ["Cómo gestionar tu elección", "How to manage your choice"],
    ["Al entrar por primera vez verás un aviso para aceptar o rechazar las cookies de analítica. Rechazar es tan fácil como aceptar y el sitio funciona igual. Puedes cambiar tu decisión en cualquier momento con «Preferencias de cookies» en el pie de página. También puedes borrar las cookies desde la configuración de tu navegador.", "On your first visit, you will see a notice to accept or reject analytics cookies. Rejecting is as easy as accepting, and the site works either way. You can change your choice at any time using Cookie preferences in the footer. You can also clear cookies in your browser settings."],
    ["Más información", "More information"],
    ["Consulta la política de privacidad para saber cómo se tratan tus datos, o usa los datos de la sección Contacto de este sitio.", "Read the privacy policy to learn how your data is handled, or use the details in this site's Contact section."],

    ["Obras protegidas", "Protected works"],
    ["Las ilustraciones, identidades visuales, logotipos, piezas editoriales, diseños de packaging, fotografías, textos, tipografía aplicada y la composición general de este sitio son obras creadas por Erika Polanco y están protegidas por las leyes de propiedad intelectual y derechos de autor.", "The illustrations, visual identities, logos, editorial pieces, packaging designs, photographs, text, typography and overall composition of this site are works created by Erika Polanco and are protected by intellectual property and copyright laws."],
    ["Titularidad", "Ownership"],
    ["Salvo indicación expresa, los derechos de autor de estas obras pertenecen a Erika Polanco. Verlas en este sitio no transfiere ningún derecho de uso, reproducción, distribución ni transformación.", "Unless otherwise stated, Erika Polanco owns the copyright in these works. Viewing them on this site does not transfer any right to use, reproduce, distribute or alter them."],
    ["Marcas y trabajos para terceros", "Brands and work for third parties"],
    ["Los nombres, marcas y logotipos de terceros que aparecen en los proyectos pertenecen a sus respectivos titulares y se exhiben solo como parte de un portafolio profesional. Los derechos sobre los trabajos realizados por encargo se rigen por el acuerdo con cada cliente.", "Third-party names, brands and logos shown in projects belong to their respective owners and appear only as part of a professional portfolio. Rights in commissioned work are governed by the agreement with each client."],
    ["Usos que requieren autorización", "Uses that require permission"],
    ["Cualquier reproducción, publicación, modificación, venta o uso comercial —total o parcial— de los contenidos de este sitio requiere autorización previa y por escrito. Esto incluye redes sociales, impresiones, productos y el uso de las imágenes para entrenar sistemas de inteligencia artificial.", "Any reproduction, publication, modification, sale or commercial use of this site's content, in whole or in part, requires prior written permission. This includes social media, prints, products and using the images to train artificial intelligence systems."],
    ["Cómo solicitar un permiso o reportar un uso indebido", "How to request permission or report misuse"],
    ["Contáctala desde la sección Contacto de este sitio indicando qué obra deseas usar y con qué fin, o la dirección donde viste un uso no autorizado.", "Contact Erika through this site's Contact section, specifying the work you wish to use and why, or the address where you saw unauthorized use."],
  ];
  const en = new Map([...pairs, ...legalPairs].map(([source, target]) => [normalize(source), target]));
  const textStates = new WeakMap();
  const attributeStates = new WeakMap();
  const attrs = ["aria-label", "title", "alt", "data-screen-label"];
  let language = "es";
  let root;
  let observer;

  function english(source) {
    const direct = en.get(source);
    if (direct) return direct;
    let match = source.match(/^(.+), imagen (\d+): abrir imagen ampliada$/);
    if (match) return match[1] + ", image " + match[2] + ": open enlarged image";
    match = source.match(/^(\d+) imágenes$/);
    if (match) return match[1] + " images";
    if (source.startsWith("Proyectos de ")) {
      return "Projects: " + (english(source.slice(13)) || source.slice(13));
    }
    const replacements = [
      ["Diseño para", "Design for"],
      ["el aprendizaje", "learning"],
      ["la experiencia de producto", "the product experience"],
      ["la construcción de identidad", "building identity"],
      ["la expresión narrativa", "narrative expression"],
    ];
    let translated = source;
    replacements.forEach(([es, target]) => {
      translated = translated.replace(es, target);
    });
    return translated === source ? null : translated;
  }

  function translateText(node) {
    if (!node.nodeValue.trim() || /^(SCRIPT|STYLE|NOSCRIPT)$/.test(node.parentElement?.tagName || "")) return;
    const current = node.nodeValue;
    let state = textStates.get(node);
    if (!state || state.rendered !== current) {
      state = { es: current, rendered: current };
      textStates.set(node, state);
    }
    const target = english(normalize(state.es));
    if (!target) return;
    const leading = state.es.match(/^\s*/)[0];
    const trailing = state.es.match(/\s*$/)[0];
    const next = language === "en" ? leading + target + trailing : state.es;
    state.rendered = next;
    if (current !== next) node.nodeValue = next;
  }

  function translateAttributes(element) {
    let states = attributeStates.get(element);
    if (!states) {
      states = new Map();
      attributeStates.set(element, states);
    }
    attrs.forEach((attr) => {
      if (!element.hasAttribute(attr)) return;
      const current = element.getAttribute(attr);
      let state = states.get(attr);
      if (!state || state.rendered !== current) {
        state = { es: current, rendered: current };
        states.set(attr, state);
      }
      const translated = english(normalize(state.es));
      if (!translated) return;
      const next = language === "en" ? translated : state.es;
      state.rendered = next;
      if (current !== next) element.setAttribute(attr, next);
    });
  }

  function translateTree(start) {
    if (start.nodeType === Node.TEXT_NODE) {
      translateText(start);
      return;
    }
    if (start.nodeType !== Node.ELEMENT_NODE) return;
    translateAttributes(start);
    const walker = document.createTreeWalker(start, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.nodeType === Node.TEXT_NODE) translateText(node);
      else translateAttributes(node);
    }
  }

  function setLanguage(next) {
    if (next !== "es" && next !== "en") return;
    language = next;
    document.documentElement.lang = next;
    document.title = next === "en"
      ? "Erika Polanco | Graphic design and illustration"
      : "Erika Polanco | Diseño gráfico e ilustración";
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = next === "en"
      ? "Erika Polanco's portfolio: visual identity, illustration, editorial design and packaging."
      : "Portafolio de Erika Polanco: identidad visual, ilustración, diseño editorial y packaging.";
    if (root) {
      root.querySelectorAll("[data-lang]").forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.lang === next));
      });
      translateTree(root);
    }
  }

  function init(container) {
    root = container;
    setLanguage("es");
    const onClick = (event) => {
      const button = event.target.closest("[data-lang]");
      if (button && root.contains(button)) setLanguage(button.dataset.lang);
    };
    root.addEventListener("click", onClick);
    observer = new MutationObserver((records) => {
      records.forEach((record) => {
        if (record.type === "childList") {
          record.addedNodes.forEach(translateTree);
        } else if (record.type === "characterData") {
          translateText(record.target);
        } else {
          translateAttributes(record.target);
        }
      });
    });
    observer.observe(root, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: attrs,
    });
    return () => {
      root.removeEventListener("click", onClick);
      observer.disconnect();
    };
  }

  return { init, setLanguage, getLanguage: () => language, translateTree };
})();
