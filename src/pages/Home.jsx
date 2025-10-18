import { Link } from 'react-router'

function Home() {
  return (
    <>
      <section className='flex bg-gray-100 items-center justify-center grow'>
        <div className='text-center px-8'>
          <h1 className='text-3xl font-bold'>Welcome to Our Fashion Shop</h1>
          <p className='my-6'>Discover the latest trends in fashion and get inspired by our new styles.</p>
          <Link to="/shop" className='bg-blue-300 text-white py-2 px-3 rounded-md hover:bg-blue-400'>Get Started</Link>
        </div>
      </section>
    </>
  )
}

export default Home