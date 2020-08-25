import React, { Component } from 'react';

export default class HistorySample extends Component {
    // 뒤로 가기
    handleGoBack = () => {
        this.props.history.goBack();
    };
    handleGoHome = () => {
        this.props.history.push('/');
    };
    componentDidMount() {
        //컴포넌트가 언마운트 되면 질문을 멈춤
        if (this.unblock) {
            this.unblock();
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.handleGoBack}>뒤로</button>
                <button onClick={this.handleGoHome}>홈으로</button>
            </div>
        );
    }
}
