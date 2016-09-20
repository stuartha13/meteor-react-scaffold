import React from 'react';

export const AuthForm = (props) => {
  return (
    <form onSubmit={ props.onSubmit }>
      <div className="row">
        <div className="col">
          <input id="email" type="email" placeholder="Email address" />
        </div>

        <div className="col">
          <input id="password" type="password" placeholder="Password" />
        </div>

        <div className="col">
          <button type="submit">{ props.submitText }</button>
        </div>
      </div>
    </form>
  );
};
