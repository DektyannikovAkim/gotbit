import { observer } from "mobx-react";
import { useContext } from "react";
import { ProductStoreContext } from "../../../store/products";
import { SelectorTypeProd } from "./SelectorTypeProd";
import * as styles from "./style";
import { SubmitBtn } from "./SubmitBtn";

export const AreaAddingProduct = observer(() => {
  const context = useContext(ProductStoreContext);
  return (
    <styles.AddingForm
      onSubmit={(e) => {
        context.submitHandler(e);
      }}
    >
      <SelectorTypeProd />
      <styles.Input
        onChange={(e) => context.setProductName(e)}
        type="text"
        value={context.productName}
        placeholder="Введите название товара"
        required
      />
      <styles.Input
        onChange={(e) => context.setProductPrice(e)}
        type="number"
        placeholder="Введите цену товара"
        value={context.productPrice}
        step={0.1}
        min={0}
        required
      />
      <SubmitBtn />
    </styles.AddingForm>
  );
});
