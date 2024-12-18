'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

import { routes, routesConfig } from '@/routes';
import { currentUserSelector } from '@/store/user/selectors';

const Header = () => {
  const pathname = usePathname();

  const currentUser = useSelector(currentUserSelector);

  return (
    <div className='bg-slate-200'>
      <div className='flex justify-between items-center px-[5%] py-[20px] text-slate-950'>
        <Link href={routes.home}>
          <h1 className='font-bold'>Auth App</h1>
        </Link>
        <ul className='flex justify-between items-center gap-4'>
          {routesConfig.map(
            (route) =>
              route.showInMenu && (
                <li key={route.url}>
                  <Link
                    key={route.title}
                    href={route.url}
                    className={`${pathname === route.url && 'underline'}`}
                  >
                    {route.title}
                  </Link>
                </li>
              )
          )}
          {currentUser ? (
            <li>
              <Link
                className='flex justify-center items-center gap-2 py-2 px-4 rounded-md bg-slate-300 hover:bg-slate-400 transition duration-200 ease-in-out font-bold text-[14px] text-slate-800'
                href={routes.profile}
              >
                <img
                  className='w-[30px] rounded-full object-fill object-center'
                  src={currentUser.profilePicture}
                  alt={`${currentUser.username} profile picture`}
                />
                <p className='font-bold text-[14px] text-slate-800'>
                  {currentUser.username}
                </p>
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link href={routes.signup}>SignUp</Link>
              </li>
              <li>
                <Link href={routes.login}>LogIn</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
