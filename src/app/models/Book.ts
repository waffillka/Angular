import { Author } from "./Author";
import { Publisher } from "./Publisher";
import {User} from "./User";

export interface Book {
    id : string;
    Name : string;
    description : string;
    ISBIN : string;
    publisherId : string;
    publisher : Publisher;
    ownerId : string;
    owner : User;
    recipientId : string;
    recipient : User;
    authors : Author[];
}
