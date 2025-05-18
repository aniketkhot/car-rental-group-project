import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import styles from "./CustomerDashboard.module.css";

function CustomerDashboard() {
  const [rentals, setRentals] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/rentals/by-customer')
      .then(res => {
        if (res.data.length > 0) {
          setRentals(res.data);
        } else {
          setRentals([]);
        }
      })
      .catch(error => {
        console.error('Failed to fetch rental data:', error);
        setRentals([]); 
      });
  }, []);

  return (
    <div style={{ fontFamily: "'Roboto Slab', serif", backgroundColor: "#FBF8EF" }}>
      <section className="p-6 text-black text-lg">
        <div
          className="p-6 max-w-4xl mx-auto bg-white rounded-lg"
          style={{ boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.25)" }}
        >
          {rentals && rentals.length > 0 ? (
            <>
     
              {(() => {
                const latestRental = rentals[0];
                const carModel = latestRental.car ? latestRental.car.carModel : 'Unknown Model';
                const startDate = latestRental.startDate;
                const daysAgo = Math.ceil((new Date() - new Date(startDate)) / (1000 * 60 * 60 * 24));
                return (
                  <>
                    <p className="font-semibold">Most Recent Rented Car: {carModel}</p>
                    <p className="font-semibold">Days Since Last Rental: {daysAgo} days</p>
                  </>
                );
              })()}
            </>
          ) : (
         
            <>
              <p className="font-semibold">No active rentals or rental records found.</p>
              <p className="font-semibold">Complete your first booking and get 200 points</p>
              <p className="font-semibold">Make 5 bookings and get a free car model upgrade</p>
              <p className="font-semibold">Ready to book your next adventure?</p>
            </>
          )}

          <div className="text-center mt-4">
            <button
              className="px-5 py-2 rounded text-white font-semibold"
              style={{ backgroundColor: "#F96E2A" }}
              onClick={() => navigate('/searchpage')}
            >
              Book Now!!
            </button>
          </div>
        </div>
      </section>

      <section className="p-6 text-black text-lg">
        <h3 className="font-semibold text-xl mb-2">Today’s Popular</h3>
        <div className="grid grid-cols-4 gap-4">
          {[
            { name: "Toyota Corolla", img: "/toyota2.png" },
            { name: "Audi", img: "/Audi.png" },
            { name: "Jeep Wrangler", img: "/Jeep Wrangler.png" },
            { name: "Nissan Versa", img: "/Nissan Versa.png" },
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