import React from 'react';
import {expect} from 'chai';
import {toggleTodo, addTodo} from '../src/actions';
import { shallow } from "enzyme";
import { List, Map } from 'immutable';


describe('Actions',()=>{
    let prop = {isDone: true, text: 'MY APP'};
    const payloadData = 4;
    const expectedAction = {
        type:'TOGGLE_TODO',
        payload: payloadData
    }

     it('toogle todo action test', ()=>{
        expect(toggleTodo(payloadData)).to.deep.equal(expectedAction);
     });

     it('expected Compoeent rendere with one span field', ()=>{
       
     });
    
});