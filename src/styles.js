import styled from "styled-components";
export const Card = styled.div`
  padding: 20px;
  margin: 50px;
  width: 250px;
  height: 380px;
  border-radius: 5px;
  box-shadow: 0px 0px 15px #282c34;
  text-align: center;
`;
export const Image = styled.img`
  height: 250px;
  width: 200px;
  padding: 10px;
`;
export const Button = styled.button`
  width: 100px;
  text-align: center;
  background-color: crimson;
  color: white;
  margin: 10px;
  font-size: 14px;
  border: crimson;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0px 0px 10px #282c34;
`;

export const ContainerMain = styled.div`
  // padding: 10px;
  text-align:center;
`;

export const Container = styled.div`

display: flex;
      
flex-wrap: wrap;
justify-content: center;

margin: 5%;
`;

export const ProductDetails = styled.div`

  display: flex;
  flex-direction:column;
  
  
  padding: 20px;
  margin: 50px;
  width: 275px;
  height: 500px;
  border-radius: 5px;
  box-shadow: 0px 0px 15px #282c34;
  text-align: center;
  @media only screen and (min-width: 768px) {

    display: inline-flex;
    flex-direction:row;
    height: 400px;
    width: 700px;
    box-shadow: 0px 0px 10px #282c34;
    border-radius: 15px;}
`;



export const ImageBig = styled.img`
  
  
height: 250px;
width: 200px;
padding: 10px;
@media only screen and (min-width: 768px) {

  height: 400px;
  width: 320px;
  padding: 40px;}
`;
export const ProdDescription = styled.div`
  
  width:85%;
  padding: 8%;
  
  font-size:0.9em;
  @media only screen and (min-width: 768px) {

    height: 400px;
  width: 300px;
  padding: 50px;
  margin: 20px;}
`;
export const BackButton = styled.div`
  width: 100px;
  text-align: center;
  background-color: crimson;
  color: white;
  margin: 30px;
  font-size: 20px;
  border: crimson;
  border-radius: 5px;
  padding: 5px;
  box-shadow: 0px 0px 10px #282c34;
`;