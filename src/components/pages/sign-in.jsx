import React from 'react';
import Input from '../utils/form/input';
import { Formik, Form } from 'formik';
import useAsyncAction from '../../hooks/use-async-action/use-async-action';
import { NavLink } from 'react-router-dom';

const SignIn = ({ setAlerts, setAccessToken }) => {
  const [asyncAction] = useAsyncAction();

  return (


    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={async (values) => {
        // async
        const config = {
          method: 'post',
          url: `/auth/sign-in`,
          data: { ...values },
        };

        const data = await asyncAction(config, setAlerts);

        if (data) setAccessToken(data.accessToken);
      }}>
      {({ isSubmitting }) => (
        <Form className="sign-in">
          <h1 className="sign-in__heading">Sign in</h1>

          <div className="label mb-s-1">Username</div>
          <Input className="sign-in__input input mb-m-1" type="text" name="username" />

          <div className="label mb-s-1">Password</div>
          <Input className="sign-in__input input" type="password" name="password" />
          <div className="btn">
            <button
              disabled={isSubmitting}
              type="submit"
              className={`sign-in__btn btn btn--primary btn--flat 
            ${isSubmitting ? 'btn--spinner btn--submitted' : ''} mt-m-2`}>
              Submit
          </button>
            <NavLink to={"/sign_up"}>
              <button className={`sign-in__btn btn btn--primary btn--flat  mt-m-2  ml-b-3`}>Sign Up</button>
            </NavLink>
          </div>
        </Form>
      )}
    </Formik>

  );
};

export default SignIn;
