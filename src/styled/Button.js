import styled from "styled-components"; // Importing styled-components for button styling

export const Button = styled.button`
  // Basic button styling
  color: white;
  padding: 10px 18px;
  background: #000000;
  border-radius: 8px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in; // Transition effect for background
  &:hover {
    background-color: white; // Change background on hover
    border: 1px solid black;
    color: black; // Change text color on hover
    transition: 0.3s background ease-in;
  }
`;

export const OutlineButton = styled(Button)`
  // Outline button styling
  background-color: white;
  border: 1px solid black;
  color: black;
  margin-left:200px; // Margin for positioning
  &:hover {
    background-color: black; // Change background on hover
    border: 1px solid transparent;
    color: white; // Change text color on hover
  }
`;