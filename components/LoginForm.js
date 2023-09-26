import React, {useState, useCallback} from 'react';
import {Form, Input, Button} from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

const ButtonWrapper = styled.div`
    margin-top: 10px;
`;
//태그안에서 직접 스타일을 조절하게 되면 버츄얼 돔이 객체가 바뀌었다고 인식해서 리랜더링 시킴 => 성능상 좋지않음 
const FormWrapper = styled(Form)`
    padding: 10px;
`
const LoginForm =({setIsLoggedIn})=>{
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
  

    const onSubmitForm =useCallback(()=>{
        console.log(id,password);
        setIsLoggedIn(true);   
    },[id, password]);

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor='user-id'>아이디</label>
                <br />
                <Input name='user-id' value={id} onChange={onChangeId} required/>
            </div>
            <div>
                <label htmlFor='user-password'>비밀번호</label>
                <br />
                <Input name='user-password' type='password' value={password} onChange={onChangePassword} required/>
            </div>
            <ButtonWrapper>
                <Button type='primary' htmlType='submit' loading={false}>로그인</Button>
                <Link href='/signup'><a><Button>회원가입</Button></a></Link>
            </ButtonWrapper>
        </FormWrapper>
    );
}
LoginForm.propTypes ={
    setIsLoggedIn : PropTypes.func.isRequired,
}
export default LoginForm;