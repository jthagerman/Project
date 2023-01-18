import apiHandler from "@/utils/api/baseHandler";
import errorResponse from "@/utils/api/errorResponse";
import { NextApiRequest, NextApiResponse } from "next";
import User from "@/data/mongoose/models/User";
import checkAuth from "@/utils/helpers/checkAuth";

async function getHandler(request: NextApiRequest, response: NextApiResponse) {
  const auth = request.headers.authorization;
  try {
    if (!checkAuth(auth ?? "")) throw "Not Authorized";
    const results = await User.find();
    return response.json({ success: true, data: results });
  } catch (error: any) {
    return errorResponse(response, error);
  }
}
export default apiHandler(true, { GET: getHandler });
