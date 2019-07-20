"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Main aplication
 * imports to use in app
 */
const server_1 = __importDefault(require("./classes/server"));
const cors_1 = __importDefault(require("cors"));
// GraphQl
const express_graphql_1 = __importDefault(require("express-graphql"));
const schema_1 = __importDefault(require("./graphql/schema"));
// Servidor
const server = new server_1.default;
// Configuración de cors
server.app.use(cors_1.default({ origin: true, credentials: false }));
// Unico enpoint GraphQL -- messageId parametro para pasar variable
server.app.use('/graphql', express_graphql_1.default((request) => ({
    graphiql: true,
    schema: schema_1.default,
    context: { messageId: "test" }
})));
// Configuración de conexión a MongoDB
server.conection();
// Levantar el servidor
server.start(() => {
    console.log(`****** Puerto de conexión: ${server.port}`);
});
