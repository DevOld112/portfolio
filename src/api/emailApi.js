import api from "../lib/axios";

export default {
    sendMail (formData){
        return api.post('/send', formData)
    }
}