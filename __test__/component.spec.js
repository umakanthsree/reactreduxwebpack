import React from 'react';
import {expect} from 'chai';
import {TodoList, Todo} from '../src/component';
import { shallow } from "enzyme";
import { List, Map } from 'immutable';


describe('>>>component --- Shallow Render REACT COMPONENTS',()=>{
    let prop = {isDone: true, text: 'MY APP'};

     it('expected Compoeent rendere with one strike field', ()=>{
        const wrapper = shallow(<Todo todo={prop}/>);
        expect(wrapper.find('strike')).to.have.length(1);
        expect(wrapper.find('span')).to.have.length(0);
        expect('4').to.have.length(1);
     });

     it('expected Compoeent rendere with one span field', ()=>{
        prop.isDone =  false;
        const wrapper = shallow(<Todo todo={prop}/>);
            expect(wrapper.find('span')).to.have.length(1);
     });
    
});

describe('Todolist --- Shallow Render REACT COMPONENTS',()=>{
     const init = List([]);

     it('expected Compoeent rendere with one strike field', ()=>{
        const wrapper = shallow(<TodoList todos={init} toggleTodo={()=>{}} addTodo={()=>{}}/>);
        expect(wrapper.find('input')).to.have.length(1);
        console.log(wrapper.find('input').props().placeholder)
        expect(wrapper.find('input').props().placeholder).to.equal('Add Todo');
     });

     it('expected Compoeent rendere with one span field', ()=>{
        
     });
    
});
