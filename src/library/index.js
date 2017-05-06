// class Library {
//   get moto() {
//     return 'library is working!';
//   }
//   doSomething() {
//     return 'library is working!';
//   }
// }
//
// const library = new Library();
//
// export { library };

import { doSomething } from './feature';

const library = {
  doSomething
};

export { doSomething };
