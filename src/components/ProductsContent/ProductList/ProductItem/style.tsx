import styled from "styled-components";

export const WrapperForProductItem = styled.div`
  display: grid;
  grid-template-columns: 25px 60px repeat(2, 1fr) 30px;
  border-bottom: 1px solid #0a0a0a;
  padding: 10px 10px;

  :first-child {
    border-top: 1px solid #0a0a0a;
  }
`;

export const CheckboxWrapper = styled.div``;

export const Label = styled.label`
  position: relative;
  width: 21px;
  display: block;
  height: 21px;
  cursor: pointer;
  border: 2px solid #f4a505;
  border-radius: 100%;

  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    transition: all 0.1s;
    transform: scale(0.8);
  }
`;

export const Checkbox = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;

  :checked + ${Label}:after {
    background: #f4a505;
  }
`;

export const WrapperForBtn = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Close = styled.button`
  cursor: pointer;
  width: 25px;
  height: 25px;
  outline: none;
  display: inline-flex;
  line-height: 20px;
  border-radius: 100%;
  border: 2px solid #f4a505;
  color: #f4a505;
  background-color: inherit;
  font-size: 16px;
`;

export const TextContent = styled.div`
  margin: 0px;
  word-break: break-word;
  outline: none;
  text-decoration: ${(props) =>
    props["aria-checked"] ? "line-through" : "none"};
`;
