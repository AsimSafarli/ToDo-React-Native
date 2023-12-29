import {  Button, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from "twrnc";
import { Field, Form, Formik } from 'formik';
import { LoginValidationSchema } from '../validations/LoginValidation';

export default function LoginScreen() {
  return (
    <View
    style={tw`bg-[#4A3780] w-full  h-full flex items-end justify-end `}
  >
    <View style={tw`bg-[#F1F5F9] w-full h-1/2 px-6 py-[13px]  flex flex-col justify-end gap-[35px] mb-0 r-0 l-0`}>
     
   <View>
   <Formik
     initialValues={{ email: '',password:'' }}
     onSubmit={values => console.log(values)}
     validationSchema={LoginValidationSchema}
   >
     {({ handleChange, handleBlur, handleSubmit, values,errors,isValid }) => (
      <View style={tw`flex flex-col gap-[35px]`}>
       <View style={tw`flex flex-col gap-5`}>
       <View style={tw`flex flex-col gap-y-2`}>
       <Text style={tw`text-sm font-medium`}>E-mail</Text>
       <TextInput
                name="email"
       placeholder="email"
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
        keyboardType="email-address"
           style={tw`border border-[#E0E0E0] h-[55px] rounded-lg bg-white px-5`}
         />
          {errors.email &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
       }
       </View>
         <View>
       <View style={tw`flex flex-col gap-y-2`}>
       <Text style={tw`text-sm font-medium`}>Password</Text>
            <TextInput
         name="password"

           onChangeText={handleChange('password')}
           onBlur={handleBlur('password')}
           value={values.password}
         placeholder='password'
           keyboardType="visible-password"
           secureTextEntry
           style={tw`border border-[#E0E0E0] h-[55px] rounded-lg bg-white px-5`}
         />
         {errors.password &&
         <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
       }
         </View>
         </View>
         
       </View>
       <TouchableOpacity disabled={!isValid} style={tw`bg-[#4A3780] border border-solid rounded-lg  flex items-center justify-center`} onPress={handleSubmit} >
        <Text style={tw`text-white py-[12px] px-6 text-sm font-bold `} >Login</Text>
      </TouchableOpacity>

       </View>
     )}
   </Formik>
   </View>
     
    </View>
  </View>
  )
}

