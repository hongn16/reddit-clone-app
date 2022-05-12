import styled from 'styled-components';

export const HeaderDiv = styled.header`
    color: #FFA500;
    background: var(--color-foreground);
    box-shadow: var(--box-shadow);
    height: 64px;
    padding: 0 var(--spacing-5);
`;

export const LogoDiv = styled.div`
    font-weight: bold;
    padding: var(--spacing-1) 0;
    grid-column: 1/2;
    display: flex;
    align-items: center;
`;

export const Span = styled.span`
    color: var(--color-text-header);
`;

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
`;

export const SearchInput = styled.input`
    flex-grow: 1;
    background: var(--color-background-secondary);
    border: none;
    padding: var(--spacing-1) var(--spacing-2);
    height: max-content;
    border-radius: var(--radius);
`;

export const SearchButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: var(--color-text-secondary);
    font-size: 1.5rem;
`




