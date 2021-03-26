import React from 'react';
import styles from '../styles/pages/Login.module.css';

const Login = (): JSX.Element => {
  return (
    <div className={styles.loginContainer}>
      <div>
        <img className={styles.simbolo} src="img/simbolo.svg" alt="simbolo" />
      </div>

      <div>
        <img className={styles.logo} src="img/logo.svg" alt="logo" />
      </div>
    </div>
  );
};

export default Login;
