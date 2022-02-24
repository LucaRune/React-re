/* eslint-disable */

import logo from './logo.svg';
import React,{useState} from "react";
import './App.css';

function App() {

    const [글제목, 글제목변경] = useState(['맛집 추천','우엉차','덕소']);
    const [좋아요, 좋아요변경] = useState(0);
    const newArray = [...글제목];


    function 제목변경(){
        // state의 복사본(deep copy)을 만들어서 수정
        // var newArray = 글제목; // 이건 복사가 아니라 값 공유 (reference data type 특징)
        // const newArray = [...글제목]; // deep copy : 값 공유X, 서로 독립적인 값을 가지는 복사, [...]은 중괄호나 대괄호를 벗겨라
        newArray[0] = '나쵸';
        글제목변경( newArray );
    }
    function 제목정렬(){
        const sortArray = [...newArray];
        sortArray.sort();   // 배열을 정렬하기 위해서 sort() 함수 사용
        글제목변경(sortArray);
    }

  return (
    <div className="App">
     <div className="black-nav">
        <div>My Blog</div>
     </div>
        <button onClick={ 제목변경 }>변경</button>
        <button onClick={ 제목정렬 }>정렬</button>
        <div className="list">
            <h3> {글제목[0]} <span onClick={ ()=> { 좋아요변경(좋아요 + 1) }}>🥰</span> {좋아요} </h3>
            <p>2022.1.1</p>
            <hr/>
        </div>
        <div className="list">
            <h3> {글제목[1]} </h3>
            <p>2022.2.2</p>
            <hr/>
        </div>
        <div className="list">
            <h3> {글제목[2]} </h3>
            <p>2022.3.3</p>
            <hr/>
        </div>
    </div>
  );
}

export default App;
