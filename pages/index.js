import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';


import { CldImage } from 'next-cloudinary';


const TITLE = 'Next Cloudinary CldImage Component';

import { userService } from 'services';



export default Home;

function Home() {
    return (
        <div className="p-4 text-opacity-25">
            <div className="container text-black "  >
                <h1>Hi {userService.userValue?.firstName}!</h1>
                <p>You&apos;re logged in with Next.js & JWT!!</p>
                <p><Link href="/users">Manage Users</Link></p>
            </div>
        </div>

    );
}
