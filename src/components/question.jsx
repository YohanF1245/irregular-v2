import styled from 'styled-components';

const StyledQuestion = styled.div`
    width: calc(100%);
    box-sizing: border-box;
    margin: 0;
    padding: 10px 50px;
    border: 5px ridge #7e50ff;
    background: #4900ff;
    dispay: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
background: radial-gradient(ellipse farthest-side at center center, #4900ff 0%, #c300ff 80%);
background: -webkit-radial-gradient(ellipse farthest-side at center center, #4900ff 0%, #c300ff 80%);
background: -moz-radial-gradient(ellipse farthest-side at center center, #4900ff 0%, #c300ff 80%);
color:white;
    &&:hover {
        cursor: pointer;
    }
`;

function Question(props){
    return(
        <StyledQuestion>
            <p>{props.question}</p>
        </StyledQuestion>
    )
}

export default Question