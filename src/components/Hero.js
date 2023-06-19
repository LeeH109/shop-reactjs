import React from "react";
import WomanImg from "../img/woman_hero.png";

import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section
      //     className="bg-green-100 h-[500px]
      //     bg-[url('https://aldoshoes.cdn.vccloud.vn/web/image/356434/Sale%20Banner_1000%20x%20400.jpg?access_token=3aff2e77-1d2a-463d-a70c-9adc7910b10d')]
      // bg-no-repeat bg-cover bg-center py-24   "
      className=" h-[500px] mt-16 md:h-[400px] sm:h-[200px] max-[600px]:h-[200px]"
    >
      <div
        className="container mx-auto flex justify-around h-full 
      
      bg-[url('https://aldoshoes.cdn.vccloud.vn/web/image/356434/Sale%20Banner_1000%20x%20400.jpg?access_token=3aff2e77-1d2a-463d-a70c-9adc7910b10d')] 
  // bg-no-repeat bg-cover bg-center "
      >
        <div className="flex">
          <div>New Trend</div>
          <h1>a</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
