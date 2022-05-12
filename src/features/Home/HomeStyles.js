import styled from "styled-components";

export const ErrorDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ErrorButton = styled.button`
    color: var(--color-text-invert);
    background: var(--color-branding);
    border: none;
    border-radius: var(--radius);
    font-size: 1rem;
    padding: var(--spacing-2) var(--spacing-4);
    cursor: pointer;
`;