import styled from "styled-components";

const Layout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 20px;
  cursor: pointer;
  margin-top: -50px;
  margin-left: -3px;
`;

const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 20px;
  cursor: pointer;
  margin-top: 20px;
`;
const Line = styled.text`
  width: 100%;
  height: 2px;
  background-color: #000;
  margin: 2px 0;
  transition: all 0.3s ease-in-out;
`;

export default function HamburgerMenue() {
  return (
    <Layout>
      <Hamburger>
        <Line />
        <Line />
        <Line />
      </Hamburger>
    </Layout>
  );
}

console.log("hamburgerrrrrrrr", Hamburger);
console.log("lineeeeeee", Line);
console.log("menuuuuuuuuuu", HamburgerMenue());
