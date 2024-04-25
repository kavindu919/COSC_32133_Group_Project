import bcrypt from "bcrypt";

export const register = async (req, send) => {
  const { username, email, password } = req.body;

  //hash the password
  const hasedPassword = await bcrypt.hash(password, 10);
  console.log(hasedPassword);
};
export const login = (req, send) => {};
export const logout = (req, send) => {};
