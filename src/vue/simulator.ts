import '@knxcloud/lowcode-vue-simulator-renderer';
import { config } from '@knxcloud/lowcode-vue-renderer';
import { ConfigProvider } from './config-provider';

config.setConfigProvider(ConfigProvider);
