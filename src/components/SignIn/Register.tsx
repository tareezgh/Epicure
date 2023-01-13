import PasswordValidator from "password-validator";
import { toast } from "react-toastify";
import { registerUser } from "../../services/fetchData";

interface Params {
  email: string;
  password: string;
}

export const validInputs = (email: string, password: string) => {
  if (email && password && email.includes("@")) return true;
  else if (!email || !password) {
    toast.error("Fill all fields please!", {
      position: "bottom-center",
      hideProgressBar: true,
    });
  } else if (!email.includes("@")) {
    toast.error("Email should include @", {
      position: "bottom-center",
      hideProgressBar: true,
    });
  }

  return false;
};

export const onRegisterClicked = async (registerProps: Params) => {
  const { email, password } = registerProps;

  if (!validInputs(email, password)) return false;

  const schema = new PasswordValidator();
  schema
    .is()
    .min(6)
    .is()
    .max(100)
    .has()
    .uppercase()
    .has()
    .lowercase()
    .has()
    .digits(2)
    .has()
    .not()
    .spaces();

  if (!schema.validate(password)) {
    toast.error("Password is too weak!", {
      position: "bottom-center",
      hideProgressBar: true,
    });
    return schema.validate(password, { details: true });
  }
  try {
    registerUser(registerProps);
    return true;
  } catch (error) {
    return false;
  }
};
