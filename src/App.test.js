import { render, screen } from '@testing-library/react';
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});
import App from './App';
import Navbar from './components/nav/nav';



it("App js renders child components", ()=>{

const wrapper = shallow(<App/>);
expect(wrapper.find(Navbar));



})
/*
test('renders learn react link', () => {


  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
 expect(linkElement).toBeInTheDocument();
 
}); */