declare global {
  namespace Express {
    interface Request {
      authId: string | jwt.JwtPayload;
    }
  }
}

export {};
