import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import { createUser } from '../../lib/appwrite';

const SignUp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "" , 
    email: "",
    password: "",
  });

  const submit = async () => {

    const { name, email, password } = form;

    if (!form.name || !form.email || !form.password) return
      Alert.alert("Error", "Please fill all the fields");
   
    setIsSubmitting(true)

    try {
      await createUser({ email, password, name });
      Alert.alert("Success", "Sign in successful");
      router.push("/");
    }catch(error: any) {
      Alert.alert("Error", error.message);
    }finally {
      setIsSubmitting(false)
    }
  };

  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5 ">
      <CustomInput
        placeholder="Enter your Full Name"
        value={form.name}
        onChangeText={(text) => setForm((prev) => ({...prev, name: text}))}
        label="Full Name"
     />
      <CustomInput
        placeholder="Enter your Email"
        value={form.email}
        onChangeText={(text) => setForm((prev) => ({...prev, email: text}))}
        label="Email"
        keyboardType="email-address"
      />
      <CustomInput
        placeholder="Enter your Password"
        value={form.password}
        onChangeText={(text) => setForm((prev) => ({...prev, password: text}))}
        label="Password"
        keyboardType="email-address"
        secureTextEntry={true}
      />
      <CustomButton title="Sign In" isLoading={isSubmitting} onPress={submit} />

      <View className="flex justify-center mt-5 flex-row gap-3">
        <Text className="base-regular text-gra-100">
          Already have an account?
        </Text>
        <Link className="base-bold text-primary" href="/sign-in">
          Sign-In
        </Link>
      </View>
    </View>
  );
};

export default SignUp;
