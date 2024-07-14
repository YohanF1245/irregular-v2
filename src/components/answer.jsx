import React from 'react';
import styled, { css } from 'styled-components';

const StyledAnswer = styled.div`
  width: calc(50% - 10px);
  border-radius: 30% 30% 30% 30% / 50% 50% 50% 50%;
  box-sizing: border-box;
  margin: 0;
  padding: 10px 50px;
  border: 5px ridge #7e50ff;
  background: #4900ff;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: white;
  cursor: pointer;

  ${({ isAnswered, userChoice, correctAnswer, reponse }) => {
    if (isAnswered) {
      if (userChoice === reponse && userChoice === correctAnswer) {
        return css`
          background: linear-gradient(to bottom right, #00e676, #1de9b6);
          color: black;
        `;
      } else if (userChoice === reponse) {
        return css`
          background: #ff1744;
        `;
      } else if (correctAnswer === reponse) {
        return css`
          background: linear-gradient(to bottom right, #00e676, #1de9b6);
          color: black;
        `;
      }
    }

    return css`
      &:hover {
        background: #3700b3;
      }
    `;
  }}
`;

function Answer({ reponse, isAnswered, onClick, userChoice, correctAnswer }) {
  return (
    <StyledAnswer
      isAnswered={isAnswered}
      userChoice={userChoice}
      correctAnswer={correctAnswer}
      reponse={reponse}
      onClick={onClick}
    >
      <p>{reponse}</p>
    </StyledAnswer>
  );
}

export default Answer;
                                    