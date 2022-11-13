import React, { FC } from 'react'
import styles from './Notfoundpage.module.css'

const Notfoundpage: FC = (): JSX.Element => {
  return (
    <div className={styles.sorry}>404. <br /> Sorry, but there is no such page 😢</div>
  )
}

export default Notfoundpage