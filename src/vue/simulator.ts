import { vueRendererConfig } from '@knxcloud/lowcode-vue-simulator-renderer';
import { ConfigProvider } from './config-provider';

vueRendererConfig.setConfigProvider(ConfigProvider);
