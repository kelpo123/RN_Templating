# React Native Init
This project was bootstrapped with [Create React Native App](https://github.com/facebook/react-native).

## Important Setup
This is basic installation and important setup before begin code for react-native.
<br>
##### 1. Install Babel Plugin
This is for change the default of the folder directory

    $ npm install babel-plugin-module-resolver --save-dev


create file **.babelrc** on directory root with the code below

    {
		"plugins": [
		  [
			"module-resolver",
			{
			  "root": ["./src"],
			  "alias": {
				"assets": "./src/assets",
				"components": "./src/components",
				"constants": "./src/constants",
				"locales": "./src/locales",
				"screens": "./src/screens",
				"helpers": "./src/helpers",
				"navigations": "./src/navigations",
			  },
			  "extensions": [".js", ".ios.js", ".android.js"],
			  "cwd": "packagejson"
			}
		  ]
		]
	}

create file **jsconfig.json** on directory root with the code below

    {
		"compilerOptions": {
			"baseUrl": "src"
		},
		"include": ["src"]
	}

<br>
##### 2. Register Font Family
create file **react-native.config.js** on directory root with the code below

    module.exports = {
	  project: {
		ios: {},
		android: {},
	  },
	  assets: ['./src/assets/fonts/Gotham/'],
	};

after this copy your assets font to**"./src/assets/fonts/Gotham"**this directory. I recommend you to use **.otf** file. and then run **react-native link**.
<br>
##### 3. Start The Project

	npm install //dont forget to install node_modules first
    npx react-native run-android //for android
	npx react-native run-ios //for ios


To see the complete documentation for using modules you can visit /modules.
###End