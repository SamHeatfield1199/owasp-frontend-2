import React from 'react';
import Input from '../utils/form/input';
import { Formik, Form } from 'formik';
import useAsyncAction from '../../hooks/use-async-action/use-async-action';

const SignUp = ({ setAlerts, setAccessToken }) => {
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
          <p className="label mt-m-1 mb-s-1">Пароль должен состоять из 6 латинских прописных букв</p>

          <button
            disabled={isSubmitting}
            type="submit"
            className={`sign-in__btn btn btn--primary btn--flat 
            ${isSubmitting ? 'btn--spinner btn--submitted' : ''} mt-m-2`}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
