import { observer } from "mobx-react";
import { useContext } from "react";
import { ProductStoreContext } from "../../../../store/products";
import * as styles from "./style";
import { Types } from "./Types";

export const SelectorTypeProd = observer(() => {
  const context = useContext(ProductStoreContext);

  return (
    <styles.Selector onClick={() => context.toggleSelector()}>
      <span>
        {context.selectedCategory.length
          ? context.selectedCategory
          : "Тип покупки"}
      </span>
      {context.checkSelector ? <styles.ArrowUp /> : <styles.ArrowDown />}
      {context.checkSelector ? <Types /> : null}
      {!context.checkCategoty ? (
        <styles.WarningMessage>Укажите категорию товара!</styles.WarningMessage>
      ) : null}
    </styles.Selector>
  );
});
