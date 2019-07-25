/**
 * Main aplication
 * imports to use in app
 */
import Server from "./classes/server";
import cors from 'cors';
// GraphQl
import graphqlHTTP from "express-graphql";
import schema from './graphql/schema';
// Servidor
const SERVER = new Server;
// Configuración de cors
SERVER.app.use( cors({ origin: true, credentials: false }));
// Unico enpoint GraphQL -- messageId parametro para pasar variable
SERVER.app.use('/graphql', graphqlHTTP( 
    (request: any) => ({
        graphiql: true, 
        schema: schema, 
        context: {messageId: "test" } 
    })
));
// Configuración de conexión a MongoDB
SERVER.conection();
// Levantar el servidor
SERVER.start( () => {
    console.log(`****** Puerto de conexión: ${SERVER.port}`);
});