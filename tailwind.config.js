module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false,
    // darkMode: 'media',
    // darkMode: 'class',
    
    theme: {
  
        extend: {},
        
        variants: {
        extend: {},
        },
        
        plugins: [
        require('@tailwindcss/forms'),
        ],
    }
  
}
  
  