export const options = {
  responsive: true,
  scales: {
    r: {
      ticks: {
        display: false // Hides the labels in the middel (numbers)
      },
      grid:{
        display:false
      }
    },
  },
  plugins: {
    elements: {
      line: {
        borderWidth: 3,
      }
    },
    title: {
      display: false,
    },
    legend:{
      display:false,
    }
  },
};