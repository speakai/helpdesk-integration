import * as dotenv from 'dotenv';
dotenv.config();

export const config = {
  env: process.env.ENV,

  server: {
    port: process.env.PORT,
  },

  dbUrl: process.env.DB_URL,

  googleDrive: {
    clientID: process.env.GOOGLE_DRIVE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_DRIVE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_DRIVE_CALLBACK_URL,
  },
};
