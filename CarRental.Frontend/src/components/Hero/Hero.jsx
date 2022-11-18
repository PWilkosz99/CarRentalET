import React, { useState } from 'react'
import styles from './Hero.module.css'
import { AiOutlineSearch } from 'react-icons/ai'

export default function Hero() {
    const [fromDate, setFromDate] = useState();
    const [untilDate, setUntilDate] = useState();
    const todayDate = new Date();

    const handleSearch = (e) => {
        e.preventDefault();
        if (fromDate && untilDate) {
            if (fromDate > untilDate) {
                alert("From date can't be after until date");
            } else if (new Date(fromDate) < todayDate) {
                alert("From date can't be before today's date");
            }
            //Go to rent page
            console.log(fromDate, untilDate);
        } else {
            alert("Please select dates");
        }
    }


    return (
        <div className={styles.hero}>
            <form className={styles.heroForm}>
                <div className={styles.from}>
                    <span className={styles.border}></span>
                    <label>From</label>
                    <input type="date" onChange={e => setFromDate(e.target.value)} />
                </div>
                <div className={styles.until}>
                    <label>Until</label>
                    <input type="date" onChange={e => setUntilDate(e.target.value)} />
                </div>
                <div className={styles.search_btn}>
                    <AiOutlineSearch onClick={handleSearch} size={25} className={styles.icon} />
                    <button onClick={handleSearch} className={styles.btn}>Search</button>
                </div>
            </form>
        </div>
    )
}
