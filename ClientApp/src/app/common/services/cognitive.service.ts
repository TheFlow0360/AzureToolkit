import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AzureHttpClient } from './azureHttpClient';
import { BingSearchResponse } from '../models/bingSearchResponse';
@Injectable()
export class CognitiveService {
    bingSearchAPIKey = '1a3ff31b3f024b39bc009d5e9e12e522';
    constructor(private http: AzureHttpClient) { }
    searchImages(searchTerm: string): Observable<BingSearchResponse> {
        return this.http.get(
                'https://api.cognitive.microsoft.com/bing/v7.0/images/search?safeSearch=Off&q=' + searchTerm,
                this.bingSearchAPIKey)
            .map(response => response.json() as BingSearchResponse)
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
