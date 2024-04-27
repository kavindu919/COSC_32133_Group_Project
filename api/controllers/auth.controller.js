import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

//create user
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    //hash the password
    const hasedPassword = await bcrypt.hash(password, 10);

    //create new user
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hasedPassword,
      },
    });
    console.log(newUser);
    res.status(201).json({ message: "User created sussesfull.." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Invalid" });
  }
};
