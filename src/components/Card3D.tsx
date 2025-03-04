
import styled from 'styled-components';

const StyledWrapper = styled.div`
  .container {
    position: relative;
    width: 256px;
    height: 350px; // הגדלתי את הגובה מ-256px ל-350px
    transition: 200ms;
  }

  #card {
    position: absolute;
    inset: 0;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    transition: 700ms;
    overflow: hidden;
    border: 4px solid #e0b0ff;
    box-shadow: 0 0 20px rgba(224,176,255,0.3);
  }

  .tracker {
    position: absolute;
    z-index: 200;
    width: 100%;
    height: 100%;
  }

  .tracker:hover {
    cursor: pointer;
  }

  .tracker:hover ~ #card {
    transition: 300ms;
    filter: brightness(1.1);
  }

  .canvas {
    perspective: 800px;
    inset: 0;
    z-index: 200;
    position: absolute;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
  }

  ${[...Array(25)].map((_, i) => `
    .tr-${i + 1} {
      grid-area: tr-${i + 1};
    }

    .tr-${i + 1}:hover ~ #card {
      transition: 125ms ease-in-out;
      transform: rotateX(${Math.floor(i / 5) * 10 - 20}deg) rotateY(${(i % 5) * 5 - 10}deg) rotateZ(0deg);
    }
  `).join('\n')}

  .noselect {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

interface Card3DProps {
  imageSrc: string;
  alt: string;
}

export const Card3D: React.FC<Card3DProps> = ({ imageSrc, alt }) => {
  return (
    <StyledWrapper>
      <div className="container noselect">
        <div className="canvas">
          {[...Array(25)].map((_, i) => (
            <div key={i} className={`tracker tr-${i + 1}`} />
          ))}
          <div id="card">
            <img src={imageSrc} alt={alt} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};
