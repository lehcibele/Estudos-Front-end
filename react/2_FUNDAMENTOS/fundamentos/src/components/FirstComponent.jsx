// Arquivos de estilo

// componentes
import MyComponent from "./MyComponent";


const FirstComponent = () => {
  // essa função faz isso
  return(
    <div>
      {/* Algum comentario */}
      <h1>Meu Primeiro Componente</h1>
      <p className="teste">Meu texto</p>
      <MyComponent/>
    </div>
  );
};

export default FirstComponent;