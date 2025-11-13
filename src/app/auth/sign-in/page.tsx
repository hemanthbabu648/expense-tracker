import { IconLogout } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

import LoginForm from '@/containers/auth/LoginForm';

import URLS from '../../../constants/urls';

function LoginPage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="max-w-md md:w-[700px]">
        <div className="mb-5 flex items-center justify-center">
          <span className="rounded-full bg-gray-300 p-4">
            <IconLogout className="inline text-2xl" />
          </span>
        </div>
        <h1 className="text-center text-2xl font-semibold text-primary-dark sm:text-3xl">
          Welcome back!
        </h1>
        <p className="mt-2 text-center text-sm text-gray-500 sm:text-base">
          Do not have an account yet?{' '}
          <Link
            href={URLS.AUTH.SIGN_UP}
            className="text-sm text-primary-light hover:underline sm:text-base"
          >
            Sign up
          </Link>
        </p>
        <LoginForm />
      </div>
    </main>
  );
}

export default LoginPage;
