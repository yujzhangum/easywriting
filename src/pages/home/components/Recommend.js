import React, { PureComponent } from 'react';
import { RecommendWrapper, RecommendItem, RecommendItem2, RecommendItem3, RecommendItem4, RecommendItem5 } from '../style';

class Recommend extends PureComponent {
    render() {
        return (
            <RecommendWrapper>
                <RecommendItem>
                    <h1 className='title'>HOT TOPICS</h1>
                </RecommendItem>
                <RecommendItem2>
                    <h1 className='title'>FEATURED ARTICLES</h1>
                </RecommendItem2>
                <RecommendItem3>
                    <h1 className='title'>APPLY FOR COPYRIGHT</h1>
                </RecommendItem3>
                <RecommendItem4>
                    <h1 className='title'>BECOME VIP</h1>
                </RecommendItem4>
                <RecommendItem5>
                    <h1 className='title'>TRENDING ON EASYWRITING</h1>
                </RecommendItem5>
            </RecommendWrapper>
        )
    }
}

export default Recommend;

