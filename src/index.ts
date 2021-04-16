import { Request, Response } from 'express';

export const app = (_request: Request, response: Response): void => {
  response.status(200).send('Hello World!');
};
