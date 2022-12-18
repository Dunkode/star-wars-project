import { db } from './FirebaseConnect'
import { collection, addDoc, getDocs } from "firebase/firestore";


export function addDoubt(name, contact, doubt) {
    return new Promise(async (resolve, reject) => {
        try {
            const docRef = await addDoc(collection(db, "doubts"), {
                name: name,
                contact: contact,
                doubt: doubt
            });
            resolve(docRef.id)

        } catch (e) {
            reject(e)
        }
    })
}


export function getDoubts() {
    return new Promise(async (resolve, reject) => {
        let doubts = []
        try {
            const query = await getDocs(collection(db, "doubts"))
            query.forEach((doc) =>
                doubts.push({
                    id: doc.id,
                    ...doc.data()
                })
            )
            resolve(doubts)
        } catch (e) {
            reject(e)
        }
    })
}