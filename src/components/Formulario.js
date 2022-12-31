import React, {useState, useEffect} from 'react';
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

const Formulario = ({
  modalVisible,
  setModalVisible,
  pacientes,
  setPacientes,
  paciente: pacienteObj,
}) => {
  const [id, setId] = useState('');
  const [paciente, setPaciente] = useState('');
  const [propietario, setPropietario] = useState('');
  const [fecha, setFecha] = useState(new Date());
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [sintomas, setSintomas] = useState('');
  console.log(pacienteObj);

  useEffect(() => {
    if (Object.keys(pacienteObj).length > 0) {
      setId(pacienteObj.id);
      setPaciente(pacienteObj.paciente);
      setPropietario(pacienteObj.propietario);
      setFecha(pacienteObj.fecha);
      setEmail(pacienteObj.email);
      setTelefono(pacienteObj.telefono);
      setSintomas(pacienteObj.sintomas);
    }
  }, [pacienteObj]);

  const handleCita = () => {
    if ([paciente, propietario, fecha, email, sintomas].includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }
    const nuevoPaciente = {
      id: Date.now(),
      paciente,
      propietario,
      fecha,
      email,
      telefono,
      sintomas,
    };
    setPacientes([...pacientes, nuevoPaciente]);
    setModalVisible(false);
    setPaciente('');
    setPropietario('');
    setEmail('');
    setFecha(new Date());
    setTelefono('');
    setSintomas('');
  };

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.contenido}>
        <ScrollView>
          <Text style={styles.titulo}>
            Nueva <Text style={styles.tituloBold}>Cita</Text>
          </Text>

          <Pressable
            style={styles.btnCancelar}
            onLongPress={() => setModalVisible(false)}>
            <Text style={styles.btnCancelarTexto}> X Cancelar</Text>
          </Pressable>
          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Paciente</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre paciente"
              placeholderTextColor={'#666'}
              value={paciente}
              onChangeText={setPaciente}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre propietario"
              placeholderTextColor={'#666'}
              value={propietario}
              onChangeText={setPropietario}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Fecha Alta</Text>
            <View style={styles.fechaContenedor}>
              <DatePicker
                mode={'date'}
                date={fecha}
                onDateChange={date => setFecha(date)}
              />
            </View>
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Email Propietario</Text>
            <TextInput
              keyboardType="email-address"
              style={styles.input}
              placeholder="email propietario"
              placeholderTextColor={'#666'}
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Teléfono Propietario</Text>
            <TextInput
              keyboardType="number-pad"
              style={styles.input}
              placeholder="Teléfono propietario"
              placeholderTextColor={'#666'}
              value={telefono}
              onChangeText={setTelefono}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Sintomas</Text>
            <TextInput
              style={[styles.input, styles.sintomasInput]}
              placeholder="Síntomas"
              placeholderTextColor={'#666'}
              value={sintomas}
              onChangeText={setSintomas}
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <Pressable style={styles.btnNuevaCita} onPress={handleCita}>
            <Text style={styles.btnNuevaCitaTexto}> Agregar Paciente</Text>
          </Pressable>
        </ScrollView>
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
  campo: {
    marginTop: 10,
    marginHorizontal: 30,
    marginBottom: 5,
  },
  label: {
    color: '#fff',
    marginBottom: 10,

    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
  },
  sintomasInput: {
    height: 100,
  },
  fechaContenedor: {
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  btnCancelar: {
    marginVertical: 30,
    borderRadius: 10,
    backgroundColor: '#5827a4',
    marginHorizontal: 30,
    padding: 20,
  },
  btnCancelarTexto: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  btnNuevaCita: {
    marginVertical: 50,
    backgroundColor: '#f59e0b',
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  btnNuevaCitaTexto: {
    textAlign: 'center',
    color: '#5827a4',
    textTransform: 'uppercase',
    fontWeight: '900',
    fontSize: 16,
  },
});
export default Formulario;
