import React from 'react';

import ReactDOM from 'react-dom';
import {render} from'@testing-library/react';


import Navbar from '../Nav';

it('renders corrrectly', ()=>{

    const {nav, getByTestId } =render(<Navbar/>)
const Welcome = getByTestId('welcome')
const Medicine = getByTestId('medicine')

const Volunteer = getByTestId('volunteer')
const Feedback = getByTestId('feedback')

expect(getByTestId('welcome')).toHaveTextContent('Welcome')
expect(getByTestId('medicine')).toHaveTextContent('Medicine')
expect(getByTestId('volunteer')).toHaveTextContent('Volunteer')
expect(getByTestId('feedback')).toHaveTextContent('Feedback')


}
    )