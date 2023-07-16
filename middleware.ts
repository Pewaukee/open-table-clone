import { NextRequest, NextResponse } from 'next/server';
import * as jose from 'jose';
export async function middleware(req: NextRequest, res: NextResponse) {
  const bearerToken = req.headers.get('authorization') as string;

  if (!bearerToken) {
    return new NextResponse(
      JSON.stringify({ errorMessage: 'Unauthorized request' }),
      { status: 401 }
    );
  }

  const token = bearerToken.split(' ')[1];

  if (!token) {
    return new NextResponse(
      JSON.stringify({ errorMessage: 'Unauthorized request' }),
      { status: 401 }
    );
  }

  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  try {
    await jose.jwtVerify(token, secret);
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ errorMessage: 'Unauthorized request' }),
      { status: 401 }
    );
  }

  // set the cors policy to allow requests from our frontend
  return NextResponse.next({
    headers: {
      'Access-Control-Allow-Origin': 'https://open-table-clone-kappa.vercel.app',
      'Access-Control-Allow-Methods': 'GET, POST',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export const config = {
  matcher: ['/api/auth/me'],
};
