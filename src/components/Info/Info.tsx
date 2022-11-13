import React, { FC, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './Info.module.css'
import logo from '../../assets/logo.svg'
import shopper from '../../assets/shopper.svg'
import bag from '../../assets/bag.svg'

const Info: FC = (): JSX.Element => {
  const location = useLocation()
  const there: string = new Date(location.state.there.split('-').map((e: HTMLInputElement) => e.toString())).toLocaleDateString('ru-RU')
  const back: string = new Date(location.state.back.split('-').map((e: HTMLInputElement) => e.toString())).toLocaleDateString('ru-RU')
  const time: Array<Array<string>> = [['09:20', '11:05'], ['10:20', '12:45'], ['11:20', '13:05']]
  const [timing, setTiming] = useState<string[]>(time[0])
  const price: number = 4150

  const diff = (start: string, end: string): number => {
    const startmin: number[] = start.split(':').map(e => parseInt(e))
    const endmin: number[] = end.split(':').map(e => parseInt(e))
    return (endmin[0] * 60 + endmin[1]) - (startmin[0] * 60 + startmin[1])
  }

  const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTiming(time[parseInt(e.currentTarget.id) - 1])
  }

  if (location.state.back == '') {
    return (
      <div className={styles.container}>
        <div className={styles.singleticket}>
          <div className={styles.logoblock}>
            <div className={styles.sticker}>Невозвратный</div>
            <div className={styles.logo}>
              <img src={logo} alt="" className={styles.logoimg} />
              <span className={styles.logotext}>S7 Airlines</span>
            </div>

          </div>
          <div className={styles.infoblock}>
            <div className={styles.top}>
              <div className={styles.start}>
                <span className={styles.time}>{timing[0]}</span>
                <span className={styles.city}>{location.state.from}</span>
                <span className={styles.date}>{there}</span>
              </div>
              <div className={styles.fromto}>
                <div className={styles.abb}>
                  <span className={styles.abbfrom}>{location.state.from.slice(0, 3).toUpperCase()}</span>
                  <span className={styles.abbto}>{location.state.to.slice(0, 3).toUpperCase()}</span>
                </div>
                <div className={styles.route}>
                  <div className={styles.circle}></div>
                  <div className={styles.line}></div>
                  <div className={styles.circle}></div>
                </div>
                <span className={styles.onway}>В пути {Math.floor(diff(timing[0], timing[1]) / 60)} ч {diff(timing[0], timing[1]) % 60} мин</span>
              </div>
              <div className={styles.end}>
                <span className={styles.time}>{timing[1]}</span>
                <span className={styles.city}>{location.state.to}</span>
                <span className={styles.date}>{there}</span>
              </div>
              <div className={styles.icons}>
                <img src={shopper} alt="" className={styles.shopper} />
                <img src={bag} alt="" className={styles.bag} />
              </div>
            </div>
            <div className={styles.bottom}>
              <button id='1' onClick={handleChange} className={styles.changer}>
                <span className={styles.timefrom}>{time[0][0]} - </span>
                <span className={styles.timeto}>{time[0][1]}</span>
              </button>
              <button id='2' onClick={handleChange} className={styles.changer}>
                <span className={styles.timefrom}>{time[1][0]} - </span>
                <span className={styles.timeto}>{time[1][1]}</span>
              </button>
            </div>
          </div>
          <div className={styles.priceblock}>
            <div className={styles.price}>{price.toString()[0]} {price.toString().slice(1)}₽</div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.doubleticket}>
          <div className={styles.left}>
            <div className={styles.partticket}>
              <div className={styles.logoblock}>
                <div className={styles.sticker}>Невозвратный</div>
                <div className={styles.logo}>
                  <img src={logo} alt="" className={styles.logoimg} />
                  <span className={styles.logotext}>S7 Airlines</span>
                </div>
              </div>
              <div className={styles.infoblock}>
                <div className={styles.top}>
                  <div className={styles.start}>
                    <span className={styles.time}>{timing[0]}</span>
                    <span className={styles.city}>{location.state.from}</span>
                    <span className={styles.date}>{there}</span>
                  </div>
                  <div className={styles.fromto}>
                    <div className={styles.abb}>
                      <span className={styles.abbfrom}>{location.state.from.slice(0, 3).toUpperCase()}</span>
                      <span className={styles.abbto}>{location.state.to.slice(0, 3).toUpperCase()}</span>
                    </div>
                    <div className={styles.route}>
                      <div className={styles.circle}></div>
                      <div className={styles.line}></div>
                      <div className={styles.circle}></div>
                    </div>
                    <span className={styles.onway}>В пути {Math.floor(diff(timing[0], timing[1]) / 60)} ч {diff(timing[0], timing[1]) % 60} мин</span>
                  </div>
                  <div className={styles.end}>
                    <span className={styles.time}>{timing[1]}</span>
                    <span className={styles.city}>{location.state.to}</span>
                    <span className={styles.date}>{there}</span>
                  </div>
                  <div className={styles.icons}>
                    <img src={shopper} alt="" className={styles.shopper} />
                    <img src={bag} alt="" className={styles.bag} />
                  </div>
                </div>
              </div>
            </div><div className={styles.partticket}>
              <div className={styles.logoblock}>
                <div className={styles.sticker}>Невозвратный</div>
                <div className={styles.logo}>
                  <img src={logo} alt="" className={styles.logoimg} />
                  <span className={styles.logotext}>S7 Airlines</span>
                </div>
              </div>
              <div className={styles.infoblock}>
                <div className={styles.top}>
                  <div className={styles.start}>
                    <span className={styles.time}>{timing[0]}</span>
                    <span className={styles.city}>{location.state.from}</span>
                    <span className={styles.date}>{back}</span>
                  </div>
                  <div className={styles.fromto}>
                    <div className={styles.abb}>
                      <span className={styles.abbfrom}>{location.state.from.slice(0, 3).toUpperCase()}</span>
                      <span className={styles.abbto}>{location.state.to.slice(0, 3).toUpperCase()}</span>
                    </div>
                    <div className={styles.route}>
                      <div className={styles.circle}></div>
                      <div className={styles.line}></div>
                      <div className={styles.circle}></div>
                    </div>
                    <span className={styles.onway}>В пути {Math.floor(diff(timing[0], timing[1]) / 60)} ч {diff(timing[0], timing[1]) % 60} мин</span>
                  </div>
                  <div className={styles.end}>
                    <span className={styles.time}>{timing[1]}</span>
                    <span className={styles.city}>{location.state.to}</span>
                    <span className={styles.date}>{back}</span>
                  </div>
                  <div className={styles.icons}>
                    <img src={shopper} alt="" className={styles.shopper} />
                    <img src={bag} alt="" className={styles.bag} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.priceblock}>
            <div className={styles.price}>{(price*2).toString()[0]} {(price*2).toString().slice(1)}₽</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Info