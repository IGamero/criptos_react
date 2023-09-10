import { useEffect, useState } from "react";
import styled from "@emotion/styled";

import Form from "./components/Form";
import Result from "./components/Result";
import Spinner from "./components/Spinner";

import ImgCripto from "./img/imagen-criptos.png";
import { callCalculatorAPI } from "./helpers/api";

const Container = styled.div`
    max-width: 900px;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 932px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }
`;

const Image = styled.img`
    max-width: 400px;
    width: 80%;
    margin: 100px auto 0 auto;
    display: block;

    @media (max-width: 932px) {
        display: none;
    }
`;

// Convierte el elemento en lo indicado tras styled.ELEMENTO(por ejemplo package, h1, div...)
const Heading = styled.h1`
    font-family: "Lato", sans-serif;
    color: #fff;
    text-align: center;
    font-weight: 700;
    margin-top: 80px;
    margin-bottom: 50px;
    font-size: 34px;

    &::after {
        content: "";
        width: 150px;
        height: 6px;
        background-color: var(--light-blue);
        display: block;
        margin: 10px auto 0 auto;
    }

    /* @media (max-width: 932px) {
        margin-top: 5rem;
    } */
`;

function App() {
    const [formData, setFormData] = useState({});
    const [calcData, setCalcData] = useState({});
    const [spinner, setSpinner] = useState(false);

    useEffect(() => {
        if (Object.keys(formData).length > 0) {
            // Funcionalidad calculadora
            const { currency, crypto } = formData;
            const getCalc = async () => {
                setSpinner(true);
                const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`;

                setCalcData(await callCalculatorAPI(url, currency, crypto));
                setSpinner(false);
            };
            getCalc();
        }
    }, [formData]);

    return (
        <Container>
            <Image src={ImgCripto} alt="Imagen criptomonedas" />

            <div>
                <Heading>Cotiza Criptomonedas al Instante</Heading>
                <Form setFormData={setFormData} />
                {spinner ? (
                    <Spinner />
                ) : (
                    Object.keys(calcData).length > 0 && (
                        <Result data={calcData} />
                    )
                )}
                {}
            </div>
        </Container>
    );
}

export default App;
