import React from 'react';
import LoginForm from '../components/login/LoginForm';
import styles from '../styles/pages/Login.module.css';

const Login = (): JSX.Element => {
  return (
    <div className={styles.loginContainer}>
      <header>
        <img className={styles.simbolo} src="img/simbolo.svg" alt="simbolo" />
      </header>

      <section>
        <img className={styles.logo} src="img/logo.svg" alt="logo" />

        <div>
          <h1>Bem-vindo</h1>

          <div className={styles.githubMessage}>
            <img src="img/github.svg" alt="github" />
            <p>Faca login com seu Github para comecar</p>
          </div>

          <LoginForm />
        </div>
      </section>
    </div>
  );
};

export default Login;
