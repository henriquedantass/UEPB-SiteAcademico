import styled from 'styled-components';

export const Container = styled.div`

`;

export const Nav = styled.div`
    background-color: #4682B4;
    height: 100vh;
    left: 0;
    overflow-y: auto;
    padding: 2rem;
    position: fixed;
    width: 200px;
    z-index: 99999;
`;

export const Logo = styled.img`
    height: 100px;
    margin-right: 20px;

`;
export const Link = styled.button`
    background-color: transparent;
    color: white;
    font-size: 1rem;
    line-height: 2;
    text-align: left;
    width: 140px;

    &:hover {
        color: #f1f1f1;
    }


`;