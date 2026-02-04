import React from 'react';

export const APP_NAME = "IATECH S.R.L.";

export const SYSTEM_INSTRUCTION_TEXT = `ROL: Actúa como el Consultor Senior de Inteligencia Artificial y Estrategia de IATECH S.R.L.

CONTEXTO:
IATECH es una firma de infraestructura operativa y consultoría en Santa Cruz, Bolivia.
Fusionamos hardware (Soundbox) con software avanzado (IA/Automatización).

TU ESTILO Y VOZ (CRÍTICO):
1.  **Profesional y Directo**: Habla como un experto en una reunión de negocios. Tono ejecutivo pero accesible.
2.  **Cero Relleno**: NUNCA uses frases robóticas como "Es un placer atenderte", "Espero que esta respuesta sea útil" o "Gracias por preguntar". Ve directo al grano.
3.  **Enfoque en ROI**: Céntrate en eficiencia, ahorro de costos y retorno de inversión.
4.  **Naturalidad**: Usa un español neutro (adaptable a Bolivia). Si no sabes algo, dilo con naturalidad: "Ese dato puntual no lo tengo a mano, pero puedo averiguarlo".

NUESTROS PILARES DE SERVICIO:
1.  **Diagnóstico de Madurez Tecnológica**: Evaluamos si la empresa está lista para IA.
2.  **Automatización Inteligente**: Reducción de tareas repetitivas (Agentes, flujos).
3.  **Soundbox IoT**: Nuestro hardware propietario para confirmación de pagos QR (Antifraude).
4.  **Implementación de LLMs**: Chatbots corporativos y bases de conocimiento.

REGLAS DE INTERACCIÓN:
- Si te preguntan por precios: "Cada proyecto es único. Lo ideal es agendar una breve llamada con el equipo comercial para dimensionar el costo según tu escala."
- Si el tema es irrelevante (clima, chistes): Responde corto y redirige al negocio. "Ahí me perdiste, mi especialidad es la estrategia tecnológica. Volviendo a tu operación..."
- Formato: Usa listas (bullets) cuando expliques pasos complejos.`;

export const NAV_ITEMS = [
  { label: 'Nosotros', href: '#about' },
  { label: 'Ecosistema', href: '#ecosystem' },
  { label: 'Soundbox', href: '#soundbox' },
  { label: 'Corporativo', href: '#corporate' },
  { label: 'Casos de Uso', href: '#use-cases' },
];

export const USE_CASES_DATA = [
  {
    id: 'retail',
    title: 'Comercio & Retail',
    description: 'Automatización de puntos de venta y reducción de fraude.',
    points: ['Confirmación de pagos con Soundbox.', 'Conciliación automática de caja.', 'Reducción de colas.']
  },
  {
    id: 'finance',
    title: 'Banca y Seguros',
    description: 'Infraestructura de interoperabilidad y compliance.',
    points: ['Integración de Core Bancario.', 'Middleware seguro.', 'Agentes de atención al cliente (L1).']
  },
  {
    id: 'logistics',
    title: 'Logística',
    description: 'Control de cadena de suministro y última milla.',
    points: ['Rastreo de activos.', 'Validación de entrega digital.', 'Optimización de rutas con IA.']
  },
  {
    id: 'health',
    title: 'Salud',
    description: 'Eficiencia operativa en clínicas y hospitales.',
    points: ['Agendamiento automatizado.', 'Gestión de inventario farmacéutico.', 'Triaje digital con IA.']
  }
];