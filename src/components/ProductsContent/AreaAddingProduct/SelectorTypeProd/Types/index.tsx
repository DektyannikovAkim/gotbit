import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { ProductStoreContext } from "../../../../../store/products";
import * as styles from "./style";
import { TypeItem } from "./TypeItem";

export const Types = () => {
  const context = useContext(ProductStoreContext);
  const selector = useRef(null);
  useEffect(() => {
    const cb = (e: MouseEvent) => {
      if (!e.composedPath().find((el) => el === selector.current)) {
        context.closeSelector();
      }
    };
    document.addEventListener("click", cb);
    return () => {
      document.removeEventListener("click", cb);
    };
  });
  return (
    <styles.WrapperForType ref={selector}>
      {context.productCategories.map((el) => (
        <TypeItem category={el} key={context.productCategories.indexOf(el)} />
      ))}
    </styles.WrapperForType>
  );
};
