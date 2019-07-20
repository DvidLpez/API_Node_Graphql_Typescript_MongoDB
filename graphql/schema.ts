import { makeExecutableSchema } from "graphql-tools";
import { resolvers }  from "./resolvers";

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

export default makeExecutableSchema({
    typeDefs,
    resolvers
});
