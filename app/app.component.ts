import { Component } from '@angular/core';
import { Config } from './config';

@Component({
    selector: 'my-app',
    templateUrl: 'app/partials/app.component.html',
})

export class AppComponent {
    title = Config.APP_TITLE;
    text = Config.APP_SS_TITLE;
 }