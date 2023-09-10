import { useState } from "react";
import styled from "@emotion/styled";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const Label = styled.label`
    color: var(--white);
    font-family: "lato", sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`;

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
`;
const Option = styled.option`
    text-align: center;
`;

const useSelectCurrency = (label, select, formValidationData, opt) => {
    const [state, setState] = useState("");
    const SelectCurrency = () => (
        <Div>
            <Label htmlFor={formValidationData}>{label}</Label>
            <Select
                value={state}
                name={formValidationData}
                id={formValidationData}
                onChange={(e) => setState(e.target.value)}
            >
                <Option value="" disabled>
                    - {select} -
                </Option>
                {opt.map((currency) => (
                    <Option key={currency.id} value={currency.id}>
                        {currency.name}
                    </Option>
                ))}
            </Select>
        </Div>
    );

    return [state, SelectCurrency];
};

export default useSelectCurrency;
