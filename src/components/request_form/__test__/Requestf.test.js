import react from 'react';
import ReactDOM from 'react-dom';

import { render, fireEvent } from '@test-library/react';

import { Requestf } from "./Requestf";

const { getByText, getByLabelText } = render(<Requestf />);

getByText("Campaign Page");

getByLabelText("Topic")
