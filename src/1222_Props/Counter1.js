import React, { Component } from 'react';

class Counter1 extends Component {

  //초기값 선언하기
  state={n:1} //초기값 1선언

  //함수작성하기
  onPlus=()=>{ //1씩 증가
    console.log('숫자증가');
    this.setState({
      n:this.state.n+1 //기존 n값에 1을 더하여 저장
    });
  };

  onMinus=()=>{ //1씩 감소
    console.log('숫자감소');
    if(this.state.n===1){ //만약에 상태값이 1이라면
      this.setState({n:1}); //상태값을 1로 설정하고
    }else{ //그렇지 않으면
      this.setState({ //상태값에 -1을 해준다.
        n:this.state.n-1 //기존 n값에 1을 빼서 저장
      });
    };
  };

  render() {
    return (
      <>
        <p>+, -버튼을 클릭시 숫자 증가, 숫자 감소하는 state값을 작성하기</p>
        <div>
          <input type="button" value="-" className="btn" onClick={this.onMinus} />

          숫자출력 : <span className="num">
            {this.state.n}
          </span>

          <input type="button" value="+" className="btn" onClick={this.onPlus} />
          
        </div>
      </>
    );
  }
}

export default Counter1;