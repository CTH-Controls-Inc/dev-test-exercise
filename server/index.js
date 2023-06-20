const express = require("express");
const { check, validationResult } = require("express-validator");
const cors = require("cors");

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Email validator
const emailValidator = check("email")
  .isEmail()
  .withMessage("Please use a valid email address. (Server Side Validation)");

// Validator middleware
const validationMiddleware = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  next();
};

// Route
app.post("/", emailValidator, validationMiddleware, (req, res) => {
  try {
    res.status(200).json({
      message: "Email address is valid. (Server Side Validation)",
    });
  } catch (error) {
    res.status(400).json({
      errors: error,
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`The app is running at http://localhost:${PORT}`);
});
