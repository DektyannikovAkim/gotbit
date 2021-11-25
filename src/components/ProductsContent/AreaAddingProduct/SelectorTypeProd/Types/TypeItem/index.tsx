import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { ProductStoreContext } from "../../../../../../store/products";
import * as styles from "./style";

interface Props {
  category: String;
}

export const TypeItem = observer((props: Props) => {
  const context = useContext(ProductStoreContext);
  return (
    <styles.Type onClick={(e) => context.setCategory(e)}>
      {props.category}
    </styles.Type>
  );
});
