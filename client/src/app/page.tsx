'use client';
import Header from '@/components/Header';
import { currentUserSelector } from '@/store/user/selectors';
import { useSelector } from 'react-redux';

export default function Home() {
  const currentUser: any = useSelector(currentUserSelector);

  return (
    <>
      <Header />
      <div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
        {currentUser && <p>{currentUser?.username}</p>}
      </div>
    </>
  );
}
