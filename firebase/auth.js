import {firebase} from './firebase'

export const signup=async(Email,Password)=>{
    try {
        const {user}=await firebase.default.auth().createUserWithEmailAndPassword(Email,Password);
        return user.uid;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const login=async (Email,Password)=>{
    try {
        const {user}=await firebase.default.auth().signInWithEmailAndPassword(Email,Password);
        return user.uid;
    } catch (error) {
        throw new Error(error.message);
    }
}


export const createUser=async(data,userId)=>{
    try {
        const db=firebase.default.firestore()
        const {id}=await db.collection('users').doc(userId).set(data);
        console.log(id)
    } catch (error) {
        console.log(error.message)
    }
    
}