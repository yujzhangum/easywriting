import React, { Component } from "react";
import { connect } from 'react-redux';
import { CSSTransition } from "react-transition-group";
import { actionCreators } from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchInfo,
    SearchInfoItem,
    Addition,
    Button,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchWrapper
} from './style.js';
import { bindActionCreators } from "redux";
import { formatStrategyValues } from "rc-tree-select/lib/utils/strategyUtil";

class Header extends Component {
    getListArea() {
        const { focused, list, page, handleMouseEnter, handleMouseLeave, mouseIn, handleChangePage, totalPage } = this.props;
        const newList = list.toJS();
        const pageList = [];

        if (newList.length) {

            for (let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]} > {newList[i]} </SearchInfoItem>
                )

            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo>
                    <SearchInfoTitle
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}  >
                        TRENDING TOPIC
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage)}>UPDATE TOPIC</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {
                            pageList
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }





    render() {
        const { focused, handleInputFocus, handleInputBlur, list } = this.props;
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left active'>HOME</NavItem>
                    <NavItem className='left'>DOWNLOAD APP</NavItem>
                    <NavItem className='right'>SIGN IN</NavItem>
                    <NavItem className='right'>
                        <i className='iconfont'>&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe6d9;</i>
                        {this.getListArea(focused)}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'>
                        <i className='iconfont'>&#xe7c5;</i>
                        Start Writing
                    </Button>
                    <Button className='reg'>Create one</Button>
                </Addition>
            </HeaderWrapper>)
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page, totalPage) {
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            } else {
                dispatch(actionCreators.changePage(1));
            }
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Header); 