import { getAuth, signInAnonymously } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase-config';
import { Alert } from 'react-native';

class Fire {
    constructor() { // luon konstruktorin jona sisälle laitan authentikoinnin
        this.init()

        const auth = getAuth();
           signInAnonymously(auth)
.then(() => {
console.log('User signed in anonymously');
})
.catch(error => {
if (error.code === 'auth/operation-not-allowed') {
  console.log('Enable anonymous in your firebase console.');
}

console.error(error);
Alert.alert(error.message)
});

    }



    

    init = () => {
           const app = initializeApp(firebaseConfig); // hakee firebase config tiedot
};





    send = messages => { // luodaan send niminen muuttuja nimi nuolinotaatio funktiolle
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: getAuth().database.ServerValue.TIMESTAMP,
                user: item.user
            }

            this.db.push(message) // pushaa firebasen databaseen
        });
    };

    parse = message => {
        const {user, text, timestamp} = message.val()
        const {key: _id} = message
        const createdAt = new Date(timestamp)

        return {
            _id,
            createdAt,
            text,
            user
        };
    };

    get = callback => {
        this.db.on('child_added', snapshot => callback(this.parse(snapshot)));
    };

    off() {
        this.db.off()
    }

    get db() {
        return getAuth().database.ref("messages");
    }

    get uid() {
        return (getAuth().currentUser || {}.uid); // haetaan user id firebasesta
    }

}

export default new Fire();