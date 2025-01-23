import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text>Cliff Justine Perales</Text>
      <View>
        <Text>IT 302</Text>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.lBPLdRkD0EJiGU6WWEv4JQAAAA?rs=1&pid=ImgDetMai',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="Hello Daddy"
      />
    </ScrollView>
  );
};

export default App;