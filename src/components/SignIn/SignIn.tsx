import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { setUser, setUserOrders } from "../../redux/Slicers";
import { fetchOrdersDataForUser, loginUser } from "../../services/fetchData";
import { onRegisterClicked, validInputs } from "./Register";
import { CloseNavbar } from "../Order/OrderDesktop/style";
import {
  PrimaryBtnFrame,
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
  let currentUser = localStorage.getItem("username");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const buttonStyle = {
    background: `${email || password ? "#000000" : "#979797"}`,
  };
  const containerStyle = {
    height: `${currentUser ? "200px" : "590px"}`,
    gap: `${currentUser ? "15px" : "40px"}`,
  };

  const args = {
    email,
    password,
  };

  const onLoginClicked = async () => {
    if (validInputs(email, password)) {
      if (currentUser !== email) {
        loginUser(args).then((res) => {
          dispatch(setUser(res?.email));
          localStorage.setItem("username", res?.email);
          fetchOrdersDataForUser(localStorage.getItem("username")!).then(
            (res) => dispatch(setUserOrders(res))
          );
          if (res?.email) signInProps.toggleUser();
        });
      } else {
        toast.error("User already logged in", {
          position: "bottom-center",
          hideProgressBar: true,
        });
      }
    }
  };

  const onLogoutClicked = () => {
    localStorage.removeItem("username");
    signInProps.toggleUser();
    currentUser = "";
    dispatch(setUserOrders([]));
  };

  const signedIn = (
    <>
      <InfoFrame>
        <Title>Sign In</Title>
        <SubTitle>To continue the order, please sign in</SubTitle>
        <InputFiled>
          {email && <InputTitle>Email address</InputTitle>}
          <InputEmail onChange={(text) => setEmail(text.target.value)} />
        </InputFiled>
        <InputFiled>
          {password && <InputTitle>Password</InputTitle>}
          <InputPassword onChange={(text) => setPassword(text.target.value)} />
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
    </>
  );

  const alreadySignedIn = (
    <>
      <Title style={{ marginTop: "15px" }}>You are already signed in</Title>
      <SubTitle style={{ margin: "0" }}>
        Are you sure you want to logout?
      </SubTitle>

      <PrimaryFrame>
        <PrimaryBtnFrame
          onClick={onLogoutClicked}
          style={{ marginTop: "20px" }}
        >
          <PrimaryBtnTitle>logout</PrimaryBtnTitle>
        </PrimaryBtnFrame>
      </PrimaryFrame>
    </>
  );

  return (
    <>
      <SignInContainer style={containerStyle} page={signInProps.page}>
        {signInProps.page === "Desktop" ? (
          <>
            <CloseNavbar>
              <CloseIcon onClick={signInProps.toggleUser} />
            </CloseNavbar>
          </>
        ) : (
          ""
        )}

        {currentUser ? <>{alreadySignedIn}</> : <>{signedIn}</>}
      </SignInContainer>
    </>
  );
};

export default SignIn;
