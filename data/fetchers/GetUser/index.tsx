import ensureConnection from "@/utils/database/connection";
import User from "@/data/mongoose/models/User";
import checkPassword from "@/utils/helpers/checkPassword";

export async function getUser(email: string, password: string) {
  try {
    if (await ensureConnection()) {
      const result = await User.findOne({ email: email });
      if (!(await checkPassword(password, result.password)))
        throw "Invalid Password";
      else if (result) return result;
      else throw "Invalid User";
    } else throw "Error Connecting To DB";
  } catch {
    return {};
  }
}
