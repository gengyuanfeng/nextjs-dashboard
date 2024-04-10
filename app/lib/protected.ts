import { auth } from "@/auth"
import type { NextApiRequest, NextApiResponse } from "next"

const testFunc = async  (req: NextApiRequest, res: NextApiResponse):Promise<any> => {
  const session = await auth(req, res)
  if (session) {
    // Do something with the session
    return res.json("This is protected content.")
  }
  res.status(401).json("You must be signed in.")
}
export default testFunc