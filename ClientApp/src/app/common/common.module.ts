import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CognitiveService } from './services/cognitive.service';
import { AzureHttpClient } from './services/azureHttpClient';
@NgModule({
    imports: [ HttpModule ],
    providers: [AzureHttpClient, CognitiveService]
})
export class CommonModule { }
