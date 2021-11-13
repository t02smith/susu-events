import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore/lite';

import db from '../firebase';

const crypto = require("crypto");
const shasum = crypto.createHash("sha256")

function UserHook() {
    const [user,setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    
    useEffect(() => {
        const username = localStorage.getItem("username");
        const token = localStorage.getItem("token");
        if (username && token) {;
            const tokenLogin = async () => await loginViaToken(JSON.parse(username), JSON.parse(token));
            tokenLogin();
        }

        // eslint-disable-next-line
    })

    useEffect(() => {
        setLoggedIn(user ? true: false);
    }, [user])

    const login = async (username, password, stayLoggedIn=false) => {
        const hash = shasum.update(password).digest('hex');
        const usr = await getUser(username);

        if (!usr) return false;

        if (usr.passwordHash === hash) {
            updateUserState(usr);
            setLoggedIn(true);

            if (stayLoggedIn) {
                localStorage.setItem("username", JSON.stringify(usr.username));
                localStorage.setItem("token", JSON.stringify(usr.token));
            }
            
            return true;
        } 

        return false;
    }

    const logout = async () => {
        setLoggedIn(false);
        setUser({});
    }

    const loginViaToken = async (username, token) => {
        const usr = await getUser(username);

        if (token === usr.token) {
            updateUserState(usr)
            setLoggedIn(true);
        }
    }

    const getUser = async(username) => {
        const id = await getId(username);
        const usr = await getUserById(id);
        return usr;
    }

    const getId = async (username) => {
        const configRef = doc(db, "users", "config");
        const configSnap = await getDoc(configRef);

        if (configSnap.exists()) {
            const data = configSnap.data().usernameToId;

            for (let usr in data) {
                if (data[usr].username === username) return data[usr].id;
            }
        }

        return null;
    }


    const getUserById = async (id) => {
        const usrRef = doc(db, "users", `${id}`);
        const usrSnap = await getDoc(usrRef);
        if (usrSnap.exists()) {
            return usrSnap.data()
        }
    }

    const updateUserState = (usr) => {
        setUser({...usr, id: getId(usr.username)})
    }

    return {
        user,
        loggedIn,
        getUser,
        login,
        logout,
    }
}

export default UserHook
