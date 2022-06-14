import { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { PluginProps } from '@alilc/lowcode-types';
import './logo.less';

export interface IProps {
  logo?: string;
  href?: string;
}

export const Logo: FC<IProps & PluginProps> = (props): ReactElement => {
  return (
    <div className="lowcode-plugin-logo">
      <a
        className="logo"
        target="blank"
        href={props.href || 'https://lowcode-engine.cn'}
        style={{ backgroundImage: `url(${props.logo})` }}
      />
    </div>
  );
};

Logo.propTypes = {
  logo: PropTypes.string,
  href: PropTypes.string,
};
