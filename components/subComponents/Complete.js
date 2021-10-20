import * as React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Divider,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const Completed = () => {
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          margin: 15,
          width: '90%',
        }}>
        <Card style={styles.cards}>
          <Card.Title title="My Task" color="#fff" />
          <Card.Content>
            {/* <Title>Card title</Title> */}
            <Paragraph style={styles.text}>
              <Icon name="calendar" size={30} color="#596869" /> 13:00, 2nd
              October, 2021
            </Paragraph>
            <Paragraph style={styles.text}>
              <Icon name="location-arrow" size={30} color="#596869" /> Pickup
              location ----- <Icon name="circle" color="#d1851a" /> Drop off
              location
            </Paragraph>
            <Paragraph style={{fontSize: 12}}>
              2972 Westheimer Rd...             3517 W. Gray St.
            </Paragraph>
          </Card.Content>
          <View style={{color:'#061210', flex:1, flexWrap:'wrap', padding:8,marginTop:2}}>
          <Card.Actions>
            <Paragraph>
              Max Doe.
              {'\n'}
            </Paragraph>
            <Button>
              <Icon name="phone" size={20} color="#33ae93" />
            </Button>
            <Button>
              <Icon name="envelope-o" size={20} color="#33ae93"/>
            </Button>
            <Text>
              {'\n'} <Icon name="star" size={20} color="#f17c02" />
              4.5
            </Text>
          </Card.Actions>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

export default Completed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 70,
    backgroundColor: '#121212',
    color: '#121212',
  },

  cards: {
    width: '100%',
    height: 300,
    borderRadius: 2,
    marginBottom: 15,
    color: '#040605',
    backgroundColor: '#C0C0C0',
    borderRadius: 10,
    textDecorationColor: '#fff',
  },
  text: {
    color: '#000',
    paddingTop: 15,
  },
});
