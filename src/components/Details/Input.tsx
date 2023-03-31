import React from "react";
import { InputFiled, InputTitle, Input } from "./style";

interface Params {
  myConst: string;
  myPlaceholder: string;
  myFunc: (str: React.SetStateAction<string>) => void;
}

const MyInput = (inputProps: Params) => {
  return (
    <>
      <InputFiled>
        {inputProps.myConst && (
          <InputTitle>{inputProps.myPlaceholder}</InputTitle>
        )}
        <Input
          placeholder={inputProps.myPlaceholder}
          onChange={(text) => inputProps.myFunc(text.target.value)}
        />
      </InputFiled>
    </>
  );
};

export default MyInput;
