import simulator, { vueRendererConfig } from '@knxcloud/lowcode-vue-simulator-renderer';
import { message } from '@knx/kui';
import { ConfigProvider } from './config-provider';

simulator.app.config.globalProperties.$message = message;

vueRendererConfig.setConfigProvider(ConfigProvider);
