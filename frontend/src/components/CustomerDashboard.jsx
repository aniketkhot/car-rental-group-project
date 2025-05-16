import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import styles from "./CustomerDashboard.module.css";

function CustomerDashboard() {
  return (
    <div
      style={{
        fontFamily: "'Roboto Slab', serif",
        backgroundColor: "#FBF8EF",
      }}
    >
      <section className="p-6 text-black text-lg">
        <div
          className="p-6 max-w-4xl mx-auto bg-white rounded-lg"
          style={{
            boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          <p className="font-semibold">No active rentals.</p>
          <p className="font-semibold">You last rented Toyota Corolla</p>
          <p className="font-semibold">12 days ago</p>
          <p className="font-semibold mt-2">
            Ready to book your next adventure ?
          </p>
          <img
            src="/toyota1.png"
            alt="Toyota"
            className="w-80 mx-auto my-4"
          />
          <div className="text-center">
            <button
              className="px-5 py-2 rounded text-white font-semibold"
              style={{ backgroundColor: "#F96E2A" }}
            >
              Browser Again
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
