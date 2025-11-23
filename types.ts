import { LucideIcon } from 'lucide-react';

export enum SlideType {
  TITLE = 'TITLE',
  content = 'CONTENT',
  SECTION = 'SECTION',
  PROCESS = 'PROCESS',
  GRID = 'GRID',
  CHART = 'CHART',
  QUOTE = 'QUOTE',
}

export interface SlideData {
  id: number;
  type: SlideType;
  title: string;
  subtitle?: string;
  content?: string[];
  bullets?: string[];
  icon?: LucideIcon;
  image?: string; // URL for background or specific image
  highlight?: string; // Key takeaway
  chartData?: any[]; // For recharts
}