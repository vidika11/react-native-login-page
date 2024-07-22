import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import {Slot, useRouter, useSegments} from "expo-router";
import "../global.css";
import { AuthcontextProvider ,useAuth} from '../context/authcontext';

const MainLayout = ()=>{
  const {isAuthenticated} = useAuth();
  const segments =useSegments();
  const router = useRouter()

 useEffect(()=>{
  if (typeof isAuthenticated=='undefined')return;
  const inApp = segments[0]=='(App)';
  if(isAuthenticated && !inApp){
    router.replace('home');
  }else if (isAuthenticated==false){
    router.replace('signin');
    //redirect to signin
  }
 },[isAuthenticated])
 return <Slot/>



}


export default function Rootlayout() {
  return (
    <AuthcontextProvider>
      <MainLayout/>
    </AuthcontextProvider>
  )
}
