"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tools_1 = require("graphql-tools");
const resolvers_1 = require("./resolvers");
const typeDefs = `

    type Query {
        hello: String,
        greet(name: String!): String,
        allUsers: [User],
        getOneUser (_id: ID ): User
    }
    
    type User {
        _id: ID,
        firstName: String!,
        lastName: String!
    }

    type Mutation {
        createUsuario( input: UserInput ): User
        deleteUsuario (_id: ID ): User
        updateUsuario (_id: ID, input: UserInput): User
    }

    input UserInput {
        firstName: String!,
        lastName: String!
    }
`;
exports.default = graphql_tools_1.makeExecutableSchema({
    typeDefs,
    resolvers: resolvers_1.resolvers
});
