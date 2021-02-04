import React from 'react';
import PropTypes from 'prop-types';
import { Card, Elevation, H3 } from '@blueprintjs/core';

import styles from './CountryCard.module.css';

export default function CountryCard({ capital, name }) {
  return (
    <Card interactive={true} elevation={Elevation.TWO} className={styles.card}>
      <H3>{name}</H3>
      <p>{capital}</p>
    </Card>
  );
}

CountryCard.propTypes = {
  capital: PropTypes.string,
  name: PropTypes.string,
};
