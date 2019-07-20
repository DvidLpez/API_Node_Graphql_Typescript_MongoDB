"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @name            usuarioSchema
 * @description     Modelo de datos para un objeto usuario
 *
 */
const mongoose_1 = require("mongoose");
const usuarioSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }
});
exports.Usuario = mongoose_1.model('Usuario', usuarioSchema);
