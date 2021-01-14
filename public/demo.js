function handleClick(e) {
}

function __initBtn(label, btnClass) {
  const button = document.createElement('button')
  button.classList.add(btnClass)
  button.innerHTML = label
  button.addEventListener('click', handleClick)
  return button
}

function Widget (configuration) {
  const body = document.querySelector('body')
  const divFrame = __initDiv()
  const placeholderEl = document.querySelector(configuration.placeholder)
  const button = __initBtn(configuration.placeholder_text, configuration.cart_button)
  placeholderEl.appendChild(button)
  body.appendChild(divFrame)
}