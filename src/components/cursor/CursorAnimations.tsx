
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
    `}
  </style>
);
