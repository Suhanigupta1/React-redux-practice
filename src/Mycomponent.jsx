import React from 'react'
import { useSelector} from 'react-redux'
const Mycomponent = () => {
    const count = useSelector(s=>s.counter);
  return (
    <div>Mycomponent: {count}</div>
  )
}

export default Mycomponent;