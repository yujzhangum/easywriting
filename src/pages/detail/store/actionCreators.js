import axios from 'axios';
import * as constants from './constant'

const changeDetail = (title, content) => ({
    type: constants.CHANGE_DETAIL,
    title,
    content
})

export const getDetail = () => {
    return (distpacth) => {
        axios.get('/api/detail.json').then((res) => {
            const result = res.data.data;
            distpacth(changeDetail(result.title, result.content))
        })
    }
}