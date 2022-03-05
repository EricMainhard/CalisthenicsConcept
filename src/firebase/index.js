import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyDW-pM_udS1_XaxPn9vehlM0uH7Qe5yaRk",
    authDomain: "calisthenicsconcept.firebaseapp.com",
    projectId: "calisthenicsconcept",
    storageBucket: "calisthenicsconcept.appspot.com",
    messagingSenderId: "906648221111",
    appId: "1:906648221111:web:b644c1f772a7e25db6a432"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app
}