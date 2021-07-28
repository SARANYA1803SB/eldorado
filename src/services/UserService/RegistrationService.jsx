import axios from 'axios';

export const RegistrationService = (data) => {
    axios.post('http://localhost:8082/admin/product', data,
        {
            headers: {
                "Content-Type" : "application/json"
            }
        }).then((response => this.setState({ articleId: response.data.id })));
}