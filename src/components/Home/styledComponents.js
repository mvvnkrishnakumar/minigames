import styled from 'styled-components'
export const HomeHeading = styled.h1`
    color:#ffffff;
    text-align:center;
    padding-top:20px;
    font-size:35px;
`
export const HomeBackground = styled.div`
  background-image: linear-gradient(#834d9b, #d04ed6);
}
`
export const HomeCard = styled.div`
    background-color:#ffffff;
    height:250px;
    width:400px;
    border-radius:10px;
    margin-left:30px;
    margin-top:20px;
    margin-bottom:60px;
    @media screen and (max-width:540px){
        height:150px;
        width:300px;
        margin-bottom:20px;
    }
`
export const HomeAlign = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    @media screen and (max-width:540px){
        display:flex;
        flex-direction:column;
        align:items;
    }
`
export const HomeCardImage = styled.img`
    height:200px;
    width:200px;
    margin-left:100px;
    margin-top:10px;
    @media screen and (max-width:540px){
        height:100px;
        width:100px;
    }
`
export const CardHeading = styled.h1`
    color:#334155;
    font-size:20px;
    text-align:center;
    font-weigth:500px;
    margin-top:10px;
`
