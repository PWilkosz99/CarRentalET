import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import styles from './Hero.module.css';

import 'react-toastify/dist/ReactToastify.css';

export default function Hero() {
  const [fromDate, setFromDate] = useState();
  const [untilDate, setUntilDate] = useState();
  const navigate = useNavigate();

  const todayDate = new Date();

  const handleSearch = (e) => {
    e.preventDefault();
    if (fromDate && untilDate) {
      if (fromDate > untilDate) {
        toast.warn("From date can't be after until date", { position: 'bottom-right', theme: 'colored' });
      } else if (new Date(fromDate) < todayDate) {
        toast.warn("From date can't be before today's date", { position: 'bottom-right', theme: 'colored' });
      } else {
        navigate('/rent', { state: { fromDate, untilDate } });
      }
    } else {
      toast.info('Please select dates', { position: 'bottom-right', theme: 'colored' });
    }
  };

  return (
    <div className={styles.hero}>
      <form className={styles.heroForm}>
        <div className={styles.from}>
          <span className={styles.border} />
          <label>From</label>
          <input type="date" className="fromDate" onChange={(e) => setFromDate(e.target.value)} />
        </div>
        <div className={styles.until}>
          <label>Until</label>
          <input type="date" className="untilDate" onChange={(e) => setUntilDate(e.target.value)} />
        </div>
        <div className={styles.search_btn}>
          <AiOutlineSearch onClick={handleSearch} size={25} className={styles.icon} />
          <button type="submit" onClick={handleSearch} className={styles.btn}>Search</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
