import React from 'react'
// import { render } from "react-dom";

// Import react-circular-progressbar module and styles
import {
  CircularProgressbar,
  // CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// Animation
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./animate/AnimatedProgressProvider";
import ChangingProgressProvider from "./animate/ChangingProgressProvider";

// Radial separators
import RadialSeparators from "./animate/RadialSeparators";

const percentage = 66;
function Example(props) {
  return (
    <div style={{ marginBottom: 80 }}>
      <hr style={{ border: "2px solid #ddd" }} />
      <div style={{ marginTop: 30, display: "flex" }}>
        <div style={{ width: "30%", paddingRight: 30 }}>{props.children}</div>
        <div style={{ width: "70%" }}>
          <h3 className="h5">{props.label}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
const Services = () => {
  return (
    <div className='Services'>
    {/* <Example label="Fully controlled text animation using react-move">
    <AnimatedProgressProvider
        valueStart={0}
        valueEnd={66}
        duration={1.4}
        easingFunction={easeQuadInOut}
        repeat
      >
        {value => {
          const roundedValue = Math.round(value);
          return (
            <CircularProgressbar
              value={value}
              text={`${roundedValue}%`}
         
              styles={buildStyles({ pathTransition: "none" })}
            />
          );
        }}
      </AnimatedProgressProvider>
    </Example> */}

    </div>
  )
}

export default Services