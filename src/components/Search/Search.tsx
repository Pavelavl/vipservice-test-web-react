import React, { FC, useState, useEffect } from 'react'
import styles from './Search.module.css'
import { useNavigate } from 'react-router-dom'

const Search: FC = (): JSX.Element => {
  const navigate = useNavigate()
  const [from, setFrom] = useState<string>('')
  const [to, setTo] = useState<string>('')
  const [there, setThere] = useState<string>('')
  const [back, setBack] = useState<string>('')

  const validate = (): boolean => {
    console.log(from, to, there);
    
    return from.length !== 0 && to.length !== 0 && there.length !== 0
  }

  return (
    <div className={styles.container}>
      <form onSubmit={(e) => {  
        e.preventDefault()
        navigate('/avia/info', {
          state: {
            from: from,
            to: to,
            there: there,
            back: back,
          }
        })
      }}>
        <div className={styles.form}>
          <div className={styles.inputs}>
            <div className={styles.inputbox}>
              <span className={styles.span}>Откуда</span>
              <input onChange={(e) => setFrom(e.target.value)} required className={styles.input} type="text" placeholder='Город вылета' />
            </div>
            <div className={styles.inputbox}>
              <span className={styles.span}>Куда</span>
              <input onChange={(e) => setTo(e.target.value)} required className={styles.input} type="text" placeholder='Город прилёта' />
            </div>
            <div className={styles.inputbox}>
              <span className={styles.span}>Туда</span>
              <input onChange={(e) => setThere(e.target.value)} required className={styles.dateinput} type="date" placeholder='дд.мм.гг' />
            </div>
            <div className={styles.dot}></div>
            <div className={styles.inputbox}>
              <span className={styles.span}>Обратно</span>
              <input onChange={(e) => setBack(e.target.value)} className={styles.dateinput} type="date" placeholder='дд.мм.гг' />
            </div>
          </div>
          <div className={styles.btn_block}>
            <button disabled={!validate()} className={styles.btn} type='submit'>Найти билеты</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Search