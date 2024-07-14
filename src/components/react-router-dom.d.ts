// Create a file named react-router-dom.d.ts in your src folder

import { History } from 'history';

declare module 'react-router-dom' {
  export const useHistory: () => History;
}
