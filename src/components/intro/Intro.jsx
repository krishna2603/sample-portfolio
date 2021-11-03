import "./intro.css";
import { useEffect, useRef } from "react";
import { init } from "ityped";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Frontend Dev", "Opensource ❤️", "Java","Logophile"],
    });
  }, []);
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Bhargav Krishna</h1>
          <div className="i-n">
            I'm a <span className="i-s" ref={textRef}></span>
          </div>
          <p className="i-desc">
          I love creating websites, solving problems and I love the lifestyle of coordination. I am a huge lover of words. 
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src="img/pose-mask-6.png" alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;