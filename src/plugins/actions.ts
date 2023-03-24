import { createElement as h } from 'react';
import { Button, Message } from '@alifd/next';
import { saveSchema } from '@/utils/store';
import { IPublicModelPluginContext } from '@alilc/lowcode-types';

const save = async () => {
  await saveSchema();
  Message.success('成功保存到本地');
};

const preview = async () => {
  await saveSchema();
  window.open('preview.html');
};

const savePlugin = (ctx: IPublicModelPluginContext) => {
  return {
    name: 'saveSample',
    async init() {
      const { skeleton, hotkey } = ctx;

      skeleton.add({
        name: 'saveSample',
        area: 'topArea',
        type: 'Widget',
        props: { align: 'right' },
        content: h(Button, { onClick: save }, '保存到本地'),
      });

      skeleton.add({
        name: 'previewSample',
        area: 'topArea',
        type: 'Widget',
        props: { align: 'right' },
        content: h(Button, { onClick: preview }, '预览'),
      });

      hotkey.bind('command+s', async (e) => {
        e.preventDefault();
        save();
      });
    },
  };
};

savePlugin.pluginName = 'saveSample';

export default savePlugin;
