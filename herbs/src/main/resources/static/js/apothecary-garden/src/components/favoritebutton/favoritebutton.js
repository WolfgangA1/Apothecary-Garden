"use strict";

import React, { useEffect, useState } from 'react';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './style.module.scss';
import useSWR from 'swr'

// Separate all fetches because render hooks has an issue with rendering
// hooks a different amount of times in the same component

// THIS IS THE FAVORITE BUTTON
function FavoriteButton(props) {

    console.log(props)

    const [user, setUser] = useState(null);

    useEffect(() => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            setUser(JSON.parse(loggedInUser));
        }
    }, []);

    console.log("This is the user saved in local storage:", user)

    // IF USER IS NOT IN LOCAL STORAGE, ASKED TO LOG IN INSTEAD
    if (user === null) {
        return (
            <p className={styles['text_small']}><span>
                <a href="/login">Log in to bookmark this herb.</a>
            </span></p>);
    }
    return <FindInitialState userId={user.user_id} herbId={props.herbId}/>
}

function FindInitialState(props) {

    let favBool;

    const fetcher = url => fetch(url).then(r => r.json())
    const { data, error } = useSWR(`/api/users/${props.userId}/herbs/${props.herbId}`, fetcher)
    
    console.log("This user has this herb bookmarked??", data)
    if (error) return <div>failed to load</div>
    if (data === undefined) return <div>loading...</div>

    favBool = data;

    return <SetStateAndToggle favBool={favBool} userId={props.userId} herbId={props.herbId}/>
}

function SetStateAndToggle(props) {
    const currentlyAFavorite = <FontAwesomeIcon icon={faHeart} />
    const notCurrentlyAFavorite = <FontAwesomeIcon icon={faHeartBroken}/>

    const [favorite, setFavorite] = useState(props.favBool);


    // this toggles my button
    const toggleFavorite = (herbId) => {
        // const clickedHerb = target.value; //don't need target as argument either??

        // this sets the state for my selected herbs (adds/ removes)
        setFavorite((favorite) => {
          if (favorite == true) {
            console.log("I clicked unfavorite")
            console.log(props)
            fetch(`/api/users/${props.userId}/herbs/${herbId}/remove`, { method: 'POST' })
            .then(console.log("This was a favorited herb but now it isnt!"));

          }
          if (favorite == false) {
            console.log("I clicked favorite")
            fetch(`/api/users/${props.userId}/herbs/${herbId}/add`, { method: 'POST' })
            .then(console.log("This was not a favorited recipe. Now it is!"));
          }

          return !favorite;
        });
    }

    return (
        <button
            className={styles['favorite-button']}
            onClick={() => toggleFavorite(props.herbId)}
            key={props.herbId}>
        { favorite === true ? currentlyAFavorite : notCurrentlyAFavorite} 
        </button>
    );
}

export {FavoriteButton};