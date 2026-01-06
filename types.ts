
export type TagGroup = 'fast' | 'medium' | 'slow';

export interface TagData {
  id: string;
  text: string;
  color: string;
  top: string;
  initialX: string;
  group: TagGroup;
}

export interface MousePosition {
  x: number;
  y: number;
}
