import React from 'react';

const LoginForm = (): JSX.Element => {
  return (
    <form>
      <input type="text" placeholder="Digite seu username" />
      <button type="submit">
        <img src="img/arrow-right.svg" alt="arrow" />
      </button>
    </form>
  );
};

export default LoginForm;
