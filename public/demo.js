function Widget (configuration) {
  const __PLUGIN_URL = 'http://127.0.0.1:3355/index.html'
  const __PLACEHOLDER_ERROR = 'Placeholder element was not found. Please make sure it is mounted!'
  
  const __config = { ...configuration }
  let __modalContainer, __modal, __placeholderBtn

  const __handleClick = () => {
    __modalContainer.style.display = 'flex'
    const postMessage = {
      type: 'config',
      config: __config
    }
    __modal.contentWindow.postMessage(JSON.stringify(postMessage), '*')
  }

  const __initModal = () => {
    __modal = document.createElement('iFrame')
    __modal.setAttribute('src', __PLUGIN_URL)
    __modal.setAttribute('style', 'background: white; width: 80vw; margin: auto; height: 80vh; border: none')

    __modalContainer = document.createElement('div')
    __modalContainer.id =`${__config.placeholder}-widgetModal`
    __modalContainer.setAttribute('style', 'display: none; position: absolute; z-index: 1; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);')

    __modalContainer.append(__modal)
  }

  const __initBtn = () => {
    __placeholderBtn = document.createElement('button')
    __placeholderBtn.classList.add(__config.placeholder_class)
    __placeholderBtn.style.marginTop = '1.5rem'
    __placeholderBtn.innerHTML = __config.placeholder_text
    __placeholderBtn.addEventListener('click', __handleClick)
  }

  const __eventsRegisterer = () => {
    window.onmessage = event => {
      const message = JSON.parse(event.data)
      if (message.type !== 'selectedAttribute') return

      __config.select_attribute(message.selectedAttribute)
      __modalContainer.style.display = 'none'

      const resetMessage = {
        type: 'reset'
      }
      __modal.contentWindow.postMessage(JSON.stringify(resetMessage), '*')
    }
  }

  const start = () => {
    const placeholderEl = document.querySelector(__config.placeholder)
    if (!placeholderEl) throw new Error(__PLACEHOLDER_ERROR)

    placeholderEl.appendChild(__placeholderBtn)
    document.querySelector('body').appendChild(__modalContainer)
    __eventsRegisterer()
  }

  const destroy = () => {
    window.onmessage = null
    document.querySelector('body').removeChild(__modalContainer)
    document.querySelector(__config.placeholder).removeChild(__placeholderBtn)
    __modalContainer = null
    __modal = null
    __placeholderBtn = null
  }

  __initModal()
  __initBtn()

  return {
    start,
    destroy,
  }
}

