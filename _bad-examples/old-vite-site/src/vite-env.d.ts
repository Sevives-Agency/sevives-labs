/// <reference types="vite/client" />

// Permet d'importer des fichiers PNG
declare module '*.png' {
    const src: string
    export default src
  }
  
  // Permet d'importer des fichiers SVG
  declare module '*.svg' {
    const src: string
    export default src
  }

  // Permet d'importer des fichiers AVIF
  declare module '*.avif' {
    const src: string
    export default src
  }