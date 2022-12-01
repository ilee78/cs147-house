import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 22"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Path
        id="house"
        fillRule="evenodd"
        d="M16.8 21.8l-11.6-.1c-2.7 0-5-2.2-5-4.9V9.4c0-1.4.9-3.1 2-3.9l5.4-4.2c1.6-1.3 4.2-1.4 5.8-.2l6.2 4.3c1.2.9 2.1 2.7 2.1 4.1v7.3c0 2.7-2.2 5-4.9 5zM8.5 2.4L3.1 6.6c-.7.6-1.4 1.9-1.4 2.8v7.4c0 1.9 1.6 3.4 3.5 3.4h11.6c1.9 0 3.5-1.5 3.5-3.4V9.5c0-1-.7-2.3-1.5-2.8l-6.2-4.4c-1.2-.8-3-.7-4.1.1zM11 17.7c-.4 0-.8-.3-.8-.7l.1-3c0-.4.3-.8.7-.8.4 0 .8.4.8.8v3c0 .4-.4.7-.8.7z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgComponent