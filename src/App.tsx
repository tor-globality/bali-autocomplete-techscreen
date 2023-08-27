import React from 'react';

import { Autocomplete } from './components/Autocomplete';
import { TeamList } from './components/TeamList';

import Styled from './App.styles';

function App() {
    return (
        <Styled.App>
            <Styled.GlobalStyle />
            <header>
                <Styled.H2>Team Builder</Styled.H2>
            </header>
            <Styled.AppContainer>
                <Styled.ControlContainer>
                    <Autocomplete />
                </Styled.ControlContainer>
                <Styled.ListContainer>
                    <TeamList users={[]} />
                </Styled.ListContainer>
            </Styled.AppContainer>
        </Styled.App>
    );
}

export default App;
