import {BookLookUp} from "../LookUp/BookLookUp";

export interface PublisherDetails {
  id : string;
  name : string;
  books : BookLookUp[];
}
