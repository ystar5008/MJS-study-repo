const axios = require('axios');

async function showAvatar() {

    try {
        const response = await axios.get('https://koreanjson.com/posts/2');
        const user = response.data;
        console.log(user);
    } catch (error) {
        console.error('Error fetching data:', error);
    } try {
        const response = await axios.get(`https://api.github.com/users/${user.name}`);
        const githubUser = response.data;
        console.log(githubUser);
    } catch (error) {
        console.error('Error fetching data:', error);
    }

    return githubUser;
}

showAvatar();