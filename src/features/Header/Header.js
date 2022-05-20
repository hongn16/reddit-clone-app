import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineSearch } from 'react-icons/hi';
import { FaReddit } from 'react-icons/fa';
import { setSearchTerm } from '../../store/redditSlice';

import { HeaderDiv, LogoDiv, Span, SearchForm, SearchInput, SearchButton } from './HeaderStyles';

const Header = () => {
  const [searchTermLocal, setSearchTermLocal] = useState('');
  const searchTerm = useSelector((state) => state.reddit.searchTerm);
  const dispatch = useDispatch();

  const onSearchTermChange = (e) => {
    setSearchTermLocal(e.target.value);
  };

  useEffect(() => {
    setSearchTermLocal(searchTerm);
  }, [searchTerm]);

  const onSearchTermSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(searchTermLocal));
  };

  return (
    <HeaderDiv>
      <LogoDiv>
        <FaReddit style={{ gridColumn: "2/3", marginRight: "var(--spacing-1)", fontSize: "2rem" }} />
        <p>
          Reddit<Span>Clone</Span>
        </p>
      </LogoDiv>
      <SearchForm className="search" onSubmit={onSearchTermSubmit}>
        <SearchInput
          type="text"
          placeholder="Search"
          value={searchTermLocal}
          onChange={onSearchTermChange}
          aria-label="Search posts"
        />
        <SearchButton type="submit" onClick={onSearchTermSubmit} aria-label="Search">
          <HiOutlineSearch />
        </SearchButton>
      </SearchForm>
    </HeaderDiv>
  );
};

export default Header;
