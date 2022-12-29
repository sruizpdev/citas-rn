import React, {useState} from 'react';
import {Text, SafeAreaView, StyleSheet, Pressable} from 'react-native';
import Formulario from './src/components/Formulario';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de Citas{' '}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
      <Pressable style={styles.btnNuevaCita} onPress={()=>setModalVisible(true)}>
        <Text style={styles.btnTextNuevaCita}>Nueva Cita</Text>
      </Pressable>
      <Formulario modalVisible={modalVisible} setModalVisible={setModalVisible}/>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {backgroundColor: '#f3f4f6', flex: 1},
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6d28d9',
  },
  btnNuevaCita: {
    backgroundColor: '#6d28d9',
    padding: 20,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  btnTextNuevaCita: {
    textAlign: 'center',
    fontSize: 17,
    textTransform: 'uppercase',
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
