import express from "express";
import {
  registerUser,
  loginUser,
  searchUser,
} from "../controllers/auth.controller.js";
import { body,validationResult } from "express-validator";

const router = express.Router();

router.post(
  "/register",
  [
    body("username").not().isEmpty().withMessage("Username is required"),
    body("email").isEmail().withMessage("Invalid email format"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
    body("fullName").not().isEmpty().withMessage("Full name is required"),
    body("gender").not().isEmpty().withMessage("Gender is required"),
    body("dateOfBirth")
      .not()
      .isEmpty()
      .withMessage("Date of Birth is required"),
    body("country").not().isEmpty().withMessage("Country is required"),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    next();
  },
  registerUser
);
router.post("/login", loginUser);
router.get("/search/:query", searchUser);

export default router;
