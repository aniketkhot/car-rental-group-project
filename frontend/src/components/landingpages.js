import React from 'react';
import landingimage from './landingimage.png';

function LandingPage() {
  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={landingimage} alt="Landing" style={styles.image} />
      </div>


      <div style={styles.textContainer}>
        <div style={{
          backgroundColor: '#78B3CE',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          <h1 style={styles.heading}>Looking for convenient car rental services?</h1>
          <p style={styles.paragraph}>
            We make booking quick and easy, search for your rental car now and start your journey!<br/><br/>
            Register to be a member to get a 10% off discount!
          </p>
        </div>

        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input
            type="text"
            placeholder="Car type"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '10px',
              border: '1px solid #ccc'
            }}
          />
          <input
            type="text"
            placeholder="Pick up location"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '10px',
              border: '1px solid #ccc'
            }}
          />
          
        
          <div style={{ display: 'flex', gap: '10px' }}>
            <input
              type="text"
              placeholder="Pick up time"
              style={{
                flex: 1,
                padding: '10px',
                borderRadius: '10px',
                border: '1px solid #ccc'
              }}
            />
            <input
              type="text"
              placeholder="Drop off time"
              style={{
                flex: 1,
                padding: '10px',
                borderRadius: '10px',
                border: '1px solid #ccc'
              }}
            />
          </div>
          
          
          <button
            style={{
              margin: '20px auto',
              padding: '12px',
              width: '200px',
              backgroundColor: '#F96E2A',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1em',
            }}
          >
            Book Now!!
          </button>
          
        </div>
        
      </div>
    </div>
    
  );
  
}



const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '50px',
    backgroundColor: '#FBF8EF',
    minHeight: '100vh',
    flexWrap: 'wrap', 
  },
  imageContainer: {
    flex: 1,
    maxWidth: '600px',
    marginRight: '20px',
  },
 
  image: {
    width: '100%',
    height: '100%',
    borderRadius: '8px',
    
  },
  textContainer: {
    flex: 1.2,
    
    marginTop: '-200px'
  },
  heading: {
    fontSize: '2.5em',
    marginBottom: '5px',
    color: '#333',  
    fontFamily: 'Roboto Slab'
    
  },
  paragraph: {
    fontSize: '1.2em',
    lineHeight: '1',
    color: '#333',
    fontFamily: 'Roboto Slab'
    
  },
};
function PopularCars() {
  const cars = [
    { name: "Toyota Corolla", img: "/toyota2.png" },
    { name: "Audi", img: "/Audi.png" },
    { name: "Jeep Wrangler", img: "/Jeep Wrangler.png" },
    { name: "Nissan Versa", img: "/Nissan Versa.png" },
  ];

  return (
    <section style={{ padding: "2rem" }}>
      <h3 style={{ fontWeight: "bold", fontSize: "1.25rem", marginBottom: "1rem" }}>Today’s Popular</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "flex",
        }}
      >
        {cars.map((car, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: "#fff",
              textAlign: "center",
              borderRadius: "6px",
              padding: "1rem",
              boxShadow: "0px 0px 10px 10px rgba(0, 0, 0, 0.25)",
            }}
          >
            <img src={car.img} alt={car.name} style={{ height: "100px" }} />
            <p style={{ marginTop: "0.5rem" }}>{car.name}</p>
            <button
              style={{
                backgroundColor: "#F96E2A",
                color: "white",
                padding: "0.3rem 1rem",
                border: "none",
                borderRadius: "6px",
                marginTop: "0.5rem",
              }}
            >
              More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function MainPage() {
  return (
    <div>
      <LandingPage />
      <PopularCars />
    </div>
  );
}
