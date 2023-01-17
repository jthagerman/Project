import apiHandler from "@/utils/api/baseHandler";
import errorResponse from "@/utils/api/errorResponse";
import omitUndefinedKeys from "@/utils/database/omitUndefinedKeys";
import { NextApiRequest, NextApiResponse } from "next";
import { getUser } from "@/data/fetchers/GetUser";
import User from "@/data/mongoose/models/User";

//FOR TESTING SO I CAN VISUALLY SEE THINGS!

async function getHandler(request: NextApiRequest, response: NextApiResponse) {
  try {
    const results = await User.find();
    return response.json({ success: true, data: results });
  } catch (error: any) {
    return errorResponse(response, error);
  }
}
export default apiHandler(true, { GET: getHandler });
