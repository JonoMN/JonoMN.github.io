export interface TimelineItem {
  startDate: string;
  endDate: string;
  duration: string;
  role: string;
  company: string;
  description: string;
}

export interface Experience {
  type: string;
  items: TimelineItem[];
}
