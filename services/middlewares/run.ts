import { NextApiRequest, NextApiResponse } from 'next'
import { RequestHandler, Request, Response } from 'express'

export const run = (
  req: NextApiRequest,
  res: NextApiResponse<any>,
  fn: RequestHandler,
) => {
  return new Promise((resolve, reject) => {
    fn(
      (req as unknown) as Request,
      (res as unknown) as Response,
      (result: any) => {
        if (result instanceof Error) {
          return reject(result)
        }

        return resolve(result)
      },
    )
  })
}
