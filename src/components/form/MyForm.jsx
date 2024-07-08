import React from 'react';
import InputChildren from '../input/InputChildren';
import styled from 'styled-components';


const FormContainer = styled.div`
    padding-top: 2%;
    padding-left: 2%;
`

export const MyForm = () => {
  const handleSubmit = (formData) => {
    console.log('Form data:', formData);
    // Perform form submission logic here
  };

  return (
    <FormContainer>
        <form onSubmit={handleSubmit}>
        <InputChildren />
        </form>
    </FormContainer>
    
  );
};

export default MyForm;