import {PublisherLookUp} from "./PublisherLookUp";
import {AuthorLookUp} from "./AuthorLookUp";

export interface BookLookUp {
  id : string;
  Name : string;
  description : string;
  publisher : PublisherLookUp;
  authors : AuthorLookUp[];
}
