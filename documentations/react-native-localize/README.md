# React Native Localize
Provides Multi Languange to React Native on iOS and Android. This project was bootstrapped with [React Native Localize](https://github.com/zoontek/react-native-localize), [i18n-js](https://github.com/fnando/i18n-js), and  [lodash.memoize](https://www.npmjs.com/package/lodash.memoize).

##### 1. Installation

    $ npm install react-native-localize i18n-js lodash.memoize


Create file **index.js** on directory **./src/locales** with the code below :

    import * as RNLocalize from 'react-native-localize';
	import i18n from 'i18n-js';
	import memoize from 'lodash.memoize';
	import {I18nManager} from 'react-native';

	export const translationGetters = {
	  en: () => require('./en.json'),
	  id: () => require('./id.json'),
	};

	export const translate = memoize(
	  (key, config) => i18n.t(key, config),
	  (key, config) => (config ? key + JSON.stringify(config) : key),
	);

	export const getDefaultLanguage = async () => {
	  const {languageTag} = await RNLocalize.findBestAvailableLanguage(
		Object.keys(translationGetters),
	  );
	  return languageTag;
	};

	export const setI18nDefaultConfig = () => {
	  const {languageTag, isRTL} = RNLocalize.findBestAvailableLanguage(
		Object.keys(translationGetters),
	  );
	  translate.cache.clear();
	  I18nManager.forceRTL(isRTL);
	  i18n.translations = {[languageTag]: translationGetters[languageTag]()};
	  i18n.locale = languageTag;
	};

	export const setI18nConfig = (language, isRtl) => {
	  const fallback = {languageTag: language, isRTL: isRtl};
	  const {languageTag, isRTL} = fallback;
	  translate.cache.clear();
	  I18nManager.forceRTL(isRTL);
	  i18n.translations = {[languageTag]: translationGetters[languageTag]()};
	  i18n.locale = languageTag;
	};

Create file **id.json** and **en.json** on directory **./src/locales** with the code below

    {
	  "app-name": "RN_Templating",
	  "hello": "Hi, %{name}"
	}


<br>

##### 2. Connect To Your Project
Add code on your root project **App.js** with the code below :

    $ import {setI18nConfig} from 'locales';
	useEffect(() => {
		setI18nConfig("id", false);
		//id for select indonesia languange, false for disabled rtl mode
	  }, []);
<br>
##### 3. How To Use
Add code on your root project **App.js** with the code below :

    $ import {translate} from 'locales';
	translate('hello', {name: "Jois"})
	//the result is "Hi, Jois"


###End