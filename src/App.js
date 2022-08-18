import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="title">
        혹시네마
      </div>
      <div className='menu'>
        <p>홈</p>
        <p>이벤트</p>
        <p>기프트샵</p>
        <p>무비톡</p>
      </div>
      <div className='ad_list'>
        대충 이미지입니당.
        <div className='ad_no'>
          N/N
        </div>
      </div>
      <div className='sub_menu'>
        <div className='sub_menu1'>무비차트</div>
        <div className='sub_menu2'>상영예정</div>
      </div>
    </div>
  );
}

export default App;
