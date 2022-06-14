import { defineComponent, h } from 'vue';
import { NConfigProvider, zhCN, dateZhCN, GlobalThemeOverrides } from 'naive-ui';

const overrides: GlobalThemeOverrides = {
  common: {
    baseColor: '#fff',
    primaryColor: '#3372ff',
    primaryColorHover: '#4f85ff',
    primaryColorPressed: '#2664ee',
    infoColor: '#3372ff',
    infoColorHover: '#4f85ff',
    infoColorPressed: '#2664ee',
    successColor: '#01c320',
    successColorHover: '#27cc41',
    successColorPressed: '#01a61b',
    warningColor: '#ff9426',
    warningColorHover: '#ffa446',
    warningColorPressed: '#d97e20',
    errorColor: '#ff4f40',
    errorColorHover: '#f93d67',
    errorColorPressed: '#d31741',
    textColorBase: '#262626',
    borderColor: '#c4c4c4',
    textColor2: '#262626',
    textColor3: '#595959',
    textColorDisabled: '#bfbfbf',
    hoverColor: '#f5f8ff',
    boxShadow1: '#3372ff33',
  },
};

export const ConfigProvider = defineComponent((_, { slots }) => {
  return () => {
    return h(
      NConfigProvider,
      { locale: zhCN, dateLocale: dateZhCN, themeOverrides: overrides },
      slots
    );
  };
});
