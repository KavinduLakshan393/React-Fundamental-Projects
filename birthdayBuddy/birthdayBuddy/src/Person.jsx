const Person = ({image, name, age}) => {
    return(
        <article>
            <img src={image} alt={name} className='img'/>
            <div>
                <h4>
                    {name}
                </h4>
                <h4>
                    {age} years
                </h4>
            </div>
        </article>
    )
}

export default Person;