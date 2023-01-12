import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setUser } from "../../redux/Slicers";
import { loginUser } from "../../services/fetchData";
import { onRegisterClicked } from "./Register";
import { CloseNavbar } from "../Order/OrderDesktop/style";
import {
  PrimaryBtnTitle,
  PrimaryGrayBtnFrame,
  SecondaryBtnTitle,
  SecondaryFrame,
} from "../buttons";
import {
  CloseIcon,
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

interface Params {
  page?: string;
  toggleUser: () => void;
}

const SignIn = (signInProps: Params) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: any) => state.currentUser.email);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const buttonStyle = {
    background: `${email || password ? "#000000" : "#979797"}`,
  };

  const args = {
    email,
    password,
  };

  const validInputs = () => {
    if (email && password && email.includes("@")) return true;
    else {
      toast.error("Fill all fields please!", {
        position: "bottom-center",
        hideProgressBar: true,
      });
      return false;
    }
  };

  const onLoginClicked = async () => {
    if (validInputs()) {
      if (currentUser !== email) {
        loginUser(args).then((res) => {
          dispatch(setUser(res?.email));
          signInProps.toggleUser();
        });
      } else {
        toast.error("User already logged in", {
          position: "bottom-center",
          hideProgressBar: true,
        });
      }
    }
  };

  return (
    <>
      <SignInContainer page={signInProps.page}>
        {signInProps.page === "Desktop" ? (
          <>
            <CloseNavbar>
              <CloseIcon onClick={signInProps.toggleUser} />
            </CloseNavbar>
          </>
        ) : (
          ""
        )}

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
