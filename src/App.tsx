import Animal from './Animal'
import Exibicao from './Exibicao'

function App() {

  return (
    <div className='app'>

      <Exibicao abertura={new Date("2024-11-06T08:00.000-3:00")}
      fechamento={new Date("2024-11-06T16:00.000-3:00")}
      cercado="A1">
        <Animal icone="🦁" nome="Leão" peso={300} extincao/>
        <Animal icone="🦒" nome="Girafa" peso={1000} extincao/>
      </Exibicao>
      <Exibicao abertura={new Date("2024-11-06T13:00.000-3:00")}
      fechamento={new Date("2024-11-06T17:00.000-3:00")}
      cercado="B1">
      <Animal icone="🦜" nome="Papagaio" peso={0.12} extincao/>
      </Exibicao>
    </div>
    
  )
}

export default App
