import Protypes from 'prop-types'

export const GifItem = ({ title, url, id }) => {

  return (
    <div className='card'>
        <img src={ url } alt={ title }/>
        <p>{ title }</p>
    </div>
  )
}

GifItem.prototype = {
  title: Protypes.string.isRequired,
  url  : Protypes.string.isRequired,
}

/* Tarea 

1. Añadir Protypes
    a.  title obligatorio
    b. url obligatorio

2. Evaluar el snapshot

*/