interface ICard {
    id: number,
    paragrafo: string
    details: string,
}

export const Card = ({ id, paragrafo, details }: ICard) => {
    return (
        <div>
            <h1>Card {id}</h1>
            <p>{paragrafo}</p>
            <p>{details}</p>
        </div>
    )

}