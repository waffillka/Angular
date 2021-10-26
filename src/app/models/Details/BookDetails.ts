import { AuthorLookUp } from "../LookUp/AuthorLookUp";
import { PublisherLookUp } from "../LookUp/PublisherLookUp";
import {User} from "../User";

export interface BookDetails {
    name : string;
    description : string;
    isbin : string;
    publisherId : string;
    publisher : PublisherLookUp;
    ownerId : string;
    owner : User;
    recipientId : string;
    recipient : User;
    authors : AuthorLookUp[];
}
