// permitirá ligar o componente ao store
import { useSelector, useDispatch } from 'react-redux' 
import React, { useState,  useEffect } from 'react';

export default function CourseList() {

  const  [qtdCursos_a_retornar, setQtdCursos_a_retornar] = useState(0);
  const  [tituloCurso, setTituloCurso] = useState('');

  function addCourseAction(title) {
    return { type: 'ADD_COURSE', title }
  };                

  // Esta função permite associar as propriedades do componente com seus
  // states correspondentes lá na store.
  // Não precisaremos da função "Connect" e nem da função "mapStateToProperty"
  // usadas no redux sem hooks
  
  useEffect(() => {
  })
  
  const local_lstCourses = useSelector(
    
    // retorna todos
    //   state => state.lstCursos
  
     // retorna filtrando a lista pela quantidade especificada
     // state => state.lstCursos.slice(0,qtdCursos_a_retornar)

     // Este segundo parâmetro permitirá definir algumas variáveis que ao serem
     // alteradas provocarão a reconsulta da lista na store e a atrualização do componente
     state => state.lstCursos.slice(0, qtdCursos_a_retornar ), [ qtdCursos_a_retornar ]

  );
  
  //  Permitirá lançar um evento do componente para o store
  const dispatch = useDispatch();
  
  // Maneira alternativa
  //     const local_lstCourses = useSelectot(state => {
  //         state.lstCursos
  //     };

  //  Esta função dispara a ação, passando o nome do curso e o tipo da ação
  //  que será avaliado lá no reducer "courses" e dependendo to action.type
  //  e dos dados passados no parâmetro 9 no caso 'Coaching' atualizará
  //  os dados na store. neste caso, a lista lstCourses
  //  Automaticamente será retornada a lista atualizada, que atualizará
  //  nossa lista local, aqui chamada de local_lstCourses. 
  function addCourse(){
    dispatch(addCourseAction( tituloCurso ))
  }
  
  const updateTituloCurso = event => {
    setTituloCurso(event.target.value);
  }

  const updateQtdCursosListar = event => {
    setQtdCursos_a_retornar(event.target.value);
  }

  function consultaLimitada() {
    local_lstCourses();
  }

  return (

    <div>
 
      <ul>
         { local_lstCourses.map(course =><li key={course}>{course}</li>) }
      </ul>

      <input value={tituloCurso} onChange={updateTituloCurso}  placeholder="Título do curso: "/><br></br>
      <button type="button" onClick={addCourse}>
          Adicionar Curso
      </button> 

      <br></br> 
      <br></br> 
      <label>Consultar quantidade específica</label> 
      <input value={qtdCursos_a_retornar} onChange={updateQtdCursosListar}/>
   
    </div>

)

}
