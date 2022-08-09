import axios from 'axios';

class RolesService {
     
    constructor(){
        this.url = 'http://localhost:8085/api/codesa-test/';
    }

     async getAll(){
        const response = await axios.get(this.url+'roles/getAll');
        return response.data;
     }
}

export default new RolesService();