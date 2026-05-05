import { Create } from "./Components/Create"
import { Display } from "./Components/Display"
import { Title } from "./Components/Title"
import { useState } from "react"

export const App = () => {

  var [product, setProduct] = useState([])

  const addProduct = (name) => {
    var newProduct = [...product, name]
    setProduct(newProduct)
  }


  const removeProduct = (index) => {
    var newProduct = product.filter((item, i) => i !== index)
    setProduct(newProduct)
  }



  return <>

    <div className="container mt-4">
        <Title />
        
      <div className="row d-flex justify-content-center mt-5"  >
        <div className="col-md-6">
          <div className="card p-4 shadow">
            <Create addProduct={addProduct} />
            <Display product={product} removeProduct={removeProduct} />
          </div>
        </div>
      </div>
    </div>



  </>
}

export default App