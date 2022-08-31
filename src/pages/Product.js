import { useParams } from "react-router-dom";

const Product = () => {
// 4 - rota dinamina

const { id } = useParams()

  return (
    <>
    <p>ID do produto: {id}</p>
    </>
  )
}

export default Product;