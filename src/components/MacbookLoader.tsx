import styled from 'styled-components';

const MacbookLoader = () => {
  return (
    <StyledWrapper>
      <div className="macbook">
        <div className="inner">
          <div className="screen">
            <div className="face-one">
              <div className="camera" />
              <div className="display">
                <div className="shade" />
              </div>
              <span>MacBook Air</span>
            </div>
          </div>
          <div className="macbody">
            <div className="face-one">
              <div className="touchpad" />
              <div className="keyboard">
                {[...Array(76)].map((_, index) => (
                  <div key={index} className={`key ${index === 5 ? 'space' : index > 59 ? 'f' : ''}`} />
                ))}
              </div>
            </div>
            <div className="pad one" />
            <div className="pad two" />
            <div className="pad three" />
            <div className="pad four" />
          </div>
        </div>
        <div className="shadow" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .macbook {
    width: 30px;
    height: 20px;
    position: relative;
    perspective: 500px;
    margin-right: 8px;
  }

  .shadow {
    position: absolute;
    width: 12px;
    height: 0px;
    left: 8px;
    top: 32px;
    transform: rotateX(80deg) rotateY(0deg) rotateZ(0deg);
    box-shadow: 0 0 12px 8px rgba(0,0,0,0.3);
    animation: shadow infinite 7s ease;
  }

  .inner {
    z-index: 20;
    position: absolute;
    width: 30px;
    height: 20px;
    left: 0;
    top: 0;
    transform-style: preserve-3d;
    transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg);
    animation: rotate infinite 7s ease;
  }

  .screen {
    width: 30px;
    height: 20px;
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 2px;
    background: #ddd;
    transform-style: preserve-3d;
    transform-origin: 50% 19px;
    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    animation: lid-screen infinite 7s ease;
    background-image: linear-gradient(45deg, rgba(0,0,0,0.34) 0%,rgba(0,0,0,0) 100%);
    background-position: left bottom;
    background-size: 60px 60px;
    box-shadow: inset 0 1px 1px rgba(255,255,255,0.5);
  }

  .screen .face-one {
    width: 30px;
    height: 20px;
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 2px;
    background: #d3d3d3;
    transform: translateZ(0.4px);
    background-image: linear-gradient(45deg,rgba(0,0,0,0.24) 0%,rgba(0,0,0,0) 100%);
  }

  .screen .face-one .camera {
    width: 0.6px;
    height: 0.6px;
    border-radius: 100%;
    background: #000;
    position: absolute;
    left: 50%;
    top: 1px;
    margin-left: -0.3px;
  }

  .screen .face-one .display {
    width: 26px;
    height: 15px;
    margin: 2px;
    background: #000;
    border-radius: 1px;
    position: relative;
    box-shadow: inset 0 0 1px rgba(0,0,0,1);
  }

  .screen .face-one span {
    display: none;
  }

  .macbody {
    width: 30px;
    height: 20px;
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 2px;
    background: #cbcbcb;
    transform-style: preserve-3d;
    transform-origin: 50% bottom;
    transform: rotateX(-90deg);
    animation: lid-macbody infinite 7s ease;
    background-image: linear-gradient(45deg, rgba(0,0,0,0.24) 0%,rgba(0,0,0,0) 100%);
  }

  .macbody .face-one {
    width: 30px;
    height: 20px;
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 2px;
    transform-style: preserve-3d;
    background: #dfdfdf;
    animation: lid-keyboard-area infinite 7s ease;
    transform: translateZ(-0.4px);
    background-image: linear-gradient(30deg, rgba(0,0,0,0.24) 0%,rgba(0,0,0,0) 100%);
  }

  .macbody .touchpad {
    width: 8px;
    height: 6px;
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 1px;
    margin: -9px 0 0 -4px;
    background: #cdcdcd;
    background-image: linear-gradient(30deg, rgba(0,0,0,0.24) 0%,rgba(0,0,0,0) 100%);
    box-shadow: inset 0 0 1px #888;
  }

  .macbody .keyboard {
    width: 26px;
    height: 9px;
    position: absolute;
    left: 1.4px;
    top: 8px;
    border-radius: 1px;
    transform-style: preserve-3d;
    background: #cdcdcd;
    background-image: linear-gradient(30deg, rgba(0,0,0,0.24) 0%,rgba(0,0,0,0) 100%);
    box-shadow: inset 0 0 1px #777;
    padding: 0 0 0 0.4px;
  }

  .keyboard .key {
    width: 1.2px;
    height: 1.2px;
    background: #444;
    float: left;
    margin: 0.2px;
    transform: translateZ(-0.4px);
    border-radius: 0.4px;
    box-shadow: 0 -0.4px 0 #222;
    animation: keys infinite 7s ease;
  }

  .key.space {
    width: 9px;
  }

  .key.f {
    height: 0.6px;
  }

  .macbody .pad {
    width: 1px;
    height: 1px;
    background: #333;
    border-radius: 100%;
    position: absolute;
  }

  .pad.one {
    left: 4px;
    top: 4px;
  }

  .pad.two {
    right: 4px;
    top: 4px;
  }

  .pad.three {
    right: 4px;
    bottom: 4px;
  }

  .pad.four {
    left: 4px;
    bottom: 4px;
  }

  @keyframes rotate {
    0% {
      transform: rotateX(-20deg) rotateY(0deg) rotateZ(0deg);
    }

    5% {
      transform: rotateX(-20deg) rotateY(-20deg) rotateZ(0deg);
    }

    20% {
      transform: rotateX(30deg) rotateY(200deg) rotateZ(0deg);
    }

    25% {
      transform: rotateX(-60deg) rotateY(150deg) rotateZ(0deg);
    }

    60% {
      transform: rotateX(-20deg) rotateY(130deg) rotateZ(0deg);
    }

    65% {
      transform: rotateX(-20deg) rotateY(120deg) rotateZ(0deg);
    }

    80% {
      transform: rotateX(-20deg) rotateY(375deg) rotateZ(0deg);
    }

    85% {
      transform: rotateX(-20deg) rotateY(357deg) rotateZ(0deg);
    }

    87% {
      transform: rotateX(-20deg) rotateY(360deg) rotateZ(0deg);
    }

    100% {
      transform: rotateX(-20deg) rotateY(360deg) rotateZ(0deg);
    }
  }

  @keyframes lid-screen {
    0% {
      transform: rotateX(0deg);
      background-position: left bottom;
    }

    5% {
      transform: rotateX(50deg);
      background-position: left bottom;
    }

    20% {
      transform: rotateX(-90deg);
      background-position: -150px top;
    }

    25% {
      transform: rotateX(15deg);
      background-position: left bottom;
    }

    30% {
      transform: rotateX(-5deg);
      background-position: right top;
    }

    38% {
      transform: rotateX(5deg);
      background-position: right top;
    }

    48% {
      transform: rotateX(0deg);
      background-position: right top;
    }

    90% {
      transform: rotateX(0deg);
      background-position: right top;
    }

    100% {
      transform: rotateX(0deg);
      background-position: right center;
    }
  }

  @keyframes lid-macbody {
    0% {
      transform: rotateX(-90deg);
    }

    50% {
      transform: rotateX(-90deg);
    }

    100% {
      transform: rotateX(-90deg);
    }
  }

  @keyframes lid-keyboard-area {
    0% {
      background-color: #dfdfdf;
    }

    50% {
      background-color: #bbb;
    }

    100% {
      background-color: #dfdfdf;
    }
  }

  @keyframes screen-shade {
    0% {
      background-position: -20px 0px;
    }

    5% {
      background-position: -40px 0px;
    }

    20% {
      background-position: 200px 0;
    }

    50% {
      background-position: -200px 0;
    }

    80% {
      background-position: 0px 0px;
    }

    85% {
      background-position: -30px 0;
    }

    90% {
      background-position: -20px 0;
    }

    100% {
      background-position: -20px 0px;
    }
  }

  @keyframes keys {
    0% {
      box-shadow: 0 -2px 0 #222;
    }

    5% {
      box-shadow: 1 -1px 0 #222;
    }

    20% {
      box-shadow: -1px 1px 0 #222;
    }

    25% {
      box-shadow: -1px 1px 0 #222;
    }

    60% {
      box-shadow: -1px 1px 0 #222;
    }

    80% {
      box-shadow: 0 -2px 0 #222;
    }

    85% {
      box-shadow: 0 -2px 0 #222;
    }

    87% {
      box-shadow: 0 -2px 0 #222;
    }

    100% {
      box-shadow: 0 -2px 0 #222;
    }
  }

  @keyframes shadow {
    0% {
      transform: rotateX(80deg) rotateY(0deg) rotateZ(0deg);
      box-shadow: 0 0 60px 40px rgba(0,0,0,0.3);
    }

    5% {
      transform: rotateX(80deg) rotateY(10deg) rotateZ(0deg);
      box-shadow: 0 0 60px 40px rgba(0,0,0,0.3);
    }

    20% {
      transform: rotateX(30deg) rotateY(-20deg) rotateZ(-20deg);
      box-shadow: 0 0 50px 30px rgba(0,0,0,0.3);
    }

    25% {
      transform: rotateX(80deg) rotateY(-20deg) rotateZ(50deg);
      box-shadow: 0 0 35px 15px rgba(0,0,0,0.1);
    }

    60% {
      transform: rotateX(80deg) rotateY(0deg) rotateZ(-50deg) translateX(30px);
      box-shadow: 0 0 60px 40px rgba(0,0,0,0.3);
    }

    100% {
      box-shadow: 0 0 60px 40px rgba(0,0,0,0.3);
    }
  }
`;

export default MacbookLoader;
