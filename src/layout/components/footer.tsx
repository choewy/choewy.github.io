import { FunctionComponent } from 'react';

export const LayoutFooter: FunctionComponent = () => {
  return (
    <footer id="layout__footer">
      <span>
        Blog is powered by&nbsp;
        <a href="https://github.com/choewy" target="_blank">
          choewy
        </a>
      </span>
      <div className="top" onClick={() => window.scrollTo({ top: 0 })}>
        Top
      </div>
    </footer>
  );
};
