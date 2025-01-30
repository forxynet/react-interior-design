import Logo from '../../assets/Logo.png'

const NavLinks = [
  {
    id: 1,
    title: "About",
    link: '#'
  },
  {
    id: 2,
    title: "Services",
    link: '#'
  },
  {
    id: 3,
    title: "Project",
    link: '#'
  },
  {
    id: 4,
    title: "Contact",
    link: '#'
  },
]
export default function Navbar() {
  return (
    <>
      <div className="container py-4 flex justify-between">
        {/* Logo section */}
        <div className='flex items-center gap-3'>
          <a href="/"><img src={Logo} alt="" className='w-10' /></a>
          <span className='text-2xl fond-bold'>Interior</span>
        </div>
        {/* Link section */}
        <div className='hidden md:block'>
          {
            NavLinks.map(data => {
              return (
                <a
                  href={data.link}
                  key={data.id}
                  className='mx-4 text-sm font-semibold'
                >
                  {data.title}
                </a>
              )
            })
          }
        </div>
        {/* Button section */}
        <div>
          <button className='primary-btn'>Try For Free</button>
        </div>
      </div>
    </>
  )
}

