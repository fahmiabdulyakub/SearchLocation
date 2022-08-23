import {LocationType} from './UserDataType';

export interface PlaceType {
  predictions?: PredictionsType[] | null;
  status: string;
}
export interface PredictionsType {
  description: string;
  matched_substrings?:
    | MatchedSubstringsEntityOrMainTextMatchedSubstringsType[]
    | null;
  place_id: string;
  reference: string;
  structured_formatting: StructuredFormattingType;
  terms?: TermsType[] | null;
  types?: string[] | null;
}
export interface MatchedSubstringsEntityOrMainTextMatchedSubstringsType {
  length: number;
  offset: number;
}
export interface StructuredFormattingType {
  main_text: string;
  main_text_matched_substrings?:
    | MatchedSubstringsEntityOrMainTextMatchedSubstringsType[]
    | null;
  secondary_text: string;
}
export interface TermsType {
  offset: number;
  value: string;
}

export interface RequestPlaceType {
  key: string;
  language: string;
  types: string;
  radius: number;
  location: string;
  input: string;
}

export interface RequestPlaceDetailsType {
  key: string;
  place_id: string;
}
