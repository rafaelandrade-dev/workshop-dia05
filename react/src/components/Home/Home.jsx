import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'


function Home() {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        async function getCharacters() {
            const response = await fetch('https://stranger-things-api.fly.dev/api/v1/characters')

            const data = await response.json()

            setCharacters(data)
        }

        getCharacters()
    }, [])


    return (

        <div>
            <h1>Personagens</h1>
            <ul>
                {
                    characters.map((character) => {
                        return (
                            <>
                            {
                                characters.length === 0 ? (
                                    <span>LOADING...</span>
                                )
                                :
                                (
                                    <li key={character._id}>
                                        <Link to={`/details/${character._id}`}>
                                            {character.name}
                                        </Link>
                                    </li>
                                )
                            }
                            </>

                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Home