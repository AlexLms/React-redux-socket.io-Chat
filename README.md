# React-redux socket.io Chat

This is my PET Chat project that I'd like to share with you.

Included `Webpack 4` `babel 7` `styled-components` `redux` `redux-thunk` `socket.io`


# Installation

0) Clone the branch you need

1) Install dependencies via npm `npm i` or yarn `yarn install`.

2) npm run build

3) Start web server `npm run server`.

4) Open 2 Browser tabs and enter 2 different nicknames. Navigate to [http://localhost:5001](http://localhost:5001)

4) Type anything in a chat.

# Location of stuff

    .
    ├── server/                 # Server logic with socket.io
    ├── src/                    # App folder with all developer stuff
    │   ├── actions/            # Redux actions used api/ functions
    │   ├── api/                # Axios requests logic
    │   ├── components/         # All components used in this project
    │   ├── constants/          # Redux constants used in actions/
    │   ├── pages/              # The layout of home page
    │   ├── reducers/           # Redux reducers
    │   ├── store/              # Redux store with initial state
    │   ├── static/             # Used to store fonts, icons, images
    │   └── ...
    ├── webpack/                # Modules for webpack I used
    ├── webpack.config.js       # All webpack settings
    └── ...

# Build production

If you want to build a production version of my app you need to type

`npm run build` || `yarn build`

This will create dist folder where everything will be compressed and minified.
