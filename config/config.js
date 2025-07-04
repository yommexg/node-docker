module.exports = {
  MONGO_IP: process.env.MONGO_IP || "mongodb",
  MONGO_PORT: process.env.MONGO_PORT || 27017,
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
  REDIS_URL: process.env.REDIS_URL || "redis://redis:6379",
  SESSION_SECRET: process.env.SESSION_SECRET,
};
