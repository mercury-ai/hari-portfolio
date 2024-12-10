import React from 'react';
import Particles from "react-tsparticles";

const ParticlesComponent = () => {
  return (
    <div style={{ width: "400px", height: "400px", backgroundColor: "#1a202c", borderRadius: "8px" }}>
      <Particles
        options={{
          fullScreen: { enable: false }, // Ensure it doesn’t occupy the full viewport
          particles: {
            number: { value: 30 },
            size: { value: 5 },
            color: { value: "#ffffff" },
            move: { enable: true, speed: 2 },
            links: { enable: true, color: "#ffffff", distance: 100, opacity: 0.4 },
          },
        }}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default ParticlesComponent;
