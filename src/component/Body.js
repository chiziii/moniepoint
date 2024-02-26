import React, { useState } from 'react';
import { useSpring, animated, useInView } from '@react-spring/web';
import AnimationOne from '../img/ani-1.png';
import AnimationTwo from '../img/ani-2.png';
import AnimationThree from '../img/ani-3.png';
import AnimationFour from '../img/ani-4.png';
import AnimationFive from '../img/ani-5.png';
import AnimationSix from '../img/ani-6.png';
import AnimationSeven from '../img/ani-7.png';
import AnimationEight from '../img/ani-8.png';
import AnimationNine from '../img/ani-9.png';
import AnimationTen from '../img/ani-10.png';
import AnimationEleven from '../img/ani-11.png';
import AnimationTwelve from '../img/ani-12.png';

function Body() {

  const [refOne, inViewOne] = useInView();
  const [refTwo, inViewTwo] = useInView();
  const [refThree, inViewThree] = useInView();
  const [refFour, inViewFour] = useInView();
  const [refFive, inViewFive] = useInView();

  const [countdown, setCountdown] = useState(264.2);
  const [countdownTwo, setCountdownTwo] = useState(43);

  const springOne = useSpring({
    from: { opacity: 0, y: 100 },
    to: { opacity: inViewOne ? 1 : 0, y: inViewOne ? 0 : 100 },
    config: { duration: 1100 },
    delay: 500,
  });

  const springRotate = useSpring({
    from: { opacity: 0, y: 100 },
    to: { opacity: inViewOne ? 1 : 0, y: inViewOne ? 0 : 100, rotate: inViewOne ? 180 : 0 },
    config: { duration: 1100 },
    delay: 100,
  });

  const springTwo = useSpring({
    from: { opacity: 0, y: 100 },
    to: { opacity: inViewTwo ? 1 : 0, y: inViewTwo ? 0 : 100 },
    config: { duration: 1100 },
    delay: 100,
  });

  const springThree = useSpring({
    from: { opacity: 0, y: 100 },
    to: { opacity: inViewThree ? 1 : 0, y: inViewThree ? 0 : 100 },
  });

  const springFive = useSpring({
    from: { opacity: 0, y: 100 },
    to: { opacity: inViewFive ? 1 : 0, y: inViewFive ? 0 : 100 },
  });

  const spanSpring = useSpring({
    from: { opacity: 0, y: 100 },
    to: { opacity: inViewOne ? 1 : 0, y: inViewOne ? 0 : 100 },
    config: { duration: 1000 },
    delay: 300,
  });

  const spanSpringTwo = useSpring({
    from: { opacity: 0, y: 100 },
    to: { opacity: inViewOne ? 1 : 0, y: inViewOne ? 0 : 100 },
    config: { duration: 1000 },
    delay: 400,
  });

  const spanSpringThree = useSpring({
    from: { opacity: 0, y: 100 },
    to: { opacity: inViewOne ? 1 : 0, y: inViewOne ? 0 : 100 },
    config: { duration: 1000 },
    delay: 500,
  });

  const countdownSpring = useSpring({
    number: inViewTwo ? countdown : 0,
    from: { number: 0 },
    reset: inViewTwo,
    onRest: () => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      }
    },
  });

  const countdownSpringTwo = useSpring({
    number: inViewTwo ? countdownTwo : 0,
    from: { number: 0 },
    reset: inViewTwo,
    onRest: () => {
      if (countdownTwo > 0) {
        setCountdownTwo(countdownTwo - 1);
      }
    },
  });

  const scrollSpring = useSpring({
    from: { scroll: 0 },
    to: { scroll: 100 },
    loop: true,
    config: { duration: 10000 } // Adjust duration as needed
  });


  return (
    <div className="body">
      <div className="group-wrapper" ref={refOne}>
        <animated.img
          style={springRotate}
          className="animation-one"
          src={AnimationOne}
          alt="AnimationOne"
        />
        <div className="banner-text">
          <animated.div style={spanSpring} className="margin-space">Analytics</animated.div>
          <br />
          <animated.div style={spanSpringTwo} className="banner-text-two">
            <span>that</span>
            <span className="grey-text margin-space">helps</span>you  
          </animated.div>
          <br />
        </div>
        <animated.img
          style={springOne}
          className="animation-two"
          src={AnimationTwo}
          alt="AnimationOne"
        />
      </div>
      <animated.div style={spanSpringThree} className="banner-text-three banner-text">
        {" "}
        shape
        <span>
          <animated.img
            style={springOne}
            className="animation-three"
            src={AnimationThree}
            alt="AnimationThree"
          />
        </span>
        the future
      </animated.div>
      <div className="rounded-card-wrapper">
        <div className="key-text-wrapper">
          <p className="key-text">
            Your key to strategic
            <br /> success through analytics
          </p>
          <p className="ready-text">
            Ready to exciting, instantenous
            <br /> all-accessible insights in real time?
          </p>
        </div>

        <div className="key-text-wrapper" ref={refTwo}>
          <div className="reports-card">
            <div className="key-text-wrapper">
              <div className="first-half-wrapper">
                <button className="report-button">Setting up reports</button>
                <p className="mini-text">
                  Fast and easy access
                  <br /> to analytics
                </p>
                <p className="platform-info">
                  One platform is a comprehensive <br /> system of solutions that will be the <br />
                  first step towards the digitalization of <br /> your business!
                </p>
              </div>
              <div className="stats">
                <p className="sales-text">Sales statistics</p>
                <div className="key-text-wrapper" ref={refTwo}>
                  <animated.img
                    style={springTwo}
                    className="animation-four"
                    src={AnimationFour}
                    alt="AnimationFour"
                  />
                  <div className="profit-wrapper">
                    <p className="platform-text">Total profit</p>
                    <div className="price-text" ref={refTwo}>
        <animated.span>{countdownSpring.number.to(num => `$${num.toFixed(1)}k`)}</animated.span>
      </div>
                  </div>
                  <div className="visitor-card">
                    <span className="dark-grey">Vistors</span>
                    <animated.img
                      style={springTwo}
                      className="animation-five"
                      src={AnimationFive}
                      alt="AnimationFour"
                    />
                    <span className="price-text">
                      56k
                      <animated.img
                        style={springTwo}
                        className="animation-six"
                        src={AnimationSix}
                        alt="AnimationSix"
                      />
                    </span>
                  </div>
                </div>
                <animated.img
                  style={springTwo}
                  className="animation-seven"
                  src={AnimationSeven}
                  alt="AnimationSeven"
                />
              </div>
            </div>
          </div>
          <div className="widget-card">
            <div className="key-text-wrapper mini-card-wrapper">
              <animated.img
                style={springTwo}
                className="animation-eight"
                src={AnimationEight}
                alt="AnimationEight"
              />
              <div className="transactions">
                <p className="text-white transaction-text">Transactions</p>
                <animated.img
                  style={springTwo}
                  className="animation-nine"
                  src={AnimationNine}
                  alt="AnimationNine"
                />
                <animated.span className="cash-text text-white">
                  {countdownSpringTwo.number.to(num => num.toFixed(1))}
                  </animated.span>
              </div>
            </div>
            <p className="text-white key-widget-text text-center">Widget control</p>
            <p className="platform-text text-center">
              Reports provides a comprehensive overview <br />
              of important aspects of web analytics.
            </p>
          </div>
        </div>
        <div className="group-wrapper">
          <span className="introductory-text">Up to</span>
          <span className="banner-text">45%</span>
          <span className="in-text">
            Increase your analytics efficiency by up to 45%. Unique <br />
            algorithms provide insights from data, reduce time for analysis <br />
            and save time time for making important, informed decisions.
          </span>
        </div>
      </div>
      <div className="max-text">
        <span>
          Maximize
          <span className="grey-text"> efficiency</span> <br />
          with our initiative
        </span>
      </div>
      <div className="key-text-wrapper" ref={refThree}>
        <animated.img
          style={springThree}
          className="animation-ten"
          src={AnimationTen}
          alt="AnimationTen"
        />
          <div className="slide-text banner-text" ref={refThree}>
      <div className="scroll-content" style={{ overflowX: 'auto', whiteSpace: 'nowrap', width: '100%' }}>
        <animated.div style={{ transform: scrollSpring.scroll.interpolate(x => `translateX(-${x}%)`) }}>
          Text Text Text Text
        </animated.div>
      </div>
    </div>

      </div>
      <hr className="hr-1" />
      <div className="key-text-wrapper">
        <span>
          Explore traffic sources, page sources, conversions and more to gain deep insights <br />
          into your audience. We us, your business doesn't just adjust - it evolves
        </span>
        <div className="key-text-wrapper">
          <button className="request-btn">Request a demo</button>
          <button className="start-btn">Start for free</button>
        </div>
      </div>
      {/* <div className="rounded-card-wrapper">
        <div className="key-text-wrapper">
          <span className="key-text">Turning data into real<br />
              actions and ideas.
              </span>
        </div>
      </div> */}
      <div className="max-text" ref={refFour}>
        <span>
          We give full <br />
          <span className="grey-text"> control </span>
          over your data
        </span>
      </div>
      <div>
        <img
          className="animation-eleven"
          src={AnimationEleven}
          alt="AnimationEleven"
        />
      </div>
      <div className="started-wrapper" ref={refFive}>
        <animated.img
          style={springFive}
          className="animation-twelve"
          src={AnimationTwelve}
          alt="AnimationTwelve"
        />
        <div>
          <span className="banner-text">Get Started <br /></span>
          <span className="grey-text">
            Turn information into advantage! Start using <br />
            Ramos today. Sign up for a free trail.
          </span>
        </div>
        <div className="group-wrapper">
          <button className="request-btn">Request a demo</button>
          <button className="start-btn">Start for free</button>
        </div>
      </div>
    </div>
  );
}

export default Body;
