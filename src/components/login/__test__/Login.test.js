import React from 'react';
import { shallow } from 'enzyme';
//import login from './index'
import Login from './Login';



describe('Test case for testing login',() =>{
let wrapper;

test('username check',()=>
{
wrapper = shallow(<Login/>);
wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'evansusername'}});
expect(wrapper.state('username')).toEqual('evansusername');
})

it('password check',()=>{
wrapper = shallow(<Login/>);
wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'evanspassword'}});
expect(wrapper.state('password')).toEqual('evanspassword');
})

it('login check with right data',()=>{
wrapper = shallow(<Login/>);
wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'evansusername'}});
wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'evanspassword'}});
wrapper.find('button').simulate('click');
expect(wrapper.state('isLogined')).toBe(true);
})

it('login check with wrong data',()=>{
wrapper = shallow(<Login/>);
wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'evansusername'}});
wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'evanspassword4'}});
wrapper.find('button').simulate('click');
expect(wrapper.state('isLogined')).toBe(false);
})


})