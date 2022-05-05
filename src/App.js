import Button from './components/Button/Button.js';
import Container from './components/Container/Container.js';
import Time from './components/Time/Time.js';
import {useState, useEffect} from 'react';

function App() {

  const [time, setTime] = useState(0);
  const setTimer = null;

  useEffect(() => {
    // code that runs once at the start
    const start = () => {
      setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 1);
      }, 1))
    };
    return () => {
       // code that runs once at the end
       if(time) clearInterval(time);
    };
  }, []);

  return (
    <Container>
      <Time duration={30000}/>
      <div>
        <Button>Start</Button>
        <Button>Stop</Button>
        <Button>Reset</Button>
      </div>
    </Container>
  );
}

export default App;
