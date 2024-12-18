import jwt from 'jsonwebtoken';
import { errorHandler } from './errorHandler.js';

export const verifyUser = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return next(errorHandler(401, 'You are not authenticated'));

  jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET, (err, user) => {
    if (err) return next(errorHandler(403, 'Token is not valid'));

    req.user = user;
    next();
  });
};
