import React from 'react';
import Button from '../components/Button';
import ButtonEvent from '../components/ButtonEvent';
import ComponenteA from '../components/ComponenteA';
import ComponenteB from '../components/ComponenteB';
import listJogadores from '../components/List';
import '../index.css';

// Componentes - Button -> recebe uma função para executar no onClick e um nome para o btn
const App = () => {

    // Arrow function
    const sum = (a, b) => a + b

    // JSX
    function primeiroJSX() {
    return (
        <b className="nome">Pedro Muniz</b>
    )
    }
    // Mostra a str passada, se não passar nada, mostra texto padrão
    function alertaStr(str) {
    return (
        alert(str === undefined ? 'Str Default' : str)
    )
    }
    //
    function ligarSkill (level) {
    // hasLevel = true ? level : false
    if ( level === true){
        hasLevel = false
    }else{
        hasLevel = true
    }
    return (
        console.log(hasLevel)
    )
    }

    const buttonA = <button>Infos</button>
    const buttonB = <button>Skills</button>
    var hasLevel = true

   // para renderizar infos
   const renderShowInfos = (
      <div>
         Clique no btn para mostrar as infos do personagem
         <br />
         {buttonA}
      </div>
   )
   // para renderizar Skills
   const renderShowSkills = (
      <div>
         Clique no btn para visualizar as skills do personagem
         <br />
         {buttonB}
      </div>
   )
   // ArrowFunction para renderizar o level se hasLevel for true
   const showLevel = () => {
      if (!hasLevel) return null
      return (
         <div>
            <h3>Bem vindo ao level 2</h3>
         </div>
      )
   }
   // ArrowFunction para renderizar lista
   const renderGrupo = (jogador, index) => {
      return (
         <div key={`jogador-${jogador.id}`}>
            <li>
               [Lv.{jogador.level}] {jogador.name}
               <ButtonEvent onClick={() => handleClick(jogador.id)}>x Kikar do grupo</ButtonEvent>
            </li>
            {jogador.skills.map(renderSkills)}
         </div>         
      )
   }
   const renderSkills = (skill, index) => {
      return (
         <div style={{ paddingLeft: '30px' }} key={`skill-${index}`}>
            <li>{skill}</li>
         </div> 
      )      
   }

   // Eventos
   const handleClick = (id) => {
      console.log(`Expulsando do grupo: ${id}`)
   }
   const handleChange = (e) => {
      const { value } = e.target
      console.log(value)
   }

   return (
      <div className="App">
         Hello World, {primeiroJSX()}!
         <h3>Your Power: {sum(20, 15)}</h3>

         <hr /> {/* Divisão de aulas */}

         <Button onClick={() => alertaStr()} name="Primeiro Componente" />
         <ComponenteA>
            <ComponenteB>
               <Button onClick={() => alertaStr('Str Sent')} name="Button inside component" />
            </ComponenteB>
         </ComponenteA>
         
         <hr /> {/* Divisão de aulas */}

         {hasLevel && (
            <b> - hasLevel: True</b>
         )}
         <Button onClick={() => ligarSkill(hasLevel)} name="Ligar Skill" />

         <hr /> {/* Divisão de aulas */}

         {hasLevel ? renderShowInfos : renderShowSkills}
         <div>
            {showLevel()}
         </div>

         <hr /> {/* Divisão de aulas */}

         <div>
            Grupo:
            <ul>
               {listJogadores.map(renderGrupo)}
            </ul>
         </div>

         <hr /> {/* Divisão de aulas */}

         Chat: <input onChange={handleChange}/>
         <br />

      </div>
   )
}

export default App