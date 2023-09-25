import AppLayout from '../components/AppLayout';
import React from 'react';
import Head from 'next/head';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
  const followerList =[{nickname: '김소연'}, {nickname:'김승연'}, {nickname:'홍지민'}];
  const followingList =[{nickname: '김소연'}, {nickname:'김승연'}, {nickname:'홍지민'}];
  return (
  <>
  <Head>
    <title>내 프로필 | NodeBird</title>
  </Head>
  <AppLayout>
    <NicknameEditForm />
    <FollowList header='팔로잉 목록' data={followingList}/>
    <FollowList header='팔로워 목록' data={followerList}/>  
  </AppLayout>;
  </>
  )

};
export default Profile;
