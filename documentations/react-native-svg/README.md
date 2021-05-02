# React Native SVG
Provides SVG support to React Native on iOS and Android. This project was bootstrapped with [React Native SVG](https://github.com/react-native-svg/react-native-svg) and [React Native SVG Transformer](https://github.com/kristerkari/react-native-svg-transformer#readme).

##### 1. Installation

    $ npm install react-native-svg react-native-svg-transformer


Change file **.metro.config.js** on directory root with the code below :

    const {getDefaultConfig} = require('metro-config');
	module.exports = (async () => {
	  const {
		resolver: {sourceExts, assetExts},
	  } = await getDefaultConfig();
	  return {
		transformer: {
		  getTransformOptions: async () => ({
			transform: {
			  experimentalImportSupport: false,
			  inlineRequires: true,
			},
		  }),
		  babelTransformerPath: require.resolve('react-native-svg-transformer'),
		},
		resolver: {
		  assetExts: assetExts.filter(ext => ext !== 'svg'),
		  sourceExts: [...sourceExts, 'svg'],
		},
	  };
	})();

###End