import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';
import { code } from '../.dev'

const client_id = '8d269c17f07d4409bf7048a0aa1acc4a'
const client_secret = '396a27a8a41248528f9bbebbbc2c23b9'

async function getToken() {
    console.log("getToken", code);
    try {
        const res = await axios.get('https://accounts.spotify.com/api/token', {
            headers: {
                'Authorization': `Bearer `
            }
        });
        console.log(res.data);
        return res.data;
    } catch (error) {
        console.error(error);
    }
}

async function getArtist(id, token) {
    try {
        const res = await axios.get(`https://api.spotify.com/v1/artists/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        //console.log(res.data);
        return res.data;
    } catch (error) {
        console.error(error);
    }
}

async function getProfile(token) {
    try {
        const res = await axios.get('https://api.spotify.com/v1/me', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        //console.log(res.data);
    } catch {
        console.error(error);
    }
}

console.log("getToken", await getToken());
//console.log("Artist", await getArtist('12GqGscKJx3aE4t07u7eVZ?si=ySfGfe9cSzCpoDq-qMKSLA', '396a27a8a41248528f9bbebbbc2c23b9'));
//console.log("Profile", await getProfile('396a27a8a41248528f9bbebbbc2c23b9'))