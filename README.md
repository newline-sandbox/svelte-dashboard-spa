# Svelte Dashboard - Single-Page Application

![Svelte Dashboard - Single-Page Application](https://www.dl.dropboxusercontent.com/s/xftjebzanod0dvz/Screen%20Shot%202021-01-22%20at%204.46.24%20PM.png)

This dashboard was scaffolded from the [Svelte project template](https://github.com/sveltejs/template). The router chosen for this single-page application is [`svelte-router-spa`](https://github.com/jorgegorka/svelte-router).

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

## Single-Page Application Mode

By default, `sirv` will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your application anywhere.

If you're building a single-page application (SPA) with multiple routes, `sirv` needs to be able to respond to requests for _any_ path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

or...

```js
"start": "sirv public -s"
```
