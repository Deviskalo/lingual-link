module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    'react/react-in-jsx-scope': 'off', // React 17+ does not require React to be in scope
    'no-console': 'warn', // Warns on console.log statements
    'prefer-const': 'error', // Enforce using const for variables that are never reassigned
  }
}; 