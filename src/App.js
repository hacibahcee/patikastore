import React from "react";
import { View, Text, StyleSheet, TextInput, FlatList, ScrollView } from "react-native";
import product_data from "./product_data.json";
import ProductCard from "./components/productCards/ProductCards";


const App = () => {

  const renderProducts = ({item}) => <ProductCard products={item}/>

  return (
    <View style={styles.container}>
        <Text style={styles.headerText}>PATIKASTORE</Text>
          <TextInput 
            style={styles.textInput} 
            placeholder="  Ara..."
            />
          <FlatList
            numColumns={2}
            data={product_data}
            renderItem={renderProducts}
          />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
    marginLeft: 10,
    marginTop: 10,
    
  },

  textInput: {
    backgroundColor: '#eceff1',
    margin: 10,
    borderRadius: 10,
  }
})

export default App;