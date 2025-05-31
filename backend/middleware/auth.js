const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Access Denied: No token provided' });
  }

  try {
    const actualToken = token.split(" ")[1];
    
    // ✅ Log the JWT secret to confirm it's being read
    console.log('JWT SECRET:', process.env.JWT_SECRET);

    const decoded = jwt.verify(actualToken, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    console.error('JWT verification failed:', err.message);
    res.status(400).json({ message: 'Invalid Token' });
  }
};

module.exports = auth;
