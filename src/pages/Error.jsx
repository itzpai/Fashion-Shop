import { Link } from 'react-router'

export default function Error() {
  return (
    <>
      <div className="flex grow flex-col justify-center items-center">
        <h2 className="text-5xl font-bold lg:text-6xl">404</h2>
        <p className="my-4 lg:text-xl">Oops! The page you are looking for doesn't exist.</p>
        <Link to="/" className="bg-blue-400 text-white p-3 rounded-md hover:bg-blue-500 lg:text-xl">Go Back</Link>
      </div>
    </>
  )
}