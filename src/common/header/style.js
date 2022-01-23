import { AutoComplete } from 'antd';
import { getRenderPropValue } from 'antd/lib/_util/getRenderPropValue';
import styled from 'styled-components';
import LogoPic from '../../statics/Logo.png'

export const HeaderWrapper = styled.div` 
    z-index:1;
    position: relative;
    height: 56px;
    borderd-bottom: 1px solid #f0f0f0;
` ;

export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    top:0;
    left:0;
    display:block;
    height: 56px;
    width: 100px;
    background:url(${LogoPic});
    background-size:contain;
`;

export const Nav = styled.div`
    width: 960px;
    height:100%;
    padding-right:70px;
    box-sizing:border-box;
    margin:0 auto;
`;

export const NavItem = styled.div`
    line-height:56px;
    padding: 0 15px;
    font-size:17px;
    color: #333;
    &.left {
        float:left;
    }
    &.right {
        float:right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: "Search"
})`
    width:160px;
    height:38px;    
    padding: 0 20px;
    margin-top: 9px;
    margin-left:20px;
    box-sizing: border-box;

    &.slide-enter {
        width: 160px;
        transition: all .2s ease-out;
    }
    &.slide-enter-active{
        width: 240px;
    }
    &.slide-exit {
        transition: all .2s ease-out;
    }
    &.slide-exit-active{
        width: 160px;
    }

    border:none;
    outline:none;
    boder-radius: 19px;
    background: #eee;
    fond-size:14px;
    color:#666;
    &::placeholder{
        color: #999;
    }
    &.focused {
        width:240px;
    }
`

export const SearchInfo = styled.div`
    position: absolute;
    left:0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow:0 0 8px rgba(0,0,0,.2);
`

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size:14px;
    color: #969696;

`

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size:13px;
`
export const SearchInfoList = styled.div`
    overflow: hidden;
`

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    font-size:12px;
    color: #787878;
    padding:0 5px;
    line-height: 20px;
    border: 1px solid #ddd;
    border-radius:3px;
    margin-right:10px;
    margin-bottom:15px;
`

export const Addition = styled.div`
    position: absolute;
    right:0;
    top:0;
    height:56px;
`
export const Button = styled.div`
    float:right;
    margin-top:9px;
    margin-rigth: 20px;
    padding: 0 20px;
    line-height:38px;
    border-radius:19px;
    border:1px solid #ec6149;
    font-size:14px;
    &.reg{
        color: #ec6149;
    }
    &.writting{
        color: #fff;
        background:#ec6149;
    }
`
export const SearchWrapper = styled.div`
    position:relative;
    float:left;
    .iconfont {
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        line-height:30px;
        border-radius:15px;
        text-align:center;
        
        &.focused {
            background: #777;
            color:#fff;
        }
    }
`;