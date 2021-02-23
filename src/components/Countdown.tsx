import { useEffect, useState } from 'react'
import styles from '../styles/components/Countdown.module.css'

export function Countdown() {
  const [time, setTime] = useState(25 * 60) // Start countdown with 25min, but in seconds
  const [active, setActive] = useState(false)

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('') // padStart correct numbers with 1 digite like '5' and add an '0' returning '05'
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('') // split divide the 2 digits string in 2 array items ['0', '5']

  function startCountdown() {
    setActive(true)
  }

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    }
  }, [active, time])

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      <button
        type='button'
        className={styles.countdownButton}
        onClick={startCountdown}
      >
        Iniciar um ciclo
      </button>
    </div>
  )
}
