import "./App.css";
import Animal from "./Animal";
import Exibicao from "./Exibicao";
import { ReactNode } from "react";


type AnimaisTuplaType = [string, string, number, boolean];
const ANIMAIS: AnimaisTuplaType[] =[
  ["🦁", "Leão", 190.0, true],
  ["🦒", "Girafa", 1200, true],
  ["🦜", "Papagaio", 0.12, false],
  ["🦩", "Flamingo", 20.0, true],
]

function App() {
  const exA1: ReactNode[] = [];
  const exB2: ReactNode[] = [];
  for(let i = 0; i < ANIMAIS.length; i++){
    const ex = ANIMAIS[i][2] < 200.0 ? exA1 : exB2;

    ex.push(
      <Animal
      key={ANIMAIS[i][1]}
      icone={ANIMAIS[i][0]}
      nome={ANIMAIS[i][1]}
      peso={ANIMAIS[i][2]}
      extincao={ANIMAIS[i][3]}
      />
    );
  }

  return (
    <div className="app">
      <Exibicao
        abertura={new Date("2024-11-06T08:00.000-3:00")}
        fechamento={new Date("2024-11-06T16:00.000-3:00")}
        cercado="A1"
      >
        <Animal icone="🦁" nome="Leão" peso={300} extincao={false} />
        <Animal icone="🦒" nome="Girafa" peso={1000} extincao={false} />
      </Exibicao>
      <Exibicao
        abertura={new Date("2024-11-06T13:00.000-3:00")}
        fechamento={new Date("2024-11-06T17:00.000-3:00")}
        cercado="B1"
      >
        <Animal icone="🦜" nome="Papagaio" peso={0.12} extincao={true} />
      </Exibicao>
    </div>
  );
}

export default App;
