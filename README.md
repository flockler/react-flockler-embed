# @flockler/react-flockler-embed

## Install

```
npm install @flockler/react-flockler-embed
```

## Usage

Let’s say your embed display has a preview URL like this:

```
https://plugins.flockler.com/embed/preview/16e88f68c280078e6c3cc65257156295/16ea79d892f0a038af66109643d7479f
```

The IDs needed by the `<FlocklerEmbed />` component can be parsed from the preview URL as follows

- `siteUuid` => `16e88f68c280078e6c3cc65257156295`
- `embedUuid` => `16ea79d892f0a038af66109643d7479f`

```jsx
import FlocklerEmbed from '@flockler/react-flockler-embed';

const MySocialWall = () => (
  <div>
    <h1>Social Wall</h1>
    <FlocklerEmbed siteUuid="…" embedUuid="…" />
  </div>
);
```

## Props

| Prop      | Type                 | Description                                   |
| :-------- | :------------------- | :-------------------------------------------- |
| siteUuid  | Flockler UUID string | The UUID of your Flockler                     |
| embedUuid | Flockler UUID string | The UUID of an embed display on your Flockler |

## FAQ

### What’s Flockler?

Flockler helps you to display Instagram images, Facebook posts, Tweets, YouTube
videos, and more on any digital service to increase time spent on site and drive
conversions.

### Where can I create my own social wall?

Visit [flockler.com](https://flockler.com) to learn more and sign up for a free
14-day trial.
