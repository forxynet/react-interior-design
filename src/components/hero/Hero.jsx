
import HeroPng from '../../assets/hero.png'

export default function Hero() {
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-[600px] gap-10">
          {/* Text section */}
          <div className="flex flex-col justify-center gap-7 md:pr-8 xl:pr-52 text-center md:text-left pt-20 md:pt-0 px-10">
            <h1 className='text-3xl font-bold'>
              SKETCH LUXURY INTERIOR DESIGN
            </h1>
            <p className='text-sm md:text-base text-gray-500 leading-7'>
              Bring your dream to life with one-on-one design help & hand picked products tailored to your style, space and budget.
            </p>
            <div className='space-x-4'>
              <button className='primary-btn uppercase bg-black text-white shadow-[5px_5px_0px_0px_#6c6c6c]'>Get started</button>
              <button className='primary-btn uppercase'>Contact us</button>
            </div>
          </div>
          {/* Images section */}
          <div className='flex flex-col items-center justify-center '>
            <img src={HeroPng} alt="" className='w-[80%] md:w-[700px] object-cover ' />
          </div>
        </div>
      </div>
    </>
  )
}
