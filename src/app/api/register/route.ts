import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { email, password, confirm_password } = await request.json();
        const apiKey = request.headers.get('x-api-key');
        if (!apiKey || apiKey !== '1234') {
            return NextResponse.json({ api: 'Unauthorized' });
        } else {
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
        }
    } catch (error) {
        return NextResponse.json({ api: 'Not Okay!' });
    }
}
