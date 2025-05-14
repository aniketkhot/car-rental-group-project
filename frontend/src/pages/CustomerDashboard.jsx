import React from "react";

function CustomerDashboard() {
  return (
    <div
      style={{
        fontFamily: "'Roboto Slab', serif",
        backgroundColor: "#FBF8EF",
      }}
    >
      {/* message */}
      <section className="p-6 text-black text-lg">
        <div
          className="p-6 max-w-4xl mx-auto bg-white rounded-lg"
          style={{
            boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          <p className="font-bold">No active rentals.</p>
          <p>You last rented Toyota Corolla</p>
          <p>12 days ago</p>
          <p className="font-bold mt-2">
            Ready to book your next adventure ?
          </p>
          <img
            src="/toyota1.png"
            alt="Toyota"
            className="w-80 mx-auto my-4"
          />
          <div className="text-center">
            <button
              className="px-5 py-2 rounded text-white"
              style={{ backgroundColor: "#F96E2A" }}
            >
              Browser Again
            </button>
          </div>
        </div>
      </section>

      {/* todays popular */}
      <section className="p-6 text-black text-lg">
        <h3 className="font-bold text-xl mb-2">Today’s Popular</h3>
        <div className="grid grid-cols-4 gap-4">
          {[
            { name: "Toyota Corolla", img: "/toyota2.png" },
            { name: "Audi", img: "/Audi.png" },
            { name: "Jeep Wrangler", img: "/Jeep Wrangler.png" },
            { name: "Nissan Versa", img: "/Nissan Versa.png" },
          ].map((car, idx) => (
            <div
              key={idx}
              className="p-4 text-center rounded bg-white"
              style={{
                boxShadow: "0 0 10px 10px rgba(0, 0, 0, 0.25)",
              }}
            >
              <img
                src={car.img}
                alt={car.name}
                className="h-24 mx-auto mb-2"
              />
              <p className="mt-2">{car.name}</p>
              <button
                className="mt-2 px-4 py-1 rounded text-white"
                style={{ backgroundColor: "#F96E2A" }}
              >
                More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* foot */}
      <footer className="text-center p-4 mt-6" style={{ backgroundColor: "#78B3CE" }}>
        <p className="font-bold mb-2">FOLLOW US ON OUR SOCIAL NETWORKS</p>
        <div className="flex justify-center gap-4">
          <img src="/discord.png" alt="Discord" className="h-6" />
          <img src="/facebook.png" alt="Facebook" className="h-6" />
          <img src="/google.png" alt="Google" className="h-6" />
          <img src="/ins.png" alt="Instagram" className="h-6" />
        </div>
      </footer>
    </div>
  );
}

export default CustomerDashboard;


