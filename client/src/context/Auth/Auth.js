import { createContext, useContext } from 'react';

const AuthContext = createContext({ isLoggedIn: false, user: {} });

export default AuthContext;
export const useAuth = () => useContext(AuthContext);
