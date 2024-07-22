import { View, Text,Image } from 'react-native'
import React, { useRef ,useState} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Feather, Octicons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Alert } from 'react-native';
import Loading from '../components/Loading';
export default function signup()
{
  const router= useRouter();
  const [loading , setLoading] = useState(false);

  const emailRef= useRef("");
  const passwordRef= useRef("");
  const usernameRef =useRef("");
  const profileRef = useRef("");
  const handleRegister= async ()=>{
       if(!emailRef.current || !passwordRef.current || !usernameRef.current || !profileRef.current  )
      Alert.alert('sign up','please fill all the fields');
      return;
      };
  return (
    <View style={{flex:1}}>
      <StatusBar style="dark"/>
    <View style={{flex:1,gap:12,paddingTop:hp(7),paddingHorizontal:wp(5)}}>
      {/* signin image */}
      <View style={{alignItems:"center"}}>
        <Image style={{height:hp(25)}}resizeMode='contain' source={require('../assets/images/signup.png')}/>
       </View>
       <View style={{gap:10}}>
      <Text style={{fontSize:hp(4),textAlign:'center',
        fontWeight:'bold'
        }}>Sign In</Text>
        {/*input*/}
        <View style={{gap:8}}>
            <View style={{height:hp(7),
                  gap:4,
                   borderRadius:2,
                   paddingHorizontal:hp(4),
                   alignItems:'center',
                   backgroundColor:"neutral"}}>
            <Feather name="user" size={hp(2.7)} color="gray"/>
            <TextInput onChangeText={value=> usernameRef.current=value}
              style={{flex:1,
             color:"gray",
             fontSize:hp(2)}}
             placeholder="username"
             placeholderTextColor={'gray'}/>
            </View>
                <View style={{height:hp(7),
                 gap:4,
                 borderRadius:2,
                 paddingHorizontal:hp(4),
                 alignItems:'center',
                 backgroundColor:"neutral"}}>
              <Octicons name="lock" size={hp(2.7)} color="gray"/>
              <TextInput onChangeText={value=> emailRef.current=value}
              style={{flex:1,
                color:"gray",
                fontSize:hp(2)
              }}
              placeholder='Email Address'
              placeholderTextColor={'gray'}
              />
            </View>

            <View style={{height:hp(7),
                 gap:4,
                 borderRadius:2,
                 paddingHorizontal:hp(4),
                 alignItems:'center',
                 backgroundColor:"neutral"}}>
              <Octicons name="lock" size={hp(2.7)} color="gray"/>
              <TextInput onChangeText={value=> passwordRef.current=value}
              style={{flex:1,
                color:"gray",
                fontSize:hp(2)
              }}
              placeholder='password'
              placeholderTextColor={'gray'}
              secureTextEntry/>
            </View>


            <View style={{height:hp(7),
                 gap:4,
                 borderRadius:2,
                 paddingHorizontal:hp(4),
                 alignItems:'center',
                 backgroundColor:"neutral"}}>
              <Feather name="image" size={hp(2.7)} color="gray"/>
              <TextInput onChangeText={value=> profileRef.current=value}
              style={{flex:1,
                color:"gray",
                fontSize:hp(2)
              }}
              placeholder='profileurl'
              placeholderTextColor={'gray'}/>
              
            </View>


        </View>
        {/*submit button*/}
        <View>
          {
            loading? (
              <View style={{justifyContent:'center'}}> 
              <Loading size={hp(5)} />
             </View>
            ):(
              <Pressable onPress={handleRegister}style={{backgroundColor:'black',marginTop:22,borderRadius:44,height:hp(4)}}>
              <Text style={{fontSize:hp(2.7),color:'white',fontWeight:'bold', textAlign:'center'}}>
                Sign up
              </Text>
            </Pressable>
            )
          }
        </View>
           <View style={{justifyContent:'center'}}>
            <Text style={{textAlign:'center'}}>
             Already have an Account
            </Text>
            <Pressable onPress={()=>router.push('signin')}>
            <Text style={{textAlign:'center',color:'blue',fontSize:19,fontWeight:'bold'}}>Sign In</Text>
            </Pressable>
           </View>
        </View>
            </View>
         </View>
    
  )
}