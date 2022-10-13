import './App.css';
import Board  from "./components/Board.js"
import { createContext, useState } from 'react';
import { dictionary } from './components/variables';
import _ from 'lodash'

export const WordleContext = createContext()

function App() {

  const [word, setWord ] = useState(_.sample(dictionary).toUpperCase())
  const [completedRows , setCompletedRows] = useState([])
  const [guessWord , setGuessWord] = useState("")
  const [currentRow, setCurrentRow] = useState(0)

  function guessTheWord(char){
    if(guessWord.length ===5 ) return // LOUSY
    setGuessWord(guessWord.concat(char))
  }

  function pressEnter(){
    if(currentRow > 5) return alert('You have unfortunately exhausted all your trials. Press refresh to try again. ')
    if(guessWord.length<5) return
    if(!dictionary.includes(guessWord.toLocaleLowerCase())) return alert('Word not found')
    if(guessWord === word) alert('Congratulations you got it')
    
    console.log('Pressed Enter' + currentRow)
    setCurrentRow(currentRow+1)
    setCompletedRows([...completedRows ,currentRow])
    setGuessWord('')
    

  }

  function backspace(){
    setGuessWord(guessWord.slice(0 , guessWord.length-1))

  }

  return (
    < WordleContext.Provider value={{
      guessTheWord ,
       pressEnter ,
        completedRows ,
         currentRow, 
         word ,
         guessWord ,
          backspace 

    }} >
        <Board/>
    </ WordleContext.Provider>
  );
}

export default App;
