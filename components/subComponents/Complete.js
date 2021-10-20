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
import { Badge,withBadge} from 'react-native-elements';


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
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#fff',
                fontSize: 24,
                left: 11,
                top: 12,
              }}>
              My Task
            </Text>
            <View style={{flexDirection: 'row-reverse', bottom: 12}}>
              <Badge value="Completed" status="success" />
            </View>
          </View>
          <Card.Content>
            {/* <Title>Card title</Title> */}
            <Text style={styles.text}>
              <Icon name="calendar" size={25} color="#596869" /> 13:00, 2nd
              October, 2021
            </Text>
            <Text style={styles.text}>
              <Icon name="location-arrow" size={25} color="#596869" /> Pickup
              location ----- <Icon name="circle" color="#d1851a" /> Drop off
              location
            </Text>
            <Text style={{fontSize: 12}}>
              2972 Westheimer Rd... 3517 W. Gray St.
            </Text>
          </Card.Content>
          <View
            style={{
              color: '#061210',
              flex: 1,
              flexWrap: 'wrap',
              padding: 8,
              marginTop: 2,
            }}>
            <Card.Actions>
              <View style={{flexDirection: 'column'}}>
                <Text style={{color: '#3f8f7a'}}>
                  Max Doe.
                  {'\n'}
                  {'\n'}
                  {'\n'}
                  {'\n'}
                </Text>
              </View>
              <View style={{flexDirection: 'row', left: -90, flex: 1}}>
                <Button>
                  <Icon name="phone" size={20} color="#33ae93" />
                </Button>
                <Button>
                  <Icon name="envelope-o" size={20} color="#33ae93" />
                </Button>
              </View>
              <Text
                style={{
                  color: '#fff',
                  textAlign: 'right',
                  flexDirection: 'row-reverse',
                }}>
                <Icon name="star" size={20} color="#f17c02" />
                4.5
              </Text>
            </Card.Actions>
          </View>
        </Card>
        <Card style={styles.cards}>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#fff',
                fontSize: 24,
                left: 11,
                top: 12,
              }}>
              My Task
            </Text>
            <View style={{flexDirection: 'row-reverse', bottom: 12}}>
              <Badge value="Completed" status="success" />
            </View>
          </View>
          <Card.Content>
            {/* <Title>Card title</Title> */}
            <Text style={styles.text}>
              <Icon name="calendar" size={25} color="#596869" /> 13:00, 2nd
              October, 2021
            </Text>
            <Text style={styles.text}>
              <Icon name="location-arrow" size={25} color="#596869" /> Pickup
              location ----- <Icon name="circle" color="#d1851a" /> Drop off
              location
            </Text>
            <Text style={{fontSize: 12}}>
              2972 Westheimer Rd... 3517 W. Gray St.
            </Text>
          </Card.Content>
          <View
            style={{
              color: '#061210',
              flex: 1,
              flexWrap: 'wrap',
              padding: 8,
              marginTop: 2,
            }}>
            <Card.Actions>
              <View style={{flexDirection: 'column'}}>
                <Text style={{color: '#3f8f7a'}}>
                  Max Doe.
                  {'\n'}
                  {'\n'}
                  {'\n'}
                  {'\n'}
                </Text>
              </View>
              <View style={{flexDirection: 'row', left: -90, flex: 1}}>
                <Button>
                  <Icon name="phone" size={20} color="#33ae93" />
                </Button>
                <Button>
                  <Icon name="envelope-o" size={20} color="#33ae93" />
                </Button>
              </View>
              <Text
                style={{
                  color: '#fff',
                  textAlign: 'right',
                  flexDirection: 'row-reverse',
                }}>
                <Icon name="star" size={20} color="#f17c02" />
                4.5
              </Text>
            </Card.Actions>
          </View>
        </Card>
        <Card style={styles.cards}>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#fff',
                fontSize: 24,
                left: 11,
                top: 12,
              }}>
              My Task
            </Text>
            <View style={{flexDirection: 'row-reverse', bottom: 12}}>
              <Badge value="Completed" status="success" />
            </View>
          </View>
          <Card.Content>
            {/* <Title>Card title</Title> */}
            <Text style={styles.text}>
              <Icon name="calendar" size={25} color="#596869" /> 13:00, 2nd
              October, 2021
            </Text>
            <Text style={styles.text}>
              <Icon name="location-arrow" size={25} color="#596869" /> Pickup
              location ----- <Icon name="circle" color="#d1851a" /> Drop off
              location
            </Text>
            <Text style={{fontSize: 12}}>
              2972 Westheimer Rd... 3517 W. Gray St.
            </Text>
          </Card.Content>
          <View
            style={{
              color: '#061210',
              flex: 1,
              flexWrap: 'wrap',
              padding: 8,
              marginTop: 2,
            }}>
            <Card.Actions>
              <View style={{flexDirection: 'column'}}>
                <Text style={{color: '#3f8f7a'}}>
                  Max Doe.
                  {'\n'}
                  {'\n'}
                  {'\n'}
                  {'\n'}
                </Text>
              </View>
              <View style={{flexDirection: 'row', left: -90, flex: 1}}>
                <Button>
                  <Icon name="phone" size={20} color="#33ae93" />
                </Button>
                <Button>
                  <Icon name="envelope-o" size={20} color="#33ae93" />
                </Button>
              </View>
              <Text
                style={{
                  color: '#fff',
                  textAlign: 'right',
                  flexDirection: 'row-reverse',
                }}>
                <Icon name="star" size={20} color="#f17c02" />
                4.5
              </Text>
            </Card.Actions>
          </View>
        </Card>
        <Card style={styles.cards}>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#fff',
                fontSize: 24,
                left: 11,
                top: 12,
              }}>
              My Task
            </Text>
            <View style={{flexDirection: 'row-reverse', bottom: 12}}>
              <Badge value="Completed" status="success" />
            </View>
          </View>
          <Card.Content>
            {/* <Title>Card title</Title> */}
            <Text style={styles.text}>
              <Icon name="calendar" size={25} color="#596869" /> 13:00, 2nd
              October, 2021
            </Text>
            <Text style={styles.text}>
              <Icon name="location-arrow" size={25} color="#596869" /> Pickup
              location ----- <Icon name="circle" color="#d1851a" /> Drop off
              location
            </Text>
            <Text style={{fontSize: 12}}>
              2972 Westheimer Rd... 3517 W. Gray St.
            </Text>
          </Card.Content>
          <View
            style={{
              color: '#061210',
              flex: 1,
              flexWrap: 'wrap',
              padding: 8,
              marginTop: 2,
            }}>
            <Card.Actions>
              <View style={{flexDirection: 'column'}}>
                <Text style={{color: '#3f8f7a'}}>
                  Max Doe.
                  {'\n'}
                  {'\n'}
                  {'\n'}
                  {'\n'}
                </Text>
              </View>
              <View style={{flexDirection: 'row', left: -90, flex: 1}}>
                <Button>
                  <Icon name="phone" size={20} color="#33ae93" />
                </Button>
                <Button>
                  <Icon name="envelope-o" size={20} color="#33ae93" />
                </Button>
              </View>
              <Text
                style={{
                  color: '#fff',
                  textAlign: 'right',
                  flexDirection: 'row-reverse',
                }}>
                <Icon name="star" size={20} color="#f17c02" />
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
    backgroundColor: '#131112',
    color: '#131112',
  },

  cards: {
    width: '100%',
    height: 250,
    borderRadius: 2,
    marginBottom: 15,
    color: '#fff',
    backgroundColor: '#040605',
    borderRadius: 10,
    textDecorationColor: '#fff',
    flexDirection:'row'
  },
  text: {
    color: '#fff',
    paddingTop: 15,
  },
});
