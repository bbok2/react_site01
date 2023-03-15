import logo from './logo.svg';
import './Common.css';
import './App.css';
import { useState } from 'react';

// JSX에서 class는 사용하지 않고 className을 사용한다
// tabindex는 tabIndex로 사용한다.
// function()은 ()=> 로 대체 가능
// 이벤트를 가진 컴포넌트 만들기

function FooterMenu(props) {
  
  let menu = '브랜드';
  // var, let, const 변수선언
  let [menu2, b] = useState('남자코트'); //state는 자동 재랜더링
  let num = [1, 2];
  let a = num[0];
  let [c, d] = [1, 2];
  let[따봉, 변경] = useState(0);

  return (
    <div className="f_menu">
      <ul className="f_menulist">
        <li className="f_menuitem">
          <a href="/" onClick={(event) => {
            event.preventDefault();
            props.onChangeMode();
          }}
          className="f_menuanchor">{ menu }</a>
        </li>
        <li className="f_menuitem" onClick={()=>{           
          변경( 따봉+1 ); 
          }}>
          { 따봉 };
          <span>{ menu2 }</span>
        </li>
      </ul>
    </div>
  )
}

function FooterCorp() {
  let [title, title_m] = useState(['영림임업(주)', '영림화학(주)', '영림산업(주)']);

  return (
    // div는 최상위 요소는 하나로만 감싼다.    
    <>
        <div onClick={()=>{
          let copy = [...title];
          copy[0] = '영림공업(쥬)'
          title_m(copy);
          }}>{ title[0] }</div>  
        <div>{ title[1] }</div>
        <div>{ title[2] }</div>
    </>
  )
}

function App() {
  return (
    <footer className="footer" id="footer">
      <div className="f_body">
        <div className="f_inner">
          <div className="f_row">
            <div className="f_logo">영림 토탈 인테리어</div>
            <FooterMenu onChangeMode={() => {  //function()은 ()=> 로 대체 가능
              alert('Header')
            }} />
          </div>
          <FooterCorp />
        </div>
      </div>
    </footer>
  );
}

export default App;
