import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BaseApiService } from "../baseAPI";
import { Collection } from "../../models/collection";


@Injectable()
export class CollectionsService extends BaseApiService<Collection> {

    constructor(http: HttpClient) {
        super(http);
        this.url = '/collection';
    }

}


