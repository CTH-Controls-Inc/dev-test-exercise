import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="wrapper">
      <h1 className="rainbow-text">Login Page</h1>
      <h1 className="rainbow-text"> Author: Mushfiqur Rahman </h1>
      
      <LoginForm />

      <style jsx>{`
      /* General styling of the page. */
      /* Sets a background color, font-size etc. */
      body {
          
          
        }
        
        h1 {
          font-family: "Work Sans", sans-serif;
          font-weight: 800;
          font-size: 5em;
          width: 15em;
          line-height: 1.5em;
          margin-left: auto;
          margin-right: auto;
          margin-top: 1.5em;
          margin-bottom: 1em;
          text-align: center;
          justify-content: center;
          align-items: center;
          
        }
        
        
        /* Style the rainbow text element. */
        .rainbow-text {
          /* Create a conic gradient. */
          /* Double percentages to avoid blur (#000 10%, #fff 10%, #fff 20%, ...). */
          background: #CA4246;
          background-color: #CA4246;
          background: conic-gradient(
            #CA4246 16.666%, 
            #E16541 16.666%, 
            #E16541 33.333%, 
            #F18F43 33.333%, 
            #F18F43 50%, 
            #8B9862 50%, 
            #8B9862 66.666%, 
            #476098 66.666%, 
            #476098 83.333%, 
            #A7489B 83.333%);
          
          /* Set thee background size and repeat properties. */
          background-size: 57%;
          background-repeat: repeat;
          
          /* Use the text as a mask for the background. */
          /* This will show the gradient as a text color rather than element bg. */
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent; 
          
          /* Animate the text when loading the element. */
          /* This animates it on page load and when hovering out. */
          animation: rainbow-text-animation-rev 0.5s ease forwards;
        
          cursor: pointer;
        }
        
        /* Add animation on hover. */
        .rainbow-text:hover {
          animation: rainbow-text-animation 0.5s ease forwards;
        }
        
        /* Move the background and make it larger. */
        /* Animation shown when hovering over the text. */
        @keyframes rainbow-text-animation {
          0% {
            background-size: 57%;
            background-position: 0 0;
          }
          20% {
            background-size: 57%;
            background-position: 0 1em;
          }
          100% {
            background-size: 300%;
            background-position: -9em 1em;
          }
        }
        
        /* Move the background and make it smaller. */
        /* Animation shown when entering the page and after the hover animation. */
        @keyframes rainbow-text-animation-rev {
          0% {
            background-size: 300%;
            background-position: -9em 1em;
          }
          20% {
            background-size: 57%;
            background-position: 0 1em;
          }
          100% {
            background-size: 57%;
            background-position: 0 0;
          }
        }
        .form-header {
          display: top;
          text-align: center;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin-top: 10px;
        }
        .wrapper { 
          height: 100%;
          width: 100%;
          left:0;
          right: 0;
          top: 0;
          bottom: 0;
          position: absolute;
        background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
        background-size: 1800% 1800%;
        
        -webkit-animation: rainbow 18s ease infinite;
        -z-animation: rainbow 18s ease infinite;
        -o-animation: rainbow 18s ease infinite;
          animation: rainbow 18s ease infinite;}
        
        @-webkit-keyframes rainbow {
            0%{background-position:0% 82%}
            50%{background-position:100% 19%}
            100%{background-position:0% 82%}
        }
        @-moz-keyframes rainbow {
            0%{background-position:0% 82%}
            50%{background-position:100% 19%}
            100%{background-position:0% 82%}
        }
        @-o-keyframes rainbow {
            0%{background-position:0% 82%}
            50%{background-position:100% 19%}
            100%{background-position:0% 82%}
        }
        @keyframes rainbow { 
            0%{background-position:0% 82%}
            50%{background-position:100% 19%}
            100%{background-position:0% 82%}
        }
`}</style>
    </div>
  );
};

export default LoginPage;
