import React, {useEffect, useState} from 'react';
import styled, {css} from "styled-components";
import {BsSearch} from "react-icons/all";
import {navigate} from "../../helpers/HistoryHelper";
import {useSelector} from "react-redux";

const SearchBar = (props) => {

    const {
        type, // default || 'main' : 헤더  디폴트
        placeholder = 'Search free high-resolution photos',
        style,
        className
    } = props;
    const {keyword} = useSelector(state => state.photos);
    const [value, setValue] = useState(keyword);

    useEffect(()=>{
        setValue(keyword)
    },[keyword])

    function onSubmit() {
        navigate(`/search/photos/${value}`)
    }

    return (
        <Wrapper type={type} style={style} className={className}>
            <Icon onClick={onSubmit}>
                <BsSearch size={19} color={'#999'}/>
            </Icon>
            <input type="text"
                   placeholder={placeholder}
                   value={value}
                   onChange={(e) => setValue(e.target.value)}
                   onKeyPress={(e) => {
                       if(e.key === 'Enter') {
                           onSubmit()
                       }
                   }}/>
        </Wrapper>
    )
};

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  height: 38px;
  border-radius: 25px;
  background: #eee;
  input {
    width: 100%;
    height: 100%;
    font-size: 14px;
  }
  ${props => props.type === 'main' && css`
     height: 54px;
     border-radius: 3px;
     background:#fff;
     input{
       font-size: 17px;
       &::-webkit-input-placeholder {
          font-size: 16px;
       }
     }
  `}
`;

const Icon = styled.div`
  padding: 3px 15px 0;
  cursor:pointer;
`;

export default SearchBar;