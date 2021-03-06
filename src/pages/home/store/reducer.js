import { fromJS } from 'immutable';
import * as constants from './constant';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    articlePage: 1
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                articleList: fromJS(action.articleList)
            })
        case constants.ADD_ARTICLE_LIST:
            return state.merge({
                'articleList': state.get('articleList').concat(action.list),
                'articlePage': action.nextPage


            })
            return state.set('articleList', state.get('articleList').concat(action.list))
        default:
            return state;
    }
}

/*const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            title: 'Social Hotspot',
            imUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpEMOok9Gh1FRlTlQBVrMNOUF18R_GGxeb432tvm0FxlczMcrvb3DEAjkF_OhQlmXHTL4&usqp=CAU'
        },
        {
            id: 2,
            title: 'painting',
            imUrl: 'https://mymodernmet.com/wp/wp-content/uploads/2018/05/painting-ideas-3-1.jpg'
        },
        {
            id: 3,
            title: 'Moving',
            imUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsoNQiJGdw5ELrKyQHTfQnNfmAzk0VqB7Jxg&usqp=CAU'
        },
        {
            id: 4,
            title: 'Reading',
            imUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ03kuNORO_A6vNsHURFhSkQwoM8EeStqWhA&usqp=CAU'
        },
        {
            id: 5,
            title: 'Photography',
            imUrl: 'https://images.news18.com/ibnlive/uploads/2021/08/sun-photo.jpg'
        },
        {
            id: 6,
            title: 'Travel',
            imUrl: 'https://higherlogicdownload.s3.amazonaws.com/SRAINTERNATIONAL/UploadedImages/167e255a-8759-4a2f-92f6-591d6d8f7afb/Catalyst-pictures/Text-body-images/april2021/Picture_2_Travel.jpeg'
        },
        {
            id: 7,
            title: 'Food',
            imUrl: 'https://health.clevelandclinic.org/wp-content/uploads/sites/3/2019/06/cropped-GettyImages-643764514.jpg'
        }
    ],

    articleList: [
        {
            id: 1,
            title: 'Why Can???t We Just Say Goodbye?',
            desc: '???ve always found it odd when someone breaks up with you and insists they still want to be friends, still want to be in your life???and then you never hear from them again...',
            imUrl: 'https://miro.medium.com/max/700/1*KEPIAdx1IdGxgcutJ02IZw.jpeg'
        },
        {
            id: 2,
            title: 'After confronting death & Trump mob ???it???s an all-hands-on-deck moment??? to defend...',
            desc: 'The Vermont Conversation with David Goodman is a VTDigger podcast that features in-depth interviews on local and national...',
            imUrl: 'https://miro.medium.com/max/1400/0*ndqBtpXf9hv1cXhf.jpg'
        },
        {
            id: 3,
            title: '10 Forecasts For The Near Future Of Tech ????',
            desc: 'How will work and life change in a material way over the next ~5 years? This is the question I challenge myself to think about every...',
            imUrl: 'https://miro.medium.com/fit/c/200/134/1*emn47TqJGkm9cuWY1UaUnQ.jpeg'
        },
        {
            id: 4,
            title: 'Ode to Teenhood',
            desc: 'There???s this Sylvia Plath poem called Mad Girl???s Love Song. It might just be the epitome of teen romance, but alas, discrediting one???s...',
            imUrl: 'https://miro.medium.com/fit/c/200/134/1*46ac0Lwrj2sctKNppQxbJg.png'
        }]
})*/
