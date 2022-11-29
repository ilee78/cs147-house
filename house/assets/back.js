import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 14"
      width={35}
      height={24}
      {...props}
    >
      <Path
        id="back"
        d="M7.6 13.8q-.3 0-.6-.2L1 7.5c-.3-.3-.3-.7 0-1L7 .4c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1L2.6 7l5.5 5.5c.3.3.3.8 0 1.1-.1.1-.3.2-.5.2zm10.9-6.1H1.7c-.4 0-.8-.3-.8-.7 0-.4.4-.8.8-.8h16.8c.4 0 .7.4.7.8s-.3.7-.7.7z"
        fill="#000"
      />
    </Svg>
  )
}

export default SvgComponent