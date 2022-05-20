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

export const VoteContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
`;

export const VoteButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: var(--color-text-secondary);
    padding: 0;
    display: flex;
    align-items: center;
    border-radius: var(--radius);
    &:hover {
        background: var(--color-on-hover);
    }
`;

export const VoteUps = styled.p`
    font-weight: bold;
`;
