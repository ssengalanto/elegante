import { animated, useTransition } from 'react-spring'

const useFadeTransition = (show = false) => {
  const transitions = useTransition(show, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })
  return { transitions, animated }
}

export default useFadeTransition
