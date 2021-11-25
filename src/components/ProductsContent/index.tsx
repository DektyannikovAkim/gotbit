import React from "react";
import { AreaAddingProduct } from "./AreaAddingProduct";
import { ProductList } from "./ProductList";
import * as styles from "./style";

export const ProductsContent = () => {
  return (
    <styles.WrapperForProdContent>
      <AreaAddingProduct />
      <ProductList />
    </styles.WrapperForProdContent>
  );
};
