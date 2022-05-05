import Button from './components/Button/Button.js';
import Container from './components/Container/Container.js';
import Time from './components/Time/Time.js';
import { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(0);
  const [timer ,setTimer] = useState(false);

  useEffect(() => {
    // code that runs once at the start
    const start = () => {
      setTimer(
        setInterval(() => {
          setTime((prevValue) => prevValue + 1);
        }, 1)
      );
    };
    return () => {
      // code that runs once at the end
      if (timer) clearInterval(time);
    };
  }, []);

  return (
    <Container>
      <Time duration={time} />
      <div>
        <Button onClick={() => setTimer(false)}>Start</Button>
        <Button onClick={() => setTimer(true)}>Stop</Button>
        <Button onClick={() => setTime(0)}>Reset</Button>
      </div>
    </Container>
  );
}

export default App;
