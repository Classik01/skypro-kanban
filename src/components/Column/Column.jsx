import Card from "../Card/Card"

function Column({title}) {
    return (
        <div className="main__column column">
            <div className="column__title">
                <p>{title}</p>
            </div>
            <div className="cards">
                <Card name = {"Название темы"} theme={"Web Design"} date={"30.10.23"}/>
                <Card name = {"Название темы"} theme={"Research"} date={"30.10.23"}/>
                <Card name = {"Название темы"} theme={"Copywriting"} date={"30.10.23"}/>
                <Card name = {"Название темы"} theme={"Copywriting"} date={"30.10.23"}/>
            </div>
        </div>
    )
}
export default Column