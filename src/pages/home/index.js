import React, { PureComponent } from 'react';
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import List from './components/List';
import axios from 'axios';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { BackTop } from 'antd';

class Home extends PureComponent {

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="https://s2982.pcdn.co/wp-content/uploads/2022/01/book-club-books-2022.jpg.webp" alt='' />
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend>
                    </Recommend>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>

        )
    }

    componentDidMount() {
        this.props.changeHomeData();
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action = actionCreators.getHomeInfo();
        dispatch(action);
    }
})

export default connect(null, mapDispatch)(Home);