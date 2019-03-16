import React from 'react';
import SplitText from 'react-pose-text';

export default Title


const wordPoses = {
  draggable: true
};

const charPoses = {
  exit: { y: 25, opacity: 0 },
 enter: {
   y: 0,
   opacity: 1,
   transition: ({ charInWordIndex }) => ({
     type: 'spring',
     delay: charInWordIndex * 3,
     stiffness: 500 + charInWordIndex * 150,
     damping: 10 - charInWordIndex * 1
   })
 },
  drag: {
    y: 0,
    transition: ({ charInWordIndex }) => ({
      type: 'spring',
      velocity: 500 * Math.sin(1 + charInWordIndex),
      damping: 0
    })
  },
  dragEnd: {
    y: 0,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 500
    }
  }
};

function Title() {
  return (
    <div className="contain" id = "title">
      <SplitText initialPose="exit" pose="enter" wordPoses={wordPoses} charPoses={charPoses}>
        Play With Me
      </SplitText>
    </div>
  );
}
