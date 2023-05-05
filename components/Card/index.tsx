import { useRouter } from 'next/router'

interface Items {
  title: string
  population: number
  region: string
  capital: string
}

interface Props {
  items: Items
}

const Card = ({ items }: Props) => {
  const router = useRouter()
  const { title, population, region, capital } = items
  const formattedPopulation = population.toLocaleString('en-US')

  return (
    <div
      className="flex w-1/4 max-w-[265px] min-w-[265px] flex-col p-2 m-0 text-text dark:text-dark-text cursor-pointer"
      onClick={() => router.push('/id')}
    >
      <div className="w-full h-[150px] p-0 m-0 bg-gray-700 rounded-t-[5px]"></div>
      <div className="w-full h-[160px] p-4 m-0 rounded-b-[5px] bg-elements dark:bg-dark-elements shadow-md">
        <p className="font-bold mb-2 text-lg">{title}</p>
        <p>
          <span className="font-semibold">Population:</span>{' '}
          {formattedPopulation}
        </p>
        <p>
          <span className="font-semibold">Region:</span> {region}
        </p>
        <p>
          <span className="font-semibold">Capital:</span> {capital}
        </p>
      </div>
    </div>
  )
}

export default Card
