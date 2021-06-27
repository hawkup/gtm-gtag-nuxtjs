export default (_, inject) => {
  window.gDataLayer = window.gDataLayer || []
  function gtag(){
    window.gDataLayer.push(arguments)
  }
  inject('gtag', gtag)

  gtag('js', new Date())

  gtag('config', 'G-QMXM47TNS4')
}