<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# take

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Take elements from an array.

<section class="installation">

## Installation

```bash
npm install @stdlib/array-take
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var take = require( '@stdlib/array-take' );
```

#### take( x, indices\[, options] )

Takes elements from an array.

```javascript
var x = [ 1, 2, 3, 4 ];

var y = take( x, [ 1, 3 ] );
// returns [ 2, 4 ]
```

The function supports the following parameters:

-   **x**: input array.
-   **indices**: list of indices.
-   **options**: function options.

The function supports the following options:

-   **mode**: index [mode][@stdlib/ndarray/base/ind]. Default: `'normalize'`.

By default, the function normalizes negative integer indices to positive integer index equivalents.

```javascript
var x = [ 1, 2, 3, 4 ];

var y = take( x, [ -3, -1 ] );
// returns [ 2, 4 ]
```

To specify an alternative index [mode][@stdlib/ndarray/base/ind], provide a `mode` option.

```javascript
var x = [ 1, 2, 3, 4 ];

var y = take( x, [ -10, 10 ], {
    'mode': 'clamp'
});
// returns [ 1, 4 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `indices` is an empty array, the function returns an empty array.

    ```javascript
    var x = [ 1, 2, 3, 4 ];

    var y = take( x, [] );
    // returns []
    ```

-   If provided an input array having a recognized [data type][@stdlib/array/dtypes], the function returns an array having the same [data type][@stdlib/array/dtypes] as the input array. Otherwise, the function **always** returns a "generic" array.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var linspace = require( '@stdlib/array-linspace' );
var take = require( '@stdlib/array-take' );

// Generate a linearly spaced array:
var x = linspace( 0, 100, 11 );
console.log( x );

// Generate an array of random indices:
var indices = discreteUniform( 10, 0, x.length-1 );
console.log( indices );

// Take a random sample of elements from `x`:
var y = take( x, indices );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array-put`][@stdlib/array/put]</span><span class="delimiter">: </span><span class="description">replace specified elements of an array with provided values.</span>
-   <span class="package-name">[`@stdlib/array-slice`][@stdlib/array/slice]</span><span class="delimiter">: </span><span class="description">return a shallow copy of a portion of an array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-take.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-take

[test-image]: https://github.com/stdlib-js/array-take/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-take/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-take/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-take?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-take.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-take/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-take/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-take/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-take/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-take/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-take/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-take/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-take/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-take/main/LICENSE

[@stdlib/ndarray/base/ind]: https://github.com/stdlib-js/ndarray-base-ind

[@stdlib/array/dtypes]: https://github.com/stdlib-js/array-dtypes

<!-- <related-links> -->

[@stdlib/array/put]: https://github.com/stdlib-js/array-put

[@stdlib/array/slice]: https://github.com/stdlib-js/array-slice

<!-- </related-links> -->

</section>

<!-- /.links -->
