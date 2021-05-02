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
