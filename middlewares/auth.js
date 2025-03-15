import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.status(401).json({ message: "Login to add item to cart" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    decoded.userId = req.body.userId;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: error.message });
  }
};

export default authUser;
