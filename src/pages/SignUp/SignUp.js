import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';
import logo from '../../assets/apollo-logo.svg';
import BackLink from '../../components/common/BackLink';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import { Container } from '../../components/containers/Layout/Layout';
import api from '../../services/api';

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

const InputRadioGroup = styled.div`
  margin: 1rem 0 0.5rem;
`;

const InputRadio = styled.input`
  margin-left: 1rem;
`;

const InputGroup = styled.div`
  display: flex;

  input + input {
    margin-left: 8px;
  }
`;

const SignUp = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [password, setPassword] = useState('');
  const [interests, setInterests] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  async function handleSignUp(e) {
    e.preventDefault();
    try {
      const data = {
        name,
        email,
        dob,
        gender,
        password,
        interests,
        city,
        state,
        friends: '[]',
      };
      await api.post('/user', data);
      toast.success('User registered!');
    } catch (err) {
      toast.error('Was not able to register user.', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

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
        <Form onSubmit={handleSignUp}>
          <InputForm
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputForm
            placeholder="Date of Birth"
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <InputRadioGroup
            value={gender}
            onChange={(e) => setGender(e.target.value.toLocaleLowerCase())}
          >
            <InputRadio type="radio" value="Male" name="gender" /> Male
            <InputRadio type="radio" value="Female" name="gender" /> Female
            <InputRadio type="radio" value="Other" name="gender" /> Other
          </InputRadioGroup>
          <InputForm
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputForm
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputForm
            type="text"
            placeholder="Your interests, separated by a comma"
            value={interests}
            onChange={(e) => setInterests(e.target.value.toLocaleLowerCase())}
          />
          <InputGroup>
            <InputForm
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value.toLocaleLowerCase())}
            />
            <InputForm
              placeholder="State"
              style={{ width: 82 }}
              value={state}
              onChange={(e) => setState(e.target.value.toLocaleLowerCase())}
            />
          </InputGroup>
          <Button type="submit"> Sign Up </Button>
        </Form>
      </Content>
    </RegisterContainer>
  );
};

export default SignUp;
