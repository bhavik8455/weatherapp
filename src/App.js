import './App.css';
import { Input } from './components/input';
import { Button } from './components/button';
import { Card } from './components/card';
import { useWeather } from './context/Weather';


function App() {

  const weather = useWeather();

  return (
    <div className="App">
      <h1>WEATHER APP</h1>
      <Input />
      <Button onClick={weather.fetchdata} value="Search" />
      <Card />


    </div>
  );
}

export default App;
