
export interface SimpleOptions {
  Magnitude: string,
  Phase: string,
  Nominal: number,

  AngleSegments: number,
  MagStep: number,
  MagStart: number,

  backgroundColor: string,
  phasorRef: string,
  magRef: string,
  stylingRef: string,
}

export type DataAggregation = ('min'|'max'|'last'|'average'|'count'|'sum')