import { Resource } from './resource';

// pagination
export interface PaginationResponse {
  elements: Resource[];
  hasNext: boolean;
  pageNumber: number;
  size: number;
  totalNoElements: number;
}

// sorting
export interface Sorting {
  field: string;
  ascending: boolean;
}

// filter
export interface Filter {
  field: string;
  value?: string;
  operation?: string;
}

// table
export interface TableColumn {
  name: string;
  dataKey: string;
  additionalKeys?: string[];
  additionalKeySeparator?: string;
  isSortable?: boolean;
  iconify?: boolean;
  stylify?: boolean;
}

// scrolling
export interface Offset {
  top: number;
  left: number;
}
