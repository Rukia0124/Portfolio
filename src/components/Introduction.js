import React from "react";
import Socials from "./Socials";
import Avatar from "../assets/images/Rukia_Avatar.png";
import { Button } from "antd";

const Introduction = () => {
  return (
    <div id="introduction">
      <Socials />
      <div className="intro-content">
        <h1>Hello world ! </h1>
        <h2>Audrey</h2>
        <h3>Développeuse web junior</h3>
        <p>
          Actuellement en formation avec OpenClassrooms, passionnée par
          l'apprentissage continu et l'amélioration constante de mes
          compétences.{" "}
        </p>
        <Button type="primary" ghost="true">
          <a href="#contact">Contactez-moi</a>
        </Button>
      </div>
      <img src={Avatar} alt="Avatar de Audrey" width={200} />
    </div>
  );
};

export default Introduction;
