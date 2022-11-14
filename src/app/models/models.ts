export interface CharacterModel{
  id?: number;
  name?: string;
  status?: string;
  gender?: string;
  image?: string;
  species?: string;
}
export interface LocationModel{
  id?: number;
  name?: string;
  type?: string;
  created?: string;
  residents?: string[];
}
