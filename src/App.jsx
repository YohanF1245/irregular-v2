import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Question from './components/question'
import BeanFace from './components/BeanFace'
import Answer from './components/answer'
import data from './data/data.json'
import styled from 'styled-components'
import ModalNextQuestion from './components/ModalNextQuestion'
const StyledButton = styled.button`


  appearance: button;
  background-color: #1899D6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: din-round,sans-serif;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: .8px;
  line-height: 20px;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 13px 16px;
  text-align: center;
  text-transform: uppercase;
  touch-action: manipulation;
  transform: translateZ(0);
  transition: filter .2s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  width: 50%;
}

 &&:after {
  background-clip: padding-box;
  background-color: #1CB0F6;
  border: solid transparent;
  border-radius: 16px;
  border-width: 0 0 4px;
  bottom: -4px;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}

.button-19:main,
.button-19:focus {
  user-select: auto;
}

.button-19:hover:not(:disabled) {
  filter: brightness(1.1);
  -webkit-filter: brightness(1.1);
}

.button-19:disabled {
  cursor: auto;
}

.button-19:active {
  border-width: 4px 0 0;
  background: none;
}`

const StyledModalNextQuestion = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;

function App() {
  const [questionId, setQuestionId] = useState(2)
  const [isAnswered, setIsAnswered] = useState(false)
  const [userChoice, setUserChoice] = useState(null)
  const [corectAnswer, setCorectAnswer] = useState(null)
  const [displayModal, setDisplayModal] = useState(false)
  const [won, setWon] = useState(false)
  const question = data[questionId]

  const handleNextQuestion = () => {
    const newQuestionId = Math.floor(Math.random() * data.length);
    setQuestionId(newQuestionId);
    setIsAnswered(false);
    setUserChoice(null);
    setDisplayModal(false);
    setCorrectAnswer(null);
  };
  const handleAnswer = (reponse) => {
    setIsAnswered(true);
    setUserChoice(reponse);
    setDisplayModal(true);
    if(reponse === data[questionId].bonne_reponse){
      setWon(true)
    }else{
      setWon(false)
    }
    setCorrectAnswer(data[questionId].bonne_reponse);
  };

  // console.log(questionId)
  // console.log(data[questionId].bonne_reponse);
  return (
    <>
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Question question="Verbes irréguliers" />
      <BeanFace />
      <StyledModalNextQuestion style={{display: displayModal ? 'flex' : 'none'}}>
          <h1 style={{color: won ? 'green' : 'red'}}>{won? "Gagne !" : "Perdu !" }</h1>
        <StyledButton onClick={handleNextQuestion}>Suivant</StyledButton>
      </StyledModalNextQuestion>
    <div style={{ display: 'flex', flexDirection: 'row' , gap:'10px', flexWrap: 'wrap', boxSizing: 'content-box',justifyContent: 'space-evenly',backgroundColor:'lightblue'}}>
      <Question question = {data[questionId].question}></Question>
      {data[questionId].reponses.map((reponse, index) => (
          <Answer
            key={index}
            reponse={reponse}
            isAnswered={isAnswered}
            userChoice={userChoice}
            correctAnswer={data[questionId].bonne_reponse}
            onClick={() => handleAnswer(reponse)}
          />
        ))}
    </div>
    </div>
    </>
  )
}

export default App
