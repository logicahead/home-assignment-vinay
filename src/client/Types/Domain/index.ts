export interface ICommonEnumInterface {
  itemDescription?: string;
  itemID: number;
  itemName: string;
  itemURI?: string;
}

export enum AllowedEntityStatusColor {
  new = 1,
  draft = 2,
  archive = 3,
  delete = 4,
  published = 5,
  archived = 6,
  deleted = 7,
  working = 8,
  locked = 9
}

export enum ValueEntityStatusColor {
  info = 1,
  success = 5,
  attention = 3,
  warning = 4,
}

export interface IEntityObject {
  id: number;
  name: string;
  description?: string;
  type?: ICommonEnumInterface;
  uri?: string;
}

export interface ServerSort {
  field: string;
  order: string;
  callback(field: string, order: string, sortBy: string): void;
}

export enum SearchTypeEnum {
  filter = 'filter',
  query = 'query'
}

export enum SearchKeyEnum {
  term = 'term',
  terms = 'terms',
  multi_match = 'multi_match'
}

export enum RequestStateEnum {
  INIT = 'INIT',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

// Export all the interface to be used in reducer or any other places
export * from './Role';
