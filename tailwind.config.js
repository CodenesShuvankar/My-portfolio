// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'space-black': '#0B0B0F',
        'space-blue': '#1E2A3A',
        'star-white': '#FFFFFF',
        'moon-gray': '#C4C4C4',
        'deep-space-blue': '#0D0D1F',
        'moon-shadow-gray': '#1F1F2E',
        'dusty-purple-accent': '#3D3D5C',
        'cyan-glow': '#00FFF7',
        'magenta-pulse': '#FF00FF',
        'lime-neon': '#A9F75E',
        'bright-white': '#FFFFFF',
        'muted-gray': '#CCCCCC',
        'warm-gold': '#FFD580',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.6 },
        },
      blur: {
        xxs: '6px', // even smaller
        },
      },
    },
  },
  plugins: [],
}
