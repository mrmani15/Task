import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Pagination from './components/Pagination';
import CustomerTable from './components/CustomerTable';
import Routes from './pages/Routes';
import RenderCustomerTable from './components/RenderCustomerTable';


it('snapshot for App component', () => {
  const tree = renderer.create(<App />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('snapshot for Home component', () => {
  const tree = renderer.create(<Home />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('snapshot for navbar component', () => {
  const tree = renderer.create(<Navbar />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('snapshot for pagination component', () => {
  const tree = renderer.create(<Pagination />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('snapshot for customerTable component', () => {
  const tree = renderer.create(<CustomerTable />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('snapshot for Routes component', () => {
  const tree = renderer.create(<Routes />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('snapshot for Table component', () => {
  const tree = renderer.create(<RenderCustomerTable />).toJSON();

  expect(tree).toMatchSnapshot();
});