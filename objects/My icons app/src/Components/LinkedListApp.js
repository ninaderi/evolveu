import React from 'react';
import LinkedList from './LinkedList';

class LinkedListComp extends React.Component {
   constructor() {
       super();
       this.arrayList = [];
       this.state = {
           list: new LinkedList(),
           view:'',
           inpSubject: null,
           inpAmount: 0,
           current:'',
           result:0
       }
   }

   onChange = (e) => {
        if (e.target.id === 'subject') {
            console.log('changing subject', e.target.value);
            this.setState({
                inpSubject: e.target.value
            })
        } else if (e.target.id === 'amount') {
            console.log('changing amount', Number(e.target.value));
            this.setState({
                inpAmount: Number(e.target.value)
           })
       }
   }

    onInserting = () => {
       console.log('Test for inserting');
       let list = this.state.list;
       list.insertNodeAfter(this.state.inpSubject,this.state.inpAmount);
       console.log(list);
       this.setState({
           list: list,
           view: '',
        
       })
    }

    onInsertingShow = () => {
        return (
           <div id='insert' className='insert'>
               <input onChange={this.onChange} id='subject'type='text' placeholder='Enter Subject'></input>
               <input onChange={this.onChange} id='amount' type='number' placeholder='Enter Amount'></input>
               <button onClick={this.onInserting}>Submit</button>
           </div>
        )
    }

    onStateChange = () => {
        this.setState({
            view: 'add'
        })
   }
   onDeleting = () => {
       console.log('deleting');
       let list = this.state.list;
       list.deleteNode();
        this.setState({
           list: list
       })
    }

    nextInPosition = () => {
     let list = this.state.list;
     list.nextNode();
     console.log(list);
      this.setState({
           list: list
       })
    }

    onFirstPosition = () => {
        console.log('first position'); 
        let list = this.state.list;
         list.firstNode();
         console.log(list);
         console.log(list.current);
         this.setState({
             list: list
         })
    }

    onLastPosition = () => {
         console.log('last');
         let list = this.state.list;
         list.lastNode();
         console.log(list);
         console.log(list.current);
         this.setState({
             list: list
         })
     }
    
    onPreviousPosition = () => {
        console.log('previous');
        let list = this.state.list;
        list.previousNode();
        console.log(list);
        console.log(list.current);
        this.setState({
            list: list
        })
     }

    onTotal = () => {
         console.log('total');
         let list = this.state.list;
         let totalOfNode = list.totalAmountNode();
         console.log('onTotal', totalOfNode);
         this.setState({
            result: totalOfNode
         })
     }


    render() {
       return(
           <div>
               <div>
                   {this.state.view === 'add' && this.onInsertingShow()}
               </div>
               <div className='lista'>
                   <button id='inputBtn' onClick={this.onStateChange}>Insert</button>
                   <button id='inputBtn'onClick={this.onDelete}>Delete</button>
                   <br/>
                   <button id='inputBtn' onClick={this.onFirstPosition}>First</button>
                   <button id='inputBtn' onClick={this.onLastPosition}>Last</button>
                   <button id='inputBtn'onClick={this.nextInPosition}>Next</button>
                   <button id='inputBtn'onClick={this.onPreviousPosition}>Previous</button>
                   <br/>
                   <button id='inputBtn' onClick={this.onTotal}>Total Amount</button>
                   <input value= {this.state.result}></input>
                   <p>Subject: {this.state.list.current.subject}</p>
                   <p>Amount: {this.state.list.current.amount.toLocaleString()}</p>
            
                
                         
               </div>
           </div>
       )
   }





   }

export default LinkedListComp
