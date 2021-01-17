import logo from './logo.svg';
import './App.css'; //css loader(加載器)引入css，不用從html連css
import React, { Component, Fragment } from 'react';

///////////練習import/////////////
import add, { jian } from './add';

console.log(add(1, 2))
console.log(jian(1, 2))
///////////練習import/////////////
var name = "小明"
var arrr = [1, 2, 3, 4]


// function App() {


//   //  constructor(){
//   //     super()
//   //     // 繼承

//   //     this.state = {  //初始化
//   //       like: false
//   //     }
//   //   }

//   return (
//     <div className="App">
//       <header className="App-header">



//         <div id="TEXT">
//           <h1 style={name === "小明" ? { color: "red" } : { color: "blue" }} >小名顏色</h1>
//           {name === "小明" ? "這是小明" : "這不是小明"}
//           {/* 三源運算 */}

//           {
//             arrr.map((v, k) => {
//               return <li>{v}</li>
//             })
//           }


//         </div>
//         {/* 
//         <div id="TEXT02">
//           <button type="button" style={this.state.like ? { color: 'red' } : { color: "blue" }}
//             onClick={() => this.hanleClick()}>
//             {
//               this.state.like ? "已讚" : "喜歡"
//             }
//           </button>
//         </div> */}


//       </header>
//     </div>
//   );
// }

class App extends Component { //定義一個app繼承React下面的Component，app就是一個react的組件

  constructor(props) {  //最先被執行的構造函數   //接收props
    super(props);//繼承  //調用props

    this.state = {      //定義數據，需要把數據定義再狀態裡面
      inputValue: "",   //內容
      list: []          //項
    }
  }

  render() {  //方法
    return (  //返回
      <Fragment>   {/* 佔位符，組件 */}

        hello word
        <div id="TEXT01">

          <h1 style={name === "小明" ? { color: "red" } : { color: "blue" }} >小名顏色</h1>
          {name === "小明" ? "這是小明" : "這不是小明"}
          {/* 三源運算 */}

          {
            arrr.map((v, k) => {
              return <li>{v}</li>
            })
          }


        </div>

        <div id="TodoList">
          <div>
            <label htmlFor="inserArea">輸入內容</label>
            <input
              id="inserArea"
              className="input"
              value={this.state.inputValue}
              onChange={this.handleInputChange.bind(this)}//當輸入內容時onChange啟用，bind(this)來改變handleInputChange裡的this選項
            />
            <button onClick={this.handleBtnClick.bind(this)}>提交</button>
          </div>
          <ul>
            {
              this.state.list.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={this.handleItemDelete.bind(this, index)}
                    dangerouslySetInnerHTML={{ __html: item }}
                  >
                    {/* {item} */}
                  </li>)
              })
            }
          </ul>
        </div>

      </Fragment>
    )
  }
  handleInputChange(e) {
    this.setState({//react更新數據，固定使用setState這方法
      inputValue: e.target.value
    })

    // this.state.inputValue = e.target.value;//不可以這麼寫
    // console.log(e.target.value);
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }

  handleItemDelete(index) {
    //immutable
    //state 不允許我們做任何的改變

    const list = [...this.state.list];
    list.splice(index, 1);

    this.setState({
      list: list
    })
  }
}

export default App; //引出app函式
