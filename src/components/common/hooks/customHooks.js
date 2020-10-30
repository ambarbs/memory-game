import { useEffect } from 'react';

/**
 *
 * @param ref
 * @param callbackFn
 * @param args
 */
export const useOutsideNotifier = (ref, callbackFn, args) => {
  useEffect(() => {
    /**
     * When clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callbackFn(...args);
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callbackFn, args]);
};
