/// <reference types="vite/client" />

// Global types for Google Analytics
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export {};
