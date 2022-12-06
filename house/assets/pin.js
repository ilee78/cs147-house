import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 18 21" 
        width={props.width} 
        height={props.height}>
        <Path id="pin" fill-rule="evenodd" class="s0" d="m8.8 12.1c-1.9 0-3.4-1.6-3.4-3.4 0-1.9 1.5-3.4 3.4-3.4 1.8 0 3.3 1.5 3.3 3.4 0 1.8-1.5 3.4-3.3 3.4zm0-5.2c-1 0-1.9 0.8-1.9 1.8 0 1 0.9 1.8 1.9 1.8 1 0 1.8-0.8 1.8-1.8 0-1-0.8-1.8-1.8-1.8zm0 13.5c-1.9 0-8.6-5.8-8.6-11.7 0-4.7 3.8-8.6 8.6-8.6 4.7 0 8.6 3.9 8.6 8.6 0 5.9-6.8 11.7-8.6 11.7zm0-18.8c-3.9 0-7.1 3.2-7.1 7.1 0 5 5.9 9.9 7.1 10.1 1.1-0.2 7-5.1 7-10.1 0-3.9-3.2-7.1-7-7.1z"
            fill={props.color}/>
    </Svg>
  );
}

export default SvgComponent;
