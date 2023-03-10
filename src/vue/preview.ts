import { Asset } from '@alilc/lowcode-types';
import VueRenderer, { config } from '@knxcloud/lowcode-vue-renderer';
import { buildComponents, AssetLoader } from '@knxcloud/lowcode-utils';
import { h, createApp, toRaw } from 'vue';

const init = async () => {
  const packages = JSON.parse(window.localStorage.getItem('packages') || '[]');
  const projectSchema = JSON.parse(window.localStorage.getItem('projectSchema') || '{}');
  const { componentsMap: componentsMapArray = [], componentsTree = [] } = projectSchema;

  const componentsMap: any = {};
  componentsMapArray.forEach((component: any) => {
    componentsMap[component.componentName] = component;
  });

  const libraryMap = {};
  const libraryAsset: Asset = [];
  packages.forEach(({ package: _package, library, urls, renderUrls }) => {
    libraryMap[_package] = library;
    if (renderUrls) {
      libraryAsset.push(renderUrls);
    } else if (urls) {
      libraryAsset.push(urls);
    }
  });
  await new AssetLoader().load(libraryAsset);
  const components = await buildComponents(libraryMap, componentsMap);

  return { schema: componentsTree[0], components };
};

(async () => {
  const { schema, components } = await init();
  const { ConfigProvider, message } = await import('./config-provider');
  config.setConfigProvider(ConfigProvider);
  const app = createApp(() => {
    return h('div', { class: 'lowcode-plugin-sample-preview' }, [
      h(VueRenderer, {
        class: 'lowcode-plugin-sample-preview-content',
        schema: toRaw(schema),
        components: toRaw(components),
      }),
    ]);
  });
  app.config.globalProperties.$message = message;
  app.mount('#lce-container');
})();
