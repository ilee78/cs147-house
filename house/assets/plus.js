import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15 15"
      width="20"
      height="20"
    >
      <Path
        id="plus"
        class="s0"
        d="m14.3 8.3h-13.6c-0.4 0-0.8-0.3-0.8-0.8 0-0.5 0.4-0.8 0.8-0.8h13.5c0.5 0 0.9 0.3 0.9 0.8 0 0.5-0.4 0.8-0.9 0.8zm-6.7 6.8c-0.5 0-0.8-0.4-0.8-0.9v-13.5c0-0.4 0.3-0.8 0.8-0.8 0.5 0 0.8 0.4 0.8 0.8v13.5c0 0.5-0.3 0.9-0.8 0.9z"
        fill={props.color}
      />
    </Svg>
  );
}

export default SvgComponent;
