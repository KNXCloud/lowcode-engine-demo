import simulator, { vueRendererConfig } from '@knxcloud/lowcode-vue-simulator-renderer';
import { ConfigProvider, message } from './config-provider';

simulator.app.config.globalProperties.$message = message;

vueRendererConfig.setConfigProvider(ConfigProvider);
