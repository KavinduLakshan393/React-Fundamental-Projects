import Person from './Person';

const List = ({people}) => {
    return(
        <div>
            <section>
                {people.map((person) => {
                    return(
                        <Person key={person.id} {...person}>

                        </Person>
                    )
                })}
            </section>
        </div>
    )
}

export default List;