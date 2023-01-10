import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Common = () => {
  const [showPass, setShowPass] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [country, setCountry] = useState('');
  const [openDropDown2, setOpenDropDown2] = useState(false);
  const [nationality, setNationality] = useState('');
  const [gender, setGender] = useState('');
  const [openDropDown1, setOpenDropDown1] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [bdate, setBDate] = useState(new Date());

  const [scanImage, setScanImage] = useState('');

  const [opened, setOpened] = useState(false);

  return (
    <View style={styles.screen}>
      <View style={styles.view}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {}}></TouchableOpacity>
        <Text style={styles.heading}>{'Satrujit Behera'}</Text>
        <View></View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.view1}>
        {scanImage === '' ? (
          <View style={styles.formContent}>
            <Text style={styles.formText}>Scan Passport</Text>
            <TouchableOpacity
              onPress={() => setOpened(true)}
              activeOpacity={0.8}
              style={styles.cameraContainer}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.camera}></TouchableOpacity>
              <Text style={styles.cameraText}>Click here to scan ID card</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <View
              style={[
                styles.formContent,
                {
                  borderWidth: 3,
                  borderColor: '#DBD9D1',
                  borderRadius: 10,
                  padding: 20,
                  alignItems: 'center',
                },
              ]}>
              <Image source={{uri: scanImage}} style={styles.image} />
            </View>
            <TouchableOpacity
              onPress={() => setOpened(true)}
              activeOpacity={0.8}
              style={styles.button}>
              <Text style={[styles.buttonText]}>Scan Again</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.formContent}>
          <Text style={styles.formText}>Country Code</Text>
          <View style={styles.input}>
            <Text style={[styles.inputText, {paddingVertical: 10}]}>
              {country ? country : 'Please Select Country Code'}
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setOpenDropDown(!openDropDown)}></TouchableOpacity>
          </View>
          {openDropDown && (
            <View style={styles.dropDown}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  setOpenDropDown(false);
                  setCountry('India');
                }}
                style={styles.dropDownContent}>
                <Text style={styles.dropDownText}>India</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={styles.formContent}>
          <Text style={styles.formText}>Passport Number</Text>
          <View style={styles.input}>
            <TextInput
              placeholder="Passport Number"
              placeholderTextColor="#BBBAB3"
              secureTextEntry={showPass ? false : true}
              style={styles.inputText}
              // onChangeText={txt => setPassportNo(txt)}
              //   onChangeText={handleChange('passportNo')}
              //   onBlur={handleBlur('passportNo')}
              //   value={values.passportNo}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setShowPass(!showPass)}></TouchableOpacity>
          </View>
        </View>
        <View style={styles.formContent}>
          <Text style={styles.formText}>Name</Text>
          <View style={styles.input}>
            <TextInput
              placeholder="Name"
              placeholderTextColor="#BBBAB3"
              style={styles.inputText}
              // onChangeText={txt => setName(txt)}
              //   onChangeText={handleChange('name')}
              //   onBlur={handleBlur('name')}
              //   value={values.name}
            />
          </View>
        </View>
        <View style={styles.formContent}>
          <Text style={styles.formText}>Nationality</Text>
          <View style={styles.input}>
            <Text style={[styles.inputText, {paddingVertical: 10}]}>
              {nationality ? nationality : 'Please Select Nationality'}
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                setOpenDropDown2(!openDropDown2)
              }></TouchableOpacity>
          </View>
          {openDropDown2 && (
            <View style={styles.dropDown}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  setOpenDropDown2(false);
                  setNationality('Indian');
                }}
                style={styles.dropDownContent}>
                <Text style={styles.dropDownText}>Indian</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  setOpenDropDown2(false);
                  setNationality('Female');
                }}
                style={styles.dropDownContent}>
                <Text style={styles.dropDownText}>Mexican</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={styles.formContent}>
          <Text style={styles.formText}>Sex</Text>
          <View style={styles.input}>
            <Text style={[styles.inputText, {paddingVertical: 10}]}>
              {gender ? gender : 'Please Select Sex'}
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() =>
                setOpenDropDown1(!openDropDown1)
              }></TouchableOpacity>
          </View>
          {openDropDown1 && (
            <View style={styles.dropDown}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  setOpenDropDown1(false);
                  setGender('Male');
                }}
                style={styles.dropDownContent}>
                <Text style={styles.dropDownText}>Male</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  setOpenDropDown1(false);
                  setGender('Female');
                }}
                style={styles.dropDownContent}>
                <Text style={styles.dropDownText}>Female</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={styles.formContent}>
          <Text style={styles.formText}>Date of Birth</Text>
          <View style={styles.input}>
            <Text style={[styles.inputText, {paddingVertical: 10}]}>
              {new Date(bdate).getDate()}/{new Date(bdate).getMonth() + 1}/
              {new Date(bdate).getFullYear()}
            </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setOpen1(true)}></TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={{marginHorizontal: 20}}></View>
    </View>
  );
};

export default Common;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  view: {
    padding: 35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 15,
    color: 'black',
  },
  view1: {
    paddingHorizontal: 35,
  },
  formContent: {
    marginBottom: 15,
  },
  formText: {
    fontSize: 11,
    color: '#BBBAB3',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#BBBAB3',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
  },
  textarea: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#BBBAB3',
    paddingHorizontal: 10,
  },
  inputText: {
    fontSize: 12,
    color: 'black',
    flex: 0.8,
  },
  dropDown: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#BBBAB3',
  },
  dropDownContent: {
    borderBottomColor: '#BBBAB3',
    borderBottomWidth: 1,
  },
  dropDownText: {
    fontSize: 12,

    color: 'black',
    padding: 10,
    paddingVertical: 5,
  },
  cameraContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DBD9D1',
    alignItems: 'center',
    height: 150,
    justifyContent: 'center',
  },
  cameraText: {
    fontSize: 12,
    color: 'black',
    marginTop: 12,
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 14,
    color: 'black',
  },
  image: {
    height: 220,
    width: '100%',
    resizeMode: 'contain',
  },
});
