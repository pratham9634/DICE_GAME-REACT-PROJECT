import styled from "styled-components"; // Importing styled-components for styling

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p><b>**</b>Select any number</p>
        <p><b>**</b>Click on dice image</p>
        <p>
        <b>**</b>after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </p>
        <p><b>**</b>if you get wrong guess then 2 point will be deducted </p>
      </div>
    </RulesContainer>
  );
};

export default Rules; // Exporting the Rules component

const RulesContainer = styled.div`
  // Styling for the RulesContainer
  max-width: 700px;
  background : linear-gradient(135deg,white,#e8d8c9,white,#caf0f6,white);
  box-shadow: 10px 10px 15px 5px rgba(0, 0, 0, 0.3);;
  padding: 20px;
  margin:0 auto;
  border-radius: 15px;
  h2 {
    font-size: 24px;
    text-decoration:underline; // Underlining the heading
  }
  p{
    font-weight:500;
    font-size:16px; // Font size for paragraphs
  }
`;