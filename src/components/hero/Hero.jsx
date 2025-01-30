
import HeroPng from '../../assets/hero.png'

export default function Hero() {
  return (
    <>
      <div className="container">
        <div className="grid grd-cols-1 md:grid-cols-2 min-h-[500px]">
          {/* Text section */}
          <div className='flex flex-col justify-center gap-5'>
            <h1 className='text-3xl font-bold'>SKETCH LUXURY ONTERIOR DESIGN</h1>
            <p className='text-sm text-gray-500'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur incidunt quia necessitatibus est nulla dignissimos error dicta exercitationem earum. Qui nulla adipisci nihil optio inventore exercitationem fugit iste eaque provident!
            </p>
            <div>
              <button className='primary-btn'>Try For Free</button>
            </div>
          </div>
          {/* Images section */}
          <div className='flex flex-col justify-center'>
            <img src={HeroPng} alt="" className='h-[300px] w-[300px] object-cover' />
          </div>
        </div>
      </div>
    </>
  )
}
