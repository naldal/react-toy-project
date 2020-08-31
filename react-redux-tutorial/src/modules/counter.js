// 액션타입 정의. 모듈이름/액션이름
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수 만들기
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

const initialState = {
  number: 0,
};

function counter(state = initialState, action) {
  switch (action.type) {
    case 'counter/INCREASE':
      console.log('aaaaaaaaaaa!!');
      return {
        number: state.number + 1,
      };
    case 'counter/DECREASE':
      console.log('bbbbbbbbbbb!!');
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
