'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { routes, routesConfig } from '@/routes';

const Header = () => {
  const pathname = usePathname();

  return (
    <div className='bg-slate-200'>
      <div className='flex justify-between px-[5%] py-[20px] text-slate-950'>
        <Link href={routes.home}>
          <h1 className='font-bold'>Auth App</h1>
        </Link>
        <ul className='flex justify-between gap-4'>
          {routesConfig.map(
            (route) =>
              route.showInMenu && (
                <li>
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
