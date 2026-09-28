export default {
    profileID: /^[a-zA-Z0-9\-_=]{22}$/,
    age: /^([1-9][0-9]?|10[0-9]|110)?$/,
    numericValues: /^[0-9.]$/,
    gender: /^(masculino|femenino|desconocido)$/,
    alphaNumericLowerCaseSpace: /^[a-z0-9\s]+$/,
    alphaNumericCaseSpace: /^[a-zA-Z0-9\s]+$/,
    lowerCaseStr: /^[a-z]*$/,
    lettersAndSpaceOrEmpty: /^[ a-zA-z]*$/,
    appVersion: /^(\d+\.){1,2}\d+$/,
    tsec: /^[A-Za-z0-9-_=]+$/,
    terms: /^((\d[a-zA-Z0-9]{1,}[a-zA-Z0-9]-\d[a-zA-Z0-9]{1,}[a-zA-Z0-9]-\d[a-zA-Z0-9]{1,}[a-zA-Z0-9]-\d[a-zA-Z0-9]{1,}[a-zA-Z0-9]-\d[a-zA-Z0-9]{1,}[a-zA-Z0-9])|([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}))\|([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}|[^\s]+)?$/,
    pipeString: /^[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s-]+(\|{1,2}[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s-]+){1,2}$/,
    securityLevel: /^[a-zA-Z0-9:,\s_;]+$/
};
