import Item from "./components/Item";
import Card from "./components/Card";

const App = () => {
   return (
      <>
         <h1>Componentes no React</h1>
         <ul>
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
            <Item>Item 4</Item>
            <Item>Item 5</Item>
         </ul>
         <Card></Card>
      </>
   )
}

export default App;