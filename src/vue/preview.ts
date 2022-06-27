import { injectComponents } from '@alilc/lowcode-plugin-inject';
import { createDiscreteApi } from 'naive-ui';
import { buildComponents } from '@knxcloud/lowcode-utils';
import VueRenderer, { config } from '@knxcloud/lowcode-vue-renderer';
import { NSpin } from 'naive-ui';
import { defineComponent, onMounted, reactive, h, createApp } from 'vue';
import { ConfigProvider, configProviderProps } from './config-provider';

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
  packages.forEach(({ package: _package, library }) => {
    libraryMap[_package] = library;
  });
  const components = await injectComponents(buildComponents(libraryMap, componentsMap));

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
        schema,
        components,
      }),
    ]);
  };
});

const { message } = createDiscreteApi(['message'], {
  configProviderProps,
});

const app = createApp(Preview);
app.config.globalProperties.$message = message;
app.mount('#lce-container');
