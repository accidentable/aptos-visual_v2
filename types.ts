
export interface StepData {
  id: number;
  title: { ko: string; en: string };
  category: string;
  shortDesc: string;
  blogContent: {
    overview: { ko: string; en: string };
    technicalDetails: { ko: string[]; en: string[] };
    codeSnippet?: string;
  };
}

export enum StepStatus {
  IDLE = 'IDLE',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED'
}
