import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { AiOutlineSearch } from 'react-icons/ai';
import RentCard from './RentCard.jsx';
import styles from './Rent.module.css';

export default function Rent() {
  const { state } = useLocation();
  const [cars, setCars] = useState();

  const todayDate = new Date();

  const tomorrowDate = new Date(todayDate);
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);

  const nextWeekDate = new Date(todayDate);
  nextWeekDate.setDate(nextWeekDate.getDate() + 6);

  const [fromDate, setFromDate] = useState(tomorrowDate.toLocaleDateString('en-CA'));
  const [untilDate, setUntilDate] = useState(nextWeekDate.toLocaleDateString('en-CA'));

  useEffect(() => {
    if (state) {
      setFromDate(state.fromDate);
      setUntilDate(state.untilDate);
      getCars(state.fromDate, state.untilDate);
    }
    // eslint-disable-next-line
  }, []);

  const getCars = (fd, ud) => {
    if (fd && ud) {
      if (fd > ud) {
        toast.warn("From date can't be after until date", { position: 'bottom-right', theme: 'colored' });
      } else if (new Date(fd) < todayDate) {
        toast.warn("From date can't be before today's date", { position: 'bottom-right', theme: 'colored' });
      } else {
        (
          async () => {
            try {
              const responde = await fetch('http://localhost:5000/api/Reservations/GetAvaliableCars', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  startDate: fd,
                  endDate: ud,
                }),
              });

              const content = await responde.json();
              setCars(content);
            } catch {
              toast.error('Something went wrong', { position: 'bottom-right', theme: 'colored' });
            }
          }
        )();
      }
    } else {
      toast.info('Please select dates', { position: 'bottom-right', theme: 'colored' });
    }
  };

  const selectDate = async (e) => {
    e.preventDefault();
    getCars(fromDate, untilDate);
  };

  const cards = cars?.map((car) => <RentCard key={car.id} car={car} startDate={fromDate} endDate={untilDate} />);

  return (
    <>
      <div className={styles.rentPage}>
        <h1 className={styles.title_rent}>Select rent date</h1>
        <form className={styles.heroForm}>
          <div className={styles.from}>
            <span className={styles.border} />
            <label>From</label>
            <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
          </div>
          <div className={styles.until}>
            <label>Until</label>
            <input type="date" value={untilDate} onChange={(e) => setUntilDate(e.target.value)} />
          </div>
          <div className={styles.search_btn}>
            <AiOutlineSearch onClick={selectDate} size={25} className={styles.icon} />
            <button type="submit" onClick={selectDate} className={styles.btn}>Search</button>
          </div>
        </form>
        <div className={styles.wrapper}>
          {cards}
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
