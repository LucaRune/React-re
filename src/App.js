import logo from './logo.svg';
import React,{useState} from "react";
import './App.css';

function App() {

    const [글제목, 글제목변경] = useState(['곱창 맛집 추천','덕소','우엉차']);
    const posts = "강남 고기 맛집";

  return (
    <div className="App">
     <div className="black-nav">
        <div>개발 Blog</div>
     </div>
        <div className="list">
            <h3> {글제목[0]} </h3>
            <p>1월 7일 발행</p>
            <hr/>
        </div>
        <div className="list">
            <h3> {글제목[1]} </h3>
            <p>2월 7일 발행</p>
            <hr/>
        </div>
        <div className="list">
            <h3> {글제목[2]} </h3>
            <p>3월 7일 발행</p>
            <hr/>
        </div>
    </div>
  );
}

export default App;
