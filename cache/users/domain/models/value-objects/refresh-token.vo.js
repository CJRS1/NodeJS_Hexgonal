"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshTokenVO = void 0;
const uuid_1 = __importDefault(require("uuid"));
class RefreshTokenVO {
    constructor(token) {
        this.value = token;
    }
    static create(token) {
        if (!uuid_1.default.validate(token)) {
            throw new Error("Invalid refresh token");
        }
        return new RefreshTokenVO(token);
    }
    /* Con el get podemos llamarlo sin colocar paréntesis  */
    /* Si no lleva get es un método */
    get returnValue() {
        return this.value;
    }
}
exports.RefreshTokenVO = RefreshTokenVO;
//# sourceMappingURL=refresh-token.vo.js.map