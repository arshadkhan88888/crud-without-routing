import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FacebookIcon } from 'react-share';
import {FacebookButton} from "react-social";

const Api = () => {

    const [list, setList] = useState([])
    
    let url ='https://fake-api-placeholder.herokuapp.com/'

    useEffect(()=> {
        restApi()
    }, [])
    
    const restApi = async() => {
        await axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((res)=>{setList(res.data)})
    }

    return (
        <div>
            <h1>Json PlaceHolder</h1>
            
            <table className='table table-bordered table-info'>
                <thead>
                <tr>
                <th>Album id</th>
                <th>ID</th>
                <th>Title</th>
                <th>Url</th>
                <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((ele) =>
                            <tr>
                                <td>{ele.albumId}</td>
                                <td>{ele.id}</td>
                                <td>{ele.title}</td>
                                <td>{ele.url}</td>
                                <td><img src={ele.thumbnailUrl} /></td>
                                <td> <FacebookButton url={url} appId={264765292010240}>
                                <FacebookIcon size="35" round={true} />
                                </FacebookButton></td>
                            </tr>
                        )
                }
                </tbody>
            </table>
        </div>
    );
};

export default Api;