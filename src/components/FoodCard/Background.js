import React from 'react';

const Background = ({type, hover, children}) => {

  const border = type === 'disabled' ? '#b3b3b3': 
                 type === 'active' ? hover ? '#e52e7a' : '#d91667' 
                                   : hover ? '#2ea8e6' : '#1698d9'

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="320" height="480" viewBox="0 0 320 480">
      <defs>
        <clipPath id="l5via">
          <path 
            fill="#fff" 
            d="M308 0c6.627 0 12 5.373 12 12v456c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12V42.676L42.676 0z"/>
        </clipPath>
      </defs>
      <g><g>
        <path 
          fill="#f2f2f2" 
          d="M308 0c6.627 0 12 5.373 12 12v456c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12V42.676L42.676 0z"/>
        <path 
          fill="none" 
          stroke={border} 
          strokeMiterlimit="50" 
          strokeWidth="8" 
          d="M308 0c6.627 0 12 5.373 12 12v456c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12V42.676L42.676 0z" 
          clipPath="url(&quot;#l5via&quot;)"/>
      </g></g>
    </svg>
  )
}

export default Background;