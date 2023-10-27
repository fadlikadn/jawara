import fs from 'fs'
import merge from "lodash.merge";
import yaml from 'js-yaml'

const config = yaml.load(fs.readFileSync('src/config.yaml', 'utf8')) as {
  // site?: SiteConfig;
  // metadata?: MetaDataConfig;
  // i18n?: I18NConfig;
  // apps?: {
  //   blog?: AppBlogConfig;
  // };
  ui?: unknown;
  // analytics?: unknown;
};

const getUI = () => {
  const _default = {
    theme: 'system',
    classes: {},
    tokens: {},
  };

  return merge({}, _default, config?.ui ?? {});
};

export const UI = getUI()