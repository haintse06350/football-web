import React from 'react';
import { NavBar } from '../components/NavBar';
import { Search } from '../components/Search';

export const Header = class extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Search />
      </div>
    )
  }
}