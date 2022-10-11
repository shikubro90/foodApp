import Delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'
import I1 from '../img/i1.png'
import { heropData } from '../utils/Data'

const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full" id="home">
      <div className="py-2 flex-1 flex flex-col items-start md:items-start justify-center gap-6">
        <div className="flex items-center justify-center bg-orange-100 px-2 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-6 h-6 bg-white drop-shadow-xl rounded-full overflow-hidden">
            <img src={Delivery} alt="bike-delivery" />
          </div>
        </div>
        <p className="text-[2.5rem] font-bold tracking-wide text-headingColor md:text-[4.25rem]">
          Fastest Delivery in{' '}
          <span className="text-orange-400 text-[3rem] md:text-[5rem]">
            Your City
          </span>
        </p>
        <p className="text-textColor text-base text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est commodi
          sint in earum non, ut laborum quas labore magni quasi vel quam ratione
          facere quis, ab recusandae deleniti modi? Nobis.
        </p>
        <button className="md:w-auto bg-gradient-to-br from-orange-400 to-orange-500 w-full px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out">
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className="ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="heroBg"
        />
        <div className="w-full h-full absolute top-0 left-0 px-32 py-4 flex items-center justify-center">

          {heropData }

          <div className="w-192 p-2 bg-red-500 bg-cardOverlay backdrop-blur-md flex flex-col items-center justify-center rounded-md">
            <img className="w-40 -mt-20" src={I1} alt="I1" />
            <p className='text-base font-semibold text-textColor mt-4'>Iceream</p>
            <p className='text-sm text-lightTextGray font-semibold'>
              Chocolate & Vanilla
            </p>
            <p className='text-sm font-semibold text-headingColor'><span className='text-xs text-red-500'>$</span> 5.25</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeContainer
