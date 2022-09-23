# Tenor Task (tenor-task)

Task for kosik.cz

## Install the dependencies

## Prerequisites - NPM packages

Install Quasar framework:

```bash
yarn global add @quasar/cli
```

Now install all dependencies.

```bash
yarn
```

## Prerequisites - environmental variables

Copy `.env.example` file to `.env` file.

Create a token to Tenor API. Read [Tenor documentation](https://developers.google.com/tenor/guides/quickstart) for further details.

Replace variable in `.env` file:

```yaml
API_KEY=enter_your_api_keyx
```

## Development mode

```bash
quasar dev
```

## Lint the files

```bash
yarn lint
```

## Format the files

```bash
yarn format
```

## Deployment to GitHub Pages

```bash
quasar build
...
git push origin master
```

## Icons - Icon Genie

Add Icon Genie CLI:

```bash
yarn global add @quasar/icongenie
```

### Generate Icons

```bash
yarn favicons
```

## Deployment

Handled by Vercel.

## Testing

e2e tests are handled by Cypress.

```bash
yarn test:e2e
```
