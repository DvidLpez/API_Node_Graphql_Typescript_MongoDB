"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_1 = require("./../models/usuario");
class User {
    constructor() { }
    /**
      * Get all users
      */
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield usuario_1.Usuario.find();
        });
    }
    /**
     *
     */
    getOneUser(_, { _id }) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield usuario_1.Usuario.findById(_id);
        });
    }
    /**
      *
      * @param _ no used
      * @param param1 input to create new user
      */
    createUsuario(_, { input }) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = new usuario_1.Usuario(input);
            yield newUser.save();
            console.log(newUser);
            return newUser;
        });
    }
    /**
      *
      * @param _ no used
      * @param param1 id for delete user
      */
    deleteUsuario(_, { _id }) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield usuario_1.Usuario.findByIdAndDelete(_id);
        });
    }
    /**
     * Update User
     * @param _ no used
     * @param param1 id and input user for uptdate
     */
    updateUsuario(_, { _id, input }) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield usuario_1.Usuario.findByIdAndUpdate(_id, input, { new: true });
        });
    }
}
exports.default = User;
