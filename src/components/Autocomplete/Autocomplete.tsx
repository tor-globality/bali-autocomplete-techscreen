import React from 'react';

import { User } from '../../types';

import Styled from './Autocomplete.styles';

export interface AutocompleteProps {
    onChange?(selectedValues: User[]): void;
}

export const API_ENDPOINT = 'https://6rpxjg-3000.csb.app/users';

function Autocomplete({ onChange }: AutocompleteProps) {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    const [inputValue, setInputValue] = React.useState<string>('');

    const handleBlur = () => {
        setTimeout(() => {
            setIsOpen(false);
        }, 300);
    };

    const handleFocus = () => {
        setIsOpen(true);
    };

    const handleSearch = () => {
        // TODO: send search term to API test
        fetch(API_ENDPOINT)
            .then((response) => response.json())
            .then((results) => console.log(results))
            .catch((err) => console.log(err));
    };

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
        event,
    ) => {
        const inputValue = event.target.value;
        setInputValue(inputValue);
    };

    return (
        <Styled.Container>
            <Styled.Input
                type="text"
                placeholder="Search for a user"
                onBlur={handleBlur}
                onFocus={handleFocus}
                onChange={handleChange}
                value={inputValue}
            />
            {isOpen && (
                <Styled.Results>
                    {/* TODO: display search results */}
                </Styled.Results>
            )}
        </Styled.Container>
    );
}

export default Autocomplete;
