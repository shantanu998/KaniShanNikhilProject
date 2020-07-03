import styled from "styled-components";
export const Card = styled.div`
  padding: 20px;
  margin: 20px;
  width: 220px;
  height: 350px;
  border-radius: 5px;
  box-shadow: 0px 0px 15px #282c34;
  text-align: center;
`;
export const Image = styled.img`
  height: 200px;
`;
export const Button = styled.button`
  width: 100px;
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 50px;
  grid-row-gap: 50px;
  padding: 10px;
  margin: 20px;
`;

export const ProductDetails = styled.div`
  display: inline-flex;
  height: 400px;
  width: 700px;
  box-shadow: 0px 0px 10px #282c34;
  border-radius: 15px;
`;
export const ImageBig = styled.img`
  height: 400px;
  width: 320px;
  padding: 40px;
`;
export const ProdDescription = styled.div`
  height: 400px;
  width: 300px;
  padding: 50px;
  margin: 20px;
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