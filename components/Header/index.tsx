import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { storeDarkMode } from '@/redux/slices/darkModeReducer'

export async function getStaticProps() {
  return { props: { isDark: false } }
}

const Header = (props: any) => {
  const dispatch = useAppDispatch()
  const darkMode = useAppSelector((store: any): any => store.darkMode)

  const clickHandler = () => {
    dispatch(storeDarkMode(darkMode.darkMode === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className="w-full h-20 shadow-md bg-elements dark:bg-dark-elements flex items-center justify-between px-20 tablet:px-6">
      <p className="font-bold text-3xl tablet:text-xl text-text dark:text-dark-text">
        Where in the world?
      </p>
      <button
        className="font-bold text-text dark:text-dark-text"
        onClick={clickHandler}
      >
        Dark Mode
      </button>
      {/* <ToggleDarkModeButton /> */}
    </div>
  )
}

export default Header
