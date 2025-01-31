import classNames from 'classnames';
import { useEffect } from 'react';
import styles from './Layout.module.css';
import { Lit } from "litlyx-js"

export function GradientBackground({ variant, className }) {
  const classes = classNames(
    {
      [styles.colorBackground]: variant === 'large',
      [styles.colorBackgroundBottom]: variant === 'small',
    },
    className
  );

  return <div className={classes} />;
}

export default function Layout({ children }) {
  const setAppTheme = () => {
    document.documentElement.classList.add('dark');
    return;
  };

  const handleSystemThemeChange = () => {
    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    darkQuery.onchange = (e) => {
      if (e.matches) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    };
  };

  useEffect(() => {
    setAppTheme();
  }, []);

  useEffect(() => {
    handleSystemThemeChange();
  }, []);



  Lit.init("67730ded07b3365ec84f9ea1");
  return (
    <div className="relative pb-24 overflow-hidden">
      <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
        {children}
      </div>
    </div>
  );
}
