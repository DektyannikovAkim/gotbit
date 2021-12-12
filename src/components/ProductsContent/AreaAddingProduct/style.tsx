import styled from "styled-components";

export const AddingForm = styled.form`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  padding: 5px 10px;
  border: 2px solid #0a0a0a;
  outline: none;
  border-radius: 10px;
  background: inherit;
  color: #ff9121;
  @media (max-width: 768px) {
    margin-bottom: 5px;
  }
`;

export const InputRange = styled.input`
  background: linear-gradient(
    to right,
    #82cfd0 0%,
    #82cfd0 50%,
    #fff 50%,
    #fff 100%
  );
  border: solid 1px #82cfd0;
  border-radius: 8px;
  height: 7px;
  width: 356px;
  outline: none;
  transition: background 450ms ease-in;
  -webkit-appearance: none;
`;
