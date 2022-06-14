import { ILowCodePluginContext } from '@alilc/lowcode-engine';
import AliLowCodeEngineExt from '@alilc/lowcode-engine-ext';

const setterRegistry = (ctx: ILowCodePluginContext) => {
  const { setterMap, pluginMap } = AliLowCodeEngineExt;
  return {
    name: 'ext-setters-registry',
    async init() {
      const { setters, skeleton } = ctx;
      // 注册setterMap
      setters.registerSetter(setterMap as any);
      // 注册插件
      // 注册事件绑定面板
      skeleton.add({
        area: 'centerArea',
        type: 'Widget',
        content: pluginMap.EventBindDialog,
        name: 'eventBindDialog',
        props: {},
      });

      // 注册变量绑定面板
      skeleton.add({
        area: 'centerArea',
        type: 'Widget',
        content: pluginMap.VariableBindDialog,
        name: 'variableBindDialog',
        props: {},
      });
    },
  };
};

setterRegistry.pluginName = 'setterRegistry';

export default setterRegistry;
