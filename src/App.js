import "./App.css";
import StyledButton, {
  FancyButton,
  SubmitButton,
} from "./components/button/Button"; //step 1

function App() {
  return (
    <div className="App">
      {/* <button>Button</button> */}
      <StyledButton type="submit">Styled Button</StyledButton>
      <div>
        <br />
      </div>
      <StyledButton variant="outline">Styled Button</StyledButton>
      <div>
        <br />
      </div>
      <FancyButton as="a">Fancy Button</FancyButton>
      <div>
        <br />
      </div>
      <SubmitButton>Submit</SubmitButton>
    </div>
  );
}

export default App;
