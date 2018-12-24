import json from 'rollup-plugin-json'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/buddle.js',
    format: 'umd',
    name: 'starWarsNames'
  },
  plugins: [
    resolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    json({
      exclude: 'node_modules/**'
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
