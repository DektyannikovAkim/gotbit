import React, { useContext } from "react";
import { observer } from "mobx-react";
import { ProductStoreContext } from "../../store/products";
import * as styles from "./style";
import { SwitchToggle } from "../Switch";

export const Header = observer(() => {
  const context = useContext(ProductStoreContext);
  return (
    <styles.WrapperForHeader>
      <styles.WrapperForLogo>
        <styles.Logo />
      </styles.WrapperForLogo>
      <SwitchToggle />
      {context.authorizationState ? (
        <styles.Session>ID session : {context.sessionId}</styles.Session>
      ) : null}
    </styles.WrapperForHeader>
  );
});
