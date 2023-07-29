import Cookies from 'js-cookie';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
    let token = Cookies.get('token')
    console.log(token)
    if (token) {
        console.log('Cookie token is: ', token)
    }

    const response = await resolve(event);
    return response;
}