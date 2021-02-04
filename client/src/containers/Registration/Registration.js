import React, { useState } from 'react';
import { Button, H1, FormGroup, InputGroup } from '@blueprintjs/core';
import { Redirect, useHistory } from 'react-router-dom';

import { useAuth } from '../../context';
import { registration as registrationService } from '../../services/api/user/user';

export default function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { isLoggedIn } = useAuth();
  const history = useHistory();

  const registration = async () => {
    const data = await registrationService({ email, name, password });
    if (data) {
      history.push('/login');
    }
  };

  return isLoggedIn ? (
    <Redirect to={{ pathname: '/login' }} />
  ) : (
    <div>
      <H1>Registration</H1>
      <FormGroup label="E-mail" labelFor="email">
        <InputGroup id="email" placeholder="example@mailer.com" onChange={(e) => setEmail(e.target.value)} />
      </FormGroup>
      <FormGroup label="Name" labelFor="name">
        <InputGroup id="name" placeholder="John Doe" onChange={(e) => setName(e.target.value)} />
      </FormGroup>
      <FormGroup label="Password" labelFor="pass">
        <InputGroup id="pass" type="password" onChange={(e) => setPassword(e.target.value)} />
      </FormGroup>
      <Button icon="refresh" text="Login" onClick={() => registration({ email, name, password })} />
    </div>
  );
}
