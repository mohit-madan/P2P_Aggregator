import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import WebView from "react-native-webview";
import config from "../../config";

export default function Dashboard({ navigation, route }) {
  const webviewRef = useRef(null);
  const redirect_url = `${config.BACKEND_URL}/redirect/`;
  const onNavigation = (navState) => {
    if (navState.url === redirect_url) {
      navigation.navigate("RootNavigator");
    }
  };

  return (
    <>
      <SafeAreaView style={styles.flexContainer}>
        <WebView
          source={{
            uri: route.params.param,
          }}
          startInLoadingState={true}
          renderLoading={() => (
            <ActivityIndicator
              color="black"
              size="large"
              style={styles.flexContainer}
            />
          )}
          ref={webviewRef}
          onNavigationStateChange={onNavigation}
          style={styles.margin}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  margin: {
    marginTop: 50,
  },
});
