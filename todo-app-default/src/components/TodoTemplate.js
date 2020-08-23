import React from 'react';
import './TodoTemplate.scss';

// 화면 가운데로 정렬, 앱 타이틀을 보여줌. children 으로 내부 JSX를 props로 받아와서 랜더링 해줌
const TodoTemplate = ({ children }) => {
    return (
        <div className="TodoTemplate">
            <div className="app-title">일정 관리</div>
            <div className="content">{children}</div>
        </div>
    );
};

export default TodoTemplate;
