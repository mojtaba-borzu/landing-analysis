//core libraries
import { useEffect, useState } from 'react'
/**
 * Hook that alerts clicks outside of the passed ref
 */
export default function useOutsideClick(ref) {
    const [outsideClick, setOutsideClick] = useState(false)
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref && ref.current && !ref.current.contains(event.target)) {
                return setOutsideClick(true)
            } else return setOutsideClick(false)
        }

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref])
    return outsideClick
}

// inspired by :
// https://stackoverflow.com/questions/32553158/detect-click-outside-react-component/44378829
