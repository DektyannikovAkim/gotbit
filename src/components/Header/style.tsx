import styled from "styled-components";
import image from "../../img/Logo.svg";

export const WrapperForHeader = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 65px;
  border-bottom: 3px solid #0a0a0a;
`;

export const WrapperForLogo = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 50%;
  width: 10%;
  height: 13vh;
  background-color: #ff9121;
`;

export const Logo = styled.div`
  width: 80%;
  background: center no-repeat url(${image});
`;

export const Session = styled.div`
  color: #ff9121;
`;
