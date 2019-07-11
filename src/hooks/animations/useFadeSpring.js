import { animated, useSpring } from 'react-spring'

const useFadeSpring = () => {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } })

  return { fade, animated }
}

export default useFadeSpring
