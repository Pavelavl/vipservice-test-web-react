import React, { FC } from 'react'
import { useLocation } from 'react-router-dom'

const Info: FC = (): JSX.Element => {
  const location = useLocation()
  console.log(location.state);
  

  return (
    <div>Info</div>
  )
}

export default Info