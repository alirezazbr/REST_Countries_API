import { useTheme } from 'next-themes'

export default function ToggleDarkModeButton() {
  const { theme, setTheme } = useTheme()

  function handleClick() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button className="rounded-full p-2" onClick={handleClick}>
      {theme === 'dark' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          className="h-5 w-5 text-yellow-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.015 20.977A8 8 0 1018.383 5.62M12 2v2M12 20v2M4.93 4.929l1.414 1.414M18.656 18.657l1.414 1.414M4.93 19.071L6.344 20.485M18.656 5.344l1.414 1.414"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          className="h-5 w-5 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 14l-2 2m0 0l-2-2m2 2V9a3 3 0 013-3h8a3 3 0 013 3v6a3 3 0 01-3 3h-8a3 3 0 01-3-3z"
          />
        </svg>
      )}
    </button>
  )
}
