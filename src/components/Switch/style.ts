import styled from "styled-components";

export const WrapperForSwitchToggle = styled.div`
  display: flex;
`;

export const WrapperForRadio = styled.div`
  :not(:nth-child(1)) {
    margin-left: 5px;
  }
`;

export const LabelForRadio = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  width: 21px;
  height: 21px;
  cursor: pointer;
  border: 1px solid #162330;
  border-radius: 100%;
  color: #fff;
  :before {
    content: "";
    position: absolute;
    background: linear-gradient(172.54deg, #fefefe -34.02%, #a4a4a4 92.91%);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    transition: all 0.1s;
    transform: scale(0.8);
  }
  & > span {
    position: absolute;
  }
`;

export const RadioButton = styled.input.attrs({ type: "radio" })`
  position: absolute;
  z-index: -1;
  opacity: 0;

  :checked + ${LabelForRadio}:before {
    background: linear-gradient(172.54deg, #499dff -34.02%, #0354ce 92.91%);
  }
  :checked + ${LabelForRadio} {
    border: 1px solid #0354ce;
  }
`;
