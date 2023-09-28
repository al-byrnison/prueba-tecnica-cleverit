import React, { useState, useId } from 'react'

export function Filters ({onChange}) {
    const [minPrice, setMinPrice] = useState(0);
    const minPriceFilterId = useId();
    const categoryFilterId = useId();
    
    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        onChange(prevState => ({
            ...prevState, 
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        onChange(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }
  return (
    <section className='flex flex-wrap items-center justify-around px-4 py-8 gap-4'>
        <div className='flex gap-4 font-bold'>
            <label htmlFor={minPriceFilterId}>Precio</label>
            <input 
                type='range'
                id={minPriceFilterId}
                min={0}
                max={1700}
                onChange={handleChangeMinPrice}
            />
            <span>${minPrice}</span>
        </div>
        <div className='flex gap-4 font-bold'>
            <label htmlFor={categoryFilterId}>Categorias</label>
            <select id={categoryFilterId} onChange={handleChangeCategory} >
                <option value='all'>Todo</option>
                <option value='womens-dresses'>Mujer</option>
                <option value='sunglasses'>Anteojos</option>
                <option value='womens-shoes'>Calzado Mujer</option>
                <option value='groceries'>Comestibles</option>
                <option value='laptops'>Computación</option>
                <option value='skincare'>Cuidado de la piel</option>
                <option value='home-decoration'>Decoración</option>
                <option value='lighting'>Iluminación</option>
                <option value='furniture'>Muebles</option>
                <option value='mens-shirts'>Hombre</option>
                <option value='mens-shoes'>Calzado hombre</option>
                <option value='mens-watches'>Relojería hombre</option>
                <option value='womens-watches'>Relojería mujer</option>
                <option value='womens-bags'>Carteras</option>
                <option value='womens-jewellery'>Joyería</option>
                <option value='automotive'>Automóvil</option>
                <option value='motorcycle'>Motocicletas</option>
                <option value='fragrances'>Perfumeria</option>
                <option value='smartphones'>Telefonía</option>
                <option value='tops'>Tops</option>
            </select>
        </div>

    </section>
  )
}
