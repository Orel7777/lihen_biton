
import { styled } from "styled-components";

const BoxLoader = () => {
  return (
    <StyledWrapper>
      <svg xmlns="http://www.w3.org/2000/svg" height={100} width={100}>
        <g style={{order: -1}}>
          <polygon transform="rotate(45 50 50)" strokeWidth={1} stroke="#d3a410" fill="none" points="35,35 74,25 65,65 25,75" id="bounce" />
          <polygon transform="rotate(45 50 50)" strokeWidth={1} stroke="#d3a410" fill="none" points="35,35 74,25 65,65 25,75" id="bounce2" />
          <polygon transform="rotate(45 50 50)" strokeWidth={2} stroke="#000" fill="#414750" points="35,35 75,25 65,65 25,75" />
          <polygon strokeWidth={2} stroke="#000" fill="url(#gradiente)" points="50,35 75,50 50,65 25,50" />
          <defs>
            <linearGradient y2="100%" x2="10%" y1="0%" x1="0%" id="gradiente">
              <stop style={{stopColor: '#1e2026', stopOpacity: 1}} offset="20%" />
              <stop style={{stopColor: '#414750', stopOpacity: 1}} offset="60%" />
            </linearGradient>
          </defs>
          <polygon transform="translate(10, 15.5)" strokeWidth={2} stroke="#000" fill="#b7870f" points="40,25 40,37.5 40,49.5 20,37.5" />
          <polygon transform="translate(10, 15.5)" strokeWidth={2} stroke="#000" fill="url(#gradiente2)" points="20,-20 40,-20 40,49.5 20,37.5" />
          <defs>
            <linearGradient y2="100%" x2="0%" y1="-17%" x1="10%" id="gradiente2">
              <stop style={{stopColor: '#d3a51000', stopOpacity: 1}} offset="20%" />
              <stop style={{stopColor: '#d3a51054', stopOpacity: 1}} offset="100%" id="animatedStop" />
            </linearGradient>
          </defs>
          <polygon transform="rotate(180 50 50) translate(10, 10)" strokeWidth={2} stroke="#000" fill="#d3a410" points="40,25 40,37.5 40,49.5 20,37.5" />
          <polygon transform="rotate(0 50 50) translate(30, 10)" strokeWidth={2} stroke="#000" fill="url(#gradiente3)" points="20,-20 40,-20 40,42.5 20,55.1" />
          <defs>
            <linearGradient y2="100%" x2="10%" y1="0%" x1="0%" id="gradiente3">
              <stop style={{stopColor: '#d3a51000', stopOpacity: 1}} offset="20%" />
              <stop style={{stopColor: '#d3a51054', stopOpacity: 1}} offset="100%" id="animatedStop" />
            </linearGradient>
          </defs>
          <polygon transform="rotate(45 50 50) translate(40, 47.5)" strokeWidth={2} stroke="#000" fill="#ffe4a1" points="2.5,0 2.5,2.5 0,2.5 0,0" id="particles" />
          <polygon transform="rotate(45 50 50) translate(40, 27.5)" strokeWidth={2} stroke="#000" fill="#ccb069" points="3,0 3,3 0,3 0,0" id="particles" />
          <polygon transform="rotate(45 50 50) translate(35, 40)" strokeWidth={2} stroke="#000" fill="#fff" points="1,0 1,1 0,1 0,0" id="particles" />
          <polygon strokeWidth={2} stroke="#000" fill="#292d34" points="14.75,49.9 50,71 50,86 14.75,65" />
          <polygon transform="translate(25, 46)" strokeWidth={2} stroke="#000" fill="#1f2127" points="25,25 60.25,4 60.25,17.5 25,40" />
        </g>
      </svg>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  @keyframes bounce {
    0%, 100% { translate: 0px 18px; }
    50% { translate: 0px 23px; }
  }
  @keyframes bounce2 {
    0%, 100% { translate: 0px 23px; }
    50% { translate: 0px 28px; }
  }
  @keyframes umbral {
    0% { stop-color: #d3a5102e; }
    50% { stop-color: rgba(211, 165, 16, 0.519); }
    100% { stop-color: #d3a5102e; }
  }
  @keyframes partciles {
    0%, 100% { translate: 0px 8px; }
    50% { translate: 0px 3px; }
  }
  #particles {
    animation: partciles 4s ease-in-out infinite;
  }
  #animatedStop {
    animation: umbral 4s infinite;
  }
  #bounce {
    animation: bounce 4s ease-in-out infinite;
    translate: 0px 18px;
  }
  #bounce2 {
    animation: bounce2 4s ease-in-out infinite;
    translate: 0px 23px;
    animation-delay: 0.5s;
  }
`;

export default BoxLoader;
