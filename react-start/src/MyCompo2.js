import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyCompo2 extends Component {
    static defaultProps = {
        name: '기본 이름',
    };
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired,
    };

    render() {
        const { name, children, favoriteNumber } = this.props;
        return (
            <div>
                안녕하세요, 제 이름은 {name}입니다. <br></br>
                children 값은 {children}
                입니다.
                <br></br>
                제가 좋아하는 숫자는 {favoriteNumber} 입니다.
            </div>
        );
    }
}

export default MyCompo2;
