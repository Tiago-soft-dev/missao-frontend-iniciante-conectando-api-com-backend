import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'


import Header from './components/Header/Header'

function App() {

  const [devmons, setDevmons] = useState([])
 
  // const java = {
  //   nome: 'Java',
  //   imagem: 'https://salvatore.academy/devmon/1_java.png',
  //   evoluiPara: 'Kotlin'
  // }
  // const kotlin = {
  //   nome: 'Kotlin',
  //   imagem: 'https://salvatore.academy/devmon/2_kotlin.png',
  //   evoluiPara: 'Android'
  // }
  // const android = {
  //   nome: 'Android',
  //   imagem: 'https://salvatore.academy/devmon/3_android.png',
  //   evoluiPara: 'C'
  // }
  // const c = {
  //   nome: 'C',
  //   imagem: 'https://salvatore.academy/devmon/4_c.png',
  //   evoluiPara: null
  // }

  // const cPlusPlus = {
  //   nome: 'C++',
  //   imagem: 'https://salvatore.academy/devmon/5_cpp.png',
  //   evoluiPara: 'C#'
  // }
  // const devmons = [java,kotlin,android,c, cPlusPlus]

  async function fetchData() {
    
    const apiUrl = 'https://backend-integrar-com-o-frontend.onrender.com/personagem'

    const response = await fetch(apiUrl)

    const data = await response.json()
    
    setDevmons(data)
    
  }
useEffect(function(){
  fetchData()
},[])
  

  console.log(devmons);
  
  return (
    <>
      Lista de Cards com Map:
      <br />
      <br />
      <Header />
      <div className='cards'>
        {devmons.map((devmon)=>{
                  
         return (
          <Card key={devmon._id} nome={devmon.nome} imagem={devmon.imagem} evoluiPara={devmon.evoluiPara}/>
                    
         )
          
        })}
      </div>

      {/* <br />
      <br />
      Lista de Cards 2:
      <br />
      <br />
      <Header />
      <div className='cards'>
        <Card nome="Java" imagem="https://salvatore.academy/devmon/1_java.png" />
        <Card nome="Kotlin" imagem="https://salvatore.academy/devmon/2_kotlin.png" />
        <Card nome="Android" imagem="https://salvatore.academy/devmon/3_android.png" />
      </div> */}

    </>
  )
}

export default App
