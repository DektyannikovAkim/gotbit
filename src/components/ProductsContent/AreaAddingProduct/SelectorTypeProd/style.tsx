import styled from "styled-components";

export const Selector = styled.div`
  position: relative;
  cursor: pointer;
  min-width: 90px;
  padding: 5px;
  padding-right: 22px;
  border-radius: 10px;
  border: 2px solid #0a0a0a;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #ff9121;
  @media (max-width: 768px) {
    margin-bottom: 5px;
  }
`;

export const ArrowDown = styled.div`
  position: absolute;
  right: 5px;
  width: 0px;
  height: 0px;
  top: 14px;
  border-top: 6px solid #0a0a0a;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid transparent;
`;

export const ArrowUp = styled(ArrowDown)`
  top: 7px;
  border-top: 6px solid transparent;
  border-bottom: 6px solid #0a0a0a;
`;

export const WarningMessage = styled.div`
  position: absolute;
  top: 40px;
  border-radius: 10px;
  color: #9F6000;
    background-color: #FEEFB3;
  min-width: 150px;
`;
