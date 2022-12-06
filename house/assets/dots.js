import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { ProfileScreen } from "../navigation/screens/Profile";

function SvgComponent(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 6" width={props.width} height={props.height}>
        <Path fill-rule="evenodd" class="s0" d="m3 5.8c-1.5 0-2.8-1.3-2.8-2.8 0-1.5 1.3-2.8 2.8-2.8 1.5 0 2.8 1.3 2.8 2.8 0 1.5-1.3 2.8-2.8 2.8zm0-4c-0.7 0-1.3 0.5-1.3 1.2 0.1 0.7 0.6 1.3 1.3 1.3 0.7 0 1.3-0.6 1.3-1.3-0.1-0.7-0.6-1.2-1.3-1.2zm14 4c-1.5 0-2.8-1.3-2.8-2.8 0-1.5 1.3-2.8 2.8-2.8 1.5 0 2.8 1.3 2.8 2.8 0 1.5-1.3 2.8-2.8 2.8zm0-4c-0.7 0-1.3 0.5-1.3 1.2 0.1 0.7 0.6 1.3 1.3 1.3 0.7 0 1.3-0.6 1.3-1.3-0.1-0.7-0.6-1.2-1.3-1.2zm-7 4c-1.5 0-2.8-1.3-2.8-2.8 0-1.5 1.3-2.8 2.8-2.8 1.5 0 2.8 1.3 2.8 2.8 0 1.5-1.3 2.8-2.8 2.8zm0-4c-0.7 0-1.3 0.5-1.3 1.2 0.1 0.7 0.6 1.3 1.3 1.3 0.7 0 1.3-0.6 1.3-1.3-0.1-0.7-0.6-1.2-1.3-1.2z"
        fill={props.color}/>
    </Svg>
  );
}

export default SvgComponent;