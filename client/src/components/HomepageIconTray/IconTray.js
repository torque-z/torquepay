import { View, Text,FlatList,StyleSheet } from 'react-native'
import React from 'react'
import Icons from './Icons'
import icontray_home from '../../datasource/icontray_home'

const IconTray = (props) => {

  return (
    <View style={styles.container}>
     <FlatList
        data={props.props}
        renderItem={({ item }) => <Icons item={item} />}
        keyExtractor={(item)=>item.id}
        numColumns={2}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center' ,
        marginTop:10
     
     
    }
});

export default IconTray