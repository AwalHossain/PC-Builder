import RootLayout from '<test>/components/Layout/RootLayout';
import { signIn } from 'next-auth/react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

export default function Login() {
    const onGoogleLogIn = () => {
        // signIn("google", { callbackUrl: "http://localhost:3000/" })
    }

    const onGitHubLogIn = () => {
        signIn("github", { callbackUrl: "http://localhost:3000/" })
    }

    return (
        <div className="hero min-h-screen bg-base-100">
            <div className="hero-content flex-col  justify-center  py-12 lg:py-24">
                <div className="text-center  mb-8 lg:mb-0">
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Sign In Now!</h1>
                    <p className="py-6 text-gray-600">
                        Join our community and access all the amazing features we offer.
                    </p>
                </div>
                <div className="card w-full max-w-sm shadow-lg bg-white">
                    <div className="card-body space-y-4">
                        <button
                            onClick={onGoogleLogIn}
                            className="btn btn-primary w-full"
                            style={{ backgroundColor: '#ffffff', color: '#4285F4', border: '1px solid #4285F4' }}
                        >
                          <FaGoogle className="mr-2" />   Sign Up with Google
                        </button>
                        <button
                            onClick={onGitHubLogIn}
                            className="btn btn-secondary w-full"
                            style={{ backgroundColor: '#ffffff', color: '#000000', border: '1px solid #000000' }}
                        >
                        <FaGithub className='mr-2'/>    Sign Up with GitHub
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

Login.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
};
