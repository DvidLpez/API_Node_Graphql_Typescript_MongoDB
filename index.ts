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
const server = new Server;
// Configuración de cors
server.app.use( cors({ origin: true, credentials: false }));
// Unico enpoint GraphQL -- messageId parametro para pasar variable
server.app.use('/graphql', graphqlHTTP( 
    (request: any) => ({
        graphiql: true, 
        schema: schema, 
        context: {messageId: "test" } 
    })
));
// Configuración de conexión a MongoDB
server.conection();
// Levantar el servidor
server.start( () => {
    console.log(`****** Puerto de conexión: ${server.port}`);
});