import bcrypt from 'bcrypt'
import prisma from '../../libs/prismadb'
import { NextResponse } from 'next/server'

export async function POST(request){
    const body = await request.json();
    const { name, email, password, website, location,  bio, fieldOfInterest, seeking, techStack } = body;

    if(!name || !email || !password ) {
        return new NextResponse('Missing Fields', { status: 400 })
    }

    const exist = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if(exist) {
        throw new Error('Email already exists')
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            name,
            email,
          hashedPassword,
          website_URL: website,
          // Assuming these fields are directly on the User model
          // If they are not, you will need to adjust the data structure here
          accounts: {
            create: {
               // Make sure to match the field name in Prisma schema
              location,
              bio,
              fieldOfInterest,
              seeking,
              techStack,
              type: "AccountTypeHere",
              provider: "String",
              providerAccountId: "String"
            },
          },
          // Other fields...
        },
        
    });

    return NextResponse.json(user)
}