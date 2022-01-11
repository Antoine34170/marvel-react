import Hero from './hero/Hero';
import axios from 'axios';
import { useEffect, useState } from "react"

function Heroes() {

    const [heroes, setHeroes] = useState(null);

    useEffect(() => {
        axios.get('https://gateway.marvel.com/v1/public/characters', {
            params: {
                ts: 1,
                apikey: "fb57f21d7f32820f929f39ed0896bf34",
                hash: "0d38747cce41c0fba94d1df240c6c724"
            }
        })
            .then(function (response) {
                setHeroes(response.data.data.results);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    console.log(heroes);

    return (
        <div className="container mx-3 ">
            <h1>Heroes.js works</h1>
            <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-4">
                {heroes == null ? <p>Loading</p> :
                    heroes.map((hero) => {
                        return (
                            <Hero
                                key={hero.id}
                                name={hero.name}
                                thumbnail={hero.thumbnail.path + "." + hero.thumbnail.extension}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Heroes
