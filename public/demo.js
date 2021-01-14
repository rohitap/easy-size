function handleClick(e) {
  const iFrame = document.querySelector('iFrame')
  iFrame.style.display = 'inherit'
}

function __initBtn(label, btnClass) {
  const button = document.createElement('button')
  button.classList.add(btnClass)
  button.innerHTML = label
  button.addEventListener('click', handleClick)
  return button
}

function __initiFrame() {
  const iFrame = document.createElement('iFrame')
  iFrame.setAttribute("src", "file:///home/rails/work/testTask/Easy%20Task/reacts.html")
  const crossBtn = __initBtn('test')
  crossBtn.style.display = 'inherit'
  crossBtn.style.position = 'relative'
  crossBtn.style.top = '10%' 
  iFrame.appendChild(crossBtn)
  iFrame.style.display = 'none'
  return iFrame
}

function __initDiv() {
  const div = document.createElement('div')
  div.style.cssText = "position: absolute z-index: 1 left: 0 top: 0 width: 100% height: 100% overflow: auto background-color: rgb(0,0,0) background-color: rgba(0,0,0,0.4)"
  return div
}

function Widget (configuration) {
  const body = document.querySelector('body')
  const divFrame = __initDiv()
  const placeholderEl = document.querySelector(configuration.placeholder)
  const button = __initBtn(configuration.placeholder_text, configuration.cart_button)
  placeholderEl.appendChild(button)
  body.appendChild(divFrame)
  const iFrame = __initiFrame()
  divFrame.appendChild(iFrame)
}