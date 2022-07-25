import React, { useState, useEffect } from 'react'
import S from './App.module.css'
function App() {
  let [data, setData] = useState('')
  const [valorInput, setValorInput] = useState('')
  useEffect(() => {
    handleRequisicao();
  }, [])

  function handleSetInput(target) {
    setValorInput(target.value)
  }

  function hadleGetDataAtual(){
    const dataTeste = new Date();
    const dia = String(dataTeste.getDate()).padStart(2,'0');
    const mes = String(dataTeste.getMonth() + 1).padStart(2,'0');
    const ano = dataTeste.getFullYear();
    data = `${ano}-${mes}-${dia}`;
  }
  
  async function handleRequisicao() {
    const url = `https://api.nasa.gov/planetary/apod?date=${data}&api_key=w1d9wvAkhHPGhaGl6WqpJYk444B9CYxJWiaBEPlZ`
    const response = await fetch(url)
    const json = await response.json()
    console.log(json);
    console.log(json.url);
    const resposta = {
      date: json.date,
      explanation: json.explanation,
      img: json.url,
      title: json.title
    }
    setData(resposta);
  }
 //  async function handleRequisicaoInput() {
    // const url = `https://api.nasa.gov/planetary/apod?date=${valorInput}&api_key=w1d9wvAkhHPGhaGl6WqpJYk444B9CYxJWiaBEPlZ`
    // const response = await fetch(url)
    // const json = await response.json()
    // console.log(json);
    // console.log(json.url);
    // const resposta = {
    //   date: json.date,
    //   explanation: json.explanation,
    //   img: json.url,
    //   title: json.title
    // }
    // setData(resposta);
  //   console.log(valorInput);
  // }
  return (
    <div className={S.container}>
      <section>
        <label htmlFor="data">Selecione a data que gostaria de explorar: </label>
        <input type="date" min="1995-06-16" max="" value={valorInput}
            onChange={({ target }) => handleSetInput(target)}/>
        <input onClick={handleRequisicao} onCompletetype="submit" id="enviar" value="Enviar" />
      </section>
      
      <h2>{data.title}</h2>
      <img className={S.imagem} src={data.img} />
      <p>{data.explanation}</p>
      
    </div>
    
  )
}

export default App
