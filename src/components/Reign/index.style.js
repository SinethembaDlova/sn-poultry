import styled from 'styled-components';
import { Button } from '../../globalStyles';

const ReignSection = styled.section`
  height: 100vh;
  background-position: center;
  background-size: cover;
  padding-top: clamp(70px, 25vh, 220px);
  box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;

const Background = styled.div`
  object-fit: cover;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(43, 43, 39), rgba(168, 137, 34));
  top: 0;
  position: absolute;
  z-index: -1;
`;

const ReignText = styled.p`
  margin-bottom: 35px;
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
  line-height: 24px;
  text-align: center;
  letter-spacing: 2px;
  color: #fff;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
`;

const ReignButton = styled(Button)`
  color: black;
  &:before {
    background: #fff;
    height: 500%;
  }
  &:hover:before {
    height: 0%;
  }
  &:hover {
    color: white;
  }
`;

export { ReignSection, Background, ReignText, ButtonWrapper, ReignButton };
