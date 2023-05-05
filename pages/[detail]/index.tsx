import { useAppSelector } from '@/redux/hooks'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const countries = [
  { id: 0, name: 'France' },
  { id: 1, name: 'Germany' },
  { id: 2, name: 'Netherland' },
]

const Detail = () => {
  const router = useRouter()
  const darkMode = useAppSelector((store) => store.darkMode)

  useEffect(() => {
    document.body.className = darkMode.darkMode
  })

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col text-text dark:text-dark-text bg-background dark:bg-dark-background">
      <div className="flex flex-row w-full">
        <div className="w-1/2 p-3 flex justify-center">
          <div className="w-[450px] h-full">
            <button
              className="bg-elements dark:bg-dark-elements flex justify-center items-center w-[100px] h-8 shadow-lg rounded-[5px]"
              onClick={() => router.push('/')}
            >
              Back
            </button>
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-center px-20" />
      </div>
      <div className="flex flex-row w-full h-[300px]">
        <div className="w-1/2 p-3 flex justify-center">
          <div className="w-[450px] h-full bg-dark-elements" />
        </div>
        <div className="w-1/2 flex flex-col justify-center px-20">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <p className="font-bold mb-2 text-lg">title</p>
              <p>
                <span className="font-semibold">sub title:</span> content
              </p>
              <p>
                <span className="font-semibold">sub title:</span> content
              </p>
              <p>
                <span className="font-semibold">sub title:</span> content
              </p>
              <p>
                <span className="font-semibold">sub title:</span> content
              </p>
              <p>
                <span className="font-semibold">sub title:</span> content
              </p>
            </div>
            <div className="flex flex-col mt-9">
              <p>
                <span className="font-semibold">sub title:</span> content
              </p>
              <p>
                <span className="font-semibold">sub title:</span> content
              </p>
              <p>
                <span className="font-semibold">sub title:</span> content
              </p>
            </div>
          </div>
          <div className="flex flex-row mt-10">
            <div className="font-semibold flex items-center mr-2">title: </div>
            <div className="flex flex-wrap">
              {countries.map(({ id, name }) => (
                <div
                  key={id}
                  className="bg-elements dark:bg-dark-elements flex justify-center items-center w-[100px] h-8 shadow-lg rounded-[5px] mx-1"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
