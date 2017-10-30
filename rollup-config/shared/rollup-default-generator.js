import rollupDefaultDev from './rollup-default.dev';
import runPlugins from './rollup-plugins';
import replace from 'rollup-plugin-replace';
import hash from 'rollup-plugin-hash';
import uglify from 'rollup-plugin-uglify';

function makeUrlPicker(branchToUrl, defaultUrl, lockedConfigs = []) {
    if (!defaultUrl) {
        throw new Error('Key \'defaultUrl\' missing.');
    }
    return (branch, processUrl) => {
        if (processUrl && !lockedConfigs.includes(branch)) {
            return JSON.stringify(processUrl);
        }
        const url = branchToUrl[branch];
        return JSON.stringify(
            url ? url : defaultUrl
        );
    }
}

export default (partnerName, production) => {
    const configObj = {
        entry: `src/app/${partnerName}/${partnerName}.main.browser.ts`,
        dest: `dist/${partnerName}/main.js`,
        plugins: runPlugins({
            partnerName,
            production,
        }),
        sourceMap: !production,
    }
    configObj.plugins.push(
        replace({
            'process.env.ASSET_BASE_URL': JSON.stringify(
                process.env.CDN_BASE_URL
                    ?
                    `${process.env.CDN_BASE_URL}/assets`
                    :
                    '../assets'
            ),
            'process.env.ENVIRONMENT': JSON.stringify(process.env.ENVIRONMENT),
            'process.env.BASE_URL': makeUrlPicker(
                {
                    master: 'https://dev-photobook-builder.herokuapp.com',
                    staging: 'https://staging-photobook-builder.herokuapp.com',
                    production: 'https://photobook-builder.herokuapp.com',
                },
                'https://dev-photobook-builder.herokuapp.com',
                ['production']
            )(process.env.CIRCLE_BRANCH, process.env.BASE_URL),
            'process.env.CHECKOUT_URL': JSON.stringify(
                process.env.CHECKOUT_URL ? process.env.CHECKOUT_URL : 'https://checkout.kite.ly'
            ),
            'process.env.PIG_URL': makeUrlPicker(
                {
                    master: 'https://piglet.kite.ly',
                    staging: 'https://piglet.kite.ly',
                    production: 'https://image.kite.ly',
                },
                'https://piglet.kite.ly',
                ['production']
            )(process.env.CIRCLE_BRANCH, process.env.PIG_URL)
        })
    );
    if (production) {
        configObj.plugins.push(
            hash({
                dest: `dist/${partnerName}/main.[hash].js`,
                manifest: `dist/${partnerName}/main.manifest.json`,
                manifestKey: 'main.js',
                replace: true
            })
        );
        configObj.plugins.push(uglify());
    }
    return Object.assign({},
        rollupDefaultDev,
        configObj
    );
};
