// components/Layout.tsx

import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header style={{ padding: '1rem', background: '#f5f5f5' }}>
        <h2>ToolTonic</h2>
      </header>
      <main style={{ padding: '1rem' }}>{children}</main>
      <footer style={{ padding: '1rem', background: '#f5f5f5' }}>
        <p>© {new Date().getFullYear()} ToolTonic. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
