import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';
import { toast } from 'react-toastify';
import image from '../../assets/signInImg.svg';
import logo from '../../assets/apollo-logo.svg';
import { Container } from '../../components/containers/Layout/Layout';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';
import BackLink from '../../components/common/BackLink';
import api from '../../services/api';

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
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();
    try {
      const data = {
        email,
        password,
      };
      const res = await api.post('/signin', data);
      if (res.status === 200) {
        toast.success('Welcome back');
        sessionStorage.setItem('user', JSON.stringify(res.data));
        history.push('/my-friends');
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      toast.error('User not found.', {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  return (
    <FormContainer>
      <Section>
        <Logo src={logo} alt="Logo" />
        <Form onSubmit={handleSignIn}>
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Sign In</Button>
          <BackLink>
            <Link to="/signup">
              <FiLogIn size={16} />I don&apos;t have an account
            </Link>
          </BackLink>
        </Form>
      </Section>
      <Img src={image} alt="Friends hugging" />
    </FormContainer>
  );
};

export default SignIn;
