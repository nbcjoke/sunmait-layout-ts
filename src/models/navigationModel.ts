export interface NavigationModel {
  id: string;
  label: string;
  link: string;
  children?: NavigationModel[];
  expanded?: boolean;
}
