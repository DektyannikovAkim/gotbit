import { observer } from "mobx-react";
import { useContext } from "react";
import { ProductModel } from "../../../../moduls/product";
import { ProductStoreContext } from "../../../../store/products";
import * as styles from "./style";

interface Props {
  product: ProductModel;
}

export const ProductItem = observer((props: Props) => {
  let item = props.product;
  const context = useContext(ProductStoreContext);
  return (
    <styles.WrapperForProductItem>
      <styles.CheckboxWrapper>
        <styles.Checkbox
          type="checkbox"
          id={item.id.toString()}
          checked={item.done}
          onChange={() => context.completeProduct(item)}
        />
        <styles.Label htmlFor={item.id.toString()} />
      </styles.CheckboxWrapper>
      <styles.TextContent>{item.kind}</styles.TextContent>
      <styles.TextContent aria-checked={item.done}>{item.title}</styles.TextContent>
      <styles.TextContent>{item.price} &#8381;</styles.TextContent>
      <styles.WrapperForBtn>
        <styles.Close onClick={() => context.removeProduct(item.id)}>
          &#215;
        </styles.Close>
      </styles.WrapperForBtn>
    </styles.WrapperForProductItem>
  );
});
