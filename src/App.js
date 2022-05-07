import Button from './components/Button/Button.js';
import Container from './components/Container/Container.js';
import Time from './components/Time/Time.js';
import { useState, useEffect } from 'react';
import styles from './components/Time/time.module.scss';

function App() {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    let watch;

    if (timer) {
      watch = setInterval(() => {
        setTime((prevValue) => prevValue + 5);
      }, 1);
    } else if (!timer) {
      clearInterval(watch);
    }

    return () => clearInterval(watch);
  }, [timer]);

  return (
    <Container>
      <Time duration={time} />
      <div className={styles.time}>
        <Button onClick={() => setTimer(true)}>Start</Button>
        <Button onClick={() => setTimer(false)}>Stop</Button>
        <Button onClick={() => setTime(0)}>Reset</Button>
      </div>
    </Container>
  );
}

export default App;
