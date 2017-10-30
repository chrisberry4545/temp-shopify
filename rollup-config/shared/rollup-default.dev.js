import runPlugins from './rollup-plugins';

export default {
    entry: 'src/app/kite/kite.main.browser.ts',
    format: 'iife',
    sourceMap: true,
    moduleName: 'vendor',
    onwarn: function(warning) {
        if ( /node_modules/.test( warning ) ) return;
        console.error(
            warning.message,
            warning.loc
        );
    },
    external: [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/router',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        'rxjs/add/operator/map',
        'rxjs/Observable',
        'rxjs/add/operator/observable/of',
        'rxjs/add/observable/combineLatest',
        'rxjs/add/operator/operator/do',
        'rxjs/add/operator/operator/finally',
        'rxjs/add/operator/operator/first',
        'rxjs/add/operator/operator/share',
    ],
    globals: {
        '@angular/common' : 'vendor._angular_common',
        '@angular/compiler' : 'vendor._angular_compiler',
        '@angular/core' : 'vendor._angular_core',
        '@angular/router' : 'vendor._angular_router',
        '@angular/platform-browser' : 'vendor._angular_platformBrowser',
        '@angular/platform-browser-dynamic' : 'vendor._angular_platformBrowserDynamic',
        'rxjs/Observable': 'vendor._rxjsAddObservable',
        'rxjs/add/operator/map': 'vendor._rxjsAddOperatorMap',
        'rxjs/add/operator/mergeMap': 'vendor._rxjsAddOperatorMergeMap',
        'rxjs/add/operator/observable/of': 'vendor._rxjsAddObservableOf',
        'rxjs/add/observable/combineLatest': 'vendor._rxjsAddObservableCombineLatest',
        'rxjs/add/operator/operator/do': 'vendor._rxjsAddOperatorDo',
        'rxjs/add/operator/operator/finally': 'vendor._rxjsAddOperatorFinally',
        'rxjs/add/operator/operator/first': 'vendor._rxjsAddOperatorFirst',
        'rxjs/add/operator/operator/share': 'vendor._rxjsAddOperatorShare',
        'rxjs/add/operator/withLatestFrom': 'vendor._rxjsAddOperatorWithLatestFrom',
        'rxjs/add/operator/filter': 'vendor._rxjsAddOperatorFilter',
    }
}
