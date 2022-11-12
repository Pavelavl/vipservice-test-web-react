import React, { FC, useRef } from 'react'
import styles from './Search.module.css'
import { useNavigate } from 'react-router-dom'

const Search: FC = (): JSX.Element => {
  const navigate = useNavigate()
  const from = useRef(null)
  const to = useRef(null)
  const there = useRef(null)
  const back = useRef(null)

  return (
    <div className={styles.container}>
      <form>
        <div className={styles.form}>
          <div className={styles.inputs}>
            <div className={styles.inputbox}>
              <span className={styles.span}>Откуда</span>
              <input ref={from} required className={styles.input} type="text" placeholder='Город вылета' />
            </div>
            <div className={styles.inputbox}>
              <span className={styles.span}>Куда</span>
              <input ref={to} required className={styles.input} type="text" placeholder='Город прилёта' />
            </div>
            <div className={styles.inputbox}>
              <span className={styles.span}>Туда</span>
              <input ref={there} required className={styles.dateinput} type="date" placeholder='дд.мм.гг' />
            </div>
            <div className={styles.dot}></div>
            <div className={styles.inputbox}>
              <span className={styles.span}>Обратно</span>
              <input ref={back} className={styles.dateinput} type="date" placeholder='дд.мм.гг' />
            </div>
          </div>
          <div className={styles.btn_block}>
            <button onClick={(e) => {navigate('/avia/info', {
              state: {
                from: from.current,
                to: to.current,
                there: there.current,
                back: back.current
              }
            })}} className={styles.btn} type='button'>Найти билеты</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Search