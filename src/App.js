import React from 'react';
import { Provider } from 'react-redux'
import store from './store-e-reducer'
import CourseList from './components/CourseList'
function App() {
  return (
 
    //  A aplicação rodará dentro de um provider
    //  que disponibilizará todas as informações 
    //  contidas na store para todos os componentes
    <Provider store={store}>
       <div className="App">
            <CourseList></CourseList>
       </div>
    </Provider>
  );
}
export default App;
