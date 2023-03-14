import { useContext } from 'react'
import MyThemeContext from '@/store/myThemeContext'

export default function Header() {
  const themeCtx: { isDarkMode?: boolean; toggleThemeHandler: () => void } =
    useContext(MyThemeContext);

  function toggleThemeHandler(): void {
    themeCtx.toggleThemeHandler();
  }
  return (
    <>
      <div className="flex justify-between bg-stone-200 dark:bg-stone-800 px-2 md:px-20 items-center backdrop-blur-sm w-full py-4">
        <div>
          <a
            className="flex items-center"
            href="https://github.com/hossein13m/nextjs-tailwind-dark-theme"
            target="blank"
          >
            <h1 className="text-black sm:text-2xl ml-2 dark:text-white font-melancoline">
              Skyrats
            </h1>
          </a>
        </div>
        <button
          type="button"
          className="py-1 sm:py-2.5 px-2 sm:px-5 mr-2 bg-zinc-800 text-white dark:bg-zinc-200 dark:text-black rounded"
          onClick={toggleThemeHandler}
        >
          Toggle Theme
        </button>
      </div>
    </>
  );
}
