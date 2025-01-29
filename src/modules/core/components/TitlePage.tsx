

interface Props {

    title: string;
    description: string;

}

export const TitlePage = ({ description, title }: Props) => {
    return (
        <div>
            <h1 className="text-3xl">{ title }</h1>
            <p>{ description }</p>
        </div> 
    )
}
