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
        id="music"
        fillRule="evenodd"
        d="M14 21.8l-6-.1C2.6 21.7.2 19.4.2 14V8C.2 2.6 2.6.2 8 .2h6c5.4 0 7.8 2.4 7.8 7.8v6c0 5.4-2.4 7.7-7.8 7.7zM8 1.9c-4.6-.1-6.3 1.6-6.3 6.2v6c0 4.6 1.7 6.2 6.3 6.2h6c4.6 0 6.3-1.6 6.3-6.2v-6c0-4.6-1.7-6.3-6.3-6.3zm-.6 15.2c-1.3 0-2.3-1.1-2.3-2.4 0-1.2 1-2.3 2.3-2.3q.5 0 .8.2V8.4c0-.9.6-1.7 1.6-2l3.1-.8c.9-.3 1.6 0 1.9.2q.7.6.7 1.7v6.2c0 1.3-1 2.3-2.3 2.3-1.3 0-2.3-1-2.3-2.3 0-1.3 1-2.3 2.3-2.3q.4 0 .8.1V9.7l-4.3 1.1v3.9c0 1.3-1 2.4-2.3 2.4zM14 7.5c0-.3-.1-.5-.1-.5-.1 0-.3-.1-.6 0l-3.1.9q-.5.1-.5.5v.9L14 8.1zm-6.6 6.4c-.4 0-.8.4-.8.8 0 .5.4.8.8.8.5 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8zm5.8-1.1c-.5 0-.8.4-.8.9 0 .4.3.8.8.8.4 0 .8-.4.8-.8 0-.5-.4-.9-.8-.9z"
        fill={props.color}
      />
    </Svg>
  )
}

export default SvgComponent