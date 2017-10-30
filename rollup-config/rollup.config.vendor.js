import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sizes from 'rollup-plugin-sizes';
import filesize from 'rollup-plugin-filesize';
import uglify from 'rollup-plugin-uglify';

export default {
 entry: 'src/vendor.ts',
 dest: 'dist/vendor.es2015.js',
 format: 'iife',
 moduleName: 'vendor',
 plugins: [
   typescript(),
   resolve({ jsnext: true,
             main: true,
             browser: true }),
    commonjs({
      include: 'node_modules/**',
      sourceMap: false
    }),
    (process.env.NODE_ENV === 'production' && uglify()),
    sizes(),
    filesize()
 ]
}
