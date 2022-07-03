import { Asset } from '@alilc/lowcode-types';
import { NSpin } from 'naive-ui';
import { buildComponents, AssetLoader } from '@knxcloud/lowcode-utils';
import VueRenderer, { config } from '@knxcloud/lowcode-vue-renderer';
import { defineComponent, onMounted, reactive, h, createApp, toRaw } from 'vue';
import { ConfigProvider, message } from './config-provider';

config.setConfigProvider(ConfigProvider);

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

const Preview = defineComponent(() => {
  const data = reactive<any>({});

  onMounted(async () => {
    Object.assign(data, await init());
  });

  return () => {
    const { schema, components } = data;
    if (!schema || !components) {
      return h(NSpin);
    }

    return h('div', { class: 'lowcode-plugin-sample-preview' }, [
      h(VueRenderer, {
        class: 'lowcode-plugin-sample-preview-content',
        schema: toRaw(schema),
        components: toRaw(components),
      }),
    ]);
  };
});

const app = createApp(Preview);
app.config.globalProperties.$message = message;
app.mount('#lce-container');
