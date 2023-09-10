import { useEffect, useState } from "react";

import styled from "@emotion/styled";

import useSelectCurrency from "../hooks/useSelectCurrency";

import Error from "./Error";

import { currencies } from "../data/currencies";
import { callCryptoAPI } from "../helpers/api";

const InputSubmit = styled.input`
    background-color: var(--light-purple);
    border: none;
    width: 100%;
    padding: 10px;
    color: var(--white);
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    margin-top: 30px;

    &:hover {
        background-color: var(--dark-purple);
        cursor: pointer;
    }
`;

const Form = ({ setFormData }) => {
    const [cryptos, setCryptos] = useState([]);
    const [error, setError] = useState(false);

    const [currency, SelectCurrency] = useSelectCurrency(
        "Elije tu Moneda",
        "Seleccione Moneda",
        "currency",
        currencies
    );
    const [crypto, SelectCrypto] = useSelectCurrency(
        "Elije tu Criptomonedas",
        "Seleccione Criptomoneda",
        "cryptoCoin",
        cryptos
    );

    useEffect(
        () => {
            const getCryptos = async () => {
                const url =
                    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

                setCryptos(await callCryptoAPI(url));
            };

            getCryptos();
        },
        [
            /* Cuando este componente este listo se llamará la funcion */
        ]
    );
    // const [SelectCryptocoin] = useSelectCurrency("Elije tu Criptomoneda");
    // SelectCurrency(); // Podemos llamarlo como funcion o como componente

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(currency, crypto)

        if ([currency, crypto].includes("")) {
            setError(true);
            return;
        }

        setError(false);
        setFormData({
            currency,
            crypto,
        });
    };

    return (
        <>
            {error && <Error>Todos los campos son obligatorios</Error>}
            <form onSubmit={handleSubmit}>
                <SelectCurrency />{" "}
                {/* Aqui es donde se esta utilizando el hook */}
                <SelectCrypto />
                {/* {currency} */}
                {/* <SelectCryptocoin /> */}
                <InputSubmit type="submit" value="Cotizar" />
            </form>
        </>
    );
};

export default Form;
