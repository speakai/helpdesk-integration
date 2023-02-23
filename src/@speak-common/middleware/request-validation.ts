import { RequestHandler } from 'express';

export const RequestValidation =
  // @ts-ignore


    (schema, property): RequestHandler =>
    (req, res, next) => {
      // @ts-ignore
      const { error } = schema.validate(req[property], { abortEarly: false });
      const valid = error == null;
      if (valid) {
        next();
      } else {
        const { details } = error;
        const message = details.map((i: { message: string }) => i.message).join(',');
        res.status(400).send(`Bad Request: ${message}`);
      }
    };
