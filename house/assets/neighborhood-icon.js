import * as React from "react"
import Svg, { G, Path } from 'react-native-svg';

function SvgComponent (props) {
  return (
  <Svg viewBox="0 0 30 30" width="30" height="30">
    <G {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.384 5.53194C9.486 5.56194 9.678 5.64594 9.81 5.71794C9.942 5.78994 10.446 6.14994 10.938 6.50994C11.424 6.87594 11.82 7.18794 11.82 7.21194C11.82 7.24194 11.694 7.36194 11.532 7.48794C11.376 7.61394 11.154 7.78794 10.83 8.03394L10.53 7.82394C10.362 7.70394 10.092 7.54194 9.93 7.46394C9.696 7.34994 9.528 7.31994 9.18 7.31994C8.838 7.31994 8.658 7.35594 8.43 7.45794C8.262 7.53594 7.374 8.16594 6.45 8.86194C5.526 9.55794 4.644 10.2539 4.494 10.4159C4.344 10.5779 4.152 10.8299 3.93 11.2499L3.912 14.9099C3.9 18.0239 3.912 18.6059 3.984 18.8099C4.032 18.9419 4.194 19.1639 4.344 19.3079C4.5 19.4459 4.728 19.5959 5.1 19.7099V21.0599L4.902 21.0779C4.8 21.0839 4.44 21.0719 4.11 21.0539C3.78 21.0359 3.39 20.9819 3.246 20.9339C3.102 20.8859 2.928 20.7899 2.856 20.7239C2.784 20.6519 2.694 20.4899 2.652 20.3639C2.61 20.2319 2.55 19.7519 2.514 19.2899C2.478 18.7979 2.46 16.8539 2.49 10.7099L2.64 10.3859C2.724 10.2059 2.904 9.95994 3.042 9.83394C3.186 9.70194 4.428 8.75994 5.802 7.72794C7.182 6.69594 8.43 5.78394 8.58 5.70594C8.73 5.62194 8.928 5.53794 9.024 5.51994C9.114 5.49594 9.276 5.50194 9.384 5.53194ZM20.958 5.51394C21.066 5.53794 21.27 5.62194 21.42 5.70594C21.57 5.78994 22.818 6.69594 24.192 7.72794C25.572 8.75994 26.814 9.70194 26.952 9.83394C27.096 9.95994 27.276 10.2059 27.51 10.7099L27.528 14.5799C27.54 16.8539 27.522 18.7979 27.486 19.2899C27.45 19.7519 27.39 20.2319 27.348 20.3639C27.306 20.4899 27.216 20.6519 27.144 20.7239C27.072 20.7899 26.898 20.8859 26.754 20.9339C26.61 20.9819 26.22 21.0359 25.89 21.0539C25.56 21.0719 25.2 21.0839 24.9 21.0599V19.7099L25.14 19.6379C25.272 19.5959 25.5 19.4459 25.656 19.3079C25.806 19.1639 25.968 18.9419 26.016 18.8099C26.088 18.6059 26.1 18.0239 26.07 11.2499L25.926 10.9799C25.848 10.8299 25.656 10.5779 25.506 10.4159C25.356 10.2539 24.474 9.55794 23.55 8.86194C22.626 8.16594 21.732 7.53594 21.57 7.45794C21.342 7.35594 21.168 7.31994 20.82 7.31994C20.496 7.31994 20.298 7.35594 20.1 7.44594C19.95 7.51194 19.674 7.67394 19.482 7.80594C19.284 7.93794 19.11 8.02194 19.062 7.99794C19.026 7.97394 18.804 7.81194 18.57 7.63194C18.336 7.45194 18.144 7.28394 18.132 7.25394C18.126 7.22394 18.516 6.90594 19.002 6.54594C19.494 6.18594 19.998 5.83194 20.13 5.75394C20.262 5.67594 20.46 5.57994 20.568 5.54394C20.676 5.50794 20.856 5.49594 20.958 5.51394ZM14.952 6.77994C15.078 6.77994 15.294 6.82194 15.432 6.88194C15.576 6.93594 15.864 7.09194 16.08 7.23594C16.296 7.37994 16.866 7.81194 17.346 8.20194C17.832 8.59194 19.17 9.66594 20.316 10.5899C21.468 11.5139 22.542 12.3899 22.698 12.5399C22.86 12.6899 23.064 12.9299 23.16 13.0799C23.256 13.2299 23.376 13.4999 23.424 13.6799C23.484 13.8779 23.55 14.4659 23.586 15.1499C23.628 15.8519 23.64 17.6639 23.622 19.8899C23.604 22.0619 23.568 23.6519 23.526 23.8979C23.49 24.1199 23.394 24.4379 23.31 24.5999C23.184 24.8459 23.106 24.9239 22.842 25.0499C22.674 25.1279 22.314 25.2299 22.05 25.2719C21.678 25.3319 20.052 25.3499 15 25.3499C9.822 25.3499 8.316 25.3319 7.89 25.2719C7.578 25.2239 7.23 25.1279 7.062 25.0439C6.846 24.9359 6.744 24.8339 6.636 24.6179C6.558 24.4559 6.462 24.1259 6.42 23.8799C6.384 23.6279 6.336 22.3319 6.318 20.9699C6.3 19.6019 6.318 17.5679 6.354 16.3799C6.39 15.2099 6.45 14.0879 6.486 13.8899C6.522 13.6919 6.6 13.4219 6.666 13.2899C6.726 13.1579 6.876 12.9299 7.002 12.7859C7.128 12.6359 7.974 11.9219 8.88 11.1959C9.786 10.4699 10.974 9.50994 11.52 9.05994C12.066 8.60394 12.846 7.98594 13.26 7.67994C13.674 7.37394 14.172 7.04994 14.37 6.95394C14.568 6.85794 14.832 6.77994 14.952 6.77994ZM14.01 8.89794C13.842 8.99994 12.63 9.95394 11.31 11.0099C9.99 12.0659 8.754 13.0919 8.556 13.2899C8.364 13.4879 8.136 13.7879 8.046 13.9499L7.89 14.2499C7.86 21.2639 7.872 22.7219 7.914 22.8779C7.95 22.9979 8.082 23.2139 8.202 23.3519C8.328 23.4839 8.538 23.6459 8.67 23.7059C8.886 23.8079 9.096 23.8199 10.56 23.8199H12.21C12.138 22.9619 12.102 22.6139 12.09 22.4999C12.078 22.3859 12.09 21.6119 12.12 20.7899L12.18 19.2899C12.594 18.4379 12.816 18.0959 12.972 17.9399C13.134 17.7719 13.344 17.6279 13.53 17.5619C13.77 17.4779 14.034 17.4599 14.88 17.4599C15.762 17.4599 15.996 17.4779 16.332 17.5799C16.65 17.6759 16.8 17.7599 17.028 17.9819C17.19 18.1439 17.406 18.4379 17.508 18.6419C17.616 18.8519 17.742 19.1759 17.79 19.3619C17.856 19.6259 17.88 20.1659 17.892 21.6299C17.904 22.6859 17.892 23.6099 17.862 23.6819L17.82 23.8199C20.712 23.8199 21.042 23.8019 21.222 23.7239C21.348 23.6759 21.54 23.5499 21.654 23.4419C21.762 23.3339 21.906 23.1419 21.966 23.0099C22.074 22.7819 22.08 22.5359 22.08 18.6299C22.08 15.1559 22.068 14.4419 21.99 14.1899C21.942 14.0159 21.78 13.7339 21.618 13.5299C21.414 13.2779 20.532 12.5279 18.69 11.0519C17.238 9.88794 15.912 8.87394 15.75 8.78994C15.582 8.71194 15.312 8.63394 15.15 8.61594C14.982 8.59794 14.73 8.61594 14.58 8.64594C14.43 8.67594 14.172 8.78994 14.01 8.89794ZM13.998 19.1399C13.92 19.1879 13.83 19.3139 13.788 19.4099C13.746 19.5059 13.698 19.6319 13.686 19.6799C13.668 19.7279 13.656 20.6819 13.65 21.7919V23.8199H16.5C16.368 23.5319 16.356 23.0339 16.368 21.7499C16.374 20.7479 16.356 19.8779 16.32 19.6919C16.29 19.5239 16.23 19.3799 16.2 19.3799C16.164 19.3799 16.14 19.3379 16.14 19.2899C16.14 19.2419 16.038 19.1579 15.912 19.1039C15.792 19.0499 15.54 19.0019 15.36 18.9899C15.18 18.9839 14.826 18.9899 14.58 19.0139C14.334 19.0319 14.07 19.0919 13.998 19.1399Z"
        fill={props.color}
      />
    </G>
  </Svg>
);
}

export default SvgComponent