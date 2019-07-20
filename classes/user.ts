import { Usuario } from './../models/usuario';

export default class User {

   constructor() {}
   /**
     * Get all users
     */
   async getAllUsers() {
      return await Usuario.find();
   }
   /**
    * 
    */
   async getOneUser(_: any, {_id}: any) {
      return await Usuario.findById(_id);
   }
   /**
     * 
     * @param _ no used
     * @param param1 input to create new user
     */
   async createUsuario(_: any, { input }: any){
      const newUser = new Usuario(input);
      await newUser.save();
      console.log(newUser);
      return newUser;
   }
   /**
     * 
     * @param _ no used
     * @param param1 id for delete user
     */
    async deleteUsuario(_: any, { _id }: any) {
      return await Usuario.findByIdAndDelete(_id);
    }
    /**
     * Update User
     * @param _ no used
     * @param param1 id and input user for uptdate
     */
    async updateUsuario(_: any, { _id, input }: any) {
      return await Usuario.findByIdAndUpdate(_id, input, { new: true });
    }
}
