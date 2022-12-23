import {
  ForgetQuestion,
  InfoFrame,
  InputEmail,
  InputFiled,
  InputPassword,
  InputTitle,
  Line,
  Or,
  PrimaryBtnFrame,
  PrimaryBtnTitle,
  PrimaryFrame,
  RowSpace,
  SecondaryBtnTitle,
  SecondaryFrame,
  SignInContainer,
  SubTitle,
  Title,
} from "./style";

interface Params {
  page?: string;
}

const SignIn = (signInProps: Params) => {
  return (
    <>
      <SignInContainer page={signInProps.page}>
        <InfoFrame>
          <Title>Sign In</Title>
          <SubTitle>To continue the order, please sign in</SubTitle>
          <InputFiled>
            <InputTitle></InputTitle> {/*float input */}
            <InputEmail></InputEmail>
          </InputFiled>
          <InputFiled>
            <InputTitle></InputTitle>
            <InputPassword></InputPassword>
          </InputFiled>
        </InfoFrame>

        <PrimaryFrame>
          <PrimaryBtnFrame>
            <PrimaryBtnTitle>login</PrimaryBtnTitle>
          </PrimaryBtnFrame>
          <ForgetQuestion>Forget password?</ForgetQuestion>
        </PrimaryFrame>

        <RowSpace>
          <Line />
          <Or>or</Or>
          <Line />
        </RowSpace>

        <SecondaryFrame>
          <SecondaryBtnTitle>sign up</SecondaryBtnTitle>
        </SecondaryFrame>
      </SignInContainer>
    </>
  );
};

export default SignIn;
