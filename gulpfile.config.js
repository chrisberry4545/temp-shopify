const _buildDir = 'dist';
const _srcDir = _buildDir + '/src';

const partners = [
    'kite',
];

const config = {
    preWatchTasks: [
        'copy-folders',
        'browser-sync',
    ],
    watchTasks: [
        'unit-tests',
        'tslint',
        'watch:build',
    ],
    buildTasksDev: [
        'svgstore',
        'copy-folders',
        'rollup-dev',
        'partner-index-setup-dev',
    ],
    buildTasksDist: [
        'clean',
        'svgstore',
        'copy-folders',
        'rollup-dist',
    ],
    cdnBaseUrl: '',
    dir: {
        build: _buildDir,
        src: _srcDir,
        test: _srcDir,
        coverageOutput: 'coverage',
        sourceMaps: 'sourcemaps',
        partnerConfig: 'assets/partner',
    },
    filesToBuild: [
        '**/*.ts',
        '!node_modules/**',
        '!example/**',
        '!dist/**',
        '!build-scripts/**',
    ],
    filesToClean: [
        './dist/**',
        '!./dist/vendor.es2015.js',
        '!./dist/vendor.d.ts'
    ],
    filesToWatch: [
        './src/**/*.ts',
        './src/**/*.{pug,html,scss}',
        './styles/**/*.scss',
    ],
    foldersToCopy: [
        'index.html',
        'assets/partner',
    ],
    jestConfig: require('./jest-config.json'),
    jestOptions: {
        runInBand: process.env.NODE_ENV === 'production',
        bail: process.env.NODE_ENV === 'production',
    },
    bsConfig: {
        server: {
            baseDir: './dist'
        },
        startPath: '/'
    },
    partners: partners,
    rollup: {
        configDev: './rollup-config/kite.rollup.config.dev.js',
        configDist: partners.map((partner) => {
            return `./rollup-config/${partner}.rollup.config.dist.js`;
        }),
        configVendor: './rollup-config/rollup.config.vendor.js',
    },
    svgConfig: {
        svgPath: './node_modules/@kite-tech/kite-components/assets/svg/*.svg',
        htmlFilePath: './index.html',
    },
    tsConfig: 'tsconfig.json',
    webpackConfig: 'webpack.config.js',
};

module.exports = config;
