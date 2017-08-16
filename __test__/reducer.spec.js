import reducer from '../src/reducer';
import { shallow } from "enzyme";
import { List, Map } from 'immutable';
import {expect} from 'chai';

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.equal(List([]));
  });

  it('should handle ADD_TODO', () => {
  	//const apay = List[];
    /*expect(
      reducer(undefined, {
	       type: 'ADD_TODO',
			payload: {
				id: 123,
				isDone: false,
				text: "Add Todo"
			}
	      }).size
	    ).to.equal(List([Map(
	    	{
				id: 123,
				isDone: false,
				text: "Add Todo"
			}
	     )]));*/
	     expect(
      reducer(undefined, {
	       type: 'ADD_TODO',
			payload: {
				id: 123,
				isDone: false,
				text: "Add Todo"
			}
	      }).size
	    ).to.equal(1);
	});
});