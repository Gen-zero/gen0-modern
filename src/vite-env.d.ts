
/// <reference types="vite/client" />

// Extend global Window interface to include THREE and VANTA
interface Window {
  THREE: any;
  VANTA: {
    CELLS: (options: any) => any;
    TOPOLOGY: (options: any) => any;
    WAVES: (options: any) => any;
  };
}
