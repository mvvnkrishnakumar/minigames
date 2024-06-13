import styled from 'styled-components'
export const MemoryBackground = styled.div`
    background-image:url('https://res.cloudinary.com/dpesp7wmj/image/upload/f_auto,q_auto/kcqhmjzdude8cnlleduj');
    background-size:cover;
`
export const MemoryButtonAlign = styled.div`
    display:flex;
    justify-content:center;
`
export const MemoryHeading = styled.h1`
    color:#ffffff;
    text-align:center;
    font-size:30px;
    font-weight:700;
    padding-top:20px;
    margin-bottom:20px;
`
export const MemoryCenter = styled.div`
    display:flex;
    justify-content:center;
`
export const MemoryCardGrid = styled.div`
    display:grid;
    grid-template-columns:0fr 0fr 0fr 0fr;
    grid-gap:10px;
    justify-content:center;
    align-items:center;
    @media screen and (max-width:540px){
        grid-gap:5px;
    }
`
export const Button = styled.button`
    background-color:#ffffff;
    color:#000000;
    height:50px;
    width:100px;
    border:none;
    border-radius:10px;
    margin-top:20px;
    font-size:18px;
    font-weight:500;
`
export const MemoryCardBackgroundColor = styled.div`
    height:550px;
    width:450px;
    background-color:#154315;
    border-radius:10px;
    border:3px solid;
`
export const MemoryHeaderAlign = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
`
export const MemoryHeader = styled.p`
    color:#ffffff;
    font-size:20px;
    font-weight:600;
    margin-right:60px;
`
export const MemoryRulesButton = styled.button`
  background-color: transparent;
  border: 2px solid #ffffff;
  border-radius: 10px;
  color: #ffffff;
  margin-right: 20px;
  margin-top: 30px;
  height: 50px;
  width: 70px;
`
export const MemoryRulesBack = styled.h1`
    color:#ffffff;
    font-size:20px;
`
