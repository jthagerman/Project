import bcrypt from "bcrypt";


export default function checkPassword(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
}