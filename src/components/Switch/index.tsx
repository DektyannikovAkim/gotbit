import React from "react";
import * as styles from "./style";

export const SwitchToggle = () => {
  return (
    <styles.WrapperForSwitchToggle>
      <styles.WrapperForRadio>
        <styles.RadioButton value="1" id="1" name="SwitchToggle" />
        <styles.LabelForRadio htmlFor="1" title="1">
          <span>1</span>
        </styles.LabelForRadio>
      </styles.WrapperForRadio>

      <styles.WrapperForRadio>
        <styles.RadioButton id="5" name="SwitchToggle" />
        <styles.LabelForRadio htmlFor="5" title="5">
          <span>5</span>
        </styles.LabelForRadio>
      </styles.WrapperForRadio> 
    </styles.WrapperForSwitchToggle>
  );
};
