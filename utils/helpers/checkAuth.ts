
import jwt from "jsonwebtoken";
import User from "@/data/mongoose/models/User";
import ensureConnection from "@/utils/database/connection";

export default async function checkAuth(auth: string, key?: string): Promise<boolean> {
    try {
        if (!auth || !auth.startsWith("Bearer ")) return false

        const decoded: any = jwt.verify((auth ?? '').toString().slice(7), process.env.JWT)
        const { aud, iss, sub } = decoded ?? ''

        if (!sub || iss !== '3point3performance.com' || aud !== "3point3performance.com") return false

        if (await ensureConnection()) {
            const user = await User.findOne({ _id: sub });
            if (user && !key) return true
            else if (user && key && user.permissions[key]) return true
        }
        return false
    } catch {
        return false
    }
}