import styled from 'styled-components';

const Container = styled.div`
    position: relative;
`;

const Input = styled.input`
    flex: 0 0 auto;
    appearance: none;
    width: 100%;
    padding: 4px 8px;
    margin-bottom: 1px;
    border: 0;
    border-bottom: 1px solid #ccc;
    transition: 150ms border-bottom-color;

    &:hover,
    &:focus {
        outline: 0;
        margin-bottom: 0;
        border-bottom: 2px solid #0066aa;
    }
`;

const Result = styled.li`
    list-style: none;
    padding: 8px 16px;
    cursor: pointer;

    &:hover,
    &:focus {
        background-color: #def;
    }
`;

const Results = styled.ul`
    position: absolute;
    top: 100%;
    width: 100%;
    max-height: 300px;
    margin: 8px 0;
    padding: 0;
    overflow: auto;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 24px 1px rgba(0, 0, 0, 0.15), 0 0 2px rgba(0, 0, 0, 0.1);
`;

export default {
    Container,
    Input,
    Result,
    Results,
};
