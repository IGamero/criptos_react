import styled from "@emotion/styled";

const ResultDiv = styled.div`
    color: var(--white);
    font-family: "lato", sans-serif;

    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`;

const Image = styled.img`
    display: block;
    width: 120px;
`;

const Text = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`;
const PriceText = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`;

const Result = ({ data }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
        data;
    return (
        <ResultDiv>
            <Image
                src={`https://cryptocompare.com/${IMAGEURL}`}
                alt="Imagen crypto"
            />
            <div>
                <PriceText>
                    El Precio es de: <span>{PRICE} </span>
                </PriceText>
                <Text>
                    Precio más alto del día: <span>{HIGHDAY} </span>
                </Text>
                <Text>
                    Precio más bajo del día: <span>{LOWDAY} </span>
                </Text>
                <Text>
                    Variación en las ultimas 24H:{" "}
                    <span>{CHANGEPCT24HOUR} </span>
                </Text>
                <Text>
                    Última actualización: <span>{LASTUPDATE} </span>
                </Text>
            </div>
        </ResultDiv>
    );
};

export default Result;
