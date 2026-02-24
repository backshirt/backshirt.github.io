# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is the **Back Shirt** brand website — a static HTML site hosted on GitHub Pages at `backshirt.github.io`. There is no build step, no framework, and no package manager. Changes to HTML/CSS/JS files are deployed by pushing to the `main` branch.

## Architecture

The site is a flat collection of static HTML pages using [W3.CSS](https://www.w3schools.com/w3css/) for layout and styling, with Montserrat from Google Fonts for typography.

**Page structure:**
- `index.html` — Homepage: hero image, product grid, philosophy section, Mailchimp subscribe form, Instagram profile embed
- `back-out-there.html` — Product detail page for the athletic t-shirt (recycled polyester)
- `back-home.html` — Product detail page for the comfort t-shirt (polyester/cotton blend)
- `back-home-shorts.html` — Product detail page for shorts
- `backonthemap/` — A separate sub-feature with its own `index.html`, `styles.css`, `script.js`, and `images/` folder

**E-commerce:** Product pages embed the Shopify Buy Button SDK (`ShopifyBuy`) to render add-to-cart widgets. Each product has a hardcoded Shopify product ID and connects to the `4a2a19-ca.myshopify.com` store.

**`backonthemap/`:** An interactive US map feature. Pins are positioned absolutely over an SVG map image using inline `style="top: %; left: %;"`. Clicking a pin populates a details panel below the map via `script.js`.

## Conventions

- All pages share the same W3.CSS navbar pattern. Product detail pages link back to `index.html`; `backonthemap/` links to `../index.html`.
- Sections or elements not yet ready are hidden with `class="w3-hide"` rather than being removed.
- Product images are hosted on imgbox (`images2.imgbox.com`); local images (`IMG_*.png/PNG`) live at the repo root.
- The `CNAME` file sets the custom domain for GitHub Pages.
