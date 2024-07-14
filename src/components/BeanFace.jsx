import styled from "styled-components";
import Bean from '../assets/bean.jpg'

const StyledBeanFace = styled.div`
    flex: 1;
    background-image: url(${Bean});
     background-repeat: no-repeat;
    background-position: center center;
      background-size: cover ;
   `; 

function BeanFace() {
  return (
    <StyledBeanFace />
  )
}

export default BeanFace