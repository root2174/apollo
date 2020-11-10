import styled from 'styled-components';

const BackLink = styled.div`
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

export default BackLink;
