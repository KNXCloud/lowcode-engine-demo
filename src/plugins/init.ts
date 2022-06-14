import { injectAssets } from '@alilc/lowcode-plugin-inject';
import { ILowCodePluginContext } from '@alilc/lowcode-engine';
import assets from '../assets/assets.json';
import originSchema from '../assets/schema.json';
import { getProjectSchemaToLocalStorage } from '@/utils/store';

const editorInit = (ctx: ILowCodePluginContext) => {
  return {
    name: 'editor-init',
    async init() {
      const { material, project } = ctx;
      const loadedAssets = await injectAssets(assets);
      material.setAssets(loadedAssets);

      const projectSchema = getProjectSchemaToLocalStorage();
      const schema = projectSchema ? projectSchema['componentsTree'].pop() : originSchema;
      project.openDocument(schema);
    },
  };
};

editorInit.pluginName = 'editorInit';

export default editorInit;
