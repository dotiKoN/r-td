import React, { Component } from 'react';
import ToDoItem from './ToDoItem';


export default class ToDo extends Component {
    state = {
        item:  '',
        activeItem: '',
        list: [
            {
                name: 'x',
                isActive: false
            },
            {
                name: 'y',
                isActive: false
            },
        ]
    };

    constructor(props) {
        super(props);

        this.delete = this.delete.bind(this);
        this.edit = this.edit.bind(this);
        this.confirmEdit = this.confirmEdit.bind(this);
    }


    onChange = (e) => {
        
        this.setState({item: e.target.value});
    }

    addMore = () => {
        const list = this.state.list.slice();
        list.push({name: this.state.item, isActive:false});    
        this.setState({list, item: ''});
        console.log(this.state.list);
    }

    delete = (name) => {
        const list = this.state.list.slice();
        list.splice(this.getIndexByName(name), 1);
        this.setState({list});
    }

    edit = (name, val) => {
        const list = this.state.list.slice();
        list.splice(this.getIndexByName(name), 1, {name: val, isActive: true});
        this.setState({list, item: ''});
    }

    getIndexByName = name => this.state.list.slice().findIndex(item => item.name === name);

    // edit mygtuka paspaudus lieka tik input ir OK mygtukas

    confirmEdit(name) {
        const list = this.state.list.slice();
        list.splice(this.getIndexByName(name), 1, {name: name, isActive: false});
        this.setState({list, item: ''});
    }

    render() {
        return (
            <div>
                <h2>React ToDo</h2>
                <ul> 
                    {/* {this.state.list.map((item) => <ToDoItem key={item.name} name={item.name} delete={() => this.delete(item.name)}/>)} */}
                    {this.state.list.map((item) => 
                    <ToDoItem 
                        key={item.name} 
                        name={item.name} 
                        isActive={item.isActive}
                        delete={this.delete} 
                        edit={this.edit} 
                        confirmEdit={this.confirmEdit}
                     />
                     )
                    }
                </ul>
                <input value={this.state.item} onChange={this.onChange}/>
                <button disabled={this.state.item === ''} onClick={this.addMore}>Add something to do</button>
            </div>
        );
    }
}