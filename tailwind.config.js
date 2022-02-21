module.exports = {
  content: [
    './index.html',
    './src/**/*.{html,js}',
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {        
        'soft-red': 'hsl(7, 99%, 70%)',  
        'yellow': 'hsl(51, 100%, 49%)',      
        'd-desaturated-c': 'hsl(167, 40%, 24%)',   
        'd-blue': 'hsl(198, 62%, 26%)', 
        'd-moderate-c': 'hsl(168, 34%, 41%)',   
        'vd-desaturated-b': 'hsl(212, 27%, 19%)',  
        'vd-grayish-b': 'hsl(213, 9%, 39%)',      
        'd-grayish-b': 'hsl(232, 10%, 55%)',   
        'grayish-b': 'hsl(232, 10%, 55%)',
      },
      fontFamily: {
        'barlow': ['Barlow'],
        'fraunces': ['Fraunces']
      },
      gridTemplateRows: {
        '2cs': 'repeat',
      },
    },
  },
  plugins: [],
}