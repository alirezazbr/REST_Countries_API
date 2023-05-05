import { useState, useRef } from 'react'

import useOutsideDetector from '@/hooks/useOutsideDetector'

const regions = [
  { id: 0, name: 'Africa' },
  { id: 1, name: 'America' },
  { id: 2, name: 'Asia' },
  { id: 3, name: 'Europe' },
  { id: 4, name: 'Oceania' },
]

const FilterDropdown = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [region, setRegion] = useState<string>('')

  const filterBtnRef = useRef<HTMLInputElement>(null)
  useOutsideDetector(filterBtnRef, setIsOpen)

  return (
    <div className="flex flex-col relative shadow-xl" ref={filterBtnRef}>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-text dark:text-dark-text bg-elements dark:bg-dark-elements focus:outline-none font-bold rounded-[5px] text-sm px-4 py-3.5 text-center inline-flex items-center"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        Filter by Region{' '}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div
        id="dropdown"
        className={`absolute ${
          isOpen ? 'block' : 'hidden'
        } top-14 text-text dark:text-dark-text bg-elements dark:bg-dark-elements rounded-[5px] w-40 shadow-lg`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {regions.map(({ id, name }) => (
            <li
              key={id}
              onClick={() => setRegion(name)}
              className={`cursor-pointer block px-4 py-2 ${
                region === name ? 'bg-gray-300' : 'bg-none'
              } ${
                region === name ? 'dark:bg-gray-500' : 'bg-none'
              } hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-dark-text`}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FilterDropdown
