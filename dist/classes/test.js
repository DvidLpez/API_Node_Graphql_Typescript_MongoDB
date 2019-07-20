"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Test {
    constructor() { }
    /**
      * First Test
      */
    hello() {
        return "Hello World con GraphQl";
    }
    /**
     * query de prueba con parámetros
     */
    greet(root, { name }, ctx) {
        console.log(ctx);
        return `Hello ${name}!!`;
    }
}
exports.default = Test;
