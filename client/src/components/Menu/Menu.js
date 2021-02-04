import React from 'react';
import { Alignment, Button, Navbar } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

import { useAuth } from '../../context';

const MenuButton = (props) => <Button className="bp3-minimal" {...props} />;

const Menu = () => {
  const { isLoggedIn, user, logout } = useAuth();
  console.log('🚀 ~ file: Menu.js ~ line 11 ~ Menu ~ user', user);

  return (
    <div className=".bp3-dark">
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Kanon Gaming</Navbar.Heading>
          <Navbar.Divider />
          <Link to={'/'}>
            <MenuButton icon="globe" text="Country" />
          </Link>
          <Link to={'/country-list'}>
            <MenuButton icon="globe" text="All Countries" />
          </Link>
          {!isLoggedIn && (
            <>
              <Link to={'/login'}>
                <MenuButton icon="log-in" text="Login" />
              </Link>
              <Link to={'/registration'}>
                <MenuButton icon="user" text="Registration" />
              </Link>
            </>
          )}
          {isLoggedIn && (
            <>
              <Link to={'/slot-machine'}>
                <MenuButton icon="dollar" text="Slot Machine" />
              </Link>
              <MenuButton icon="log-out" text="Logout" onClick={logout} />
            </>
          )}
        </Navbar.Group>
        {isLoggedIn && <Navbar.Group align={Alignment.RIGHT}>Hello {user.name}</Navbar.Group>}
      </Navbar>
    </div>
  );
};

export default Menu;
