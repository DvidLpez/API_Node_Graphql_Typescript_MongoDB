/**
 * @name            usuarioSchema
 * @description     Modelo de datos para un objeto usuario
 * 
 */
import { Schema, model, Document } from 'mongoose';

interface IUsuario extends Document {
   firstName: string;
   lastName: string;
}

const usuarioSchema = new Schema({

   firstName: {
      type: String,
      required: true
   },
   lastName: {
      type: String,
      required: true
   }
});

export const Usuario = model<IUsuario>('Usuario', usuarioSchema);




