import React from 'react';
import styles from './Home.module.css';

function SwiperCard(props) {
  return (
    <div className={styles.card}>
      <img src={props.img} />
      <p>{props.desc}</p>
    </div>
  );
}

export default SwiperCard;
