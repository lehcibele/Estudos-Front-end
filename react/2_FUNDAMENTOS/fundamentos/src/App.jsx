// Componentes
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions'
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';

// CSS
import './App.css'


function App() {

  return (
    <>
      <h1>Meu primeiro projeto em React usando Vit</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponent />
      <Events />
      <Challenge />
    </>
  )
}

export default App;
