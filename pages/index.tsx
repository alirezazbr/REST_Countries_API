import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useAppSelector } from '@/redux/hooks'
import { useEffect } from 'react'
import { Card, FilterDropdown, SearchInput } from '@/components'

const countries = [
  {
    title: 'Germany',
    population: 81770900,
    region: 'Europe',
    capital: 'Berlin',
  },
  {
    title: 'United States of America',
    population: 323947000,
    region: 'Americas',
    capital: 'Washington, D.C.',
  },
  {
    title: 'Brazil',
    population: 206135893,
    region: 'Americas',
    capital: 'Brasilia',
  },
  {
    title: 'Iceland',
    population: 334300,
    region: 'Europe',
    capital: 'Reykjavik',
  },
  {
    title: 'Germany',
    population: 81770900,
    region: 'Europe',
    capital: 'Berlin',
  },
  {
    title: 'Germany',
    population: 81770900,
    region: 'Europe',
    capital: 'Berlin',
  },
  {
    title: 'Germany',
    population: 81770900,
    region: 'Europe',
    capital: 'Berlin',
  },
  {
    title: 'Germany',
    population: 81770900,
    region: 'Europe',
    capital: 'Berlin',
  },
]

export default function Home() {
  const darkMode = useAppSelector((store) => store.darkMode)

  useEffect(() => {
    document.body.className = darkMode.darkMode
  })

  return (
    <main className="max-w-[1060px] flex flex-col justify-center mx-auto">
      <div className="flex flex-wrap w-full justify-between items-center px-2 miniDesktop:px-6">
        <SearchInput />
        <FilterDropdown />
      </div>
      <div className="flex flex-wrap w-full justify-center">
        {countries.map((items) => (
          <Card key={items.title} items={items} />
        ))}
      </div>
    </main>
  )
}
