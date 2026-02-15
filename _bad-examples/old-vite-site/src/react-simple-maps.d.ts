declare module 'react-simple-maps' {
  import { FC, SVGProps, CSSProperties } from 'react'

  export interface ComposableMapProps {
    projection?: string
    projectionConfig?: {
      scale?: number
      center?: [number, number]
      rotate?: [number, number, number]
    }
    width?: number
    height?: number
    style?: CSSProperties
    children?: React.ReactNode
  }

  export interface GeographiesProps {
    geography: string | object
    children: (data: { geographies: Geography[] }) => React.ReactNode
  }

  export interface Geography {
    rsmKey: string
    id: string
    properties: {
      name: string
      [key: string]: unknown
    }
    [key: string]: unknown
  }

  export interface GeographyProps {
    geography: Geography
    style?: {
      default?: CSSProperties
      hover?: CSSProperties
      pressed?: CSSProperties
    }
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    onClick?: () => void
  }

  export interface MarkerProps {
    coordinates: [number, number]
    style?: CSSProperties
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    onClick?: () => void
    children?: React.ReactNode
  }

  export interface ZoomableGroupProps {
    center?: [number, number]
    zoom?: number
    minZoom?: number
    maxZoom?: number
    children?: React.ReactNode
  }

  export const ComposableMap: FC<ComposableMapProps>
  export const Geographies: FC<GeographiesProps>
  export const Geography: FC<GeographyProps>
  export const Marker: FC<MarkerProps>
  export const ZoomableGroup: FC<ZoomableGroupProps>
}
