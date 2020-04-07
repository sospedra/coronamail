import { NextApiResponse, NextApiRequest } from 'next'
import { verification } from 'services/db/privileged'
import { useMiddlewares } from 'services/middlewares'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await useMiddlewares(req, res)

    const { email } = req.body

    await verification(email)

    return res.send({})
  } catch (ex) {
    return res.status(500).send({
      error: {
        internal: ex.message,
      },
    })
  }
}
