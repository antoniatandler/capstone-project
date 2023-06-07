import styled from "styled-components";
import Link from "next/link";

export const FeatureButton = styled(Link)`
  background-color: ${({ variant }) => {
    if (variant == "primary") return "#dbb290";
    if (variant == "secondary") return "#dac9b6";
  }};
  border: 5px solid #dbb290;
  padding: 5px;
  padding-top: 10px;
  margin: 5px;
  color: ${({ variant }) => {
    if (variant == "primary") return "white";
    if (variant == "secondary") return "black";
  }};
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
`;
