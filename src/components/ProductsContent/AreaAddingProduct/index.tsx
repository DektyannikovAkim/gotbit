import React, { FC, useContext, useState } from "react";
import { observer } from "mobx-react";
import { ProductStoreContext } from "../../../store/products";
import { SelectorTypeProd } from "./SelectorTypeProd";
import * as styles from "./style";
import { SubmitBtn } from "./SubmitBtn";
import { useForm } from "react-hook-form";

export const AreaAddingProduct = observer(() => {
  const context = useContext(ProductStoreContext);
  const { register } = useForm({});
  return (
    <styles.AddingForm
      onSubmit={(e) => {
        context.submitHandler(e);
      }}
    >
      <SelectorTypeProd />
      <styles.Input
        // onChange={(e) => context.setProductName(e)}
        type="text"
        value={context.productName}
        {...register("hui", { onChange: (e) => context.setProductName(e) })}
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
      {/* <form>
      <MainGroup label='' icon={<icon1 />}>
      <div>
        
        <
          
        >
          <Input label value onChange name/>
          <Input label value onChange name/>
          <Input label value onChange name/>
        </Group>
      </div>

      </MainGroup>
      </form> */}
      <SubmitBtn />
      {/* <styles.InputRange
        onChange={(e) => context.changeInputRange(e)}
        type="range"
        min="0"
        max="100"
      /> */}
    </styles.AddingForm>
  );
});

// const MainGroup: FC = ({label, icon, children})=>{
//   const [isOpen, setIsOpen] = useState(true)
//   return (
//     <div>
//       <h3>{label} <span>{icon}</span></h3>
//       <div>{children}</div>
//     </div>
//   )
// }
