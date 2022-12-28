import React from 'react';
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const Formulario = ({modalVisible}) => {
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.contenido}>
        <Text style={styles.titulo}>
          Nueva <Text style={styles.tituloBold}>Cita</Text>
        </Text>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: '#6d28d9',
    flex: 1,
  },
  titulo: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '600',
    marginTop: 30,
    textAlign: 'center',
  },
  tituloBold: {fontWeight: '900'},
});
export default Formulario;
