
import React from 'react';

export const CursorAnimations = () => (
  <style>
    {`
    @keyframes cursorRiseUp {
      0% {
        transform: translate(-50%, -50%) scale(1);
        z-index: 40;
      }
      30% {
        transform: translate(-50%, -80%) scale(0.8);
        z-index: 40;
      }
      60% {
        transform: translate(-50%, -50%) scale(1.4);
        z-index: 100;
      }
      100% {
        transform: translate(-50%, -50%) scale(1.2);
        z-index: 100;
      }
    }
    
    @keyframes cursorTrailRiseUp {
      0% {
        transform: translate(-50%, -50%);
        z-index: 39;
      }
      40% {
        transform: translate(-50%, -70%);
        z-index: 39;
      }
      70% {
        transform: translate(-50%, -40%);
        z-index: 99; 
      }
      100% {
        transform: translate(-50%, -50%);
        z-index: 99;
      }
    }
    
    @keyframes pulse-slow {
      0%, 100% {
        box-shadow: 0 0 15px rgba(140, 53, 242, 0.7);
      }
      50% {
        box-shadow: 0 0 25px rgba(140, 53, 242, 1);
      }
    }
    
    @keyframes cursorTextFieldAnim {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
        height: 24px;
        width: 24px;
        border-radius: 50%;
      }
      40% {
        transform: translate(-50%, -50%) rotate(45deg);
        height: 20px;
        width: 5px;
      }
      80% {
        transform: translate(-50%, -50%) rotate(90deg);
        height: 18px;
        width: 2px;
        border-radius: 1px;
      }
      100% {
        transform: translate(-50%, -50%) rotate(0deg);
        height: 18px;
        width: 2px;
        border-radius: 1px;
      }
    }
    
    @keyframes blink {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.3;
      }
    }

    @keyframes dropdown-highlight {
      0% {
        transform: translate(-50%, -50%) scale(1);
        box-shadow: 0 0 10px rgba(140, 53, 242, 0.5);
      }
      50% {
        transform: translate(-50%, -50%) scale(1.3);
        box-shadow: 0 0 20px rgba(140, 53, 242, 0.8);
      }
      100% {
        transform: translate(-50%, -50%) scale(1.2);
        box-shadow: 0 0 15px rgba(140, 53, 242, 0.7);
      }
    }
    
    @keyframes neon-glow {
      0%, 100% {
        text-shadow: 0 0 10px rgba(140, 53, 242, 0.8), 0 0 20px rgba(140, 53, 242, 0.5), 0 0 30px rgba(140, 53, 242, 0.3);
      }
      50% {
        text-shadow: 0 0 15px rgba(140, 53, 242, 1), 0 0 25px rgba(140, 53, 242, 0.7), 0 0 35px rgba(140, 53, 242, 0.5);
      }
    }
    
    @keyframes button-shimmer {
      0% {
        background-position: 200% center;
      }
      100% {
        background-position: -200% center;
      }
    }
    
    @keyframes wave-animation {
      0% {
        background-position-x: 0;
      }
      100% {
        background-position-x: 100px;
      }
    }
    
    @keyframes ripple {
      0% { 
        box-shadow: 0 0 0 0 rgba(100, 200, 255, 0.7);
        opacity: 1;
      }
      100% { 
        box-shadow: 0 0 0 15px rgba(100, 200, 255, 0);
        opacity: 0;
      }
    }
    
    @keyframes pulse-focus {
      0% {
        box-shadow: 0 0 0 0 rgba(100, 200, 255, 0.5), inset 0 0 0 0 rgba(100, 200, 255, 0.4);
      }
      70% {
        box-shadow: 0 0 0 10px rgba(100, 200, 255, 0), inset 0 0 0 3px rgba(100, 200, 255, 0.6);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(100, 200, 255, 0), inset 0 0 0 0 rgba(100, 200, 255, 0.2);
      }
    }
    
    .wave-btn {
      background: linear-gradient(45deg, rgba(30,30,60,0.4), rgba(30,30,80,0.4));
    }
    
    .wave-btn::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(90deg, 
        rgba(37, 99, 235, 0), 
        rgba(51, 195, 240, 0.3), 
        rgba(139, 92, 246, 0.3), 
        rgba(37, 99, 235, 0)
      );
      background-size: 200% 100%;
      animation: button-shimmer 3s infinite;
      z-index: -1;
      opacity: 0.5;
    }
    
    .wave-btn::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 2rem;
      opacity: 0;
    }
    
    .wave-btn:active::after {
      animation: ripple 0.8s ease-out;
    }
    
    .wave-btn:hover {
      box-shadow: 0 0 20px rgba(100, 200, 255, 0.6),
                  0 0 40px rgba(100, 200, 255, 0.2);
    }
    
    .wave-btn:hover::before {
      opacity: 0.8;
    }
    `}
  </style>
);
