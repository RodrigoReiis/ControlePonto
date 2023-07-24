import { GeoLoc } from "./GeoLoc.model";

export class RegPonto {
    constructor(
        public createdDate: number,
        public address: GeoLoc,
        public isIn: boolean,
        public company: string,
    ) {}
}
