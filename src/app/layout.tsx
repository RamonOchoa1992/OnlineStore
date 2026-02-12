import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tiendas Ramon | Home',
  description: 'Tiendas Ramon ❤️ is a store dedicated to sell clothes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        {children}

        <Script
          id='_helpia_ws_chat'
          src='https://statics.orishiacore.com/connet/webchat/production/widget.js'
          strategy='afterInteractive'
          // @ts-expect-error: 'config' is a custom property required by Helpia widget
          config='eyJjb25maWdJZCI6InI0cGEtLWVhNHBxeHVhdSIsIndzVG9rZW4iOiJxTU53QVEwVlFYeXlpekJxeXZJcnpodWdwaHZSUUg0Qko0d1Q2YXJjQVpMdE0iLCJiYWNrU2VydmVyIjoiaHR0cHM6Ly9iYWNrZW5kLmNvbm5ldC5vcmlzaGlhY29yZS5jb20iLCJ3c1NlcnZlciI6IndzczovL3dzLmJhY2tlbmQuY29ubmV0Lm9yaXNoaWFjb3JlLmNvbS9jaGFubmVscyIsImVuYWJsZVJlY2FwdGNoYSI6ZmFsc2V9'
        />
      </body>
    </html>
  );
}
