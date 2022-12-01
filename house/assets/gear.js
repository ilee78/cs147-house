import * as React from "react"
import Svg, { Path } from "react-native-svg"

// props = size (width and height in dimensions) and color

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 21"
      width={props.size}
      height={props.size}
      {...props}
    >
      <Path
        id="gear"
        fillRule="evenodd"
        d="M10.3 20.7H9c-1.5 0-2.6-1.2-2.6-2.6l-.2-.6c-.2-.2-.4-.4-.7-.5-.3-.1-.6-.1-.9.1-.6.3-1.3.4-2 .2s-1.3-.6-1.6-1.2L.4 15c-.8-1.3-.3-2.9.9-3.6.4-.2.6-.6.6-1 0-.5-.2-.8-.6-1C.1 8.6-.4 7 .4 5.7L1 4.6c.8-1.2 2.4-1.7 3.7-1q.2.2.5.2c.6 0 1.2-.5 1.2-1.1 0-.7.2-1.4.7-1.9C7.6.3 8.3 0 9 0h1.3c.7 0 1.4.3 1.9.8s.8 1.2.7 1.9q0 .3.2.5.2.5.7.6.5.1.9-.1c1.2-.8 2.9-.3 3.6.9l.6 1.1.1.1c.6 1.3.2 2.8-1 3.6q-.3.1-.5.4c-.1.2-.2.6-.1.9q.1.4.6.7c.6.3 1 .9 1.2 1.6.2.7.1 1.4-.3 2l-.6 1.1c-.8 1.3-2.4 1.7-3.7 1q-.2-.2-.5-.2c-.3 0-.6.1-.8.3q-.4.4-.4.9c0 1.4-1.2 2.6-2.6 2.6zm-5.1-5.3q.3 0 .7.1c.7.2 1.2.7 1.6 1.3q.3.6.4 1.3c0 .6.5 1.1 1.1 1.1h1.3c.6 0 1.1-.5 1.1-1.1a2.732 2.732 0 012.7-2.7q.7 0 1.3.4c.5.3 1.2.1 1.6-.5l.6-1.1c.2-.2.2-.5.1-.8 0-.3-.2-.6-.5-.7-.6-.4-1.1-1-1.2-1.7-.2-.6-.1-1.4.2-2q.4-.6 1-.9c.6-.4.7-1.1.4-1.6v-.1l-.6-1c-.3-.6-1-.8-1.6-.4-.6.3-1.3.4-2 .2-.7-.1-1.3-.6-1.6-1.2q-.4-.6-.4-1.3 0-.5-.3-.8c-.2-.3-.5-.4-.8-.4H9q-.5 0-.8.3-.3.4-.3.9c-.1 1.4-1.3 2.6-2.7 2.6q-.7 0-1.3-.4c-.5-.3-1.3-.1-1.6.5l-.7 1.1c-.3.5-.1 1.2.5 1.6.8.4 1.3 1.3 1.3 2.3 0 .9-.5 1.8-1.3 2.3-.6.3-.8 1-.4 1.5l.6 1.1c.1.3.4.5.7.6.3.1.6 0 .9-.1.4-.2.8-.4 1.3-.4zm4.4-1.7c-1.8 0-3.3-1.5-3.3-3.3C6.3 8.5 7.8 7 9.6 7c1.9 0 3.4 1.5 3.4 3.4 0 1.8-1.5 3.3-3.4 3.3zm0-5.2c-1 0-1.8.8-1.8 1.9 0 1 .8 1.8 1.8 1.8 1.1 0 1.9-.8 1.9-1.8 0-1.1-.8-1.9-1.9-1.9z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgComponent
