
import { useState } from "react"

export const Create = ({ addProduct }) => {

    var [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addProduct(name)
    }





  return <> 
         <h3 >Add Products</h3>
            <form action="" className="mb-3">
              
              <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
            </form>
            <button className="btn btn-primary w-100" onClick={handleSubmit}>
              Add to Cart
            </button>
            <br />
    </>
}

export default Create