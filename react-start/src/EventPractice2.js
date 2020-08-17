import React, { Component } from 'react';

export default class EventPractice2 extends Component {
    state = {
        message: '',
    };

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        alert(e.target.value);
        this.setState({
            message: e.target.value,
        });
    }

    handleClick(e) {
        this.setState({
            message: '',
        });
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해주세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                ></input>
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}
