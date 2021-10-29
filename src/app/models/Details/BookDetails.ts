import { AuthorLookUp } from "../LookUp/AuthorLookUp";
import { PublisherLookUp } from "../LookUp/PublisherLookUp";
import {UserLookUp} from "../LookUp/UserLookUp";

export interface BookDetails {
    name : string;
    description : string;
    isbin : string;
    publisherId : string;
    publisher : PublisherLookUp;
    ownerId : string;
    owner : UserLookUp;
    recipientId : string;
    recipient : UserLookUp;
    authors : AuthorLookUp[];
}
