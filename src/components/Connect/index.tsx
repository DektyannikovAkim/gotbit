import { observer } from "mobx-react";
import { useContext } from "react";
import { ProductStoreContext } from "../../store/products";
import * as styles from "./style";

export const ConnectBtn = observer(() => {
  const context = useContext(ProductStoreContext);
  return <styles.Button onClick={context.authorization}>CONNECT</styles.Button>;
});
