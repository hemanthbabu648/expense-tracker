import { IconDownload } from '@tabler/icons-react';

import RegisterForm from '@/containers/auth/RegisterForm';

function RegisterPage() {
  return (
    <main className="flex min-h-screen flex-col lg:flex-row">
      <div className="w-full p-5 px-5 md:px-16 lg:w-5/12">
        <div className="-mb-1.5 flex items-center justify-center">
          <span className="rounded-full bg-gray-100 p-3">
            <IconDownload size={32} className="inline" />
          </span>
        </div>
        <RegisterForm />
      </div>
      <div className="flex w-full items-center justify-center rounded-bl-[200px] rounded-tl-[200px] bg-orange-300 bg-cover bg-center lg:w-7/12">
        <div className="flex flex-col items-center justify-center gap-5 px-10 py-5">
          <p className="text-center text-2xl font-normal">
            Finomic is a key feature, designed to simplify financial management.
            It provides users with smart tools for tracking expenses, managing
            budgets, and making informed financial decisions. With an intuitive
            interface and insightful analytics, Finomic helps individuals
            optimize their finances effortlessly. 🚀
          </p>
        </div>
      </div>
    </main>
  );
}

export default RegisterPage;
