import { useState } from "react";
import { toast } from "react-toastify";
import { loginUser } from "../../services/fetchData";

import {
  PrimaryBtnTitle,
  PrimaryGrayBtnFrame,
  SecondaryBtnTitle,
  SecondaryFrame,
} from "../buttons";
import {
  ForgetQuestion,
  InfoFrame,
  InputEmail,
  InputFiled,
  InputPassword,
  InputTitle,
  Line,
  Or,
  PrimaryFrame,
  RowSpace,
  SignInContainer,
  SubTitle,
  Title,
} from "./style";
import { onRegisterClicked } from "./Register";

interface Params {
  page?: string;
}

const SignIn = (signInProps: Params) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const buttonStyle = {
    background: `${email || password ? "#000000" : "#979797"}`,
  };

  const args = {
    email,
    password,
  };

  // BUG
  const onLoginClicked = async () => {
    if (email && password) loginUser(args);
    else {
      toast.error("Fill all fields please!", {
        position: "bottom-center",
        hideProgressBar: true,
      });
    }
  };

  return (
    <>
      <SignInContainer page={signInProps.page}>
        <InfoFrame>
          <Title>Sign In</Title>
          <SubTitle>To continue the order, please sign in</SubTitle>
          <InputFiled>
            {email && <InputTitle>Email address</InputTitle>}
            <InputEmail onChange={(text) => setEmail(text.target.value)} />
          </InputFiled>
          <InputFiled>
            {password && <InputTitle>Password</InputTitle>}
            <InputPassword
              onChange={(text) => setPassword(text.target.value)}
            />
          </InputFiled>
        </InfoFrame>

        <PrimaryFrame>
          <PrimaryGrayBtnFrame style={buttonStyle} onClick={onLoginClicked}>
            <PrimaryBtnTitle>login</PrimaryBtnTitle>
          </PrimaryGrayBtnFrame>
          <ForgetQuestion>Forget password?</ForgetQuestion>
        </PrimaryFrame>

        <RowSpace>
          <Line />
          <Or>or</Or>
          <Line />
        </RowSpace>

        <SecondaryFrame onClick={() => onRegisterClicked(args)}>
          <SecondaryBtnTitle>sign up</SecondaryBtnTitle>
        </SecondaryFrame>
      </SignInContainer>
    </>
  );
};

export default SignIn;
