import {BookLookUp} from "../LookUp/BookLookUp";

export interface UserDetails {
  userAuthId : string;
  nickname : string;
  email : string;
  ownerBook : BookLookUp[];
  bookRecipient : BookLookUp[];
  subscribe : BookLookUp[];
}
