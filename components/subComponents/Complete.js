import * as React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

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
        <Card style={{width: '100%', borderRadius: 2, marginBottom: 15}}>
          <Card.Title title="My Task" />
          <Card.Content>
            {/* <Title>Card title</Title> */}
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          {/* <Card.Cover source={{uri: 'https://picsum.photos/700'}} /> */}
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
        <Card style={{width: '100%', borderRadius: 2, marginBottom: 15}}>
          <Card.Title title="My Task" />
          <Card.Content>
            {/* <Title>Card title</Title> */}
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          {/* <Card.Cover source={{uri: 'https://picsum.photos/700'}} /> */}
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
        <Card style={{width: '100%', borderRadius: 2, marginBottom: 15}}>
          <Card.Title title="My Task" />
          <Card.Content>
            {/* <Title>Card title</Title> */}
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          {/* <Card.Cover source={{uri: 'https://picsum.photos/700'}} /> */}
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
        <Card style={{width: '100%', borderRadius: 2, marginBottom: 15}}>
          <Card.Title title="My Task" />
          <Card.Content>
            {/* <Title>Card title</Title> */}
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          {/* <Card.Cover source={{uri: 'https://picsum.photos/700'}} /> */}
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
        <Card style={{width: '100%', borderRadius: 2, marginBottom: 15}}>
          <Card.Title title="My Task" />
          <Card.Content>
            {/* <Title>Card title</Title> */}
            <Paragraph>Card content</Paragraph>
          </Card.Content>
          {/* <Card.Cover source={{uri: 'https://picsum.photos/700'}} /> */}
          <Card.Actions>
            <Button>Cancel</Button>
            <Button>Ok</Button>
          </Card.Actions>
        </Card>
      </View>
    </ScrollView>
  );
};

export default Completed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom:70,
    backgroundColor: '#121212',
    color: '#121212',
  },
});
