"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Creacion del servidor express
const environments_1 = require("../config/environments");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const conection = environments_1.environments.conectionDB;
class Server {
    constructor() {
        this.database = `${conection.protocol}${conection.host}/${conection.db}`;
        this.port = 3000;
        this.app = express_1.default();
    }
    conection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield mongoose_1.default.connect(this.database, {
                    useNewUrlParser: true,
                    useCreateIndex: true
                });
                console.log('****** Conexión con MongoDB estableciada');
            }
            catch (err) {
                if (err)
                    throw err;
            }
        });
    }
    start(callback) {
        this.app.listen(this.port, callback);
    }
}
exports.default = Server;
