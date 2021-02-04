import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { AuthContext } from '../../context';
import { login as loginService } from '../../services/api/user/user';

export default function Session(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const login = async ({ email, password }) => {
    const { token, user } = await loginService({ email, password });
    if (user && token) {
      setLoggedIn(true);
      setUser(user);
      localStorage.setItem('token', token);
    }
  };

  const logout = () => {
    setLoggedIn(false);
    setUser({});
    localStorage.setItem('token', '');
  };

  const updateUser = (userData = {}) => {
    setUser({ ...user, ...userData });
  };

  return <AuthContext.Provider value={{ isLoggedIn, login, logout, updateUser, user }} {...props} />;
}

Session.propTypes = {
  children: PropTypes.element,
};
