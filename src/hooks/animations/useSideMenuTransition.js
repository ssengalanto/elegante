import { animated, useTransition } from 'react-spring'

const useSideMenuTransition = show => {
  const transitions = useTransition(show, null, {
    from: {
      opacity: 0,
      position: 'fixed',
      top: 0,
      left: 0,
      transform: 'translateX(-100vw)'
    },
    enter: {
      opacity: 1,
      position: 'fixed',
      top: 0,
      left: 0,
      transform: 'translateX(0)'
    },
    leave: {
      opacity: 0,
      position: 'fixed',
      top: 0,
      left: 0,
      transform: 'translateX(-100vw)'
    }
  })

  return { transitions, animated }
}

export default useSideMenuTransition
