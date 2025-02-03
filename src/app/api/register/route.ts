import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { email, password, confirm_password } = await request.json();
        if (!email || !password || !confirm_password) {
            return NextResponse.json({
                api: 'Some information is missing!',
            });
        } else if (password !== confirm_password) {
            return NextResponse.json({
                api: 'Ensure password and confirm_password match!',
            });
        } else if (password.length < 8 || confirm_password.length < 8) {
            return NextResponse.json({
                api: 'Kindly ensure your password is atleast 8 characters long!',
            });
        } else {
            return NextResponse.json({ api: 'Okay!' });
        }
    } catch (error) {
        return NextResponse.json({ api: 'Not Okay!' });
    }
}
