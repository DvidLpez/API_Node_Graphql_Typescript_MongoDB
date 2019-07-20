import Test from '../classes/test';
import User from '../classes/user';

const test = new Test();
const user = new User();

export const resolvers = {
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
