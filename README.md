# Monjland Chatroom

A chat app that uses KoaJS for server and ReactJs for client.
Communication between server and client is done using web sockets.

## Get started

## Environment variables

In the project directory and in client create an `.env` file.

In the project directory add

```
PORT=
```

and provide your desired port number for the server (i.e. 5432)

In the client directory add

```
REACT_APP_WEBSOCKET_URL=
```

The value of that variable should look something like this: `ws://domain_name:PORT` (i.e. ws://localhost:5432)

## Available Scripts

### `yarn run dev` in project directory

Runs the server in the development mode.

In the client directory, you can run:

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

In the project or client directory, you can run:

### `yarn lint:check` or `yarn lint:fix`

Static code and formatting analysis, and fixing.

### `yarn prettier:check` or `yarn prettier:fix`

Checking or fixing formatting, but the same is included with `lint:check` and `lint:fix`.
