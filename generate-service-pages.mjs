import { writeFile } from "node:fs/promises";

const pages = [
  {
    file: "seguridad-apis.html",
    canonical: "https://codegurex.com/seguridad-apis.html",
    title: "Auditoría de Seguridad de APIs | CodeGurex",
    meta:
      "Auditoría de seguridad de APIs: autorización, autenticación, lógica de negocio, consumo, configuración e integraciones con hallazgos priorizados.",
    og:
      "Identifica fallos de autorización, exposición de datos y abuso de lógica de negocio en tus APIs.",
    stage: "EVALUACIÓN DISPONIBLE · SEGÚN ALCANCE",
    kicker: "API SECURITY / AUTHORIZATION / BUSINESS LOGIC",
    headline: "APIs protegidas desde el acceso hasta la <span>lógica de negocio.</span>",
    lead:
      "Evaluamos cómo usuarios, aplicaciones y servicios acceden a tus APIs para identificar fallos de autorización, exposición de datos, abuso de recursos y riesgos en integraciones.",
    query: "api-security",
    whatsapp:
      "Hola CodeGurex, quiero solicitar una auditoría de seguridad para una API.",
    summaryLabel: "QUÉ RECIBES",
    summary: [
      ["Inventario", "Endpoints, métodos y superficies expuestas"],
      ["Hallazgos", "Evidencia técnica y escenarios de abuso"],
      ["Prioridad", "Impacto, probabilidad y urgencia"],
      ["Acción", "Plan claro de corrección y validación"],
    ],
    audienceTitle: "La API conecta datos y lógica crítica con más sistemas de los que ves.",
    audienceCopy:
      "La evaluación está pensada para APIs públicas, privadas o internas que sostienen aplicaciones web, móviles, SaaS, integraciones empresariales o sistemas con IA.",
    audiences: [
      ["01 / SAAS", "Productos y plataformas", "APIs multiusuario con permisos, planes, datos y operaciones sensibles."],
      ["02 / MOBILE", "Aplicaciones móviles", "Backends consumidos desde clientes que no deben considerarse confiables."],
      ["03 / SERVICES", "Microservicios", "Comunicación interna, identidades de servicio y límites entre componentes."],
      ["04 / AI", "Integraciones con IA", "Herramientas, agentes y modelos que consultan o ejecutan acciones mediante APIs."],
    ],
    riskTitle: "Los fallos más graves suelen estar en quién puede hacer qué.",
    riskCopy:
      "La revisión considera los riesgos publicados por OWASP y los adapta a los flujos, datos y controles reales de tu implementación.",
    risks: [
      ["01", "Autorización por objeto", "Acceso o modificación de recursos pertenecientes a otro usuario o empresa."],
      ["02", "Autenticación débil", "Tokens, sesiones, recuperación o validaciones que permiten suplantación."],
      ["03", "Propiedades expuestas", "Lectura o modificación de campos que no deberían estar disponibles."],
      ["04", "Consumo sin límites", "Abuso de solicitudes, procesamiento, almacenamiento o servicios con costo."],
      ["05", "Flujos sensibles", "Automatización de registros, compras, reservas u operaciones de negocio."],
      ["06", "Integraciones inseguras", "SSRF, webhooks, consumo de terceros o confianza excesiva en otras APIs."],
    ],
    scopeTitle: "Cobertura técnica conectada con el comportamiento del negocio.",
    scopeCopy:
      "Definimos endpoints, roles, datos y operaciones autorizadas. Las pruebas pueden combinar revisión externa, acceso parcial, documentación y código según el alcance.",
    principle:
      "No realizamos pruebas destructivas ni fuera de los activos, identidades y condiciones autorizadas.",
    scope: [
      ["01", "Inventario y exposición", "Rutas, versiones, documentación, métodos y endpoints olvidados."],
      ["02", "Identidad y tokens", "Autenticación, sesiones, OAuth, JWT, claves y rotación."],
      ["03", "Autorización", "Objetos, propiedades, funciones, roles y separación entre clientes."],
      ["04", "Entradas y respuestas", "Validación, inyección, datos sensibles, errores y serialización."],
      ["05", "Lógica de negocio", "Secuencias, estados, automatización, concurrencia y abuso de flujos."],
      ["06", "Operación", "Rate limiting, registros, alertas, configuración y consumo de terceros."],
    ],
    deliverableTitle: "Hallazgos reproducibles y prioridades defendibles.",
    deliverableCopy:
      "El informe explica qué ocurre, por qué importa, cómo reproducirlo de forma segura y qué corregir primero.",
    deliverables: [
      ["01 / MAP", "Mapa de endpoints", "Superficies, roles, datos y relaciones relevantes."],
      ["02 / EVIDENCE", "Evidencia controlada", "Solicitud, respuesta, condición y escenario de riesgo."],
      ["03 / PRIORITY", "Matriz de riesgo", "Severidad técnica, impacto y probabilidad contextual."],
      ["04 / FIX", "Plan de remediación", "Controles recomendados, orden y criterios de verificación."],
    ],
    method: [
      ["01", "Definir", "Endpoints, roles, datos, límites y operaciones permitidas."],
      ["02", "Mapear", "Superficie, autenticación, permisos y flujos sensibles."],
      ["03", "Evaluar", "Escenarios autorizados con evidencia de bajo impacto."],
      ["04", "Priorizar", "Impacto, mitigaciones y próximos pasos verificables."],
    ],
    faqs: [
      ["¿Necesitan la documentación de la API?", "Ayuda a mejorar la cobertura, pero no siempre es obligatoria. Podemos comenzar externamente y ampliar el alcance con OpenAPI, colecciones o acceso técnico."],
      ["¿Prueban APIs internas?", "Sí, cuando existe acceso autorizado al entorno, identidades de prueba y condiciones claras para realizar la evaluación."],
      ["¿La auditoría puede afectar producción?", "Priorizamos entornos controlados. Cualquier prueba en producción se limita y acuerda previamente para reducir el riesgo operativo."],
      ["¿Incluyen una nueva verificación después de corregir?", "Puede incluirse una validación posterior para confirmar que los hallazgos priorizados fueron mitigados correctamente."],
    ],
    references: [
      ["OWASP / API SECURITY", "OWASP API Security Top 10 2023 ↗", "https://owasp.org/API-Security/editions/2023/en/0x03-introduction/"],
      ["OWASP / PROJECT", "OWASP API Security Project ↗", "https://owasp.org/www-project-api-security/"],
    ],
    related: [
      ["CODEGUREX / AI SECURITY", "Seguridad para aplicaciones con IA ↗", "/seguridad-aplicaciones-ia.html"],
      ["CODEGUREX / WEB SECURITY", "Evaluación de seguridad web ↗", "/seguridad-web.html"],
      ["CODEGUREX / INFRASTRUCTURE", "Hardening de infraestructura y nube ↗", "/hardening-infraestructura-nube.html"],
    ],
    ctaTitle: "Conoce qué puede exponerse antes de que una API sea abusada.",
    ctaCopy:
      "Comparte el contexto general de la API y definiremos un alcance responsable, sin solicitar credenciales sensibles en el primer contacto.",
    serviceType: "Auditoría de seguridad de APIs",
  },
  {
    file: "seguridad-agentes-ia.html",
    canonical: "https://codegurex.com/seguridad-agentes-ia.html",
    title: "Seguridad para Agentes de IA | CodeGurex",
    meta:
      "Evaluación de seguridad para agentes de IA: objetivos, memoria, identidad, herramientas, MCP, permisos, supervisión y acciones autorizadas.",
    og:
      "Reduce el riesgo de manipulación, abuso de herramientas y privilegios excesivos en agentes de IA.",
    stage: "EVALUACIÓN ESPECIALIZADA · SEGÚN ALCANCE",
    kicker: "AGENTIC AI SECURITY / IDENTITY / TOOLS",
    headline: "Seguridad para agentes que pueden <span>decidir y actuar.</span>",
    lead:
      "Evaluamos objetivos, memoria, identidad, permisos, herramientas y supervisión para entender qué puede alcanzar un agente y qué ocurriría si su comportamiento fuera manipulado.",
    query: "agent-security",
    whatsapp:
      "Hola CodeGurex, quiero evaluar la seguridad de un agente de inteligencia artificial.",
    summaryLabel: "QUÉ RECIBES",
    summary: [
      ["Alcance", "Mapa de agente, herramientas y datos"],
      ["Control", "Permisos y límites de autonomía"],
      ["Riesgo", "Escenarios priorizados con evidencia"],
      ["Acción", "Guardrails y plan de mitigación"],
    ],
    audienceTitle: "Cuando un sistema puede actuar, cada permiso tiene consecuencias.",
    audienceCopy:
      "Esta evaluación está dirigida a organizaciones que utilizan agentes individuales o flujos multiagente conectados con información, APIs, herramientas o procesos empresariales.",
    audiences: [
      ["01 / ASSIST", "Asistentes con acciones", "Agentes que envían mensajes, actualizan registros o realizan tareas."],
      ["02 / MCP", "Sistemas con MCP", "Clientes y servidores que conectan modelos con herramientas y recursos."],
      ["03 / WORKFLOW", "Automatización empresarial", "Flujos que consultan datos y deciden pasos sin intervención constante."],
      ["04 / MULTI", "Arquitecturas multiagente", "Agentes que delegan, comparten contexto o confían entre sí."],
    ],
    riskTitle: "La autonomía crea superficies de ataque nuevas.",
    riskCopy:
      "Analizamos el agente como una identidad con objetivos, memoria y capacidad de acción, no únicamente como una interfaz conversacional.",
    risks: [
      ["01", "Secuestro de objetivos", "Instrucciones que desvían al agente de la intención autorizada."],
      ["02", "Abuso de herramientas", "Uso legítimo de una herramienta para producir una consecuencia no deseada."],
      ["03", "Identidad y privilegios", "Credenciales o permisos que permiten actuar más allá de lo necesario."],
      ["04", "Memoria manipulada", "Contexto persistente o recuperado que altera decisiones futuras."],
      ["05", "Cadena agentic", "Plugins, MCP, modelos, librerías o agentes comprometidos dentro del flujo."],
      ["06", "Ejecución inesperada", "Código, comandos o acciones activadas sin validación ni supervisión suficiente."],
    ],
    scopeTitle: "Revisamos la ruta completa desde la intención hasta la acción.",
    scopeCopy:
      "El alcance considera el razonamiento observable, los componentes de soporte y los controles deterministas que limitan la autonomía.",
    principle:
      "Las pruebas se diseñan para demostrar escenarios de forma controlada, sin habilitar acciones irreversibles o acceso no autorizado.",
    scope: [
      ["01", "Objetivos e instrucciones", "Políticas, prompts, jerarquías y separación de contexto."],
      ["02", "Identidad", "Credenciales, sesiones, identidades no humanas y privilegios."],
      ["03", "Herramientas y MCP", "Descubrimiento, parámetros, autorización y límites de ejecución."],
      ["04", "Memoria y datos", "Persistencia, RAG, aislamiento, procedencia y envenenamiento."],
      ["05", "Supervisión humana", "Confirmaciones, escalamiento y acciones de alto impacto."],
      ["06", "Observabilidad", "Trazas, alertas, límites, pausado y respuesta a comportamiento anómalo."],
    ],
    deliverableTitle: "Controlar lo que el agente puede alcanzar, cambiar y activar.",
    deliverableCopy:
      "El resultado conecta rutas de ataque, permisos y consecuencias para diseñar controles concretos alrededor del agente.",
    deliverables: [
      ["01 / MAP", "Mapa de capacidades", "Herramientas, datos, identidades, relaciones y acciones."],
      ["02 / PATHS", "Rutas de abuso", "Condiciones que conectan manipulación con impacto real."],
      ["03 / CONTROL", "Análisis de guardrails", "Controles existentes, vacíos y posibilidades de evasión."],
      ["04 / PLAN", "Plan de mitigación", "Permisos mínimos, validaciones, supervisión y monitoreo."],
    ],
    method: [
      ["01", "Modelar", "Objetivos, actores, activos, confianza y consecuencias."],
      ["02", "Mapear", "Memoria, herramientas, identidades y rutas de acción."],
      ["03", "Evaluar", "Manipulación y abuso dentro de límites autorizados."],
      ["04", "Fortalecer", "Guardrails, privilegios, supervisión y respuesta."],
    ],
    faqs: [
      ["¿Qué diferencia hay entre una aplicación con IA y un agente?", "Un agente no solo genera una respuesta: puede seleccionar herramientas, mantener estado y ejecutar acciones. Esa capacidad amplía el impacto posible de una manipulación."],
      ["¿Evalúan servidores y herramientas MCP?", "Sí, cuando forman parte del sistema autorizado. Revisamos descubrimiento, permisos, parámetros, confianza y consecuencias de las herramientas expuestas."],
      ["¿Necesitan permitir acciones reales?", "No necesariamente. Preferimos identidades de prueba, entornos controlados y simulaciones seguras para validar escenarios sin producir consecuencias irreversibles."],
      ["¿La evaluación incluye gobernanza?", "El foco principal es técnico, pero documentamos decisiones, supervisión y responsabilidades necesarias cuando afectan directamente la seguridad operativa."],
    ],
    references: [
      ["OWASP / AGENTIC SECURITY", "Agentic AI: amenazas y mitigaciones ↗", "https://genai.owasp.org/resource/agentic-ai-threats-and-mitigations/"],
      ["OWASP / AGENTIC GUIDE", "Guía para asegurar aplicaciones agentic ↗", "https://genai.owasp.org/resource/securing-agentic-applications-guide-1-0/"],
    ],
    related: [
      ["CODEGUREX / AI SECURITY", "Seguridad para aplicaciones con IA ↗", "/seguridad-aplicaciones-ia.html"],
      ["CODEGUREX / API SECURITY", "Auditoría de seguridad de APIs ↗", "/seguridad-apis.html"],
      ["CODEGUREX / PLATFORM", "CodeGurex Sentinel ↗", "/codegurex-sentinel.html"],
    ],
    ctaTitle: "Comprende el alcance real de cada agente antes de darle más autonomía.",
    ctaCopy:
      "Cuéntanos qué acciones puede ejecutar y definiremos una evaluación responsable de identidad, herramientas, datos y límites.",
    serviceType: "Evaluación de seguridad de agentes de inteligencia artificial",
  },
  {
    file: "hardening-infraestructura-nube.html",
    canonical: "https://codegurex.com/hardening-infraestructura-nube.html",
    title: "Hardening de Infraestructura y Nube | CodeGurex",
    meta:
      "Evaluación y hardening de infraestructura y nube: identidad, red, servicios, secretos, registros, backups, contenedores y configuración segura.",
    og:
      "Reduce exposición y configuraciones débiles en infraestructura, servidores, contenedores y servicios cloud.",
    stage: "EVALUACIÓN Y FORTALECIMIENTO · SEGÚN TECNOLOGÍA",
    kicker: "SECURE INFRASTRUCTURE / CLOUD HARDENING",
    headline: "Infraestructura preparada para operar con <span>menos exposición.</span>",
    lead:
      "Revisamos identidad, configuración, servicios, red, secretos, registros, backups y cargas de trabajo para reducir superficie de ataque y fortalecer controles operativos.",
    query: "infrastructure-hardening",
    whatsapp:
      "Hola CodeGurex, quiero revisar el hardening de mi infraestructura o entorno cloud.",
    summaryLabel: "QUÉ RECIBES",
    summary: [
      ["Estado", "Configuración y exposición observada"],
      ["Brechas", "Controles ausentes o débiles"],
      ["Prioridad", "Riesgo y esfuerzo de mitigación"],
      ["Acción", "Plan de hardening verificable"],
    ],
    audienceTitle: "Una configuración funcional no siempre es una configuración segura.",
    audienceCopy:
      "El servicio se adapta a la tecnología y al nivel de acceso disponible. Puede cubrir cuentas cloud, servidores, contenedores, redes y servicios que sostienen aplicaciones críticas.",
    audiences: [
      ["01 / CLOUD", "Entornos cloud", "Cuentas, identidades, redes, almacenamiento, cómputo y registros."],
      ["02 / SERVER", "Servidores y sistemas", "Servicios expuestos, paquetes, acceso remoto y configuración base."],
      ["03 / CONTAINER", "Contenedores", "Imágenes, permisos, secretos, runtime y superficies administrativas."],
      ["04 / GROWTH", "Equipos en crecimiento", "Infraestructura que evolucionó rápido y necesita una línea base defendible."],
    ],
    riskTitle: "La exposición suele acumularse en pequeñas decisiones de configuración.",
    riskCopy:
      "Priorizamos controles que reducen rutas de ataque reales sin aplicar cambios genéricos que puedan afectar innecesariamente la operación.",
    risks: [
      ["01", "Privilegios excesivos", "Usuarios, servicios o cargas con más permisos de los necesarios."],
      ["02", "Servicios expuestos", "Puertos, consolas, endpoints administrativos o recursos accesibles públicamente."],
      ["03", "Secretos inseguros", "Claves en código, variables, imágenes, registros o almacenes sin control."],
      ["04", "Segmentación débil", "Redes y componentes críticos conectados sin límites suficientes."],
      ["05", "Visibilidad insuficiente", "Registros, alertas o trazabilidad incapaces de apoyar una respuesta."],
      ["06", "Recuperación incierta", "Backups, restauración y continuidad no verificados o mal protegidos."],
    ],
    scopeTitle: "Hardening proporcional a la arquitectura y al riesgo.",
    scopeCopy:
      "Partimos de una línea base, identificamos desviaciones relevantes y acordamos cada cambio que pueda afectar disponibilidad o compatibilidad.",
    principle:
      "No se aplican configuraciones automáticamente sobre producción. Los cambios se documentan, aprueban y verifican según el alcance contratado.",
    scope: [
      ["01", "Identidad y acceso", "MFA, roles, cuentas, privilegios, claves y accesos de emergencia."],
      ["02", "Red y exposición", "Segmentación, firewalls, puertos, origen y superficies administrativas."],
      ["03", "Sistemas y servicios", "Paquetes, protocolos, acceso remoto, configuración y actualizaciones."],
      ["04", "Cloud y almacenamiento", "Recursos públicos, políticas, cifrado, versiones y retención."],
      ["05", "Contenedores", "Imágenes, runtime, usuarios, capacidades, secretos y orquestación."],
      ["06", "Operación", "Logs, alertas, backups, restauración y respuesta a incidentes."],
    ],
    deliverableTitle: "Una línea base clara para fortalecer sin improvisar.",
    deliverableCopy:
      "El resultado distingue mejoras inmediatas, cambios que requieren planificación y riesgos aceptados por contexto empresarial.",
    deliverables: [
      ["01 / BASELINE", "Estado actual", "Activos revisados, configuración y superficie expuesta."],
      ["02 / GAP", "Brechas priorizadas", "Desviación, impacto y escenario de riesgo."],
      ["03 / CHANGE", "Plan de hardening", "Cambio recomendado, dependencia, riesgo y validación."],
      ["04 / VERIFY", "Comprobación", "Criterios para confirmar el control sin romper la operación."],
    ],
    method: [
      ["01", "Delimitar", "Tecnología, activos, acceso, ventanas y restricciones."],
      ["02", "Evaluar", "Configuración, exposición y controles operativos."],
      ["03", "Priorizar", "Impacto, dependencia, esfuerzo y riesgo del cambio."],
      ["04", "Fortalecer", "Implementar o acompañar cambios y verificar resultados."],
    ],
    faqs: [
      ["¿Trabajan con cualquier proveedor cloud?", "El alcance depende de la tecnología y experiencia aplicable. Primero confirmamos proveedor, servicios utilizados y nivel de acceso antes de proponer la evaluación."],
      ["¿Aplican los cambios directamente?", "Puede incluirse implementación o acompañamiento. Los cambios con impacto potencial se aprueban y programan antes de ejecutarse."],
      ["¿Un benchmark debe aplicarse completo?", "No necesariamente. Una línea base se adapta a arquitectura, riesgo, compatibilidad y requisitos operativos; no se aplica como una lista ciega."],
      ["¿Incluye vulnerabilidades de la aplicación?", "El foco es infraestructura y configuración. La aplicación, API o sistema con IA puede evaluarse mediante sus servicios especializados."],
    ],
    references: [
      ["CIS / BENCHMARKS", "Recomendaciones de configuración segura CIS ↗", "https://www.cisecurity.org/cis-benchmarks-overview"],
      ["CIS / CLOUD", "Benchmarks para proveedores y servicios cloud ↗", "https://www.cisecurity.org/cis-benchmarks"],
    ],
    related: [
      ["CODEGUREX / WEB SECURITY", "Evaluación de seguridad web ↗", "/seguridad-web.html"],
      ["CODEGUREX / API SECURITY", "Auditoría de seguridad de APIs ↗", "/seguridad-apis.html"],
      ["CODEGUREX / PLATFORM", "CodeGurex Sentinel ↗", "/codegurex-sentinel.html"],
    ],
    ctaTitle: "Reduce exposición sin perder de vista la operación.",
    ctaCopy:
      "Indícanos la tecnología y el tipo de entorno. Definiremos una revisión segura antes de solicitar accesos o proponer cambios.",
    serviceType: "Hardening de infraestructura y servicios cloud",
  },
  {
    file: "codegurex-sentinel.html",
    canonical: "https://codegurex.com/codegurex-sentinel.html",
    title: "CodeGurex Sentinel | Plataforma de Seguridad en Evolución",
    meta:
      "Conoce CodeGurex Sentinel, la plataforma en evolución para descubrir, comprender y priorizar exposición en aplicaciones, APIs, nube y sistemas de IA.",
    og:
      "Una visión conectada de aplicaciones, APIs, nube y sistemas de IA para comprender y priorizar exposición.",
    stage: "PRODUCTO EN EVOLUCIÓN · VISTA DE DIRECCIÓN",
    kicker: "CODEGUREX SENTINEL / EXPOSURE INTELLIGENCE",
    headline: "Una visión conectada de tu <span>superficie de ataque.</span>",
    lead:
      "Sentinel evoluciona para ayudar a descubrir activos, relacionar exposición y convertir señales técnicas en prioridades claras para aplicaciones, APIs, nube y sistemas de IA.",
    query: "sentinel",
    whatsapp:
      "Hola CodeGurex, quiero conocer más sobre la evolución de CodeGurex Sentinel.",
    summaryLabel: "ESTADO TRANSPARENTE",
    summary: [
      ["Producto", "Plataforma de seguridad en evolución"],
      ["Base", "Descubrimiento y exposición web"],
      ["Desarrollo", "Contexto, relaciones y priorización"],
      ["Dirección", "APIs, nube, IA, agentes y MCP"],
    ],
    audienceTitle: "Las señales aisladas no explican cómo se conectan los riesgos.",
    audienceCopy:
      "La dirección de Sentinel responde a una necesidad: observar activos y relaciones en conjunto para priorizar rutas de exposición relevantes, sin confundir una visión de producto con capacidades ya terminadas.",
    audiences: [
      ["01 / DISCOVER", "Descubrir", "Identificar activos y entradas que forman la superficie observable."],
      ["02 / ASSESS", "Evaluar", "Detectar exposición, configuración débil y señales de riesgo."],
      ["03 / CONNECT", "Comprender", "Relacionar activos, identidades, datos, herramientas y dependencias."],
      ["04 / DECIDE", "Priorizar", "Convertir contexto técnico en decisiones y rutas de remediación."],
    ],
    riskTitle: "El objetivo no es producir más alertas, sino más contexto.",
    riskCopy:
      "Sentinel se diseña alrededor de una lectura conectada de sistemas modernos, manteniendo una separación explícita entre demostraciones, capacidades en desarrollo y funciones futuras.",
    risks: [
      ["01", "Activos desconocidos", "Dominios, rutas o servicios que no forman parte del inventario operativo."],
      ["02", "Señales fragmentadas", "Hallazgos sin relaciones suficientes para comprender su impacto."],
      ["03", "Prioridades débiles", "Listas de problemas sin contexto de exposición o negocio."],
      ["04", "APIs y dependencias", "Componentes conectados que amplían una ruta de ataque."],
      ["05", "Sistemas con IA", "Modelos, agentes, datos y herramientas dentro de una nueva superficie."],
      ["06", "Cambio continuo", "Activos y configuraciones que evolucionan más rápido que el inventario."],
    ],
    scopeTitle: "Una hoja de ruta construida por capas verificables.",
    scopeCopy:
      "La plataforma se desarrolla progresivamente. Esta página describe su dirección y no presenta como disponibles funciones que todavía están en construcción.",
    principle:
      "Las vistas públicas utilizan información ilustrativa y no contienen datos de clientes ni resultados de producción.",
    scope: [
      ["01", "Base disponible", "Descubrimiento, rastreo y observación inicial de exposición web."],
      ["02", "En desarrollo", "Normalización de señales, relaciones y contexto técnico."],
      ["03", "En desarrollo", "Priorización y orientación de remediación basada en evidencia."],
      ["04", "Dirección futura", "Cobertura ampliada de APIs, nube e infraestructura."],
      ["05", "Dirección futura", "Sistemas de IA, agentes, herramientas y MCP."],
      ["06", "Dirección futura", "Monitoreo continuo y evolución de la superficie."],
    ],
    deliverableTitle: "De inventario técnico a una lectura clara del riesgo.",
    deliverableCopy:
      "La visión de producto conecta descubrimiento, evaluación, relaciones y prioridades dentro de una misma experiencia.",
    deliverables: [
      ["01 / ASSETS", "Inventario observable", "Activos y componentes encontrados dentro del alcance."],
      ["02 / SIGNALS", "Señales contextualizadas", "Exposición y configuración asociadas a cada activo."],
      ["03 / PATHS", "Relaciones", "Dependencias y rutas potenciales entre componentes."],
      ["04 / ACTION", "Prioridades", "Orden de atención y orientación de remediación."],
    ],
    method: [
      ["01", "Descubrir", "Activos, entradas y componentes observables."],
      ["02", "Evaluar", "Exposición y controles dentro del alcance."],
      ["03", "Relacionar", "Contexto, dependencias y rutas relevantes."],
      ["04", "Priorizar", "Riesgo, evidencia y próximos pasos."],
    ],
    faqs: [
      ["¿Sentinel ya es un producto terminado?", "No. Es una plataforma en evolución. La base actual y las capacidades en desarrollo se presentan de forma separada de la dirección futura."],
      ["¿Puedo crear una cuenta ahora?", "Todavía no existe un registro público general. Puedes conversar con CodeGurex para conocer la dirección del producto y comunicar interés."],
      ["¿La demostración utiliza datos de clientes?", "No. Las vistas públicas son ilustrativas y no presentan información de clientes ni resultados reales como datos de producción."],
      ["¿Sentinel reemplaza una evaluación humana?", "La dirección es complementar el trabajo técnico con descubrimiento y contexto. Los servicios especializados siguen requiriendo alcance, autorización y juicio profesional."],
    ],
    references: [],
    related: [
      ["CODEGUREX / AI SECURITY", "Seguridad para aplicaciones con IA ↗", "/seguridad-aplicaciones-ia.html"],
      ["CODEGUREX / API SECURITY", "Auditoría de seguridad de APIs ↗", "/seguridad-apis.html"],
      ["CODEGUREX / INFRASTRUCTURE", "Hardening de infraestructura y nube ↗", "/hardening-infraestructura-nube.html"],
    ],
    ctaTitle: "¿Quieres seguir la evolución de Sentinel?",
    ctaCopy:
      "Conversemos sobre tu superficie de ataque, los problemas que necesitas resolver y la dirección de la plataforma.",
    schemaType: "SoftwareApplication",
  },
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderCards(items, className) {
  return items
    .map(
      ([number, title, copy]) => `<article>
              <span>${escapeHtml(number)}</span>
              <h3>${escapeHtml(title)}</h3>
              <p>${escapeHtml(copy)}</p>
            </article>`,
    )
    .join("\n            ");
}

function renderSchema(page) {
  const main =
    page.schemaType === "SoftwareApplication"
      ? {
          "@type": "SoftwareApplication",
          "@id": `${page.canonical}#software`,
          name: "CodeGurex Sentinel",
          applicationCategory: "SecurityApplication",
          operatingSystem: "Web",
          url: page.canonical,
          description: page.meta,
          author: {
            "@type": "Organization",
            "@id": "https://codegurex.com/#organization",
            name: "CodeGurex",
          },
        }
      : {
          "@type": "Service",
          "@id": `${page.canonical}#service`,
          name: page.title.split(" | ")[0],
          serviceType: page.serviceType,
          url: page.canonical,
          description: page.meta,
          provider: {
            "@type": "Organization",
            "@id": "https://codegurex.com/#organization",
            name: "CodeGurex",
            url: "https://codegurex.com/",
          },
          areaServed: "Worldwide",
        };
  return JSON.stringify(
    {
      "@context": "https://schema.org",
      "@graph": [
        main,
        {
          "@type": "FAQPage",
          "@id": `${page.canonical}#faq`,
          mainEntity: page.faqs.map(([question, answer]) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: { "@type": "Answer", text: answer },
          })),
        },
      ],
    },
    null,
    2,
  );
}

function renderPage(page) {
  const referenceCards = page.references
    .map(
      ([label, title, href]) => `<a href="${href}" target="_blank" rel="noopener noreferrer">
              <span>${escapeHtml(label)}</span><strong>${escapeHtml(title)}</strong>
            </a>`,
    )
    .join("\n            ");
  const relatedCards = page.related
    .map(
      ([label, title, href]) => `<a href="${href}">
              <span>${escapeHtml(label)}</span><strong>${escapeHtml(title)}</strong>
            </a>`,
    )
    .join("\n            ");
  const referenceSection = page.references.length
    ? `<section class="service-section">
        <div class="container">
          <div class="section-heading centered">
            <p class="section-kicker">REFERENCIAS TÉCNICAS</p>
            <h2>Criterios reconocidos aplicados al contexto real.</h2>
            <p>Tomamos estas referencias como punto de partida y adaptamos la evaluación a la arquitectura, el alcance y el riesgo de cada proyecto.</p>
          </div>
          <div class="related-services">
            ${referenceCards}
          </div>
        </div>
      </section>`
    : "";

  return `<!doctype html>
<html lang="es">
  <head>
    <!-- Google tag (gtag.js) -->
    <script src="/analytics.js?v=1"></script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-3NH66XEY32"></script>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="${escapeHtml(page.meta)}" />
    <meta name="robots" content="index,follow,max-image-preview:large" />
    <link rel="canonical" href="${page.canonical}" />
    <link rel="icon" href="/favicon-cg.ico" sizes="any" />
    <link rel="icon" type="image/png" href="/favicon-512.png" sizes="512x512" />
    <link rel="apple-touch-icon" href="/favicon-512.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="theme-color" content="#315cf5" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="es_EC" />
    <meta property="og:site_name" content="CodeGurex" />
    <meta property="og:title" content="${escapeHtml(page.title)}" />
    <meta property="og:description" content="${escapeHtml(page.og)}" />
    <meta property="og:url" content="${page.canonical}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${escapeHtml(page.title)}" />
    <meta name="twitter:description" content="${escapeHtml(page.og)}" />
    <title>${escapeHtml(page.title)}</title>
    <link rel="stylesheet" href="/styles.css?v=12" />
    <link rel="stylesheet" href="/internal-next.css?v=2" />
    <script type="application/ld+json">${renderSchema(page)}</script>
  </head>
  <body class="service-page">
    <a class="skip-link" href="#contenido">Saltar al contenido</a>
    <header class="site-header">
      <div class="container nav-wrap">
        <a class="brand" href="/" aria-label="CodeGurex, inicio"><span class="brand-symbol" aria-hidden="true"><img src="/favicon-512.png" alt="" /></span><span class="brand-copy"><strong>CODEGUREX</strong><small>SECURITY FOR THE AI ERA</small></span></a>
        <nav class="desktop-nav" aria-label="Navegación principal">
          <a href="/codegurex-sentinel.html">Sentinel</a><a href="/#capabilities">Capacidades</a><a href="${page.canonical.replace("https://codegurex.com", "")}" aria-current="page">${page.schemaType === "SoftwareApplication" ? "Plataforma" : "Servicio"}</a><a href="/#research">Investigación</a><a href="/#company">Empresa</a>
        </nav>
        <a class="button button-primary nav-cta" href="/?assessment=${page.query}">${page.schemaType === "SoftwareApplication" ? "Conversar sobre Sentinel" : "Solicitar evaluación"}</a>
        <button class="menu-button" id="menuButton" type="button" aria-label="Abrir menú" aria-controls="mobileMenu" aria-expanded="false"><span></span><span></span><span></span></button>
      </div>
      <nav class="mobile-menu" id="mobileMenu" aria-label="Navegación móvil" hidden>
        <a href="/codegurex-sentinel.html">Sentinel</a><a href="/#capabilities">Capacidades</a><a href="${page.canonical.replace("https://codegurex.com", "")}">${page.schemaType === "SoftwareApplication" ? "Plataforma" : "Servicio"}</a><a href="/#research">Investigación</a><a href="/#company">Empresa</a><a class="button button-primary" href="/?assessment=${page.query}">${page.schemaType === "SoftwareApplication" ? "Conversar sobre Sentinel" : "Solicitar evaluación"}</a>
      </nav>
    </header>
    <main id="contenido">
      <section class="service-hero" id="inicio">
        <div class="container service-hero-grid">
          <div>
            <div class="service-breadcrumb"><a href="/">INICIO</a><span>/</span><span>${page.schemaType === "SoftwareApplication" ? "CODEGUREX SENTINEL" : "CODEGUREX SECURITY"}</span></div>
            <p class="service-stage">${escapeHtml(page.stage)}</p>
            <p class="section-kicker">${escapeHtml(page.kicker)}</p>
            <h1>${page.headline}</h1>
            <p class="service-hero-lead">${escapeHtml(page.lead)}</p>
            <div class="service-hero-actions">
              <a class="button button-primary" href="/?assessment=${page.query}">${page.schemaType === "SoftwareApplication" ? "Conversar sobre Sentinel" : "Solicitar evaluación"} ↗</a><a class="button button-secondary" href="/">Volver a CodeGurex</a>
            </div>
          </div>
          <aside class="service-summary">
            <span>${escapeHtml(page.summaryLabel)}</span>
            <dl>${page.summary.map(([term, value]) => `<div><dt>${escapeHtml(term)}</dt><dd>${escapeHtml(value)}</dd></div>`).join("")}</dl>
          </aside>
        </div>
      </section>
      <section class="service-section">
        <div class="container service-split">
          <div><p class="section-kicker">PARA QUIÉN ES</p><h2>${escapeHtml(page.audienceTitle)}</h2><p>${escapeHtml(page.audienceCopy)}</p></div>
          <div class="service-problem-grid">${renderCards(page.audiences, "service-problem-grid")}</div>
        </div>
      </section>
      <section class="service-section alt">
        <div class="container">
          <div class="section-heading centered"><p class="section-kicker">RIESGOS Y PROBLEMAS</p><h2>${escapeHtml(page.riskTitle)}</h2><p>${escapeHtml(page.riskCopy)}</p></div>
          <div class="service-deliverable-grid">${renderCards(page.risks, "service-deliverable-grid")}</div>
        </div>
      </section>
      <section class="service-section">
        <div class="container service-split">
          <div><p class="section-kicker">QUÉ EVALUAMOS</p><h2>${escapeHtml(page.scopeTitle)}</h2><p>${escapeHtml(page.scopeCopy)}</p><div class="service-outcome"><h3>Principio de trabajo</h3><p>${escapeHtml(page.principle)}</p></div></div>
          <div class="service-deliverable-grid">${renderCards(page.scope, "service-deliverable-grid")}</div>
        </div>
      </section>
      <section class="service-section alt">
        <div class="container service-split">
          <div><p class="section-kicker">RESULTADOS</p><h2>${escapeHtml(page.deliverableTitle)}</h2><p>${escapeHtml(page.deliverableCopy)}</p></div>
          <div class="service-problem-grid">${renderCards(page.deliverables, "service-problem-grid")}</div>
        </div>
      </section>
      <section class="service-section">
        <div class="container">
          <div class="section-heading centered"><p class="section-kicker">METODOLOGÍA</p><h2>Alcance, evidencia y <span>prioridades claras.</span></h2></div>
          <div class="service-process">${renderCards(page.method, "service-process")}</div>
        </div>
      </section>
      <section class="service-section alt" id="preguntas-frecuentes">
        <div class="container service-faq">
          <div class="section-heading centered"><p class="section-kicker">PREGUNTAS FRECUENTES</p><h2>Expectativas transparentes.</h2></div>
          <div class="faq-list">${page.faqs.map(([question, answer]) => `<details><summary>${escapeHtml(question)}<span>+</span></summary><p>${escapeHtml(answer)}</p></details>`).join("")}</div>
        </div>
      </section>
      ${referenceSection}
      <section class="service-section${page.references.length ? " alt" : ""}">
        <div class="container">
          <div class="section-heading centered"><p class="section-kicker">ECOSISTEMA CODEGUREX</p><h2>Una seguridad conectada entre capas.</h2></div>
          <div class="related-services">${relatedCards}</div>
        </div>
      </section>
      <section class="final-cta">
        <div class="container final-cta-box">
          <p class="section-kicker">SIGUIENTE PASO</p><h2>${escapeHtml(page.ctaTitle)}</h2><p>${escapeHtml(page.ctaCopy)}</p>
          <div class="button-row centered-row"><a class="button button-light" href="/?assessment=${page.query}">${page.schemaType === "SoftwareApplication" ? "Conversar sobre Sentinel" : "Solicitar evaluación"} ↗</a></div>
        </div>
      </section>
    </main>
    <footer class="site-footer">
      <div class="container footer-grid">
        <div><a class="brand" href="/"><span class="brand-symbol" aria-hidden="true"><img src="/favicon-512.png" alt="" /></span><span class="brand-copy"><strong>CODEGUREX</strong><small>SECURITY FOR THE AI ERA</small></span></a><p>AI Security · Cybersecurity · Secure Infrastructure</p></div>
        <nav aria-label="Navegación"><a href="/codegurex-sentinel.html">Sentinel</a><a href="/seguridad-aplicaciones-ia.html">Seguridad de IA</a><a href="/seguridad-apis.html">Seguridad de APIs</a><a href="/seguridad-web.html">Seguridad web</a><a href="/hardening-infraestructura-nube.html">Infraestructura</a><a href="/privacidad.html">Privacidad</a></nav>
        <div class="footer-contact"><a href="mailto:contacto@codegurex.com">contacto@codegurex.com</a><div class="social-block"><span class="social-label">CONECTA CON CODEGUREX</span><div class="social-links" aria-label="Redes sociales de CodeGurex"><a class="social-link" href="https://wa.me/593963223403" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><img src="/img/social/whatsapp.svg?v=2" alt="" /></a><a class="social-link" href="https://www.linkedin.com/in/codegurex/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><img src="/img/social/linkedin.svg?v=2" alt="" /></a><a class="social-link" href="https://github.com/codegurex" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><img src="/img/social/github.svg?v=2" alt="" /></a></div></div></div>
      </div>
      <div class="container footer-bottom"><span>© <span id="currentYear">2026</span> CodeGurex</span><span><a href="/privacidad.html">Privacidad</a> · Security for the AI Era.</span></div>
    </footer>
    <a class="whatsapp-float" href="https://wa.me/593963223403?text=${encodeURIComponent(page.whatsapp)}" target="_blank" rel="noopener noreferrer" aria-label="Hablar con CodeGurex por WhatsApp"><img src="/img/social/whatsapp.svg?v=2" alt="" aria-hidden="true" /></a>
    <script src="/script.js?v=5" defer></script>
  </body>
</html>
`;
}

for (const page of pages) {
  await writeFile(new URL(`./${page.file}`, import.meta.url), renderPage(page));
}

console.log(`Generated ${pages.length} CodeGurex service pages.`);
