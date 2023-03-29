import { CoreEntity } from "src/common/entities/core.entity";

export class Job extends CoreEntity{
    name: string;
    slug:string;
    description: string;
}