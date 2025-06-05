export const jwtConstants = {
  secret: process.env.JWT_SECRET || 'fallback_dev_secret',
  expiresIn: process.env.JWT_EXPIRES_IN || '1d', // opcional
};
