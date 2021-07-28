import axios from 'axios';

const addProduct=(payload)=>{
    var imageLinksList=payload.imageLinks.split(',').map(link=>link.trim());
    var videoLinksList=payload.videoLinks.split(',').map(link=>link.trim());
    delete payload.imageLinks;
    delete payload.videoLinks;
    payload={...payload,imageLinksList,videoLinksList};
    // console.log(JSON.stringify(payload));
    const url = 'http://localhost:8082/admin/product';
    return axios.post(url,payload);
}

export {addProduct};
