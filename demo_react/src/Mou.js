import React, { Component, Fragment } from 'react';
import "./Mou.css";

class Mou extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: "",
            list: []
        }
    }

    render() {
        return (
            <div id='MouAll'> {/* 佔位符，組件 */}
                <h2>備忘綠</h2>
                <hr />
                <div id='inputBox'>
                    <label htmlFor="inserArea">輸入內容</label>
                    <input
                        size="50"
                        id="inserArea"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}//當輸入內容時onChange啟用，bind(this)來改變handleInputChange裡的this選項
                    />
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
                <ol>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <div id="Mous" key={index}>
                                    <li dangerouslySetInnerHTML={{ __html: item }}>
                                        {/* {item} */}
                                    </li>
                                    <button onClick={this.handleItemDelete.bind(this, index)}>X</button>
                                </div>
                            )
                        })
                    }
                </ol>

            </div >
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

export default Mou;