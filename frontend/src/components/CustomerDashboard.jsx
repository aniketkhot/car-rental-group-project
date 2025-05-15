import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import styles from "./CustomerDashboard.module.css";

function CustomerDashboard() {
  const { token } = useContext(AuthContext);
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    if (!token) return;
    const fetchUserRentals = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5001/api/rentals/by-customer",
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );
        setRentals(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUserRentals();
  }, [token]);

  const latest = rentals
    .slice()
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))[0];

  return (
    <div className={styles.container}>
      <div className={styles.historyWrapper}>
        <div className={styles.card}>
          {rentals.length === 0 ? (
            <>
              <p className={styles.mainText}>It’s your first time booking.</p>
              <p className={styles.subText}>Ready to book your next adventure?</p>
              <button className={styles.browseBtn}>Browse Cars</button>
            </>
          ) : (
            <>
              <p className={styles.mainText}>
                You last rented{" "}
                <span className={styles.highlight}>{latest.car.model}</span>
              </p>
              <p className={styles.subText}>
                {new Date(latest.startDate).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "short",
                  day: "numeric"
                })}
              </p>
              <p className={styles.subText}>Ready to book your next adventure?</p>
              <button className={styles.browseBtn}>Browse Again</button>
            </>
          )}
        </div>
      </div>

      <section className={styles.popularSection}>
        <h3 className={styles.popularTitle}>Today’s Popular</h3>
        <div className={styles.grid}>
          {[
            { name: "Toyota Corolla", img: "/toyota2.png" },
            { name: "Audi", img: "/Audi.png" },
            { name: "Jeep Wrangler", img: "/Jeep Wrangler.png" },
            { name: "Nissan Versa", img: "/Nissan Versa.png" }
          ].map((car, i) => (
            <div key={i} className={styles.cardItem}>
              <img src={car.img} alt={car.name} />
              <p className={styles.carName}>{car.name}</p>
              <button className={styles.cardBtn}>More</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default CustomerDashboard;
