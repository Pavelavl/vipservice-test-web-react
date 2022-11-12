import React, { FC } from 'react'
import styles from './Index.module.css'
import { useNavigate } from 'react-router-dom'

const Index: FC = (): JSX.Element => {
    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <button onClick={() => navigate('/avia')} className={styles.btn} type='button'>Let's find some tickets!</button>
        </div>
    )
}

export default Index