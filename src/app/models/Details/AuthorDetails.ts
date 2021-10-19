import {BookLookUp} from "../LookUp/BookLookUp";

export interface AuthorDetails {
  name : string;
  birthday: Date;
  books : BookLookUp[];
}
