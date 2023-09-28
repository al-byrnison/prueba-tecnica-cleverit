import { Link } from 'react-router-dom'
import Logo from '../img/logo.svg'

const Header = () => {
  return (
    <header className=' bg-purple-500'>
      <div className='flex px-4 py-4'>
        <Link to={'/'}>
          <div>
            <img
              className='w-[40px] '
              src={Logo}
              alt='logo'
            />
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header
