import React, { useContext, useEffect } from "react";
import { observer } from "mobx-react";
import { ProductStoreContext } from "../../../store/products";
import { Loader } from "../Loader";
import { ProductItem } from "./ProductItem";
import * as styles from "./style";

export const ProductList = observer(() => {
  const context = useContext(ProductStoreContext);
  useEffect(() => {
    context.getProductList();
  }, [context]);
  if (!context.loading)
    return (
      <styles.WrapperForProducts>
        <Loader />
      </styles.WrapperForProducts>
    );
  return (
    <styles.WrapperForProducts>
      {context.products.length
        ? context.products.map((product) => (
            <ProductItem product={product} key={product.id}></ProductItem>
          ))
        : "You haven't added any products yet :("}
    </styles.WrapperForProducts>
  );
});
