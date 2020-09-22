const IP = 'https://heired-server.herokuapp.com' // 192.168.0.59
const URL = {
    GET_ENTRIES: `http://${IP}/api/entries`,
    POST_LOGIN: `http://${IP}/api/login`,
    POST_REGISTER: `http://${IP}api/register`,
    API_USER: `http://${IP}/api/user`,
    INFO_COMMENTS: `http://${IP}/info/comments`,
    ADD_ENTRY: `http://${IP}/api/addEntry`,
    EDIT: `http://${IP}/api/edit`,
    ADD_POP: `http://${IP}/api/addPop`,
    IP: `${IP}`
}
export default URL