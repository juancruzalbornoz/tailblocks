import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, query, where, getDoc } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAXn1cIWQ_Soxv4MGnnWQn872j1EnqWTWE",
    authDomain: "react-ecommerce-31220.firebaseapp.com",
    projectId: "react-ecommerce-31220",
    storageBucket: "react-ecommerce-31220.appspot.com",
    messagingSenderId: "337639871512",
    appId: "1:337639871512:web:6e191e5593acfad3cb9f6d"
};

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export default firestoreDB;

// obtener todos los items async/await sugar syntax promises
export async function getAllItems() {
    //obtenemos la ref a la collection
    const myCollection = collection(firestoreDB, 'products');
    //obtenemos los items
    // getDocs(myCollection).then(result => console.log(result));
    const productsSnap = await getDocs(myCollection);

    return productsSnap.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id
        }
    });
}

//obtener todos los de una categoria
export async function getItemsByCategory(categoryId) {
    const myCollection = collection(firestoreDB, 'products');
    const queryProducts = query(myCollection, where("category", "==", categoryId))
    const productsSnap = await getDocs(queryProducts);
    return productsSnap.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id
        }
    });
}

//obtener un solo item por id para item detal
export async function getItem(id) {
    const myCollection = collection(firestoreDB, 'products');
    const productRef = doc(myCollection, id);
    const productsSnap = await getDoc(productRef);
    return {
            ...productsSnap.data(),
            id: productsSnap.id
        };
}