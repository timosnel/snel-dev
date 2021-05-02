import React from 'react';

const Layout: React.FC = ({ children }) => (
  <div>
    <header></header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
