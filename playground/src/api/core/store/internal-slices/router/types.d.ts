export interface RouterState {
  location: {
    pathname: string;
    hash: string;
    search: string;
    state: string;
    key: string;
  };
  action: any;
}
