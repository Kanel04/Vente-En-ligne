module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'image': `url(./src/pages/Dashboard/components/Products/components/assets/image.jpg)`,
      },
      
    },
    colors:{
primary:'#f8fafc',
secondary:'#e9cb36',
three :"#18181b",
fourth:'#cbd5e1',
five: '#eab308',
six:"#fde047",
    },
  },
  plugins: [],
  
  
};
