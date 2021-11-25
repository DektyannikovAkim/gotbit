import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  display: inline-block;
  margin-top: 30px;

  :after {
    content: " ";
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 8px solid #ff9121;
    border-color: #ff9121 transparent #ff9121 transparent;
    animation: ${rotate} 1.2s linear infinite;
  }

  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
