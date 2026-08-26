const homeLanguageToggles = document.querySelectorAll(
  "#languageToggle, .js-language-toggle",
);
const homeCopy = {
  en: {
    "nav-platform": "Platform",
    "nav-solutions": "Solutions",
    "nav-services": "Services",
    "nav-research": "Research",
    "nav-company": "Company",
    eyebrow: "AI Security · Cybersecurity · Secure Infrastructure",
    "hero-title": "Security for<br>the AI Era.",
    "hero-offer": "Security assessment for applications, APIs and AI systems.",
    "hero-lead":
      "We identify exposure, vulnerabilities and priority risks, then deliver a clear remediation plan.",
    "request-assessment": "Request assessment",
    "you-receive": "YOU RECEIVE",
    "exposure-map": "Exposure map",
    "prioritized-risks": "Prioritized risks",
    "remediation-plan": "Remediation plan",
    explore: "Explore Sentinel",
    talk: "Talk to CodeGurex",
    "new-surface": "THE NEW ATTACK SURFACE",
    "reason-label": "01 / REASON",
    "action-label": "02 / ACTION",
    "data-label": "03 / DATA",
    "system-label": "04 / SYSTEM",
    "system-map": "SYSTEM / EXPOSURE MAP",
    observing: "OBSERVING",
    "mapped-assets": "6 assets mapped",
    "mapped-signals": "3 signals",
    "preview-environment": "Preview environment",
    "development-preview": "DEVELOPMENT PREVIEW",
    "public-entry": "Public entry",
    external: "External",
    "tool-access": "Tool access",
    connected: "Connected",
    restricted: "Restricted",
    "exposure-layer": "Exposure layer",
    application: "Application",
    "three-routes": "3 routes",
    "ai-agent": "AI Agent",
    "mcp-tools": "MCP / Tools",
    "shift-title": "AI changed the attack surface.",
    "statement-1": "Applications now reason.",
    "statement-2": "Agents can take actions.",
    "statement-3": "Models can access sensitive data.",
    "statement-4": "Infrastructure is becoming more interconnected.",
    "shift-closing": "Security needs to evolve with it.",
    "sentinel-title": "See your attack surface clearly.",
    "sentinel-desc":
      "Sentinel helps organizations discover, understand and prioritize exposure across applications, APIs, cloud and emerging AI systems.",
    "security-posture": "Security posture",
    "no-client-data": "Illustrative preview · No client data",
    "potential-path": "POTENTIAL ATTACK PATH",
    "capability-roadmap": "CAPABILITY ROADMAP",
    "honest-status": "HONEST STATUS",
    "web-discovery": "Web discovery & crawling",
    "exposure-analysis": "Exposure analysis",
    "future-scope": "AI, agent, MCP & cloud security",
    overview: "Overview",
    assets: "Assets",
    risks: "Risks",
    "attack-paths": "Attack paths",
    discovery: "Discovery",
    "ai-systems": "AI systems",
    "product-status": "PRODUCT STATUS",
    "foundation-development": "Foundation in development",
    "foundation-note":
      "Discovery, crawling and web exposure are the current starting point.",
    "exposure-overview": "EXPOSURE / OVERVIEW",
    asset: "ASSET",
    tool: "TOOL",
    "security-score": "SECURITY SCORE",
    "illustrative-score": "Illustrative score",
    "asset-inventory": "ASSET INVENTORY",
    "preview-dataset": "PREVIEW DATASET",
    applications: "Applications",
    agents: "Agents",
    "cloud-assets": "Cloud Assets",
    "prioritized-risks": "PRIORITIZED RISKS",
    "total-risks": "23 TOTAL",
    critical: "Critical",
    high: "High",
    medium: "Medium",
    illustrative: "ILLUSTRATIVE",
    "available-foundation": "AVAILABLE FOUNDATION",
    "in-development": "IN DEVELOPMENT",
    "future-direction": "FUTURE DIRECTION",
    "service-available": "ASSESSMENT SERVICE AVAILABLE",
    "capabilities-label": "CORE CAPABILITIES",
    "capabilities-title": "One platform. A clearer view of risk.",
    "capabilities-intro":
      "A connected security model designed to move from discovery to decisions without losing technical context.",
    discover: "Discover",
    "discover-copy": "Map your digital and AI attack surface.",
    "discover-status":
      "Domains and web applications form the current foundation. Broader asset coverage evolves from here.",
    assess: "Assess",
    "assess-copy": "Identify vulnerabilities, exposures and security gaps.",
    "assess-status":
      "Web assessment is the starting point; API and AI coverage are being developed.",
    understand: "Understand",
    "understand-copy": "See how individual risks connect.",
    "understand-status":
      "Exposure relationships and attack-path context are an active product direction.",
    prioritize: "Prioritize",
    "prioritize-copy": "Focus on what actually matters.",
    "prioritize-status":
      "Prioritization builds on verified exposure, context and practical remediation.",
    "discover-step": "01 / DISCOVER",
    "assess-step": "02 / ASSESS",
    "understand-step": "03 / UNDERSTAND",
    "prioritize-step": "04 / PRIORITIZE",
    domains: "Domains",
    services: "Services",
    "configuration-risks": "Configuration Risks",
    "web-security": "Web Security",
    "api-security": "API Security",
    "asset-relationships": "Asset Relationships",
    "exposure-context": "Exposure Context",
    "risk-correlation": "Risk Correlation",
    "risk-ranking": "Risk Ranking",
    "remediation-guidance": "Remediation Guidance",
    "security-reports": "Security Reports",
    "continuous-monitoring": "Continuous Monitoring",
    root: "ROOT",
    "agent-short": "AGENT",
    "data-short": "DATA",
    "critical-path-short": "Critical path",
    "exposed-api": "Exposed API",
    configuration: "Configuration",
    now: "NOW",
    next: "NEXT",
    plan: "PLAN",
    "ai-label": "AI SECURITY",
    "ai-title": "Secure systems that can think and act.",
    "ai-copy":
      "Modern AI systems no longer just generate answers. They access data, use tools, call APIs and increasingly take actions.",
    "concept-note": "Conceptual model of the assessment scope",
    "risk-prompt": "Prompt Injection",
    "risk-sensitive": "Sensitive Data Exposure",
    "risk-agent": "Agent Manipulation",
    "risk-tools": "Unsafe Tool Use",
    "risk-rag": "RAG Poisoning",
    "risk-mcp": "MCP Exposure",
    "risk-permissions": "Excessive Permissions",
    model: "MODEL",
    context: "CONTEXT",
    action: "ACTION",
    access: "ACCESS",
    systems: "SYSTEMS",
    "external-systems": "External Systems",
    "tools-mcp": "Tools / MCP",
    "tools-short": "TOOLS",
    "permissions-short": "PERMISSIONS",
    "agent-label": "AGENT SECURITY",
    "agent-title": "When AI can act, permissions matter.",
    "agent-copy":
      "Understanding what an agent can reach, change and trigger is becoming a fundamental security question.",
    "agent-visibility": "AGENT VISIBILITY MODEL",
    conceptual: "CONCEPTUAL",
    "available-tools": "Available tools",
    permissions: "Permissions",
    "accessible-data": "Accessible data",
    "customer-records": "Customer records · Documents",
    "risky-actions": "Risky actions",
    "external-send": "External send · Record mutation",
    "human-boundary": "Human approval boundary",
    required: "REQUIRED",
    "agent-note":
      "Sentinel may evolve to help teams understand these relationships. This capability is not presented as available today.",
    email: "Email",
    files: "Files",
    database: "Database",
    "external-apis": "External APIs",
    "read-send": "Read / Send",
    "read-write": "Read / Write",
    query: "Query",
    update: "Update",
    call: "Call",
    "action-identity": "Action-capable identity",
    "tool-list": "Email · Files · CRM · API",
    "permission-list": "Read · Write · Send · Update",
    "infra-label": "SECURE INFRASTRUCTURE",
    "infra-title": "Security across the intelligent stack.",
    "infra-copy":
      "From the application layer to the infrastructure beneath it.",
    "cloud-security": "Cloud Security",
    "infrastructure-security": "Infrastructure Security",
    "ai-infrastructure": "AI Infrastructure",
    cloud: "Cloud",
    containers: "Containers",
    networks: "Networks",
    infrastructure: "Infrastructure",
    "path-label": "ATTACK PATH ANALYSIS",
    "path-title": "Individual risks rarely exist in isolation.",
    "path-copy":
      "Sentinel aims to connect exposures, assets and context so security teams can understand how an attacker could move through a system.",
    "critical-path": "CRITICAL ATTACK PATH",
    "illustrative-scenario": "ILLUSTRATIVE SCENARIO",
    "path-context": "5 connected assets",
    "path-context-2": "3 exposure transitions",
    "path-context-3": "1 critical impact",
    entry: "ENTRY",
    exposure: "EXPOSURE",
    identity: "IDENTITY",
    "tool-layer": "TOOL LAYER",
    impact: "IMPACT",
    internet: "Internet",
    "exposed-application": "Exposed Application",
    "mcp-server": "MCP Server",
    "sensitive-data": "Sensitive Data",
    public: "PUBLIC",
    privileged: "PRIVILEGED",
    "severity-high": "HIGH",
    "services-label": "CODEGUREX SECURITY",
    "services-title": "A security assessment with clear outputs.",
    "services-copy":
      "A focused entry point for understanding exposure, prioritizing risk and deciding what to fix first.",
    "assessment-offer": "Application, API & AI Security Assessment",
    "assessment-offer-copy":
      "We identify exposure, vulnerabilities and priority risks, then deliver a clear remediation plan.",
    available: "AVAILABLE",
    "service-web":
      "Current commercial work focuses on web security assessments. API coverage is expanding.",
    "service-title-web": "Web & API Security",
    "service-title-ai": "AI Security Assessments",
    "service-title-redteam": "AI Red Teaming",
    "service-title-cloud": "Cloud Security",
    "service-title-infra": "Infrastructure Security",
    "available-web": "AVAILABLE · WEB",
    "service-details": "Service details ↗",
    "service-ai":
      "Focused review of models, prompts, data, RAG, agents, APIs, tools and permissions.",
    "available-scoped": "AVAILABLE · SCOPED",
    "service-ai-details": "Explore AI security ↗",
    "service-redteam":
      "A future service direction for controlled adversarial testing of AI systems.",
    "service-cloud":
      "A planned capability for cloud exposure, identity and configuration risk.",
    "service-infra":
      "A longer-term direction spanning containers, networks and infrastructure controls.",
    "explore-services": "Explore Security Services",
    "research-label": "CODEGUREX RESEARCH",
    "program-development": "RESEARCH PROGRAM IN DEVELOPMENT",
    "research-title": "Researching the threats of tomorrow.",
    "research-copy":
      "Security changes as technology changes. CodeGurex Research will explore emerging risks across AI, agents, infrastructure and modern applications.",
    "research-index": "RESEARCH INDEX",
    "coming-soon": "COMING SOON",
    "no-publications":
      "No articles or findings are presented as published yet.",
    "ai-security": "AI Security",
    "agent-security": "Agent Security",
    "mcp-security": "MCP Security",
    "threat-research": "Threat Research",
    "application-security": "Application Security",
    "principles-label": "PRINCIPLES",
    "philosophy-title": "Complex technology. Clear security.",
    "philosophy-copy":
      "CodeGurex is building security for an increasingly intelligent and interconnected world.",
    "principle-1": "Understand complexity",
    "principle-1-copy": "Map systems, relationships and exposure clearly.",
    "principle-2": "Prioritize reality",
    "principle-2-copy": "Focus on risks that create meaningful attack paths.",
    "principle-3": "Build for what's next",
    "principle-3-copy":
      "Security designed for applications, cloud and intelligent systems.",
    "cta-line-1": "Understand your exposure.",
    "cta-line-2": "Know what to fix first.",
    "cta-copy":
      "Request an assessment for your application, API or AI system and receive prioritized findings with a clear remediation path.",
    "footer-descriptor": "Security for the AI Era.",
    "security-assessments": "Security Assessments",
    about: "About",
    founder: "Founder",
    contact: "Contact",
    resources: "Resources",
    documentation: "Documentation",
    legal: "Legal",
    privacy: "Privacy",
    terms: "Terms",
    "footer-note": "Built with clarity and technical discipline.",
    "contact-title": "Request a security assessment.",
    "contact-kicker": "CODEGUREX / CONTACT",
    "contact-copy":
      "Tell us what you need to protect. You review and confirm before anything is sent through WhatsApp.",
    "direct-contact": "DIRECT CONTACT",
    "contact-safety":
      "Never send passwords, access keys or sensitive credentials through this form.",
    "form-name": "Name",
    "form-company": "Company",
    optional: "Optional",
    "form-website": "Website URL",
    "form-interest": "What do you want to discuss?",
    "not-sure": "Not sure yet",
    "form-context": "Context",
    minimum: "Minimum 20 characters",
    "consent-prefix": "I have read the",
    "privacy-policy": "Privacy Policy",
    "consent-suffix":
      "and agree to the use of this information to respond to my request.",
    "prepare-request": "Prepare request in WhatsApp ↗",
    "form-note":
      "Nothing is sent automatically. WhatsApp opens the message so you can review and confirm it.",
  },
  es: {
    "nav-platform": "Plataforma",
    "nav-solutions": "Soluciones",
    "nav-services": "Servicios",
    "nav-research": "Investigación",
    "nav-company": "Empresa",
    eyebrow: "Seguridad de IA · Ciberseguridad · Infraestructura segura",
    "hero-title": "Seguridad para<br>la era de la inteligencia artificial.",
    "hero-offer":
      "Evaluación de seguridad para aplicaciones, APIs y sistemas con IA.",
    "hero-lead":
      "Identificamos exposición, vulnerabilidades y riesgos prioritarios, y entregamos un plan claro de corrección.",
    "request-assessment": "Solicitar evaluación",
    "you-receive": "RECIBES",
    "exposure-map": "Mapa de exposición",
    "prioritized-risks": "Riesgos priorizados",
    "remediation-plan": "Plan de corrección",
    explore: "Explorar Sentinel",
    talk: "Hablar con CodeGurex",
    "new-surface": "LA NUEVA SUPERFICIE DE ATAQUE",
    "reason-label": "01 / RAZONAMIENTO",
    "action-label": "02 / ACCIÓN",
    "data-label": "03 / DATOS",
    "system-label": "04 / SISTEMA",
    "system-map": "MAPA DEL SISTEMA / EXPOSICIÓN",
    observing: "OBSERVANDO",
    "mapped-assets": "6 activos mapeados",
    "mapped-signals": "3 señales",
    "preview-environment": "Entorno de demostración",
    "development-preview": "VISTA DE DESARROLLO",
    "public-entry": "Entrada pública",
    external: "Externa",
    "tool-access": "Acceso a herramientas",
    connected: "Conectado",
    restricted: "Restringidos",
    "exposure-layer": "Capa de exposición",
    application: "Aplicación",
    "three-routes": "3 rutas",
    "ai-agent": "Agente de IA",
    "mcp-tools": "MCP / Herramientas",
    "shift-title": "La IA cambió la superficie de ataque.",
    "statement-1": "Las aplicaciones ahora razonan.",
    "statement-2": "Los agentes pueden ejecutar acciones.",
    "statement-3": "Los modelos pueden acceder a datos sensibles.",
    "statement-4": "La infraestructura está cada vez más interconectada.",
    "shift-closing": "La seguridad debe evolucionar con ella.",
    "sentinel-title": "Observa tu superficie de ataque con claridad.",
    "sentinel-desc":
      "Sentinel ayuda a las organizaciones a descubrir, comprender y priorizar la exposición en aplicaciones, APIs, cloud y sistemas emergentes de IA.",
    "security-posture": "Postura de seguridad",
    "no-client-data": "Vista ilustrativa · Sin datos de clientes",
    "potential-path": "RUTA DE ATAQUE POTENCIAL",
    "capability-roadmap": "HOJA DE RUTA DE CAPACIDADES",
    "honest-status": "ESTADO TRANSPARENTE",
    "web-discovery": "Descubrimiento y rastreo web",
    "exposure-analysis": "Análisis de exposición",
    "future-scope": "Seguridad de IA, agentes, MCP y cloud",
    overview: "Visión general",
    assets: "Activos",
    risks: "Riesgos",
    "attack-paths": "Rutas de ataque",
    discovery: "Descubrimiento",
    "ai-systems": "Sistemas de IA",
    "product-status": "ESTADO DEL PRODUCTO",
    "foundation-development": "Base en desarrollo",
    "foundation-note":
      "El descubrimiento, el rastreo y la exposición web son el punto de partida actual.",
    "exposure-overview": "EXPOSICIÓN / VISIÓN GENERAL",
    asset: "ACTIVO",
    tool: "HERRAMIENTA",
    "security-score": "PUNTUACIÓN DE SEGURIDAD",
    "illustrative-score": "Puntuación ilustrativa",
    "asset-inventory": "INVENTARIO DE ACTIVOS",
    "preview-dataset": "DATOS DE DEMOSTRACIÓN",
    applications: "Aplicaciones",
    agents: "Agentes",
    "cloud-assets": "Activos cloud",
    "prioritized-risks": "RIESGOS PRIORIZADOS",
    "total-risks": "23 EN TOTAL",
    critical: "Críticos",
    high: "Altos",
    medium: "Medios",
    illustrative: "ILUSTRATIVO",
    "available-foundation": "BASE DISPONIBLE",
    "in-development": "EN DESARROLLO",
    "future-direction": "DIRECCIÓN FUTURA",
    "service-available": "SERVICIO DE EVALUACIÓN DISPONIBLE",
    "capabilities-label": "CAPACIDADES CENTRALES",
    "capabilities-title": "Una plataforma. Una visión más clara del riesgo.",
    "capabilities-intro":
      "Un modelo de seguridad conectado, diseñado para avanzar del descubrimiento a las decisiones sin perder el contexto técnico.",
    discover: "Descubrir",
    "discover-copy": "Mapea tu superficie de ataque digital y de IA.",
    "discover-status":
      "Los dominios y las aplicaciones web forman la base actual. Desde aquí evolucionará una cobertura más amplia de activos.",
    assess: "Evaluar",
    "assess-copy":
      "Identifica vulnerabilidades, exposiciones y brechas de seguridad.",
    "assess-status":
      "La evaluación web es el punto de partida; la cobertura de APIs e IA está en desarrollo.",
    understand: "Comprender",
    "understand-copy": "Entiende cómo se conectan los riesgos individuales.",
    "understand-status":
      "Las relaciones de exposición y el contexto de rutas de ataque son una dirección activa del producto.",
    prioritize: "Priorizar",
    "prioritize-copy": "Concéntrate en lo que realmente importa.",
    "prioritize-status":
      "La priorización se construye sobre exposición verificada, contexto y remediación práctica.",
    "discover-step": "01 / DESCUBRIR",
    "assess-step": "02 / EVALUAR",
    "understand-step": "03 / COMPRENDER",
    "prioritize-step": "04 / PRIORIZAR",
    domains: "Dominios",
    services: "Servicios",
    "configuration-risks": "Riesgos de configuración",
    "web-security": "Seguridad web",
    "api-security": "Seguridad de APIs",
    "asset-relationships": "Relaciones entre activos",
    "exposure-context": "Contexto de exposición",
    "risk-correlation": "Correlación de riesgos",
    "risk-ranking": "Clasificación de riesgos",
    "remediation-guidance": "Guía de remediación",
    "security-reports": "Informes de seguridad",
    "continuous-monitoring": "Monitoreo continuo",
    root: "RAÍZ",
    "agent-short": "AGENTE",
    "data-short": "DATOS",
    "critical-path-short": "Ruta crítica",
    "exposed-api": "API expuesta",
    configuration: "Configuración",
    now: "AHORA",
    next: "SIGUIENTE",
    plan: "PLAN",
    "ai-label": "SEGURIDAD DE IA",
    "ai-title": "Protege sistemas capaces de pensar y actuar.",
    "ai-copy":
      "Los sistemas modernos de IA ya no se limitan a generar respuestas. Acceden a datos, utilizan herramientas, llaman APIs y ejecutan cada vez más acciones.",
    "concept-note": "Modelo conceptual del alcance de evaluación",
    "risk-prompt": "Inyección de instrucciones",
    "risk-sensitive": "Exposición de datos sensibles",
    "risk-agent": "Manipulación de agentes",
    "risk-tools": "Uso inseguro de herramientas",
    "risk-rag": "Envenenamiento de RAG",
    "risk-mcp": "Exposición de MCP",
    "risk-permissions": "Permisos excesivos",
    model: "MODELO",
    context: "CONTEXTO",
    action: "ACCIÓN",
    access: "ACCESO",
    systems: "SISTEMAS",
    "external-systems": "Sistemas externos",
    "tools-mcp": "Herramientas / MCP",
    "tools-short": "HERRAMIENTAS",
    "permissions-short": "PERMISOS",
    "agent-label": "SEGURIDAD DE AGENTES",
    "agent-title": "Cuando la IA puede actuar, los permisos importan.",
    "agent-copy":
      "Comprender qué puede alcanzar, modificar y activar un agente se está convirtiendo en una cuestión fundamental de seguridad.",
    "agent-visibility": "MODELO DE VISIBILIDAD DEL AGENTE",
    conceptual: "CONCEPTUAL",
    "available-tools": "Herramientas disponibles",
    permissions: "Permisos",
    "accessible-data": "Datos accesibles",
    "customer-records": "Registros de clientes · Documentos",
    "risky-actions": "Acciones de riesgo",
    "external-send": "Envío externo · Modificación de registros",
    "human-boundary": "Límite de aprobación humana",
    required: "REQUERIDA",
    "agent-note":
      "Sentinel podría evolucionar para ayudar a los equipos a comprender estas relaciones. Esta capacidad no se presenta como disponible actualmente.",
    email: "Correo",
    files: "Archivos",
    database: "Base de datos",
    "external-apis": "APIs externas",
    "read-send": "Leer / Enviar",
    "read-write": "Leer / Escribir",
    query: "Consultar",
    update: "Actualizar",
    call: "Llamar",
    "action-identity": "Identidad capaz de actuar",
    "tool-list": "Correo · Archivos · CRM · API",
    "permission-list": "Leer · Escribir · Enviar · Actualizar",
    "infra-label": "INFRAESTRUCTURA SEGURA",
    "infra-title": "Seguridad en toda la pila inteligente.",
    "infra-copy":
      "Desde la capa de aplicación hasta la infraestructura que existe debajo.",
    "cloud-security": "Seguridad cloud",
    "infrastructure-security": "Seguridad de infraestructura",
    "ai-infrastructure": "Infraestructura de IA",
    cloud: "Cloud",
    containers: "Contenedores",
    networks: "Redes",
    infrastructure: "Infraestructura",
    "path-label": "ANÁLISIS DE RUTAS DE ATAQUE",
    "path-title": "Los riesgos individuales rara vez existen de forma aislada.",
    "path-copy":
      "Sentinel busca conectar exposiciones, activos y contexto para que los equipos de seguridad comprendan cómo podría desplazarse un atacante por un sistema.",
    "critical-path": "RUTA DE ATAQUE CRÍTICA",
    "illustrative-scenario": "ESCENARIO ILUSTRATIVO",
    "path-context": "5 activos conectados",
    "path-context-2": "3 transiciones de exposición",
    "path-context-3": "1 impacto crítico",
    entry: "ENTRADA",
    exposure: "EXPOSICIÓN",
    identity: "IDENTIDAD",
    "tool-layer": "CAPA DE HERRAMIENTAS",
    impact: "IMPACTO",
    internet: "Internet",
    "exposed-application": "Aplicación expuesta",
    "mcp-server": "Servidor MCP",
    "sensitive-data": "Datos sensibles",
    public: "PÚBLICA",
    privileged: "PRIVILEGIADA",
    "severity-high": "ALTA",
    "services-label": "SEGURIDAD CODEGUREX",
    "services-title": "Una evaluación de seguridad con resultados claros.",
    "services-copy":
      "Un punto de entrada concreto para entender la exposición, priorizar riesgos y decidir qué corregir primero.",
    "assessment-offer":
      "Evaluación de seguridad para aplicaciones, APIs y sistemas con IA",
    "assessment-offer-copy":
      "Identificamos exposición, vulnerabilidades y riesgos prioritarios, y entregamos un plan claro de corrección.",
    available: "DISPONIBLE",
    "service-web":
      "El trabajo comercial actual se concentra en evaluaciones de seguridad web. La cobertura de APIs está evolucionando.",
    "service-title-web": "Seguridad web y de APIs",
    "service-title-ai": "Evaluaciones de seguridad de IA",
    "service-title-redteam": "Red teaming de IA",
    "service-title-cloud": "Seguridad cloud",
    "service-title-infra": "Seguridad de infraestructura",
    "available-web": "DISPONIBLE · WEB",
    "service-details": "Detalles del servicio ↗",
    "service-ai":
      "Revisión enfocada de modelos, prompts, datos, RAG, agentes, APIs, herramientas y permisos.",
    "available-scoped": "DISPONIBLE · SEGÚN ALCANCE",
    "service-ai-details": "Conocer seguridad de IA ↗",
    "service-redteam":
      "Una dirección futura para pruebas adversariales controladas de sistemas de IA.",
    "service-cloud":
      "Una capacidad planificada para exposición cloud, identidades y riesgos de configuración.",
    "service-infra":
      "Una dirección de largo plazo que abarca contenedores, redes y controles de infraestructura.",
    "explore-services": "Explorar servicios de seguridad",
    "research-label": "CODEGUREX RESEARCH",
    "program-development": "PROGRAMA DE INVESTIGACIÓN EN DESARROLLO",
    "research-title": "Investigando las amenazas del mañana.",
    "research-copy":
      "La seguridad cambia cuando cambia la tecnología. CodeGurex Research explorará riesgos emergentes en IA, agentes, infraestructura y aplicaciones modernas.",
    "research-index": "ÍNDICE DE INVESTIGACIÓN",
    "coming-soon": "PRÓXIMAMENTE",
    "no-publications":
      "Todavía no presentamos artículos ni hallazgos como publicaciones realizadas.",
    "ai-security": "Seguridad de IA",
    "agent-security": "Seguridad de agentes",
    "mcp-security": "Seguridad MCP",
    "threat-research": "Investigación de amenazas",
    "application-security": "Seguridad de aplicaciones",
    "principles-label": "PRINCIPIOS",
    "philosophy-title": "Tecnología compleja. Seguridad clara.",
    "philosophy-copy":
      "CodeGurex está construyendo seguridad para un mundo cada vez más inteligente e interconectado.",
    "principle-1": "Comprender la complejidad",
    "principle-1-copy": "Mapear claramente sistemas, relaciones y exposición.",
    "principle-2": "Priorizar la realidad",
    "principle-2-copy":
      "Centrarse en riesgos que generan rutas de ataque relevantes.",
    "principle-3": "Construir para lo que viene",
    "principle-3-copy":
      "Seguridad diseñada para aplicaciones, cloud y sistemas inteligentes.",
    "cta-line-1": "Comprende tu exposición.",
    "cta-line-2": "Sabe qué corregir primero.",
    "cta-copy":
      "Solicita una evaluación para tu aplicación, API o sistema con IA y recibe hallazgos priorizados con una ruta clara de corrección.",
    "footer-descriptor": "Seguridad para la era de la inteligencia artificial.",
    "security-assessments": "Evaluaciones de seguridad",
    about: "Nosotros",
    founder: "Fundador",
    contact: "Contacto",
    resources: "Recursos",
    documentation: "Documentación",
    legal: "Legal",
    privacy: "Privacidad",
    terms: "Términos",
    "footer-note": "Construido con claridad y disciplina técnica.",
    "contact-title": "Solicita una evaluación de seguridad.",
    "contact-kicker": "CODEGUREX / CONTACTO",
    "contact-copy":
      "Cuéntanos qué necesitas proteger. Tú revisas y confirmas antes de enviar cualquier información por WhatsApp.",
    "direct-contact": "CONTACTO DIRECTO",
    "contact-safety":
      "Nunca envíes contraseñas, claves de acceso ni credenciales sensibles mediante este formulario.",
    "form-name": "Nombre",
    "form-company": "Empresa",
    optional: "Opcional",
    "form-website": "URL del sitio",
    "form-interest": "¿Sobre qué quieres conversar?",
    "not-sure": "Todavía no estoy seguro",
    "form-context": "Contexto",
    minimum: "Mínimo 20 caracteres",
    "consent-prefix": "He leído la",
    "privacy-policy": "Política de privacidad",
    "consent-suffix":
      "y acepto el uso de esta información para responder mi solicitud.",
    "prepare-request": "Preparar solicitud en WhatsApp ↗",
    "form-note":
      "Nada se envía automáticamente. WhatsApp abre el mensaje para que puedas revisarlo y confirmarlo.",
  },
};

const homePlaceholders = {
  en: {
    "name-placeholder": "Your name",
    "company-placeholder": "Company name",
    "email-placeholder": "you@company.com",
    "website-placeholder": "https://yourcompany.com",
    "message-placeholder":
      "Tell us what you are building or what needs to be secured.",
  },
  es: {
    "name-placeholder": "Tu nombre",
    "company-placeholder": "Nombre de la empresa",
    "email-placeholder": "tu@empresa.com",
    "website-placeholder": "https://tuempresa.com",
    "message-placeholder":
      "Cuéntanos qué estás construyendo o qué necesitas proteger.",
  },
};

let homeLanguage = "en";

function setHomeLanguage(language) {
  homeLanguage = language;
  document.body.dataset.language = language;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-copy]").forEach((element) => {
    const value = homeCopy[language][element.dataset.copy];
    if (value) element.innerHTML = value;
  });
  document.querySelectorAll("[data-copy-placeholder]").forEach((element) => {
    const value = homePlaceholders[language][element.dataset.copyPlaceholder];
    if (value) element.setAttribute("placeholder", value);
  });
  homeLanguageToggles.forEach((toggle) => {
    toggle.innerHTML =
      language === "en"
        ? '<strong>EN</strong><i aria-hidden="true">/</i><span>ES</span>'
        : '<span>EN</span><i aria-hidden="true">/</i><strong>ES</strong>';
    toggle.setAttribute(
      "aria-label",
      language === "en" ? "Cambiar a español" : "Switch to English",
    );
  });
  const menuButton = document.getElementById("menuButton");
  if (menuButton) {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute(
      "aria-label",
      language === "en"
        ? open
          ? "Close menu"
          : "Open menu"
        : open
          ? "Cerrar menú"
          : "Abrir menú",
    );
  }
  document.title =
    language === "en"
      ? "CodeGurex | Security for the AI Era"
      : "CodeGurex | Seguridad para la era de la inteligencia artificial";
  try {
    sessionStorage.setItem("cg-language", language);
  } catch {}
}

homeLanguageToggles.forEach((toggle) =>
  toggle.addEventListener("click", () =>
    setHomeLanguage(homeLanguage === "en" ? "es" : "en"),
  ),
);
let storedLanguage = "en";
try {
  storedLanguage = sessionStorage.getItem("cg-language") || "en";
} catch {}
setHomeLanguage(storedLanguage === "es" ? "es" : "en");

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
const revealItems = document.querySelectorAll("[data-reveal]");
if (reduceMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -5% 0px" },
  );
  revealItems.forEach((item) => revealObserver.observe(item));
}

document
  .querySelectorAll(".cg-product-sidebar button[data-panel]")
  .forEach((button) => {
    button.addEventListener("click", () => {
      document
        .querySelectorAll(".cg-product-sidebar button[data-panel]")
        .forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
    });
  });

const contactDialog = document.getElementById("contactDialog");
const contactDialogClose = document.getElementById("contactDialogClose");
let contactTrigger = null;
document.querySelectorAll(".js-contact-open").forEach((button) => {
  button.addEventListener("click", () => {
    contactTrigger = button;
    if (button.hasAttribute("data-assessment-trigger")) {
      const assessmentOption = document.querySelector(
        '#contactForm input[name="interest"][value="Security Assessment"]',
      );
      if (assessmentOption) assessmentOption.checked = true;
      window.gtag?.("event", "assessment_start", {
        trigger_text: button.textContent.trim(),
      });
    }
    contactDialog?.showModal();
    document.body.classList.add("dialog-open");
  });
});
contactDialogClose?.addEventListener("click", () => contactDialog?.close());
contactDialog?.addEventListener("click", (event) => {
  if (event.target === contactDialog) contactDialog.close();
});
contactDialog?.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
  contactTrigger?.focus();
});

const assessmentSource = new URLSearchParams(window.location.search).get(
  "assessment",
);
if (assessmentSource && contactDialog) {
  const assessmentOption = document.querySelector(
    '#contactForm input[name="interest"][value="Security Assessment"]',
  );
  if (assessmentOption) assessmentOption.checked = true;
  contactDialog.showModal();
  document.body.classList.add("dialog-open");
  window.gtag?.("event", "assessment_start", {
    assessment_source: assessmentSource,
    trigger_text: "service_page",
  });
}

const currentYearV2 = document.getElementById("currentYearV2");
if (currentYearV2) currentYearV2.textContent = new Date().getFullYear();
