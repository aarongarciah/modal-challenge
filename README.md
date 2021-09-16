# Modal Challenge

Author: [Aaron Garcia Hervas](https://twitter.com/aarongarciah) (aarongarciahervas@gmail.com)  
Date: 2021-09-24

## Before you review

- Take a look at what we are reviewing: [Design System Challenge.pdf](./docs/Design%20System%20Challenge.pdf)
- Read the [Considerations](#considerations) and [Possible Improvements](#possible-improvements) sections.

## Considerations

- Decisions without context don't have much value, that's why I wrote the RFC making some (made up) assumptions:
  - The design system is serving high paced teams that need to ship as fast as possible without the design system being a bottleneck.
  - The rest of the design system is being built optimized for change, meaning that it's preferred to have some flexibility at a consumption level and leaving consumers a certain grade of customization over closed APIs that require components to changes their APIs continuosly.
  - The design system team want to keep external dependencies to a bare minimum.
- In a real world scenario I would probably use a proven solution like [Radix Primitives](https://www.radix-ui.com/docs/primitives/components/dialog) or [React Aria](https://react-spectrum.adobe.com/react-aria/useDialog.html) since these are battle tested and very generic solutions to build on top of them, but since this is a challenge I didn't.
- I didn't pay much attention to:
  - The setup, linting, etc. This is just a bare create-react-app project with some modifications.
  - Setup of design tokens and the styling solution in general.
  - The design.
  - Storybook controls (previously known as knobs).
- I would make `AlertDialog` a component built on top of `Dialog` to cover the 3 mockups. This is mentioned in the RFC, but since the RFC only covers the modal I haven't created `AlertDialog`. Also for brevity and to constrain the time of the challenge I added the 3 alert dialogs as 3 different stories using `Dialog`.

## Possible Improvements

This `Dialog` component is far from perfect. Lots of work should be done to get there, for example:

- Block page scrolling when dialog opens.
- Reserve space for the scrollbar to avoid a page jump.
- Mount/unmount animations.
- Reset styles per component instead of globally.
- Add SSR support.
- etc.

---

## Setup

1. Clone this repository
2. Install dependencies
   ```
   yarn
   ```
3. Start storybook
   ```
   yarn storybook
   ```
4. A new tab (http://localhost:6006) will be auto-opened in your browser

## Tests

Run tests with this command:

```
yarn test
```

> React components tests are written with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro).

## Tech colophon

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Typescript
- Storybook
- ESLint
- Prettier
- lint-staged/husky
- Jest
- Chromatic (cloud based solution for Storybook visual regression tests)

---

Made with ❤️ by [Aaron Garcia Hervas](https://twitter.com/aarongarciah) (aarongarciahervas@gmail.com)
