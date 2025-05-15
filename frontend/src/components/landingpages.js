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
        
          padding: '10px',
          borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,10.10)',
        }}>
          <h1 style={styles.heading}>Looking for convenient car rental services?</h1>
          <p style={styles.paragraph}>
            We make booking quick and easy, search for your rental car now 
            and start your journey!<br/><br/>
            Register to be a member to get a 10% off discount!
          </p>
         </div>
       
        <div style={{ marginTop: '20px' }}>
          <input
            type="text"
            placeholder="Car type"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '10px',
              border: '1px solid #ccc',
              marginTop: '10px', 
              marginBottom: '10px'
            }}/>
             <input
            type="text"
            placeholder="pick up location"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '10px',
              border: '1px solid #ccc',
                marginBottom: '10px'
            }}
          />
                <input
          type="text"
          placeholder="pick up time"
          style={{
            flex: 1,
            padding: '10px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            width: '49%', 
            marginRight: '10px',
        
          }}
        />
        <input
          type="text"
          placeholder="drop of times"
          style={{
            flex: 1,
            padding: '10px',
            borderRadius: '10px',
            border: '1px solid #ccc',
            width: '49%',
          
          }}
        />
        <div style={{ marginTop: '20px', textAlign: '' }}>
            <button
              style={{
                padding: '12px 175px',
                backgroundColor: '#F96E2A',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1em',
                marginLeft: '400px',
              }}
            >
              Book Now!!
            </button>
                  
                
   </div>
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
    backgroundColor: '#fff',
    minHeight: '100vh',
    marginTop: '-320px',
  },
  imageContainer: {
    flex: 1,
    padding: '5px',
    marginTop: '20px'
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

export default LandingPage;