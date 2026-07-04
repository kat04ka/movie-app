import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header';

function MainLayout() {
  const [showHeader, setShowHeader] =
    useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY;

      if (Math.abs(diff) < 10) return;

      if (currentScrollY < 50) {
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener(
      'scroll',
      handleScroll,
    );

    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll,
      );
  }, []);

  return (
    <>
      <Header showHeader={showHeader} />

      <main className="sm:pt-18 pt-28">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
