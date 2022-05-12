import styled from 'styled-components';

export const CardDiv = styled.div`
    background: var(--color-foreground);
    box-shadow: var(--box-shadow);
    margin-bottom: var(--spacing-4);
    border-radius: var(--radius);
    padding: var(--spacing-3);
    transition: box-shadow 0.1s ease-in;
    color: var(--color-text-secondary);
    width: 1000px;

    &:hover {
        box-shadow: var(--box-shadow-hover);
    }
`;