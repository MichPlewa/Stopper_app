import styles from './time.module.scss';

const formatTime = millseconds => {
  let ms = Math.floor((millseconds % 1000) / 100),
  seconds = Math.floor((milliseconds / 1000) % 60),
  minutes = Math.floor((milliseconds / (1000 * 60)) % 60),
  hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return (<div className={styles.time}>hours + ':' + minutes + ':' + seconds + '.' + ms</div>);
};

export default Time;
