import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow: hidden;
    width: 960px;
    margin: 0 auto;

`;

export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    .banner-img{
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
`;

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    margin-left: -10px;
    border-bottom:1px solid #dcdcdc;
`

export const TopicItem = styled.div`
    float:left;
    height: 32px;
    line-height:32px;
    padding-right: 10px;
    background: #f7f7f7;
    margin-left: 18px;
    font-size: 14px;
    color: #000;
        margin-bottom: 18px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic{
        width: 32px;
        height:32px;
        display: block;
        float:left;
        margin-right: 10px;
    }

`

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic{
        display: block;
        width: 125px;
        height: 100px;
        float:right;
        border-radius: 10px;
    }
`
export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title{
        line-height:27px;
        font-size: 18px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        line-height:24px;
        font-size:13px;
        color: #999;
    }

`
export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`
export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background:#F9E79F;
    border-radius: 10px;
    backgroud-size: contain;
    margin-bottom: 5px;
    .title{
        color: #FDFEFE ;
        text-align: center;
        padding: 15px 0;
        font-style:italic;
    }
`
export const RecommendItem2 = styled.div`
    width: 280px;
    height: 50px;
    background:#82E0AA;
    border-radius: 10px;
    backgroud-size: contain;
    margin-bottom: 5px;
    .title{
        color: #FDFEFE ;
        text-align: center;
        padding: 15px 0;
        font-style:italic;
    }
`
export const RecommendItem3 = styled.div`
    width: 280px;
    height: 50px;
    background:#5DADE2;
    border-radius: 10px;
    backgroud-size: contain;
    margin-bottom: 5px;
    .title{
        color: #FDFEFE ;
        text-align: center;
        padding: 15px 0;
        font-style:italic;
    }
`
export const RecommendItem4 = styled.div`
    width: 280px;
    height: 50px;
    background:#2471A3;
    border-radius: 10px;
    margin-bottom: 5px;
    backgroud-size: contain;
    .title{
        color: #FDFEFE ;
        text-align: center;
        padding: 15px 0;
        font-style:italic;
    }
`
export const RecommendItem5 = styled.div`
    width: 280px;
    height: 50px;
    background:#C39BD3;
    border-radius: 10px;
    backgroud-size: contain;
    margin-bottom: 5px;
    .title{
        color: #FDFEFE ;
        text-align: center;
        padding: 15px 0;
        font-style:italic;
    }
`

export const LoadMore = styled.div`
    width: 100%;
    height:40px;
    line-height:40px;
    background:#a5a5a5;
    margin:30px 0;
    text-align:center;
    border-radius:20px;
    color:#fff;
    cursor: pointer;
`
