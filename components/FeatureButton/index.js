import styled from "styled-components";
import Link from "next/link";

export const FeatureButton = styled(Link)`
  background-color: ${({ variant }) => {
    if (variant == "primary") return "rgba(219, 178, 144)";
    if (variant == "secondary") return "rgba(219, 243, 225, 0.5)";
  }};
  border: ${({ variant }) => {
    if (variant == "primary") return "1px groove #dbb290";
    if (variant == "secondary") return "1px groove  #dac9b6";
  }};
  padding: ${({ variant }) => {
    if (variant == "primary") return "8px 12px 5px 12px";
    if (variant == "secondary") return "12px 12px 5px 12px";
  }};
  color: ${({ variant }) => {
    if (variant == "primary") return "#dbf3e1";
    if (variant == "secondary") return "rgb(43, 24, 15)";
  }};
  border-radius: 25px;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 1px 1px 1px 1px rgba(89, 49, 31, 0.3);
  letter-spacing: ${({ variant }) => {
    if (variant == "primary") return "2px";
  }};
`;
