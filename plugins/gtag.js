export default (_, inject) => {
  window.dataLayer = window.gDataLayer || []
  function gtag(){
    window.dataLayer.push(arguments)
  }
  inject('gtag', gtag)

  gtag('js', new Date())

  gtag('config', 'G-QMXM47TNS4')
}