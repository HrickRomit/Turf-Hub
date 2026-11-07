import jwt from 'jsonwebtoken';

/**
 * PRD FR-AUTH-02: Dual-Token Model Specification
 * - Short-lived Access Token (15-minute expiry)
 * - Cryptographically secure Refresh Token (7-day expiry) stored in httpOnly, SameSite=Strict cookie
 */

const ACCESS_TOKEN_SECRET = process.env.JWT_ACCESS_SECRET || 'turfhub_dev_jwt_access_secret_super_secure_key_12345';
const REFRESH_TOKEN_SECRET = process.env.JWT_REFRESH_SECRET || 'turfhub_dev_jwt_refresh_secret_super_secure_key_67890';

export const ACCESS_TOKEN_EXPIRY = '15m';
export const REFRESH_TOKEN_EXPIRY = '7d';

// Generate short-lived Access Token (15m)
export const generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
      email: user.email,
    },
    ACCESS_TOKEN_SECRET,
    { expiresIn: ACCESS_TOKEN_EXPIRY }
  );
};

// Generate long-lived Refresh Token (7d)
export const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
    },
    REFRESH_TOKEN_SECRET,
    { expiresIn: REFRESH_TOKEN_EXPIRY }
  );
};

// Verify Access Token
export const verifyAccessToken = (token) => {
  return jwt.verify(token, ACCESS_TOKEN_SECRET);
};

// Verify Refresh Token
export const verifyRefreshToken = (token) => {
  return jwt.verify(token, REFRESH_TOKEN_SECRET);
};

// Cookie Options for Refresh Token (PRD FR-AUTH-02: httpOnly, SameSite=Strict, secure in production)
export const getRefreshCookieOptions = () => ({
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict',
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
  path: '/',
});

// Set refresh token in httpOnly cookie
export const setRefreshTokenCookie = (res, refreshToken) => {
  res.cookie('refreshToken', refreshToken, getRefreshCookieOptions());
};

// Clear refresh token cookie on logout
export const clearRefreshTokenCookie = (res) => {
  res.clearCookie('refreshToken', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
  });
};

export default {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
  setRefreshTokenCookie,
  clearRefreshTokenCookie,
  getRefreshCookieOptions,
};

