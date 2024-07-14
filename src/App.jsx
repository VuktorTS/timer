import { Title, Wrapper } from "./App.styled";
import TimerManager from "./TimerManager/TimerManager";

function App() {
  return (
    <Wrapper>
      <Title>Countdown</Title>
      <TimerManager />
    </Wrapper>
  );
}

export default App;
