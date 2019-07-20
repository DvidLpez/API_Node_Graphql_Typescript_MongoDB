// Creacion del servidor express
import {environments} from '../config/environments';
import express from 'express';
import mongoose from 'mongoose';

const conection = environments.conectionDB;

export default class Server
{
    private database: string = `${conection.protocol}${conection.host}/${conection.db}`;
    public app:express.Application;
    public port: number = 3000;

    constructor(){
        this.app = express();
    }

    async conection() {
        try {
            await mongoose.connect( this.database, { 
                useNewUrlParser: true, 
                useCreateIndex: true
            });
            console.log('****** Conexión con MongoDB estableciada'); 
        }
        catch (err){
            if(err) throw err;
            
        }
    }

    start( callback: any ) {
        this.app.listen( this.port, callback );
    }
}