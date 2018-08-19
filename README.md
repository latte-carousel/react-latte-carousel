[![npm](https://img.shields.io/npm/v/react-latte-carousel.svg)](https://npmjs.com/package/react-latte-carousel)
[![npm](https://img.shields.io/npm/l/react-latte-carousel.svg)](https://github.com/latte-carousel/react-latte-carousel/blob/master/LICENSE)

<p align="center">
    <img src="https://latte-carousel.github.io/img/colored_small.png" alt="LatteCarousel"/>
</p>

# About

LatteCarousel is a lightweight and responsive carousel without any dependencies.

This is a wrapper component for LatteCarousel.

## Usage

There are two ways for using react-latte-carousel:

-   Include both latte-carousel and react-latte-carousel packages and import using ES6 with Babel or Webpack.
-   Include both UMD (Universal Module Definition) files and use it directly.

This package already includes .d.ts files.

```html
<!-- UMD - Package -->
<link rel="stylesheet" href="latte-carousel.min.css">
<script src="latte-carousel.min.js"></script>
<script src="react-latte-carousel.min.js"></script>

<!-- UMD - CDN -->
<link rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/latte-carousel@1.2.1/dist/latte-carousel.min.css">
<script src="https://cdn.jsdelivr.net/npm/latte-carousel@1.2.1/dist/latte-carousel.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/react-latte-carousel@0.9.0/dist/react-latte-carousel.min.js"></script>
```

```jsx
<!-- ES6 -->
import { LatteCarousel, LatteItem } from "react-latte-carousel";

<!-- UMD -->
const LatteCarousel = ReactLatte.LatteCarousel;
const LatteItem = ReactLatte.LatteItem;
```

```jsx
render() {
    const options = this.getOptions();

    return (
        <LatteCarousel options={options}>
            <LatteItem>
                <div>1</div>
            </LatteItem>

            <LatteItem>
                <div>2</div>
            </LatteItem>

            <LatteItem>
                <div>3</div>
            </LatteItem>

            <LatteItem>
                <div>4</div>
            </LatteItem>

            <LatteItem>
                <div>5</div>
            </LatteItem>

            <LatteItem>
                <div>6</div>
            </LatteItem>
        </LatteCarousel>
    );
}
```

```jsx
getOptions() {
    return {
        count: 3,
        touch: true,
        buttons: true,
        dots: true,
        rewind: true,
        autoplay: 0,
        animation: 500,
        responsive: {
            "0": { count: 1.5, buttons: false },
            "480": { count: 2.5, buttons: false },
            "768": { count: 3, touch: false },
            "1440": { count: 4, touch: false },
        },
    };
}
```

## Features

-   [x] Responsive options
-   [x] Touch support
-   [x] Stage padding
-   [x] Navigation dots
-   [x] Rewind carousel
-   [x] Autoplay carousel
-   [x] Carousel events

## Build

Install dependencies:

```sh
yarn install
```

Build project:

```sh
yarn run build
```

Run example:

```sh
yarn run serve

open http://localhost:8080/example
```

Result files:

-   dist/react-latte-carousel.min.js
