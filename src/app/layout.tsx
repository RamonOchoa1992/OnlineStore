import React from 'react';
import type { Metadata } from 'next';
import Script, { ScriptProps } from 'next/script';
import './globals.css';

// Extendemos la interfaz de ScriptProps para incluir la propiedad personalizada 'config'
interface CustomScriptProps extends ScriptProps {
  config?: string;
}

export const metadata: Metadata = {
  title: 'Tiendas Ramon | Home',
  description: 'Tiendas Ramon ❤️ is a store dedicated to sell clothes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Definimos las propiedades del script con el tipo extendido
  const helpiaScriptProps: CustomScriptProps = {
    id: '_helpia_ws_chat',
    src: 'https://statics.orishiacore.com/connet/webchat/production/widget.js',
    strategy: 'afterInteractive',
    config:
      'eyJjb25maWdJZCI6InI0cGEtLWVhNHBxeHVhdSIsIndzVG9rZW4iOiJxTU53QVEwVlFYeXlpekJxeXZJcnpodWdwaHZSUUg0Qko0d1Q2YXJjQVpMdE0iLCJiYWNrU2VydmVyIjoiaHR0cHM6Ly9iYWNrZW5kLmNvbm5ldC5vcmlzaGlhY29yZS5jb20iLCJ3c1NlcnZlciI6IndzczovL3dzLmJhY2tlbmQuY29ubmV0Lm9yaXNoaWFjb3JlLmNvbS9jaGFubmVscyIsImVuYWJsZVJlY2FwdGNoYSI6dHJ1ZX0=',
  };

  return (
    <html lang='en'>
      <body>
        {children}

        {/* Inyectamos las propiedades usando el spread operator. 
          Al estar tipado como CustomScriptProps, TypeScript permitirá 
          la propiedad 'config' sin recurrir a 'any'.
        */}
        <Script {...helpiaScriptProps} />
      </body>
    </html>
  );
}
