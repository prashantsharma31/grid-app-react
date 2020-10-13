import React, { Props,Component } from 'react';
import logo from './logo.svg';
import './App.css';
import tasks from './data.json'
import {Row} from './components/Row'
import {PaginationComponent} from './components/PaginationComponent'
import {GridHeader} from './components/GridHeader'

class App extends Component<any,any> {
  taskList: any = tasks.tasks;
  currentTaskList = this.taskList.slice(0,10);
  constructor(props: any){
    super(props)
    this.state ={updated: false}
  }

  handelPageChange(currentPage: any, count: any) {
    debugger
    console.log(currentPage,count);
    this.currentTaskList = this.taskList.slice(currentPage*count,(currentPage*count)+count);
    this.setState({updated: true});
  }

  handelSort(key: string,desc: any) {
    let sortedList: any = [] ;
    if(desc == 1){
       sortedList =[].concat(this.currentTaskList)
      .sort((a, b) => a[key] < b[key] ? 1 : -1);
    } else {
       sortedList =[].concat(this.currentTaskList)
      .sort((a, b) => a[key] > b[key] ? 1 : -1);
    }
    
    this.currentTaskList = sortedList;
    this.setState({updated: true});
  }

  render(){

    return (
      <div className="App pb-3">
        <PaginationComponent handelPageChange= {(a: any,b: any) => this.handelPageChange(a,b)} totalCount={this.taskList.length} />
      <GridHeader handelSort = {(key: string,desc: any) => this.handelSort(key,desc)}/>
      {this.currentTaskList.map((task: any,i: any) => 
           <Row task = {task} id = {i}/>
         )}
    </div>
    )
    
  }
}

export default App;
