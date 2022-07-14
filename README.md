## Setting Up Cordova Project

```cli
npm install -g cordova
```
```cli
reco init com.cordova "cordova"
```
### Choose empty Project, navigator presents in template project might cause gradle errors

```cli
cordova platform add android
```
### To Start Localhost on Browser
```cli
npm start
```
### If cordova script error arises 
```cli
npm i cordova-script -force
```

### Running on android devices will result in a blank screen for now, to resolve need to add some meta tags in `public\index.html`

```cli
＜script type="text/javascript" src="cordova.js"＞＜/script＞
``` 
Inside body tag 

```cli
＜meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *; img-src 'self' data: content:;"＞
＜meta name="format-detection" content="telephone=no"＞
＜meta name="msapplication-tap-highlight" content="no"＞
```

Inside head tag

```cli
npm run build
```
```cli
cordova run android
```

### Everytime there's a change in `App.js`, need to run `npm run build && cordova run build`


