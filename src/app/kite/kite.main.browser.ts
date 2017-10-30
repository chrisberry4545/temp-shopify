import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import AppModule from './kite.app.module';

const platformRef = platformBrowserDynamic();

function main() {
    return platformRef.bootstrapModule(AppModule)
        .catch((err) => {
            throw new Error(err);
        });
}

// support async tag or hmr
switch (document.readyState) {
    case 'interactive':
    case 'complete':
        main();
        break;
    case 'loading':
    default:
        document.addEventListener('DOMContentLoaded', () => main());
}
