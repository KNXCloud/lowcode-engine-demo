import simulator, { vueRendererConfig } from '@knxcloud/lowcode-vue-simulator-renderer';
import { createDiscreteApi } from 'naive-ui';
import { ConfigProvider, configProviderProps } from './config-provider';

const { message } = createDiscreteApi(['message'], {
  configProviderProps,
});

simulator.app.config.globalProperties.$message = message;

vueRendererConfig.setConfigProvider(ConfigProvider);
