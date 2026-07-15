import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongodb';
import User from '../../../models/User';

export async function POST(req) {
  try {
    const body = await req.json();
    const { identifier, password } = body;

    if (!identifier || !password) {
      return NextResponse.json({ message: 'Please provide both identifier and password' }, { status: 400 });
    }

    await dbConnect();

    // Create user
    const user = await User.create({
      identifier,
      password,
    });

    return NextResponse.json({ message: 'User registered successfully', user: { id: user._id, identifier: user.identifier } }, { status: 201 });
  } catch (error) {
    console.error('Registration Error:', error);
    return NextResponse.json({ message: 'An error occurred during registration' }, { status: 500 });
  }
}
