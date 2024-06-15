import { initializeApp } from "firebase/app";

import { getDatabase , ref , onValue , set } from "firebase/database";
import { firebaseConfig} from "../library/config" ;

const app = initializeApp(firebaseConfig);
const db = getDatabase(app) ;
const usersRef = ref(db , 'users/') ;
onValue(usersRef ,(snapshot) => {
    const data = snapshot.val();
    console.log(data);
})

function writeUserData(userId, name, gender, mail){
    set(ref(db, 'users/' , userId),{
        username: name ,
        email: mail ,
        gender: gender ,

    })
    .then(() => {
        alert('User data saved successfully!');
    }).catch(error => {
        console.error('Error writing user data: ', error);
    });
}

console.log(writeUserData());



