import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html,
    body {
        height: 100%;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: sans-serif;
        background: #def;
    }
`;

const H2 = styled.h2`
    margin-bottom: 1em;
    font-weight: 400;
    color: #333;
`;

const App = styled.main`
    display: flex;
    flex-direction: column;
    width: 800px;
    max-width: 80vw;
    height: 400px;
    border-radius: 8px;
    background: #fff;
    padding: 24px;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.15);
`;

const AppContainer = styled.div`
    display: flex;
    flex: 1;
`;

const ControlContainer = styled.section`
    flex: 0 1 50%;
    padding-right: 24px;
    border-right: 1px solid #eee;
`;

const ListContainer = styled.aside`
    flex: 0 1 50%;
    padding-left: 24px;
    overflow: auto;
`;

export default {
    App,
    AppContainer,
    ControlContainer,
    GlobalStyle,
    H2,
    ListContainer,
};
