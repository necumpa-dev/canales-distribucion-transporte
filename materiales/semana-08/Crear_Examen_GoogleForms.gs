/**
 * INSTRUCCIONES DE USO:
 * 1. Abre script.google.com en tu navegador (con tu cuenta de Google)
 * 2. Haz clic en "+ Nuevo proyecto"
 * 3. Borra todo el código que aparece por defecto
 * 4. Pega TODO este código
 * 5. Haz clic en el botón ▶ "Ejecutar" (o presiona Ctrl+Enter)
 * 6. Acepta los permisos que pida Google
 * 7. Cuando termine, en la consola verás el LINK del formulario creado
 * 8. Comparte ese link con tus 42 alumnos
 *
 * El formulario ya tendrá:
 *   - Modo cuestionario activado (nota automática al enviar)
 *   - Respuestas correctas configuradas
 *   - 1 punto por pregunta (20 puntos en total)
 *   - Retroalimentación al finalizar
 */

function crearExamen() {

  // --- CREAR FORMULARIO ---
  var form = FormApp.create('Examen Semana 08 - Transportation Management Systems (TMS)');
  form.setDescription(
    'Diplomado en Gestión de Canales de Distribución y del Transporte\n' +
    'Semana 08 - Transportation Management Systems\n\n' +
    'Instrucciones: Selecciona la alternativa correcta para cada pregunta. ' +
    'Al finalizar, recibirás tu calificación automáticamente.\n\n' +
    'Puntaje: 20 puntos (1 punto por pregunta).'
  );

  // Activar modo cuestionario
  form.setIsQuiz(true);

  // Mostrar respuestas y puntaje al finalizar
  form.setPublishingSummary(false);

  // Solicitar correo del alumno
  form.setCollectEmail(true);

  // ============================================================
  // BANCO DE PREGUNTAS - SEMANA 08: TMS
  // ============================================================
  var preguntas = [

    // ----- BLOQUE 1: CONCEPTOS DE TMS -----
    {
      enunciado: "¿Qué significa el acrónimo TMS en logística?",
      opciones: [
        "Total Management System",
        "Transportation Management System",
        "Transit Monitoring Software",
        "Traffic Management Service"
      ],
      correcta: 1, // índice 0-based → "Transportation Management System"
      feedback: "TMS significa Transportation Management System (Sistema de Gestión del Transporte)."
    },
    {
      enunciado: "¿Cuál de las siguientes NO es una función principal de un TMS?",
      opciones: [
        "Planificación de rutas",
        "Gestión de flotas",
        "Gestión de recursos humanos de ventas",
        "Análisis y reportes"
      ],
      correcta: 2,
      feedback: "Las funciones principales de un TMS son: planificación de rutas, gestión de flotas, visibilidad de pedidos, documentación, análisis y reportes, e integración con otros sistemas."
    },
    {
      enunciado: "Un TMS en modalidad SaaS (Software as a Service) implica principalmente que:",
      opciones: [
        "El software se instala en servidores propios de la empresa",
        "Se requiere una gran inversión inicial en licencias",
        "El software se accede desde la nube mediante suscripción, sin grandes inversiones iniciales",
        "Solo puede usarse desde computadoras de escritorio"
      ],
      correcta: 2,
      feedback: "SaaS permite acceder al TMS desde la nube mediante suscripción, eliminando la necesidad de grandes inversiones iniciales en infraestructura."
    },

    // ----- BLOQUE 2: PLANIFICACIÓN DE RUTAS -----
    {
      enunciado: "¿Cuál de los siguientes factores NO se toma en cuenta en la planificación de rutas con un TMS?",
      opciones: [
        "Restricciones de circulación",
        "Condiciones meteorológicas",
        "Color de los vehículos de transporte",
        "Horarios de clientes"
      ],
      correcta: 2,
      feedback: "El color de los vehículos no es un factor relevante. El TMS considera: ubicación de clientes, distancias, stock, restricciones de circulación, tráfico, tiempos de descarga, condiciones meteorológicas, tipo de mercancía, retornos y horarios."
    },
    {
      enunciado: "La planificación de rutas en un TMS tiene como objetivo principal:",
      opciones: [
        "Aumentar el número de conductores disponibles",
        "Diseñar las rutas más eficientes para las unidades de transporte",
        "Reducir el inventario en almacenes",
        "Gestionar los documentos aduaneros"
      ],
      correcta: 1,
      feedback: "La planificación de rutas permite diseñar las rutas más eficientes para las unidades de transporte (UT)."
    },
    {
      enunciado: "¿Cuál de los siguientes elementos SÍ se considera en la planificación de rutas del TMS?",
      opciones: [
        "El salario de los conductores",
        "La antigüedad de los vehículos",
        "Las condiciones del tráfico",
        "El número de proveedores"
      ],
      correcta: 2,
      feedback: "Las condiciones del tráfico son un factor clave que el TMS toma en consideración para la planificación de rutas."
    },

    // ----- BLOQUE 3: GESTIÓN DE FLOTAS -----
    {
      enunciado: "¿Qué abarca la función de Gestión de Flotas en un TMS?",
      opciones: [
        "Solo el seguimiento GPS de los vehículos",
        "Seguimiento en tiempo real, mantenimiento, conductores, consumo de combustible, seguros e infracciones",
        "Únicamente la gestión de documentos de los conductores",
        "Solo los planes de renovación de flota"
      ],
      correcta: 1,
      feedback: "La gestión de flotas abarca: seguimiento en tiempo real, mantenimiento de vehículos, gestión de conductores, alertas, seguros, infracciones, indicadores operativos, planes de renovación y combustible."
    },
    {
      enunciado: "Dentro de la gestión de flotas, el KPI 'Auditoría de Ruta' se calcula como:",
      opciones: [
        "(nº pedidos entregados a tiempo) / (nº pedidos del cliente) × 100",
        "(puntaje obtenido) / (puntaje máximo esperado) × 100",
        "(nº pallets observados) / (nº total pallets atendidos) × 100",
        "(Q productos con fecha de vencimiento apta) / (Q productos en inventario) × 100"
      ],
      correcta: 1,
      feedback: "La Auditoría de Ruta se calcula: (puntaje obtenido) / (puntaje máximo esperado) × 100, siendo responsable el Supervisor de Ruta."
    },

    // ----- BLOQUE 4: VISIBILIDAD DE PEDIDOS -----
    {
      enunciado: "La trazabilidad 'door to door' en un TMS hace referencia a:",
      opciones: [
        "El seguimiento del pedido desde el proveedor hasta el punto de venta, en tiempo real",
        "La gestión de puertas de acceso al almacén",
        "El control de acceso de conductores al centro de distribución",
        "La entrega de documentos de puerta en puerta"
      ],
      correcta: 0,
      feedback: "La trazabilidad door to door permite el seguimiento completo del pedido desde el origen hasta el destino final, en tiempo real."
    },
    {
      enunciado: "¿Cuál de las siguientes opciones es una característica de la Visibilidad de Pedidos en un TMS?",
      opciones: [
        "Gestión de aduanas",
        "Notificaciones automáticas al cliente sobre el estado de su pedido",
        "Análisis predictivo de demanda",
        "Integración con sistemas ERP"
      ],
      correcta: 1,
      feedback: "La visibilidad de pedidos incluye: trazabilidad door to door, detalles de eventos, notificaciones automáticas, acceso para el cliente, gestión de extravíos e integración de datos."
    },

    // ----- BLOQUE 5: DOCUMENTACIÓN -----
    {
      enunciado: "¿Cuál de las siguientes funciones corresponde al módulo de Documentación de un TMS?",
      opciones: [
        "Predicción de demanda mediante machine learning",
        "Generación automática de etiquetas de identificación de bultos y mercancías",
        "Seguimiento en tiempo real de vehículos",
        "Planificación de las rutas de reparto"
      ],
      correcta: 1,
      feedback: "El módulo de Documentación incluye: gestión de documentos digitales, firma digital, etiquetas automáticas, gestión de aduanas, archivo documental y gestión de facturas."
    },
    {
      enunciado: "La firma digital de documentos en un TMS está relacionada con:",
      opciones: [
        "La planificación de rutas eficientes",
        "La prueba digital de entrega y gestión de documentos electrónicos",
        "La analítica predictiva de la demanda",
        "La integración con sistemas IoT"
      ],
      correcta: 1,
      feedback: "La firma digital es parte del módulo de documentación del TMS, que incluye documentos electrónicos con prueba digital de entrega."
    },

    // ----- BLOQUE 6: ANÁLISIS Y REPORTES -----
    {
      enunciado: "¿Qué es la analítica predictiva dentro de un TMS?",
      opciones: [
        "Reportes históricos de entregas realizadas el mes anterior",
        "Modelos estadísticos y machine learning para predecir demanda, optimizar recursos y prevenir incidencias",
        "La exportación de datos a Excel para análisis manual",
        "El ranking de clientes por volumen de compras"
      ],
      correcta: 1,
      feedback: "La analítica predictiva usa modelos estadísticos y machine learning para predecir demanda, optimizar recursos y prevenir incidencias."
    },
    {
      enunciado: "Las simulaciones 'what-if' en un TMS permiten:",
      opciones: [
        "Ver en tiempo real dónde está cada vehículo",
        "Analizar el impacto en costos e indicadores al simular cambios en almacenes, flota, clientes o tarifas",
        "Gestionar las devoluciones de clientes",
        "Calcular el inventario disponible en tiempo real"
      ],
      correcta: 1,
      feedback: "Las simulaciones what-if permiten analizar el impacto en costos e indicadores al simular diferentes escenarios: cambios en almacenes, flota, clientes o tarifas."
    },

    // ----- BLOQUE 7: INTEGRACIÓN CON OTROS SISTEMAS -----
    {
      enunciado: "La integración del TMS con el WMS (Warehouse Management System) permite:",
      opciones: [
        "Gestionar el pago a transportistas",
        "Intercambio de datos en tiempo real sobre inventario, preparación de pedidos, planning de carga y cross-docking",
        "Conectarse con las plataformas GPS de los vehículos",
        "Emitir facturas electrónicas a los clientes"
      ],
      correcta: 1,
      feedback: "La integración TMS-WMS permite intercambio en tiempo real sobre: inventario disponible, preparación de pedidos, planning de carga, cross-docking, tiempos de picking y cargas."
    },
    {
      enunciado: "¿Qué información se intercambia entre el TMS y el ERP?",
      opciones: [
        "Localización GPS de los vehículos y consumo de combustible",
        "Pedidos, facturación, seguimiento de clientes, niveles de servicio y costos",
        "Datos de temperatura de la mercancía en tránsito",
        "Rutas óptimas de distribución"
      ],
      correcta: 1,
      feedback: "La integración TMS-ERP intercambia: información sobre pedidos, facturación, seguimiento de clientes y artículos, niveles de servicio por cliente y costos."
    },
    {
      enunciado: "La integración del TMS con soluciones IoT sirve principalmente para:",
      opciones: [
        "Emitir guías de remisión electrónicas",
        "Conectarse con la plataforma de pagos de clientes",
        "Captar datos en tiempo real de localización, condiciones de la mercancía, combustible y conducción eficiente",
        "Planificar los calendarios y festivos de las rutas"
      ],
      correcta: 2,
      feedback: "La integración con IoT permite captar datos en tiempo real: localización de vehículos, condiciones de la mercancía, consumo de combustible y conducción eficiente."
    },

    // ----- BLOQUE 8: MACROPROCESO LOGÍSTICO -----
    {
      enunciado: "¿Cuál es el orden correcto del macroproceso de distribución presentado en clase?",
      opciones: [
        "Despacho → Almacenamiento → Programación → Preparación → Emisión GR → Abastecimiento → Liquidación → Logística Inversa",
        "Abastecimiento → Almacenamiento → Programación → Preparación de Mercadería → Emisión de GR y Facturas → Despacho → Liquidación → Logística Inversa",
        "Programación → Abastecimiento → Almacenamiento → Despacho → Preparación → Liquidación → Logística Inversa",
        "Abastecimiento → Programación → Almacenamiento → Emisión GR → Preparación → Despacho → Logística Inversa → Liquidación"
      ],
      correcta: 1,
      feedback: "El macroproceso sigue: Abastecimiento → Almacenamiento → Programación → Preparación de Mercadería → Emisión de GR y Facturas → Despacho → Liquidación → Logística Inversa."
    },
    {
      enunciado: "El KPI 'On Time' en el proceso de Despacho se calcula como:",
      opciones: [
        "(nº pedidos recibidos en plazo previsto) / (nº total pedidos recibidos) × 100",
        "(nº pedidos entregados a tiempo) / (nº pedidos del cliente) × 100",
        "(puntaje obtenido) / (puntaje máximo esperado) × 100",
        "(nº pallets almacenados correctamente) / (nº total pallets almacenados) × 100"
      ],
      correcta: 1,
      feedback: "On Time = (nº pedidos entregados a tiempo) / (nº pedidos del cliente) × 100. Es responsabilidad del Supervisor de Distribución."
    },
    {
      enunciado: "¿Qué hace el proceso de Logística Inversa en el macroproceso de distribución?",
      opciones: [
        "Planifica las rutas de entrega de productos a clientes",
        "Gestiona los cambios, rechazos y devoluciones de productos, así como la devolución de activos a planta",
        "Emite las guías de remisión y facturas de despacho",
        "Realiza el seguimiento GPS de las unidades de transporte"
      ],
      correcta: 1,
      feedback: "La Logística Inversa gestiona cambios, rechazos y devoluciones de productos, y la devolución de activos a planta. Los outputs son: productos y activos devueltos, así como desmedros."
    }

  ]; // fin de preguntas

  // ============================================================
  // AGREGAR PREGUNTAS AL FORMULARIO
  // ============================================================
  for (var i = 0; i < preguntas.length; i++) {
    var p = preguntas[i];
    var item = form.addMultipleChoiceItem();
    item.setTitle((i + 1) + '. ' + p.enunciado);
    item.setRequired(true);

    var choices = [];
    for (var j = 0; j < p.opciones.length; j++) {
      var esCorrecta = (j === p.correcta);
      choices.push(item.createChoice(p.opciones[j], esCorrecta));
    }
    item.setChoices(choices);
    item.setPoints(1);

    // Feedback para respuesta correcta e incorrecta
    var feedback = FormApp.createFeedback()
      .setText(p.feedback)
      .build();
    item.setFeedbackForCorrect(feedback);
    item.setFeedbackForIncorrect(feedback);
  }

  // ============================================================
  // CONFIGURAR CUESTIONARIO
  // ============================================================
  form.setConfirmationMessage(
    '¡Gracias por completar el examen! Tu respuesta ha sido registrada. ' +
    'Puedes ver tu calificación haciendo clic en "Ver puntaje".'
  );

  // Mostrar puntaje inmediatamente
  var quizSettings = form.setIsQuiz(true);

  // ============================================================
  // IMPRIMIR LINKS EN LA CONSOLA
  // ============================================================
  var formUrl   = form.getPublishedUrl();
  var editUrl   = form.getEditUrl();
  var responseUrl = form.getSummaryUrl();

  Logger.log('==============================================');
  Logger.log('✅ EXAMEN CREADO EXITOSAMENTE');
  Logger.log('==============================================');
  Logger.log('📋 Total de preguntas: ' + preguntas.length);
  Logger.log('🏆 Puntaje máximo: ' + preguntas.length + ' puntos');
  Logger.log('----------------------------------------------');
  Logger.log('🔗 LINK PARA ALUMNOS (comparte este):');
  Logger.log(formUrl);
  Logger.log('----------------------------------------------');
  Logger.log('✏️  LINK PARA EDITAR EL FORMULARIO:');
  Logger.log(editUrl);
  Logger.log('----------------------------------------------');
  Logger.log('📊 LINK PARA VER RESPUESTAS:');
  Logger.log(responseUrl);
  Logger.log('==============================================');
}
