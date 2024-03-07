import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadFull } from "tsparticles";
import particlesOptions from "./config/particles-config.json";
import "../styles/App.css";
import ParticlesBg from "./ParticlesBackground";

import Availables from "./Availables";
import Header from "./Header";
import Input from "./Input";

const App = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      {init && <Particles options={particlesOptions} />}
      <ParticlesBg />
      <Header />
      <Input />
      <Availables />
    </>
  );
};

export default App;
