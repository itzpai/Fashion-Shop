
function ProductCard({ name, price, image }) {
    return (
        <>
            <div className='bg-white shadow-lg p-4'>
                <div className='w-full h-48'>
                    <img src={image} alt={name} className='w-full h-full object-contain' />
                </div>
                <div className='flex items-center justify-between'>
                    <div>
                        <h2>{name}</h2>
                        <p>${price}</p>
                    </div>
                    <button className="bg-blue-400 text-white p-3 rounded-lg cursor-pointer">Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default ProductCard