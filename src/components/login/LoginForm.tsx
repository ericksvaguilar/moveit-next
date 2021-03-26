import React from 'react';
import styles from '../../styles/components/login/LoginForm.module.css';

const LoginForm = (): JSX.Element => {
  return (
    <div className={styles.loginFormContainer}>
      <form>
        <input type="text" placeholder="Digite seu username" />
        <button type="submit">
          <img src="img/arrow-right.svg" alt="arrow" />
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
