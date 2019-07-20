"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = __importDefault(require("../classes/test"));
const user_1 = __importDefault(require("../classes/user"));
const test = new test_1.default();
const user = new user_1.default();
exports.resolvers = {
    Query: {
        hello: test.hello,
        greet: test.greet,
        allUsers: user.getAllUsers,
        getOneUser: user.getOneUser,
    },
    Mutation: {
        createUsuario: user.createUsuario,
        deleteUsuario: user.deleteUsuario,
        updateUsuario: user.updateUsuario
    }
};
