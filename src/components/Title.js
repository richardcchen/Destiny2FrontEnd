import React from 'react';
import ReactDOM from 'react-dom';
import SplitText from 'react-pose-text';

export default Title


const wordPoses = {
  draggable: true
};

const charPoses = {
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
      <SplitText wordPoses={wordPoses} charPoses={charPoses}>
        Destiny's Guardians App
      </SplitText>
    </div>
  );
}
