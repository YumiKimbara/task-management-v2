import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  title: string;
};

export default function handler(
  // set type for request
  req: NextApiRequest,
  // set type for response
  res: NextApiResponse<Data>
) {
  res.status(200).json({ title: "" });
}
