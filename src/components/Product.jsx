import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { BsPlus, BsEyeFill } from 'react-icons/bs'

const Product = ({ product }) => {
  const { id, title, category, thumbnail, price, description } = product
  const clpPrice = new Intl.NumberFormat('es-CL', {style: 'currency', currency: 'CLP'}).format(price * 904)
  const notify = () => toast('Agregado al Carrito!!')
  return (
    <div className='bg-black'>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='mx-auto flex justify-center items-center min-h-full'>
            <img
              className='w-full group-hover:scale-110 transition duration-300'
              src={thumbnail}
              alt={title}
            />
          </div>
        </div>
        <div className='absolute top-6 -right-11 group-hover:right-0 bg-purple-600/40 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button onClick={notify}>
            <div className='flex justify-center items-center w-12 h-12 bg-purple-600'>
              <BsPlus className='text-3xl text-white font-bold' />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      <div className='px-4 pb-4'>
        <div className='text-white'>
          <Link to={`/product/${id}`}>
            <h2 className=' font-semibold'>{title}</h2>
          </Link>
          <p className='truncate text-xs'>{description}</p>
          <div>{clpPrice}</div>
        </div>
      </div>
    </div>
  )
}

export default Product
