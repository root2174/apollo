import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  height: 60px;
  border: 0;
  border-radius: 8px;
  font-weight: 500;
  margin-top: 16px;
  background: #6c63ff;
  color: #f8f8f8;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(90%);
  }
`;

export default Button;
