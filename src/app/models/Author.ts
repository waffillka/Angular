import {Book} from "./Book";

export interface Author {
  id : string;
  name : string;
  birthday: Date;
  books : Book;
}
