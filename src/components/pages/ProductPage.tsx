import { useParams } from 'react-router-dom';
import ProductDetails from '../molecules/ProductDetails';
import Navbar from '../organisms/Navbar';
import { getSingleProduct } from '../../hooks/getHooks';

const ProductPage = () => {
    const {id} = useParams();
    if(id){
        const product = getSingleProduct({id: id});
        console.log(product);
        return (
            <>
                <Navbar/>
                {
                    product && <ProductDetails product={product}/>
                }
            </>
        )
    }
    else{
        return <div>No product found</div>
    }

}

export default ProductPage