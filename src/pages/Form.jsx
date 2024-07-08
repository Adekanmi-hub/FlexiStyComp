import React, { Children } from 'react';
import MyForm from '../components/form/MyForm';

const Form = () => {
  return (
    <MyForm>
      {Children}
    </MyForm>
  );
};

export default Form;
