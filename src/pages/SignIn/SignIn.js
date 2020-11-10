import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import image from '../../assets/signInImg.svg';
import logo from '../../assets/apollo-logo.svg';
import { Container } from '../../components/containers/Layout/Layout';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

const FormContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 80%;
`;

const Img = styled.img`
  width: 60%;
  margin-left: 30px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 350px;
  margin-right: 30px;
`;

const Form = styled.form`
  margin-top: 10px;

  a {
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: #6c63ff;
    font-size: 18px;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }

    svg {
      margin-right: 8px;
    }
  }
`;

const SignIn = () => {
  return (
    <FormContainer>
      <Section>
        <Logo src={logo} alt="Logo" />
        <Form>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Button type="submit">Sign In</Button>

          <Link to="/signup">
            <FiLogIn size={16} />I don&apos;t have an account
          </Link>
        </Form>
      </Section>
      <Img src={image} alt="Friends hugging" />
    </FormContainer>
  );
};

export default SignIn;
