import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <ul className={css.list}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${css['item']} ${isActive ? css.active : ''}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className={({ isActive }) =>
                  `${css['item']} ${isActive ? css.active : ''}`
                }>
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
