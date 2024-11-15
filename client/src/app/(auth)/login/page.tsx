'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { routes } from '@/routes';

const LogInPage = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState<true | false | null>(null);
  const [loading, setLoading] = useState(false);

  const { push } = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(false);
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      push(routes.home);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-4xl text-center font-bold my-7'>LogIn</h1>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-4 text-cyan-900'
      >
        <input
          type='email'
          placeholder='Email'
          id='email'
          className='bg-slate-300 p-3 rounded-lg'
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Password'
          id='password'
          className='bg-slate-300 p-3 rounded-lg'
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className='bg-blue-800 text-white uppercase p-2 rounded-lg hover:bg-blue-600 transition-all duration-150 ease-in disabled:bg-gray-500'
        >
          {loading ? 'Loading...' : 'LogIn'}
        </button>
      </form>
      <div className='mt-5'>
        <p>
          Don't have an account?
          <Link href={routes.signup}>
            <span className='text-blue-500 px-2 underline'>Sign up</span>
          </Link>
        </p>
      </div>
      {error && <p className='text-red-500'>Something went wrong</p>}
    </div>
  );
};

export default LogInPage;
