"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHexStrict = void 0;
const isHexStrict = (value) => typeof value === 'string' && /^((-)?0x[0-9a-f]+|(0x))$/i.test(value);
exports.isHexStrict = isHexStrict;
