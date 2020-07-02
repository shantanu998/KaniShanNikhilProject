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
