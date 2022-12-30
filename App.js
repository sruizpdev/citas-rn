import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  FlatList,
} from 'react-native';
import Formulario from './src/components/Formulario';
import Paciente from './src/components/Paciente';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({})

  const pacienteEditar = id => {
    
    const pacienteEditar = pacientes.filter(()=>paciente.id===id)
    console.log(pacienteEditar);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de Citas{' '}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
      <Pressable
        style={styles.btnNuevaCita}
        onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.btnTextNuevaCita}>Nueva Cita</Text>
      </Pressable>
      {pacientes.length === 0 ? (
        <Text style={styles.noPacientes}>No hay pacientes</Text>
      ) : (
        <FlatList
          style={styles.listado}
          data={pacientes}
          keyExtractor={item => item.id}
          renderItem={item => {
            return (
              <Paciente
                item={item}
                setModalVisible={setModalVisible}
                pacienteEditar={pacienteEditar}
              />
            );
          }}
        />
      )}
      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        pacientes={pacientes}
        setPacientes={setPacientes}
      />
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
  noPacientes: {
    marginTop: 40,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 24,
  },
  listado: {
    marginTop: 50,
    marginHorizontal: 30,
  },
});

export default App;
