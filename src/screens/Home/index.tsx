import React from "react";
import { Text, View, KeyboardAvoidingView, Platform } from "react-native";
import { Header } from "../../components/Header";
import { MessageList } from "../../components/MessageList";
import { SendMessgeForm } from "../../components/SendMessgeForm";
import { SignInBox } from "../../components/SignInBox";
import { useAuth } from "../../hooks/auth";
import { styles } from "./styles";

export function Home() {
  const { user } = useAuth();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <Header />
        <MessageList />

        {user ? <SendMessgeForm /> : <SignInBox />}
      </View>
    </KeyboardAvoidingView>
  );
}
