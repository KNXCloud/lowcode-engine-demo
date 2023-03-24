import { Asset } from '@alilc/lowcode-types';
import VueRenderer from '@knxcloud/lowcode-vue-renderer';
import { buildComponents, AssetLoader } from '@knxcloud/lowcode-utils';
import { h, createApp, toRaw, Suspense } from 'vue';

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
  const app = createApp(() => {
    return h('div', { class: 'lowcode-plugin-sample-preview' }, [
      h(Suspense, null, {
        default: () =>
          h(VueRenderer, {
            class: 'lowcode-plugin-sample-preview-content',
            schema: toRaw(schema),
            components: toRaw(components),
          }),
        fallback: () =>
          h('div', { class: 'lowcode-plugin-sample-preview-loading' }, 'loading...'),
      }),
    ]);
  });
  app.mount('#lce-container');
})();
