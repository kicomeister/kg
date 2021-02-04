import React, { useState } from 'react';
import { H1, H2, Button, Spinner } from '@blueprintjs/core';
import { Redirect } from 'react-router-dom';

import { getSlotMachineSpin } from '../../services/api/game/game';
import { useAuth } from '../../context';

export default function CountryList() {
  const [reels, setReels] = useState(['x', 'x', 'x']);
  const [loading, setLoading] = useState(false);
  const { isLoggedIn, updateUser, user } = useAuth();

  const spin = async function fetchData() {
    const { result, user } = await getSlotMachineSpin();
    setLoading(false);

    if (result) {
      setReels(result);
      updateUser(user);
    }
  };

  return isLoggedIn ? (
    <div>
      <H1>Slot Machine</H1>
      <p>Your available coins: {user.points}</p>
      {!loading && <Button text="Spin!" onClick={spin} />}
      {loading && <Spinner />}
      {!loading && <H2>{reels.map((reel) => `[${reel}]`)}</H2>}
    </div>
  ) : (
    <Redirect to={{ pathname: '/login' }} />
  );
}
