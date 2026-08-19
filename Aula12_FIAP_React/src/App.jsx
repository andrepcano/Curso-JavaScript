import './App.css'

const Subtitulo = (props) => { // nome de componente começa com letra maiuscula (obrigatorio)
  // Props são informações passadas do componente pai para o componente filho
  return <div>
    <h2>{props.texto}</h2>
    <a href="">{props.link}</a>
  </div>
} 

const App = () => {
  return <div>
    <h1>Hello React</h1>
    <Subtitulo texto="Subtitulo 1" 
      link="google.com"/> 
    <Subtitulo texto="Subtitulo 2" 
      link="twitter.com"/> 
    <Subtitulo texto="Subtitulo 3" 
      link="ge.com.br"/> 
    </div>
}

export default App
