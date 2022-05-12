import styled from 'styled-components';

export const CommentDiv = styled.div`
    background: var(--color-background);
    margin: var(--spacing-1) 0;
    padding: var(--spacing-2);
    transition: box-shadow 0.1s ease-in;
    border-radius: var(--border-radius);

    &:hover {
        box-shadow: var(--box-shadow);
    }
`;

export const MetaData = styled.div`
    display: flex;
    margin-bottom: var(--spacing-2);
    align-items: center;
`;

export const Author = styled.p`
    font-weight: bold;
    color: var(--color-branding);
`;

export const CreatedTime = styled.p`
    margin-left: auto;
    font-style: italic;
`;
