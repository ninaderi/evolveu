import React, { Component } from "react"
// import './fifo.css';

import FifoLifo from './FifoLifo.js';


class FifoLifoApp extends Component{
    constructor() {
    	super();
    	this.state={ 
    		arrList:new FifoLifo(),
    		view: '',
            input: ''
      
    	}
       
    }
        onInsert = () => {
        console.log('insert');
        let list = this.state.arrList;
        list.insertion(this.state.input);
        console.log(list);
        this.setState({
            arrList: list,
            view:''
        })
    }
         onInsertDisplay = () => {
            return (
               <div id='insertinfo' className='insertinfo'>
                   <input onChange={this.onChange} id= 'enteritem' type='text' placeholder='Enter Item' className = "btnFiFo"></input>
                   <button onClick={this.onInsert} className = "btn">Submit</button>
               </div>
        )
    }
          onChange = (e) => {
                if(e.target.id === 'enteritem') {
                    console.log('changing', e.target.value);
                    this.setState({
                        input: e.target.value
                    })
                }
    }
        onStateChange = () => {
    		this.setState({
    			view: 'add'
    		})
    }

        onFifo = () => {
                console.log('delete FIFO');
                let list = this.state.arrList;
                list.delFifo();
                console.log(list);
                this.setState({
                    arrList: list
                })
    }

        
         onLifo = () => {
            console.log('delete LIFO');
            let list = this.state.arrList;
            list.delLifo();
            console.log(list);
            this.setState({
                arrList: list
            })
    }



        render() {
        	 const renderList = this.state.arrList.arr.map((item,i) => {
                return <ol><li className = "FifoList" key={i}>{item}</li></ol>
            })
           
            return(
                <div>
                <div>
                        {this.state.view === 'add' && this.onInsertDisplay()}
                    </div>
                    
                <div className='displaydiv'>{renderList}</div>
                <button onClick={this.onStateChange} className = "btn">Insert</button>
                <button onClick={this.onFifo} className = "btn">Fifo</button>
                <button onClick={this.onLifo} className = "btn">Lifo</button>
                    </div>
            )
    }
}

export default FifoLifoApp