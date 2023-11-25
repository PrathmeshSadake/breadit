import jwt from "jsonwebtoken";
import User from "../models/user";

// Checks if user is authenticated or not
export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Login first to access this resource." });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded.id);

  next();
};

// Handling users roles
export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        message: `Role (${req.user.role}) is not allowed to acccess this resource`,
      });
    }
    next();
  };
};
