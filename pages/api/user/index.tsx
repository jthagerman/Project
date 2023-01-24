import apiHandler from "@/utils/api/baseHandler";
import errorResponse from "@/utils/api/errorResponse";
import { NextApiRequest, NextApiResponse } from "next";
import { getUser } from "@/data/fetchers/GetUser";
import User from "@/data/mongoose/models/User";
import encryptPassword from "@/utils/helpers/encryptPassword";
import jwt from "jsonwebtoken";

/**
 * @api {OBJECT} User User
 * @apiGroup Custom Types
 * @apiVersion 0.0.1
 * @apiParam {String} email The email address.
 * @apiParam {String} firstName user's first name.
 * @apiParam {String} lastName user's last name.
 * @apiParam {String} password user's password.
 */

/**
 * @api {get} /api/user Request user from the User bank.
 * @apiName GetUser
 * @apiGroup User
 * @apiDescription Returns paginated entries from the knowledge bank sorted by their user interest.
 */

async function getHandler(request: NextApiRequest, response: NextApiResponse) {
  let { email, password } = request.body;

  try {
    const results = await getUser(email, password);
    if (Object.keys(results).length === 0) throw "Invalid Login";
    else if (results.error) throw results.error;
    return response.json({
      success: true,
      data: {
        token: jwt.sign({}, process.env.JWT, {
          expiresIn: "12h",
          subject: results._id.toString(),
          audience: "3point3performance.com",
          issuer: "3point3performance.com",
        }),
      },
    });
  } catch (error: any) {
    return errorResponse(response, error);
  }
}

/**
 * @api {post} /api/user Create an entry for User.
 * @apiName CreateUser
 * @apiGroup Users
 *
 * @apiParam {String} email The email address.
 * @apiParam {String} firstName user's first name.
 * @apiParam {String} lastName user's last name.
 * @apiParam {String} password user's password.
 *
 * @apiSuccess {Boolean} success Rather or not the request was executed successfully.
 * @apiSuccess {[User](#api-Custom_Types-User)} data The created User
 * @apiSuccess {String} [message] Relevant information about the request, typically presented with a success=false response.
 *
 * @apiDescription Created a new entry in the Knowledge Bank.
 */
async function postHandler(request: NextApiRequest, response: NextApiResponse) {
  let { email, firstName, lastName, password } = request.body;
  if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password))
    throw "invalid password";

  try {
    password = await encryptPassword(password);
    await User.create({
      password,
      lastName,
      email,
      firstName,
    });

    return response.json({
      success: true,
      message: "Account Created",
    });
  } catch (error: any) {
    return errorResponse(response, error);
  }
}

export default apiHandler(true, { GET: getHandler, POST: postHandler });
