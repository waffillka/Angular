import {UserLookUp} from "../LookUp/UserLookUp";

export interface BookCreation {
  Name : string;
  description : string;
  ISBIN : string;
  publisherId : string;
  ownerId : string;
  owner : UserLookUp;
  recipientId? : string;
}
