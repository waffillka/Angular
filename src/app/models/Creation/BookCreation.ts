import {User} from "../User";

export interface BookCreation {
  Name : string;
  description : string;
  ISBIN : string;
  publisherId : string;
  ownerId : string;
  owner : User;
  recipientId? : string;
}
