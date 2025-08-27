import { css } from "@emotion/react";

export default css`
  /* roboto-200 - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 200;
    src: url('/fonts/roboto-v48-latin-200.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* roboto-regular - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/roboto-v48-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* roboto-slab-200 - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 200;
    src: url('/fonts/roboto-slab-v35-latin-200.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* roboto-slab-800 - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 800;
    src: url('/fonts/roboto-slab-v35-latin-800.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }
  /* roboto-mono-regular - latin */
  @font-face {
    font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */
    font-family: 'Roboto Mono';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/roboto-mono-v30-latin-regular.woff2') format('woff2'); /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
  }

  :root {
    /* COLORS */
    --grey-1000: hsl(225, 9%, 9%);
    --grey-900: hsl(216, 8%, 12%);
    --grey-800: hsl(220, 7%, 18%);
    --grey-700: hsl(216, 9%, 23%);
    --grey-600: hsl(216, 8%, 38%);
    --grey-500: hsl(213, 4%, 51%);
    --grey-400: hsl(222, 9%, 78%);
    --grey-300: hsl(0, 0%, 89%);
    --grey-200: hsl(0, 0%, 96%);
    --grey-100: hsl(0, 0%, 100%);
    --orange: hsl(13, 75%, 58%);
    --orange-hover: hsl(21, 86%, 67%);

    /* FONT WEIGHTS */
    --fw-bold: 800;
    --fw-regular: 400;
    --fw-light: 200;

    /* FONT SIZES */
    --fs-h-15: calc(15 / 16 * 1rem);
    --fs-h-14: calc(14 / 16 * 1rem);
    --fs-b-13: calc(13 / 16 * 1rem);

    --fs-m-h1: calc(32 / 16 * 1rem);
    --fs-m-h2: calc(28 / 16 * 1rem);
    --fs-m-h3: calc(24 / 16 * 1rem);
    --fs-m-h4: calc(20 / 16 * 1rem);
    --fs-m-h5: calc(16 / 16 * 1rem);
    --fs-m-h6: calc(14 / 16 * 1rem);
    --fs-m-p: calc(14 / 16 * 1rem);

    /* FONT FAMILY */
    --ff-main: 'Roboto';
    --ff-markdown-output: 'Roboto Slab';
    --ff-markdown-input: 'Roboto Mono';
  }

  /* 1. Use a more-intuitive box-sizing model */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  /* 2. Remove default margin */
  * {
    margin: 0;
  }

  /* 3. Enable keyword animations */
  @media (prefers-reduced-motion: no-preference) {
    html {
      interpolate-size: allow-keywords;
    }
  }

  body {
    /* 4. Add accessible line-height */
    line-height: 1.5;
    /* 5. Improve text rendering */
    -webkit-font-smoothing: antialiased;
  }

  /* 6. Improve media defaults */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /* 7. Inherit fonts for form controls */
  input, button, textarea, select {
    font: inherit;
  }

  /* 8. Avoid text overflows */
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  /* 9. Improve line wrapping */
  p {
    text-wrap: pretty;
  }
  h1, h2, h3, h4, h5, h6 {
    text-wrap: balance;
  }

  /*
    10. Create a root stacking context
  */
  #root, #__next {
    isolation: isolate;
  }
`;