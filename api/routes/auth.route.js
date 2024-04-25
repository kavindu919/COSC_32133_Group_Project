import express from "express";

const router = express.Router();

router.post("/register", (req, res) => {
  console.log("Works");
});
router.post("/login", (req, res) => {
  console.log("Works");
});
router.post("/logout", (req, res) => {
  console.log("Works");
});

export default router;
