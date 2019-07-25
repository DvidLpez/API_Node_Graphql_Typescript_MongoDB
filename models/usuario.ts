/**
 * @name            usuarioSchema
 * @description     Modelo de datos para un objeto usuario en Mongo
 * 
 */
import { Schema, model } from 'mongoose';
import { IUsuario } from '../interfaces/usuario';


const USER_SCHEMA = new Schema({

   firstName: {
      type: String,
      required: true
   },
   lastName: {
      type: String,
      required: true
   }
});

export const Usuario = model<IUsuario>('Usuario', USER_SCHEMA);




