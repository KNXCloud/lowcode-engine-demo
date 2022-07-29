import Inject from '@alilc/lowcode-plugin-inject';
import { init, plugins, project } from '@alilc/lowcode-engine';
import UndoRedoPlugin from '@alilc/lowcode-plugin-undo-redo';
import SchemaPlugin from '@alilc/lowcode-plugin-schema';
import DataSource from '@alilc/lowcode-plugin-datasource-pane';
import CodeEditor from '@alilc/lowcode-plugin-code-editor';
import { setupHostEnvironment } from '@knxcloud/lowcode-utils';
import RegistryPlugin from './plugins/registry';
import InitPlugin from './plugins/init';
import SetterPlugin from './plugins/setter';
import Actions from './plugins/actions';
import './editor.less';

(async () => {
  const preference = new Map();

  preference.set('DataSourcePane', {
    importPlugins: [],
    dataSourceTypes: [
      {
        type: 'fetch',
      },
    ],
  });

  await plugins.register(Inject);
  await plugins.register(RegistryPlugin);
  await plugins.register(UndoRedoPlugin);
  await plugins.register(SchemaPlugin);
  await plugins.register(DataSource);
  await plugins.register(SetterPlugin);
  await plugins.register(InitPlugin);
  await plugins.register(CodeEditor);
  await plugins.register(Actions);

  setupHostEnvironment(project, 'https://unpkg.com/vue/dist/vue.runtime.global.js');

  await init(
    document.getElementById('lce-container')!,
    {
      enableCondition: true,
      enableCanvasLock: true,
      supportVariableGlobally: true,
      simulatorUrl: [
        'https://unpkg.com/@knxcloud/lowcode-vue-simulator-renderer/dist/vue-simulator-renderer.js',
        'https://unpkg.com/@knxcloud/lowcode-vue-simulator-renderer/dist/vue-simulator-renderer.css',
        '/js/simulator.js',
      ],
    },
    preference
  );
})();
