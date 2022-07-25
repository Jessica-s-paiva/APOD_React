import React from 'react'

const Imagem = (source) => {
  return (
    <picture className={S.contentFoto}>
        <img className={S.foto} src={!!pokemon ? pokemon.foto : ''} />
    </picture>
  )
}

export default Imagem