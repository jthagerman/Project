import apiHandler from "@/utils/api/baseHandler";
import errorResponse from "@/utils/api/errorResponse";
import omitUndefinedKeys from "@/utils/database/omitUndefinedKeys";
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
 *
 * @apiDescription Returns paginated entries from the knowledge bank sorted by their user interest.
 */

const TEMPKEY = "THIS IS A TEST";
async function getHandler(request: NextApiRequest, response: NextApiResponse) {
  let { email, password } = request.body;

  console.log(password);
  try {
    const results = await getUser(email, password);
    if (Object.keys(results).length === 0) throw "Invalid Login";
    return response.json({
      success: true,
      data: {
        token: jwt.sign(
          {
            email: results.email,
            admin: results.type === "admin",
          },
          TEMPKEY
        ),
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
  let { email, firstName, lastName, password, createdAt } = request.body;
  const valid = (value: string) =>
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value);
  if (!valid(password)) throw "invalid password";

  password = await encryptPassword(password);

  try {
    const document = omitUndefinedKeys({
      email,
      firstName,
      lastName,
      password,
      createdAt,
    });

    if (await User.findOne({ email: document.email.toLowerCase() }).exec())
      throw "Email Already Used";

    await User.create(document);
    return response.json({
      success: true,
      nessage: "Account Created",
    });
  } catch (error: any) {
    return errorResponse(response, error);
  }
}

export default apiHandler(true, { GET: getHandler, POST: postHandler });
