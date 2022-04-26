import { Request } from "express"

export default function getAccessToken(req: Request): string{
    const authHeader = req.headers['authorization']
    return authHeader && authHeader.split(' ')[1]
}

getAccessToken.prototype.tokenSecret = process.env.ACCESS_TOKEN_SECRET