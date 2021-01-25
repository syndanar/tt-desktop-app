const has = (object, property) => Object.prototype.hasOwnProperty.call(object, property);
const isPrimitive = (variable) => variable === null || typeof variable !== 'object';

global.isObjectHasPropery = has;
global.variableIsPrimitive = isPrimitive;
