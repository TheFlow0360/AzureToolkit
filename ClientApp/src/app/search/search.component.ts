import { Component } from '@angular/core';
import { ImageResult } from '../common/models/bingSearchResponse';
import { CognitiveService } from '../common/services/cognitive.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {
    searchResults: ImageResult[] | null;
    isSearching = false;

    constructor(private cognitiveService: CognitiveService) { }

    search(searchTerm: string) {
        this.searchResults = null;
        this.isSearching = true;
        this.cognitiveService.searchImages(searchTerm).subscribe(result => {
            this.searchResults = result.value;
            this.isSearching = false;
        });
    }
}
