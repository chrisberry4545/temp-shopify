import alias from 'rollup-plugin-alias';
import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';;
import angular from 'rollup-plugin-angular';
import pug from 'pug';
import sass from 'node-sass';
import CleanCSS from 'clean-css';
import sizes from 'rollup-plugin-sizes';
import filesize from 'rollup-plugin-filesize';

const cssmin = new CleanCSS();

function runPlugins({
    production = false,
    partnerName = 'kite'
} = {}) {
    return [
        angular({
            preprocessors: {
                template: template => {
                    return pug.compile(template, {
                        filename: 'base'
                    })();
                },
                style: scss => {
                    scss = scss.replace(
                        new RegExp('<!--partnerName--settings-->', 'g'),
                        `partner/${partnerName}/${partnerName}.settings`
                    );
                    const css = sass.renderSync({ data: scss }).css;
                    return cssmin.minify(css).styles;
                }
            }
        }),
        typescript(),
        alias({ rxjs: __dirname + '/../node_modules/rxjs' }),
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs({
            include: 'node_modules/**',
            sourceMap: !production
        }),
        sizes(),
        filesize()
    ];
}

export default runPlugins
