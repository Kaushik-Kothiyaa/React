

export const Display = ({ product, removeProduct }) => {
    return <>
        <table className="table table-bordered text-center">
            <thead className="table">
                <tr>
                    <th>Product</th>
                    <th>Add</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {product.map((item, index) => (
                    <tr key={index}>
                        <td>{item}</td>

                        <td>
                            <button className="btn btn-success">Add</button>
                        </td>

                        <td>
                            <button className="btn btn-danger" onClick={() => removeProduct(index)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}

export default Display