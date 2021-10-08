import {Publisher} from "./Publisher";
import {Author} from "./Author";

export interface BookLookUp {
  id : string;
  Name : string;
  description : string;
  publisher : Publisher;
  authors : Author[];
}
