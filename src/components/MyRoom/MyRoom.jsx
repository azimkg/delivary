import React, { useState } from 'react';
import './MyRoom.css'
import MyRoomHistory from './MyRoomHistory';
import MyRoomPref from './MyRoomPref';
import MyRoomProblem from './MyRoomProblem';

const MyRoom = () => {
  const [history, setHistory] = useState(true);
  const [pref, setPref] = useState(false);
  const [problem, setProblem] = useState(false);
  function open() {
    setHistory(true);
    setPref(false);
    setProblem(false);
  }
  function open1() {
    setHistory(false);
    setPref(true);
    setProblem(false);
  }
  function open2() {
    setHistory(false);
    setPref(false);
    setProblem(true);
  }

    return (
        <div className='my container'>
            
            <div className='my_column'>
                <div className='my-1'>
                    <a onClick={open} href="#">История заказов</a>
                    <a className='my-1-2-1' onClick={open1} href="#">Настройки аккаунта</a>
                    <a className='my-1-2-2' onClick={open1} href="#">Настройки</a>
                    <a className='my-1-3' onClick={open2} href="#">Сообщить о проблеме</a>
                </div>
                <div className='my-2'>
                {history ? <MyRoomHistory /> : null}
                {pref ? <MyRoomPref /> : null}
                {problem ? <MyRoomProblem /> : null}

                </div>
            </div>
        </div>
    );
};

export default MyRoom;