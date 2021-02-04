import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from '../../components';
import classNames from 'classnames';
import styles from './Page.module.css';

export default function Page({ children }) {
  return (
    <div className={classNames(styles.page, 'bp3-dark')}>
      <Menu></Menu>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.element,
};
