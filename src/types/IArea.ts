export interface IArea {
  id: number;
  name: string;
  countryCode: string;
  flag: string;
  parentAreaId: string;
  parentArea: string;
  childAreas: IArea[];
}