import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { FontAwesome5 } from '@expo/vector-icons'; 

const data = [
  { label: 'Pre-campaign preparation tracker', value: '1' },
  { label: 'PCA H2H', value: '2' },
  { label: 'PCA M2M', value: '3' },
  { label: 'SIA  service provider', value: '4' },
];

const LangList = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [selected, setSelected] = useState(false)

  return (
    <View style={styles.container}>
    
      <Dropdown
        containerStyle= {styles.ContStyle}
        itemContainerStyle= {styles.ItemCont}
        activeColor = '#017019'
        style={[styles.dropdown, isFocus && { borderColor: '#017019' }]}
        placeholderStyle={styles.placeholderStyle}
        itemTextStyle={[styles.itemStyle, selected && {color: '#fff'}]}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        // search
        // maxHeight={300}
        labelField="label"
        valueField="value"
        // placeholder={!isFocus ? 'English' : 'English'}
        placeholder={'Select form'}

        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        
        }}
      />
    </View>

  );
};

export default LangList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    // padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  itemStyle:{
    color: '#000'
  },
  ContStyle:{
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor:'rgba(174, 174, 174, 1)',
  },
  ItemCont:{
    // borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor:'rgba(174, 174, 174, 1)',
  },
  dropdown: {
    height: 50,
    borderRadius: 6,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor:'rgba(174, 174, 174, 1)',
    padding: 10,
    width: '100%'
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});