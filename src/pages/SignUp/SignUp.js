import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiArrowLeft } from 'react-icons/fi';
import logo from '../../assets/apollo-logo.svg';
import BackLink from '../../components/common/BackLink';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { Container } from '../../components/containers/Layout/Layout';

const RegisterContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Section = styled.section`
  width: 100%;
  max-width: 380px;
`;

const Logo = styled.img`
  width: 80%;
`;

const Paragraph = styled.p`
  font-size: 18px;
  color: #737380;
  line-height: 32px;
`;

const Form = styled.form`
  width: 100%;
  max-width: 450px;
`;

const InputForm = styled(Input)`
  margin-top: 8px;
`;

const InputGroup = styled.div`
  display: flex;

  input + input {
    margin-left: 8px;
  }
`;

const SignUp = () => {
  return (
    <RegisterContainer>
      <Content>
        <Section>
          <Logo src={logo} alt="Logo" />
          <Paragraph>
            Be part of a platform that helps you find new friends!
          </Paragraph>
          <BackLink>
            <Link to="/">
              <FiArrowLeft size={16} />
              Back to Login
            </Link>
          </BackLink>
        </Section>
        <Form action="">
          <InputForm placeholder="Name" />
          <InputForm type="email" placeholder="Email" />
          <InputForm type="password" placeholder="Password" />
          <InputGroup>
            <InputForm placeholder="City" />
            <InputForm placeholder="State" style={{ width: 82 }} />
          </InputGroup>
          <Button type="submit"> Sign Up </Button>
        </Form>
      </Content>
    </RegisterContainer>
  );
};

export default SignUp;
