/** @type {import('tailwindcss').Config} */
export default {
  // VitePress injecte des styles de base non-layerisés (reset des h1-h6, liens…)
  // qui, sans cela, l'emportent sur les utilitaires Tailwind (rangés dans @layer).
  // `important: true` garantit que nos utilitaires gagnent dans les composants.
  important: true,
};
