import React from "react";
import { useState, useEffect } from "react";
import "./Slider.css";
function Slider() {
  {
    const [counter, setCounter] = useState(1);

    useEffect(() => {
      const interval = setInterval(() => {
        document.getElementById("radio" + counter).checked = true;
        setCounter((prevCounter) => (prevCounter % 4) + 1);
      }, 2000);

      return () => clearInterval(interval);
    }, [counter]);
    return (
      <div className="body">
        <div className="slider">
          <div className="slides">
            <input type="radio" name="radio-btn" id="radio1" />
            <input type="radio" name="radio-btn" id="radio2" />
            <input type="radio" name="radio-btn" id="radio3" />
            <input type="radio" name="radio-btn" id="radio4" />

            <div className="slide first">
              <img
                src="https://media.discordapp.net/attachments/1125737184180326440/1134475050427351070/free-photo-of-close-up-of-a-playstation-joystick.png?width=670&height=670"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://media.discordapp.net/attachments/1125737184180326440/1134478387667271722/8ca4cdd64357ecddbf1f4c9109800ac3.png?width=670&height=670"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://media.discordapp.net/attachments/1125737184180326440/1134478458689441884/4eacc9a16fd0961ae8f70d5a26c29363.png?width=681&height=670"
                alt=""
              />
            </div>
            <div className="slide">
              <img
                src="https://media.discordapp.net/attachments/1125737184180326440/1134474950900732007/free-photo-of-black-wireless-headphones.png?width=670&height=670"
                alt=""
              />
            </div>
            <div className="navigation-auto">
              <div className="auto-btn1"></div>
              <div className="auto-btn2"></div>
              <div className="auto-btn3"></div>
              <div className="auto-btn4"></div>
            </div>
          </div>
          <div className="navigation-manual ">
            <label htmlFor="radio1" className="manual-btn"></label>
            <label htmlFor="radio2" className="manual-btn"></label>
            <label htmlFor="radio3" className="manual-btn"></label>
            <label htmlFor="radio4" className="manual-btn"></label>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
