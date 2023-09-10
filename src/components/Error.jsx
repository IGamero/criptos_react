import styled from "@emotion/styled";

const ErrorText = styled.div`
    background-color: var(--error-color);
    color: var(--white);
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: "lato", sans-serif;
    font-weight: 700;
    text-align: center;
    border-radius: 10px;
`;

const Error = ({ children }) => {
    return <ErrorText>{children}</ErrorText>;
};

export default Error;
