import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import jwtDecode from "jwt-decode";

import { error } from "console";
const singInURL = "https://main.d2fyc20wzs6jdh.amplifyapp.com/"
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
