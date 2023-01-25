import styled, { keyframes } from 'styled-components';

const Skeleton = ({ times, h, w }) => {
  const boxes = Array(times)
    .fill(0)
    .map((_, index) => {
      return (
        <OuterDiv h={h} w={w} key={index}>
          <InnerDiv></InnerDiv>
        </OuterDiv>
      );
    });

  return boxes;
};

export default Skeleton;

const skeletonAnimation = keyframes`
    0%{transform:translateX(-100%)}
    50%{transform:translateX(0)}
    100%{transform:translateX(100%)}
`;

const OuterDiv = styled.div`
  position: relative;
  background-color: #eeeeee;
  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;
  width: ${({ h }) => h};
  height: ${({ w }) => w};
`;

const InnerDiv = styled.div`
  transform: translateX(-100%);
  background: rgba(238, 238, 238, 1);
  background: linear-gradient(
    90deg,
    rgba(238, 238, 238, 1) 0%,
    rgba(250, 250, 250, 1) 50%,
    rgba(238, 238, 238, 1) 100%
  );
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation: ${skeletonAnimation} infinite linear 1s;
`;
