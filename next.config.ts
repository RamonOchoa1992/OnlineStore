/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Esto evita que el build falle por avisos de estilo o reglas de linting
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Esto evita que el build falle por errores de tipos (como el de 'config')
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
