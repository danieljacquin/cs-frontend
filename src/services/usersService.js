import axios from 'axios';

class UserService {
     
    constructor(){
        this.url = 'http://localhost:8085/api/codesa-test/';
    }

     async getAll(){
        const response = await axios.get(this.url+'users/getAll');
        return response.data;
     }

     async create(user){
        try {
            const response = await axios.post(this.url+'users/create', user);
            return response.data
        } catch (error) {
            return error.response.data;
        }
        
     }

     async update(user){
        try {
            const response = await axios.put(this.url+'users/update', user);
            return response.data
        } catch (error) {
            return error.response.data;
        }
        
     }
}

export default new UserService();