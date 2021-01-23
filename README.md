# Svelte Dashboard - Single-Page Application

![Svelte Dashboard](https://www.dl.dropboxusercontent.com/s/tvy4orv62n6kswb/Screen%20Shot%202021-01-22%20at%209.57.18%20PM.png)

This dashboard was scaffolded from the [Svelte project template](https://github.com/sveltejs/template). A router has not yet been integrated into this dashboard, and thus, the dashboard is not yet a single-page application. [`svelte-router-spa`](https://github.com/jorgegorka/svelte-router) will be chosen as the router to turn this dashboard into a single-page application.

Visit the [master branch](https://github.com/newline-sandbox/svelte-dashboard-spa) of this repository for the version of the application that is a single-page application.

## Get started

Install the dependencies...

```bash
$ npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
$ npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your appllication running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from `localhost`. To allow connections from other computers, edit the `sirv` commands in `package.json` to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/), then we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors, then you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and Running in Production Mode

To create an optimised version of the application:

```bash
$ npm run build
```

You can run the newly built application with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your `package.json`'s `dependencies` so that the application will work when you deploy to platforms like [Heroku](https://heroku.com).
