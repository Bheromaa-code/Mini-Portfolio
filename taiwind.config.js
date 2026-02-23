/** @type {import ('tailwindcss').Config}*/
const config = {
    content: ['./src/**/*{html,js}'],
    theme: {
        extend: {
            fontFamily:{
                arial:['Arial', 'Helvetica', 'sans-serif']
            }
        },
    },
    plugins: []
};
export default config;