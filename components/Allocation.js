import React, { useState } from "react";
import { View, Modal, Button, StyleSheet } from "react-native";

const Allocation = props => {
    const [selectedName, setSelectedName] = useState("")

 //1 open modal (via ADD onPress(addJobHandler))
 //2 modal will show 'Who is this job for?' with 'Beau' and 'March' as options() (create modal, add logic for color to the modal)
 //3 on selection of name, modal will close and joblist will show. Each name will represent a different colour(add close modal on name button press)


  const onBeau = props => {

  }

  const onMarch = props => {
      
}

  }

    return (
      <View style={styles.container}>
        <Modal visible={this.state.modalVisible} animationType="slide">
          <View style={style.allocationContainer}>
            <View style={styles.BeauButton}>
              <Text>Who is this job for?</Text>
              <Button title="Beau" onPress={props.onBeau} />
            </View>

            <View style={styles.MarchButton}>
              <Text>Who is this job for?</Text>
              <Button title="March" onPress={props.onMarch} />
            </View>
          </View>
        </Modal>
      </View>
    );
  }

const styles = StyleSheet.create({
    container:{

    },
    allocationContainer:{

    },
    BeauButton:{

    },
    MarchButton:{

    }
});

export default Allocation;
