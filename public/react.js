const {
  useState,
  useEffect
} = React

const {
  Container,
  Button
} = MaterialUI

const CustomButton = ({ label, onClick, fullWidth }) => (
  <Button variant='contained' color='secondary' onClick={onClick} fullWidth={fullWidth}>
    {label}
  </Button>
)

const ProductSurprise = ({ handleSuprise, product }) => {
  const [showLoader, setLoader] = useState(false)
  const onClick = () => {
    setLoader(true)
    setTimeout(handleSuprise, 2000)
  }
  
  return (
    <div className='align-center'>
      {!showLoader && (
        <div>
          <img className='fullwidth' src={product}/>
          <CustomButton fullWidth label='Surpise Me' onClick={onClick}/>
        </div>
      )}
      {showLoader && <img className='center-div' src='./random.gif'/>}
    </div>
  )
}

const DisplayRandomAttribute = ({ reset, attributeName, selectedAttribute }) => {
  const handleAttributeSelect = () => {
    const message = {
      type: 'selectedAttribute',
      selectedAttribute,
    }
    window.top.postMessage(JSON.stringify(message), '*')
  }

  return (
    <div className='align-center center-div'>
      <h3 className='selected-confirmation'> Your Selected {attributeName} is {selectedAttribute} </h3>
      <CustomButton label='Select Me' onClick={handleAttributeSelect}/>
    </div>
  )
}

const App = () => {
  const [config, setConfig] = useState({})
  const [attributesRandomising, setRandomising] = useState(false)

  window.onmessage = (event) => {
    
    const data = JSON.parse(event.data)
    if (data.type == 'config') setConfig(data.config)
    else setRandomising(false)
  }

  const randomIndex = () => Math.floor(Math.random() * config.attributes.length )

  const handleSuprise = () => setRandomising(true)
  return (
    <Container className='app-container' maxWidth='sm'>
      <div>
        {!attributesRandomising && <ProductSurprise product={config.image} handleSuprise={handleSuprise}/>}
        {attributesRandomising && <DisplayRandomAttribute attributeName={config.attributeName} selectedAttribute={config.attributes[randomIndex()]} />}
      </div>
    </Container>
  )
}

ReactDOM.render(
    <App />,
  document.querySelector('#root'),
)