/*
Here are the different page view ranges and the
corresponding monthly price totals:
- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month
If the visitor switches the toggle to yearly billing,
a 25% discount should be applied to all prices.
*/

window.addEventListener('load', (e) => {
  const pageviews = document.getElementById('pageviews')
  const monthlyPayment = document.getElementById('monthly-payment')
  const toggleBtn = document.querySelector('.toggleBtn')
  const range = document.getElementById('range')
  const head = document.head
  let styleSheet = document.createElement('style')

  let price
  let isYearly = false

  function render() {
    const { max, min, value } = this
    const interval = max - min
    const porcentaje = ((value - min) / interval) * 100

    if (range.value < 20) {
      pageviews.innerHTML = '10K Pageviews'
      price = 8
    } else if (range.value > 20 && range.value <= 40) {
      pageviews.innerHTML = '50k Pageviews'
      price = 12
    } else if (range.value > 40 && range.value <= 60) {
      pageviews.innerHTML = '100k Pageviews'
      price = 16
    } else if (range.value > 60 && range.value <= 80) {
      pageviews.innerHTML = '500k Pageviews'
      price = 24
    } else if (range.value > 80 && range.value <= 100) {
      pageviews.innerHTML = '1m Pageviews'
      price = 36
    }
    if (isYearly) {
      price = (price * 3) / 4
    }
    monthlyPayment.innerHTML = `\$ ${price}.00<span>/ month</span>`

    styleSheet.textContent = `
      .range::-webkit-slider-runnable-track{ 
        background-image:-webkit-linear-gradient(left,
            hsl(174, 77%, 80%) ${porcentaje}%,
            hsl(223, 50%, 87%) ${porcentaje}%
        );          
      }
    `
    head.appendChild(styleSheet)
  }
  range.addEventListener('change', render)

  toggleBtn.addEventListener('click', (event) => {
    isYearly = !isYearly
    render()
  })
  render()
})
