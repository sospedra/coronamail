import { NextApiRequest, NextApiResponse } from 'next'
import { RequestHandler } from 'express'
import cors from 'cors'
import compression from 'compression'
import { run } from './run'

export const useMiddlewares = async (
  req: NextApiRequest,
  res: NextApiResponse,
  extra: RequestHandler[] = [],
) => {
  const middlewares = [cors(), compression(), ...extra]

  for (let middleware of middlewares) {
    await run(req, res, middleware)
  }
}
