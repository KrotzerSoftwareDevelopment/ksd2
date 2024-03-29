import React from 'react';



import './FilePages/Styles.css';
import Particles from 'react-particles-js';


function App() {
  return (
    <div className="App">
    <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 8,
	                "size_min": 1.5
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
              "direction": "right",
             
	            "out_mode": "in"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 100,
	                "duration": 2,
	                "size": 0,
	                "opacity": 100
	            },
	            "repulse": {
	                "distance": 500,
	                "duration": .1
	            }
	        }
	    }
  }} ></Particles>
    <div>


    <div className="particles">
    

  </div>
   
    

    </div>

    </div>
  );
}

export default App;
