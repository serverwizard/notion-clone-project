import React from 'react';
import './App.css';
import PaletteContainer from "./study/containers/PaletteContainer";
import Counter from "./study/Counter";

function App() {
    return (
        <div className="App">
            <PaletteContainer/>
            <Counter/>
            {/*<Info/>*/}
        </div>
    );
}

export default App;
