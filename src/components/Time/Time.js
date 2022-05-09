import styles from './time.module.scss';

const Time = (props) => {
  let milliseconds = Math.floor((props.duration % 1000) / 100);
  let seconds = Math.floor((props.duration / 1000) % 60);
  let minutes = Math.floor((props.duration / (1000 * 60)) % 60);
  let hours = Math.floor((props.duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  return (
    <div className={styles.time}>
      {hours + ':' + minutes + ':' + seconds + '.' + milliseconds}
    </div>
  );
};

export default Time;
