# Libraries
```
npm i react-router-dom
npm install react-bootstrap bootstrap
npm install gh-pages --save-dev
```

# Commands:
Deploying to gh-pages
Added to package.json:
```
"homepage": "https://jacintomendoza.github.io/react-playground"
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```
```
npm run deploy
```