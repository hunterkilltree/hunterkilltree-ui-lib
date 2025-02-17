# hunterkilltree-ui-lib

### Git rebase to resolve mater conflict

```
git pull
git rebase master
git rebase --continue
git push origin feature-branch --force-with-lease # safer because it ensures you don’t accidentally overwrite someone else’s changes
```

### How to release new version

```
# Create new branch from master v0.0.x
# Update version on package.json
# Pr merge to release

```

### Tech

typescript + vite + react + tailwind + storybook

### Node version 20.9.0

### Create project

`npm create vite@latest`

Note: If your TypeScript linter complains about 'path' and \_\_dirname just install the types for node: `npm i @types/node -D`

ship type definitions with your package
`npm i vite-plugin-dts -D`

`npm i tailwind-merge`

`npm install @floating-ui/react`

`npm i debounce`

`npm install classnames`

### Install dependency

```
npm install
```

### Build package

```
npm run build
```

### Start storybook

```
npm run storybook
```

### Git tree

Squash to one commit

Using rebase and merge

### Usage

Library for generic component

https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma
https://flowbite.com/docs/components/accordion/
