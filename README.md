## Setting Up Cordova Project

`npm install -g cordova`
`reco init com.cordova "cordova"`
### Choose empty Project, navigator presents in template project might cause gradle errors

`cordova platform add android`
### To Start Localhost on Browser
`npm start`
### If cordova script error arises 
`npm i cordova-script -force`

### Running on android devices will result in a blank screen for now, to resolve need to add some meta tags in `public\index.html`

`＜script type="text/javascript" src="cordova.js"＞＜/script＞` 
Inside body tag before </body>

`＜meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *; img-src 'self' data: content:;"＞
＜meta name="format-detection" content="telephone=no"＞
＜meta name="msapplication-tap-highlight" content="no"＞`

Inside head tag

`npm run build`
`cordova run android`

### Everytime there's a change in `App.js`, need to run `npm run build && cordova run build`


