import Link from "next/link";
import styled from "styled-components";

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  right: 15px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function ToTop() {
  return (
    <Footer>
      <StyledLink href={"#"}>🔝</StyledLink>
    </Footer>
  );
}
