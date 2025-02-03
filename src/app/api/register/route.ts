import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { email, password, confirm_password } = await request.json();
        const apiKey = request.headers.get('x-api-key');
        if (!apiKey || apiKey !== '1234') {
            return NextResponse.json({ api: 'Unauthorized' }, { status: 401 });
        } else {
            if (!email || !password || !confirm_password) {
                return NextResponse.json(
                    {
                        api: 'Some information is missing!',
                    },
                    { status: 400 }
                );
            } else if (password !== confirm_password) {
                return NextResponse.json(
                    {
                        api: 'Ensure password and confirm_password match!',
                    },
                    { status: 400 }
                );
            } else if (password.length < 8 || confirm_password.length < 8) {
                return NextResponse.json(
                    {
                        api: 'Kindly ensure your password is atleast 8 characters long!',
                    },
                    { status: 400 }
                );
            } else {
                return NextResponse.json({ api: 'Okay!' }, { status: 201 });
                // create a user in a postgres database - note the postgres database is installed locally not vercel stuff
            }
        }
    } catch (error) {
        return NextResponse.json({ api: 'Not Okay!' }, { status: 500 });
    }
}
