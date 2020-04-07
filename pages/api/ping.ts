import { NextApiResponse, NextApiRequest } from 'next'

export default async (_: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({ data: { ping: 'pong' } })
}
