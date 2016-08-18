import type { Dimension as D, Point } from './types/ChessTypes';

export const findByPos = (i: D, j: D) => ({ x, y }: Point) => x === i && y === j;
