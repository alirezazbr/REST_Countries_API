import { Dispatch, RefObject, SetStateAction, useEffect } from 'react'

const useOutsideDetector = (
  ref: RefObject<HTMLInputElement>,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
) => {
  useEffect(() => {
    function handleClickOutside(event: any): void {
      if (ref?.current && !ref?.current?.contains(event.target)) {
        setIsOpen(false)
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}

export default useOutsideDetector
