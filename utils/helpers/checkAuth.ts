
import jwt from "jsonwebtoken";
export default function checkAuth(auth: string): boolean {
    try {
        const decoded: any = jwt.verify((auth ?? '').toString().slice(7), process.env.JWT!)
        return decoded?.admin ?? false
    } catch {
        return false
    }

}