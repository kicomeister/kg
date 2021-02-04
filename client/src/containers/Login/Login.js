import React, { useState } from 'react';
import { Button, H1, FormGroup, InputGroup } from '@blueprintjs/core';
import { Redirect } from 'react-router-dom';

import { useAuth } from '../../context';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLoggedIn, login } = useAuth();

  return isLoggedIn ? (
    <Redirect to={{ pathname: '/' }} />
  ) : (
    <div>
      <H1>Login</H1>
      <FormGroup label="E-mail" labelFor="email">
        <InputGroup id="email" placeholder="example@mailer.com" onChange={(e) => setEmail(e.target.value)} />
      </FormGroup>
      <FormGroup label="Password" labelFor="pass">
        <InputGroup id="pass" type="password" onChange={(e) => setPassword(e.target.value)} />
      </FormGroup>
      <Button icon="refresh" text="Login" onClick={() => login({ email, password })} />
    </div>
  );
}
