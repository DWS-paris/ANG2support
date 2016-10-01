// A propos de la configuration de l'application : https://goo.gl/iK45yx

// Importer platformBrowserDynamic pour initier l'application
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Importer la class du component principal
import { AppModule } from './app.module';

// Bootstraper le component
platformBrowserDynamic().bootstrapModule(AppModule);
