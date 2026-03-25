const List = ({people}) => {
    return(
        <div>
            <section>
                {people.map((person) => {
                    return(
                        <Person key = {person.key} {...person}>

                        </Person>
                    )
                })}
            </section>
        </div>
    )
}

export default List;