
import styled from 'styled-components';

const PlanetLoader = () => {
  return (
    <StyledWrapper>
      <div className="content">
        <div className="planet">
          <div className="ring" />
          <div className="cover-ring" />
          <div className="spots">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .content {
    width: 60px;
    height: 60px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content .planet {
    width: 65%;
    height: 65%;
    background-color: #546c8c;
    border-radius: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    transform-origin: center center;
    box-shadow: inset 2px -10px 0px rgba(0, 0, 0, 0.1);
    animation: planet 5s ease infinite alternate;
  }

  @keyframes planet {
    0% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(-10deg);
    }
  }

  .content .planet .ring {
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background-color: #bacbd9;
    display: flex;
    align-items: center;
    justify-content: center;
    transform-origin: 33% center;
    box-shadow: 2px -10px 0px rgba(0, 0, 0, 0.1), inset -5px -10px 0px rgba(0, 0, 0, 0.1);
    animation: ring 3s ease infinite;
  }

  @keyframes ring {
    0% {
      transform: rotateX(110deg) rotateZ(0deg) translate(-50px, 5px);
    }
    100% {
      transform: rotateX(110deg) rotateZ(360deg) translate(-50px, 5px);
    }
  }

  .content .planet .ring:before {
    content: "";
    position: absolute;
    width: 2px;
    height: 6px;
    border-radius: 100%;
    background-color: #7ea1bf;
    z-index: 2;
    left: calc(0px - 1px);
    box-shadow: inset -3px 3px 0px rgba(0, 0, 0, 0.2);
  }

  .content .planet .ring:after {
    content: "";
    position: absolute;
    width: 48px;
    height: 48px;
    border-radius: 100%;
    background-color: #7ea1bf;
    box-shadow: inset 2px -10px 0px rgba(0, 0, 0, 0.1);
  }

  .content .planet .cover-ring {
    position: absolute;
    width: 100%;
    height: 50%;
    border-bottom-left-radius: 80%;
    border-bottom-right-radius: 80%;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
    transform: translate(0px, -3.4px);
    background-color: #546c8c;
    z-index: 2;
    box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);
  }

  .content .planet .spots {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 2;
  }

  .content .planet .spots span {
    width: 6px;
    height: 6px;
    background-color: #3c4359;
    position: absolute;
    border-radius: 100%;
    box-shadow: inset -2px 3px 0px rgba(0, 0, 0, 0.3);
    animation: dots 5s ease infinite alternate;
  }

  @keyframes dots {
    0% {
      box-shadow: inset -3px 3px 0px rgba(0, 0, 0, 0.3);
    }
    100% {
      box-shadow: inset 3px 3px 0px rgba(0, 0, 0, 0.3);
    }
  }

  .content .planet .spots span:nth-child(1) {
    top: 4px;
    right: 10px;
  }
  .content .planet .spots span:nth-child(2) {
    top: 8px;
    left: 10px;
    width: 3px;
    height: 3px;
  }
  .content .planet .spots span:nth-child(3) {
    top: 16px;
    left: 4px;
    width: 5px;
    height: 5px;
  }
  .content .planet .spots span:nth-child(4) {
    top: 16px;
    left: 18px;
    width: 8px;
    height: 8px;
  }
  .content .planet .spots span:nth-child(5) {
    top: 32px;
    left: 14px;
    width: 3px;
    height: 3px;
  }
  .content .planet .spots span:nth-child(6) {
    top: 33px;
    left: 25px;
    width: 2px;
    height: 2px;
  }
  .content .planet .spots span:nth-child(7) {
    top: 18px;
    left: 30px;
    width: 3px;
    height: 3px;
  }
`;

export default PlanetLoader;
