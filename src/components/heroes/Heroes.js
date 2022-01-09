import axios from 'axios';
import { useEffect } from "react"

function Heroes() {

    const httpRequest = () => {
    }
    axios.get('https://gateway.marvel.com/v1/public/characters', {
        params: {
            ts: 1,
            apikey: "fb57f21d7f32820f929f39ed0896bf34",
            hash: "0d38747cce41c0fba94d1df240c6c724"
        }
    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // always executed
        });

    return (
        <div>
            <h1>Heroes.js works</h1>
        </div>
    )
}


export default Heroes
