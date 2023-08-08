import Cookies from "js-cookie";


function getJWTToken(){
    const token = Cookies.get('jwtToken');
    return token;
}
 export default getJWTToken;

