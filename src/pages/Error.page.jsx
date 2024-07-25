import { Link } from "react-router-dom"

function Error() {
  return (
    <div className="relative">
      <img className="w-[100%] h-[100vh]" src="https://static.vecteezy.com/system/resources/previews/000/250/876/original/vector-error-404-unavailable-web-page-file-not-found-concept.jpg" alt="" />
    <Link className='hover:cursor-poniter  text-[2rem] absolute top-0 text-[white] bg-[#00000177] rounded-[1rem] px-[2rem] py-[.5rem] mx-[4rem] my-[2rem]' to={'/'}>Go To Home</Link>
    </div>
  )
}

export default Error
