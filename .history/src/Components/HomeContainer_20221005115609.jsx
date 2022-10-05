import Delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'

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
      <div className="py2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className="ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="heroBg"
        />
        <div className='w-full h-full absolute top flex item-center justify-center'>
          <div className='w-192 p-2 bg-red-500 bg-cardOverlay backdrop-blur-md'></div>
        </div>
      </div>
    </section>
  )
}

export default HomeContainer
