import { defineComponent, h } from 'vue';
import { KConfigProvider, KMessageProvider, zhCN, dateZhCN } from '@knx/kui';

export const ConfigProvider = defineComponent((_, { slots }) => {
  return () => {
    return h(
      KConfigProvider,
      { locale: zhCN, dateLocale: dateZhCN },
      { default: () => h(KMessageProvider, null, slots) }
    );
  };
});
