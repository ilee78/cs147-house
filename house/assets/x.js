import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { ProfileScreen } from "../navigation/screens/Profile";

function SvgComponent(props) {
    return (
        <Svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width={props.size} height={props.size}>
            <Path id="Layer" class="s0" d="m10.3 11.5l-9.6-9.6c-0.3-0.3-0.3-0.9 0-1.2 0.3-0.3 0.9-0.3 1.2 0l9.6 9.6c0.3 0.3 0.3 0.8 0 1.2-0.4 0.3-0.9 0.3-1.2 0z"
                fill={'black'}
                width={props.size}
                height={props.size} />
            <Path id="Layer" class="s0" d="m0.7 11.5c-0.3-0.4-0.3-0.9 0-1.2l9.6-9.6c0.3-0.3 0.8-0.3 1.2 0 0.3 0.3 0.3 0.9 0 1.2l-9.6 9.6c-0.3 0.3-0.9 0.3-1.2 0z"
                fill={'black'}
                height={props.size} />
        </Svg>
    );
}
export default SvgComponent;