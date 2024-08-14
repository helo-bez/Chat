import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import jwtDecode from "jwt-decode";

import { error } from "console";
const singInURL = process.env.NEXT_PUBLIC_LOGIN_URL || ''
export function middleware(request: NextRequest,) {
    const token = request.cookies.get('token')?.value
    if (!token) {
        return NextResponse.redirect(singInURL, {
            headers: {
                'Set-Cookie': `redirectTo=${request.url}; Path=/; HttpOnly; max-age=20;`
            }
        })
    }
    try {
        if (!process.env.NEXT_PUBLIC_JWT_SECRET) return NextResponse.redirect(singInURL);
        const decoded = jwtDecode(token);
        if (!decoded) throw error
    } catch (error) {
        return NextResponse.redirect(singInURL);
    }
    return NextResponse.next()
}
export const config = {
    matcher: ['/chat/:path*', '/notice/:path*', '/help/:path'],
}