import React, { Component } from 'react'
import Plan from './plan'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


class App extends Component {
  state = {
    items:[],
    text:""
  }
  handleChange = e => {
    this.setState({text: e.target.value})
  }
  handleAdd = e => {
    if(this.state.text !== ""){
      const items = [...this.state.items, this.state.text];
      this.setState({items: items, text: ""});
    }
  }
  handleDelete = id => {
    console.log("Deleted", id);
    const Olditems = [...this.state.items]
    const items = Olditems.filter((element, i) => {
      return i !== id
    })
    this.setState({items:items});
  }
  render() {
    return (
      
      <div className='container-fluid my-5'>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 my-auto shadow-lg p-5">
            <h1 className="text-center flex-lg-wrap fw-bolder ">Today's Plan</h1> <br /><br />
              <div className="row">
                <div className="col-9">
                  <input type="text" className='form-control' placeholder='Write Your Plan Here...' value={this.state.text} onChange={this.handleChange} />
                </div>
                <div className="col-2">
                  <button className='btn  active px-5 fw-bold'onClick={this.handleAdd}>ADD</button>
                </div>
                <div className="container-fluid">
                  <ul className='list-unstyled row m-5'>
                    {
                      this.state.items.map((value, i)=>{
                        return < Plan key={i} id={i} value={value} sendData={this.handleDelete}/>
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>
      
      
    )
  }
}


export default App;
