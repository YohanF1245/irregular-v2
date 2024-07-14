import styled from "styled-components";

const StyledModalNextQuestion = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

function ModalNextQuestion({won, displayModal}) {

    return (
        <StyledModalNextQuestion>
            <h1> {won ? "Gagne !" : "Perdu !"} </h1>
        </StyledModalNextQuestion> 
    );   
}

export default ModalNextQuestion