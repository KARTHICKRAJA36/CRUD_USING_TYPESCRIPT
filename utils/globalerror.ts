import { Request, Response, NextFunction } from 'express';

const errorMiddleware = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode || 500;
  const status = error.status || 'error';

  res.status(statusCode).json({
    status: statusCode,
    message: error.message,
  });
};

export default errorMiddleware;
