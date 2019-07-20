import { Usuario } from './../models/usuario';

export default class Test {

   constructor() {}
   /**
     * First Test
     */
   hello () {
      return "Hello World con GraphQl"
    }
    /**
     * query de prueba con parámetros
     */
   greet (root: any, { name }: any, ctx: any ) {
      console.log(ctx);
      return `Hello ${name}!!`;
   }
}