
/// <reference types="vite/client" />

interface Window {
  VANTA: {
    CELLS: (options: {
      el: HTMLElement | null;
      mouseControls: boolean;
      touchControls: boolean;
      gyroControls: boolean;
      minHeight: number;
      minWidth: number;
      scale: number;
      color1: number;
      color2: number;
      size: number;
      speed: number;
    }) => {
      destroy: () => void;
    };
    TOPOLOGY: (options: {
      el: HTMLElement | null;
      mouseControls: boolean;
      touchControls: boolean;
      gyroControls: boolean;
      minHeight: number;
      minWidth: number;
      scale: number;
      scaleMobile: number;
      color: number;
    }) => {
      destroy: () => void;
    };
    WAVES: (options: {
      el: HTMLElement | null;
      mouseControls: boolean;
      touchControls: boolean;
      gyroControls: boolean;
      minHeight: number;
      minWidth: number;
      scale: number;
      scaleMobile: number;
      color: number;
      shininess: number;
      waveHeight: number;
      waveSpeed: number;
      zoom: number;
    }) => {
      destroy: () => void;
    };
  };
}
