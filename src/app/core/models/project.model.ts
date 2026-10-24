export type ProjectCategory = 'editorial' | 'branding' | 'campaign' | 'digital';

export interface Project {
  /** Archive reference shown in badges, e.g. "2026_01" */
  code: string;
  title: string;
  client: string;
  year: number;
  category: ProjectCategory;
  /** Tech stack tags, e.g. ["Angular", "Signals"] */
  tags: string[];
  cover?: string;
  slug: string;
}
