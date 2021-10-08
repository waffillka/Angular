import {Publisher} from "./Publisher";S
import {Author} from "./Author";

export interface BookLookUp {
  id : string;
  Name : string;
  description : string;
  publisher : Publisher;
  authors : Author[];
}
