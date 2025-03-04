import React from 'react';
import './App.css';
import Typewriter from 'typewriter-effect';

const App = () => {
  return (
    <div className="App">
      <section className="section welcome">
        <h1>Hey My Bewakoof Larki ❤️</h1>
        <p>Distance Sirf Physical Hoti Hai... Par Dil Toh Hamesha Sath Hote Hain 💕</p>
      </section>

      <section className="section story">
        <h2>Our Story</h2>
        <p>Kabhi mile nahi, par tera ehsaas hamesha paas hai 💕</p>
      </section>

      <section className="section memories">
        <h2>Dream Memories 🌌</h2>
        <p>Ek din milenge... Tere hath ko apne hath me lene ke liye...</p>
      </section>

      <section className="section letter">
        <h2>My Letter to You 💌</h2>
        <div className="typewriter">
          <Typewriter
            options={{
              strings: ['Mile ya na mile... Par tu hamesha meri hi rahegi ❤️🔥'],
              autoStart: true,
              loop: true,
              delay: 80,
            }}
          />
        </div>
      </section>

      <section className="section forever">
        <h2>Coming Soon: The First Meeting 💕</h2>
      </section>
    </div>
  );
};

export default App;
