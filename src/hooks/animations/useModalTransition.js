import { animated, useTransition } from 'react-spring'

const useModalTransition = show => {
  const transitions = useTransition(show, null, {
    from: {
      opacity: 0,
      zIndex: 200,
      transform: 'translateY(-50vh)'
    },
    enter: {
      opacity: 1,
      zIndex: 200,
      transform: 'translateY(0)'
    },
    leave: {
      opacity: 0,
      zIndex: 200,
      transform: 'translateY(-50vh)'
    }
  })
  return { transitions, animated }
}

export default useModalTransition
