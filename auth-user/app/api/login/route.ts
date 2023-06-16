
  import { NextApiRequest } from 'next'
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  console.log(req.body);
  
  return NextResponse.json({message: "User logged in"}, {status: 200})

}

export async function GET(req: NextApiRequest) {
  return NextResponse.json({message: "route not supported"}, {status: 405})

}
 