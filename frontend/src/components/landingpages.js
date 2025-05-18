import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div style={styles.container}>

      <div style={styles.imageContainer}>
        <img src="./landingimage.png" alt="Landing" style={styles.image} />
      </div>

      
      <div style={styles.textContainer}>
        <div style={styles.infoBox}>
          <h1 style={styles.heading}>Looking for convenient car rental services?</h1>
          <p style={styles.paragraph}>
            We make booking quick and easy, search for your rental car now and start your journey!<br/><br/>
            Register to be a member to get a 10% off discount!
          </p>
        </div>

       
        <div style={styles.formContainer}>
        
      

          
   <button style={styles.button} onClick={() => navigate('/searchpage')}>
  Book Now!!
</button>

         
          <p style={{marginTop: '10px', color: '#333'}}></p>
        </div>
      </div>
    </div>
  );
}
const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '50px',
    backgroundColor: '#FBF8EF',
    minHeight: '100vh',
  },
  imageContainer: {
    flex: 1,
    maxWidth: '600px',
    marginRight: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  textContainer: {
    flex: 1.2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  infoBox: {
    backgroundColor: '#78B3CE',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    maxWidth: '600px',
    width: '100%',
    marginBottom: '20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2em',
    marginBottom: '10px',
    color: '#333',
    fontFamily: 'Roboto Slab, serif',
  },
  paragraph: {
    fontSize: '1.2em',
    lineHeight: '1.5',
    color: '#333',
    fontFamily: 'Roboto Slab, serif',
  },
  formContainer: {
    width: '100%',
    maxWidth: '600px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    fontFamily: 'Roboto Slab, serif',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '10px',
    border: '1px solid #ccc',
    fontSize: '1em',
    fontFamily: 'Roboto Slab, serif',
  },
  timeContainer: {
    display: 'flex',
    gap: '10px',
  },
  button: {
    marginTop: '20px',
    padding: '12px 20px',
    width: '200px',
    alignSelf: 'center',
    backgroundColor: '#F96E2A',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1em',
    fontWeight: 'bold',
  },
};
function PopularCars() {
  const cars = [
    { name: "Toyota Corolla", img: "/toyota2.png" },
    { name: "Audi", img: "/Audi.png" },
    { name: "Jeep Wrangler", img: "/Jeep Wrangler.png" },
    { name: "Nissan Versa", img: "/Nissan Versa.png" },
  ];

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "1rem",
    fontFamily: 'Roboto Slab, serif',
  };

  const cardStyle = {
    backgroundColor: "#fff",
    textAlign: "center",
    borderRadius: "6px",
    padding: "1rem",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
  };

  const imgStyle = {
    maxHeight: "100px",
    width: "auto",
    display: "block",
    margin: "0 auto",
  };

  const buttonStyle = {
    backgroundColor: "#F96E2A",
    color: "white",
    padding: "0.3rem 1rem",
    border: "none",
    borderRadius: "6px",
    marginTop: "0.5rem",
    cursor: "pointer",
  };

  return (
    <section style={{ padding: "2rem" }}>
      <h3 style={{ fontWeight: "bold", fontSize: "1.25rem", marginBottom: "1rem" }}>Today’s Popular</h3>
      <div style={containerStyle}>
        {cars.map((car, idx) => (
          <div key={idx} style={cardStyle}>
            <img src={car.img} alt={car.name} style={imgStyle} />
            <p style={{ marginTop: "0.5rem" }}>{car.name}</p>
            <button style={buttonStyle}>More</button>
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
