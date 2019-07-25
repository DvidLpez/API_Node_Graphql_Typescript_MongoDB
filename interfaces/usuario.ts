import { Document } from 'mongoose';

export interface IUsuario extends Document {
   firstName: string;
   lastName: string;
}