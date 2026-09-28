'use strict';
const faqs = [
  {
    id: 1,
    title: '¿Cómo hago una transferencia?',
    alternativeTitle: '¿Cómo hago una transferencia?',
    answer: [
      {
        type: 'p',
        content: [
          '1. Entra a la opción ‘Transferir’ en la pantalla inicial de la app.',
          '2. Elige la cuenta con la que quieras hacer la transferencia.',
          '3. Selecciona la opción ‘Nuevo’, escribe el nombre de tu contacto y guárdalo para darle de alta.',
          '4. Indica la cuenta, CLABE o número de tarjeta y autoriza la aplicación.'
        ]
      }
    ],
    entity: 'Transferencias',
    family: {
      asset: '',
      name: ''
    },
    link: {
      text: 'Realizar una transferencia',
      url: 'transfers'
    },
    native: true
  },
  {
    id: 2,
    title: '¿Cómo incremento el límite de operaciones de mi banca móvil?',
    alternativeTitle: '¿Cómo incremento el límite de operaciones de mi banca móvil?',
    answer: [
      {
        type: 'p',
        content: [
          'No podrás incrementarlo, salvo que ya hayas disminuido el límite por operación, diario y mensual desde la app, siguiendo estos pasos:',
          '1. En el ‘Menú’ que se encuentra en la esquina superior derecha, entra a la sección ‘Configuración’.',
          '2. Selecciona ‘Límites de operaciones’.',
          '3. Edita los límites de operación y recuerda seleccionar el botón ‘Guardar’ antes de cerrar la pantalla.',
          'Para incrementar o volver a los límites de operación preestablecidos, deberás acudir a un cajero BBVA.'
        ]
      }
    ],
    entity: 'Límite de operaciones',
    family: {
      asset: '',
      name: ''
    },
    link: {
      text: '',
      url: ''
    },
    native: true
  },
  {
    id: 3,
    title: '¿Cómo pago mis servicios?',
    alternativeTitle: '¿Cómo pago mis servicios?',
    answer: [
      {
        type: 'p',
        content: [
          '1. En la pantalla inicial de la app, selecciona la opción ‘Más’ (...).',
          '2. Entra al apartado ‘Pago de servicios’ y a ‘Pagar nuevo’.',
          '3. Ingresa el número de convenio que se encuentra en el recibo de tu servicio y el importe.',
          '4. Verifica y autoriza la operación.'
        ]
      }
    ],
    entity: 'Pago de servicios',
    family: {
      asset: '',
      name: ''
    },
    link: {
      text: 'Pagar servicios',
      url: 'bill-payments'
    },
    native: true
  },
  {
    id: 4,
    title: '¿Dónde está la fecha de vencimiento y el CVV de mi tarjeta digital?',
    alternativeTitle: '¿Dónde está la fecha de vencimiento y el CVV de mi tarjeta digital?',
    answer: [
      {
        type: 'p',
        content: [
          '1. En la sección de ‘Tarjetas’, en la pantalla inicial de la app, presiona la tarjeta de débito o de crédito que necesitas.',
          '2. Entra al apartado ‘Comprar con tarjeta digital’ en la esquina superior derecha.',
          '3. Encuentra la fecha de vencimiento en la parte central de la pantalla.',
          '4. Para realizar compras en línea, identifica el apartado ‘CVV dinámico’ y selecciona ‘Ver’ para visualizar el código e ingrésalo en el sitio web de la compra.'
        ]
      }
    ],
    entity: 'Tarjeta digital',
    family: {
      asset: '',
      name: ''
    },
    link: {
      text: '',
      url: ''
    },
    native: true
  },
  {
    id: 5,
    title: '¿Cómo consulto mis estados de cuenta?',
    alternativeTitle: '¿Cómo consulto mis estados de cuenta?',
    answer: [
      {
        type: 'p',
        content: [
          '1. Elige la cuenta o la tarjeta de donde necesitas la información.',
          '2. En la pantalla inicial de la app, entra a la opción ‘Más’ (...) y al apartado ‘Estados de cuenta’.',
          '3. Elige el periodo y presiona en ‘Consultar’.',
          '4. Autoriza la operación y listo.'
        ]
      }
    ],
    entity: 'Estado de cuenta',
    family: {
      asset: '',
      name: ''
    },
    link: {
      text: '',
      url: ''
    },
    native: true
  },
  {
    id: 6,
    title: '¿Cómo consulto mi CLABE y número de cuenta?',
    alternativeTitle: '¿Cómo consulto mi CLABE y mi número de cuenta?',
    answer: [
      {
        type: 'p',
        content: [
          '1. En la pantalla inicial de la app, identifica la sección ‘Cuentas en pesos o Tarjetas’.',
          '2. Elige la opción ‘Ver cuenta y CLABE’.',
          '3. Conoce los datos de tu cuenta (nombre del producto, número de cuenta, CLABE, número de tarjeta y código SWIFT).'
        ]
      }
    ],
    entity: 'Detalle de cuenta',
    family: {
      asset: '',
      name: ''
    },
    nativeLink: {
      text: '',
      url: ''
    },
    native: true
  },
  {
    id: 7,
    title: '¿Cómo hago un retiro sin tarjeta?',
    alternativeTitle: '¿Cómo hago un retiro sin tarjeta? ',
    answer: [
      {
        type: 'p',
        content: [
          '1. Entra a la opción ‘Retiro sin tarjeta’ en la pantalla inicial de la app.',
          '2. Elige la cuenta de la que quieres hacer el retiro.',
          '3. Ingresa el importe y el concepto.',
          '4. Valida y autoriza tu operación.',
          'Se generará un código de 16 dígitos en total que deberás ingresar en el cajero BBVA para retirar el efectivo.'
        ]
      }
    ],
    entity: 'Retiro sin tarjeta',
    family: {
      asset: '',
      name: ''
    },
    link: {
      text: 'Ir a Retiro sin tarjeta',
      url: 'cardless-withdrawal'
    },
    native: true
  },
  {
    id: 8,
    title: '¿Cómo reporto un cargo no reconocido?',
    alternativeTitle: '¿Cómo reporto un cargo no reconocido?',
    answer: [
      {
        type: 'p',
        content: [
          '1. Selecciona la cuenta o tarjeta donde identificaste el cargo.',
          '2. Identifica la sección ‘Últimos movimientos’ y entra al cargo no reconocido.',
          '3. Elige la opción ‘Desconozco este movimiento’.',
          'Tendrás 90 días para reportar tu movimiento no reconocido, a partir de su fecha de compra y no deberá aparecer ‘en tránsito’, es decir que aún no ha sido cobrada por el comercio.'
        ]
      }
    ],
    entity: 'Aclaraciones',
    family: {
      asset: '',
      name: ''
    },
    link: {
      text: '',
      url: ''
    },
    native: true
  },
  {
    id: 9,
    title: '¿Cómo reporto un cargo SPEI no reconocido?',
    alternativeTitle: 'Requisitos para solicitar una aclaración',
    answer: [
      {
        type: 'p',
        content: [
          '1. Tu número de cuenta (10 dígitos).',
          '2. Número de cuenta a la que realizaste la transferencia.',
          '3. Movimientos a reportar (Fecha y monto de la transacción).',
          '4. Motivo de la aclaración (Importe incorrecto, movimiento duplicado, cuenta bancaria incorrecta).',
          '5. Correo electrónico (Para contacto y entrega del Dictamen).'
        ]
      },
      {
        type: 'h4',
        content: [
          '¿Dónde solicitar aclaración?'
        ]
      },
      {
        type: 'p',
        content: [
          'Llama a nuestra línea especializada en aclaraciones 55 5226 2663',
          'En bbva.mx',
          'Cualquier sucursal',
          '¿Aclaraciones o consultas sobre du transferencia SPEI?',
          'Consulta el procedimiento en www.bbva.mx'
        ]
      }
    ],
    entity: 'Aclaraciones',
    family: {
      asset: '',
      name: ''
    },
    link: {
      text: 'www.bbva.mx',
      url: 'clarifications'
    },
    native: true
  },
  {
    id: 10,
    title: '¿En qué horario se reflejan las transferencias que hago?',
    alternativeTitle: '¿En qué horario se reflejan las transferencias que hago?',
    answer: [
      {
        type: 'p',
        content: [
          'Las transferencias nacionales habituales pueden tardar hasta 1 día hábil. Si son internacionales, entre 2 y 5 días hábiles.'
        ]
      }
    ],
    entity: 'Horario de operaciones',
    family: {
      asset: '',
      name: ''
    },
    link: {
      text: '',
      url: ''
    },
    native: true
  },
  {
    id: 11,
    title: '¿Cómo recibo un depósito en mi cuenta?',
    alternativeTitle: '¿Cómo recibo un depósito en mi cuenta?',
    answer: [
      {
        type: 'p',
        content: [
          '1. En la pantalla inicial de la app, selecciona la cuenta donde quieras recibir tu depósito.',
          '2. Elige la opción ‘Ver cuenta y CLABE’.',
          '3. Comparte la CLABE interbancaria, número de tarjeta o cuenta a quien te realizará el depósito.'
        ]
      }
    ],
    entity: 'Depósitos',
    family: {
      asset: '',
      name: ''
    },
    link: {
      text: '',
      url: ''
    },
    native: true
  }
];
module.exports = { faqs };
