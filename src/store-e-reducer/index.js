import {createStore}  from 'redux';

// Objeto que conterá os states/dados
// com as informações iniciais
// poderiamos ter outras informações, além da lista de cursos
const INITIAL_STATE = {
    lstCursos:[
        'Angular 8',
        'ReactJS',
        'React Native',
        'Theology'
    ],
};

// Esta função é o "Reducer" - como um protetor
// dos dados da store. O reduce, neste caso chamado
// de "courses", receberá ações a serem disparadas
// para a atualizar os dados da store.
function courses(state = INITIAL_STATE, action){
 switch (action.type) {
     case 'ADD_COURSE':
       return {...state, lstCursos: [...state.lstCursos, action.title]};
     default:
       return state;      
 }
}

// Cria o objeto store, que receberá o reducer
// correspondente. Um reducer poderá conter
// conter diversas ações
const store = createStore(courses);

// exporta o store, que já vem com seu reducer.
// sem a exportação o store não poderá ser usado
export default store;
