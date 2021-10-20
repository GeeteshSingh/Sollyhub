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
import {Badge, withBadge} from 'react-native-elements';

const Upcoming = () => {
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
                fontSize: 22,
                left: 11,
                top: 12,
                fontFamily: 'Work Sans',
              }}>
              Task name{' '}
            </Text>
            <View style={{flexDirection: 'row-reverse', bottom: 12, right: 4}}>
              <Badge value="Upcoming" status="warning" />
            </View>
          </View>
          <View style={{height: 120}}>
            <Card.Content>
              <Text style={{color: '#353a38'}}>
                <Icon name="calendar" size={21} color="#596869" /> 13:00, 2nd
                October, 2021
              </Text>
              <View style={{top: 2}}>
                <Text style={styles.text}>
                  <Icon name="location-arrow" size={21} color="#596869" />{' '}
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#c0c2c1',
                      textAlign: 'right',
                      left: 40,
                    }}>
                    Pick up location{' '}
                  </Text>
                  <Text
                    style={{
                      justifyContent: 'space-around',
                      alignItems: 'stretch',
                    }}>
                    {'      '}- - - -{' '}
                  </Text>
                  <Icon name="circle" color="#d1851a" />
                  <Text
                    style={{
                      color: '#c0c2c1',
                      textAlign: 'right',
                      flexDirection: 'row-reverse',
                    }}>
                    {'      '}
                    Drop off location
                  </Text>
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 12, color: '#454e4d', left: 19}}>
                  2972 Westheimer Rd...
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#454e4d',
                    textAlign: 'right',
                    left: 58,
                  }}>
                  3517 W. Gray St.
                </Text>
              </View>
            </Card.Content>
          </View>
          <View
            style={{
              flex: 1,
              flexWrap: 'wrap',
              padding: 8,
              marginTop: 2,
              height: '100%',
              width: '100%',
              backgroundColor: '#061210',
              bottom: 0,
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
              <View style={{flexDirection: 'row', left: -90, flex: 1, top: 7}}>
                <Button style={{left: 6}}>
                  <Icon name="phone" size={20} color="#33ae93" />
                </Button>
                <Button style={{left: -25}}>
                  <Icon name="envelope-o" size={20} color="#33ae93" />
                </Button>
              </View>
              <View
                style={{
                  top: 9,
                  flexDirection: 'row',
                  right: 9,
                }}>
                <Icon name="star" size={20} color="#f17c02" />
                <Text
                  style={{
                    color: '#505e5e',
                    textAlign: 'right',
                    flexDirection: 'row',
                  }}>
                  {'  '}
                  4.5
                </Text>
              </View>
            </Card.Actions>
          </View>
        </Card>
        <Card style={styles.cards}>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#fff',
                fontSize: 22,
                left: 11,
                top: 12,
                fontFamily: 'Work Sans',
              }}>
              Task name{' '}
            </Text>
            <View style={{flexDirection: 'row-reverse', bottom: 12, right: 4}}>
              <Badge value="Upcoming" status="warning" />
            </View>
          </View>
          <View style={{height: 120}}>
            <Card.Content>
              <Text style={{color: '#353a38'}}>
                <Icon name="calendar" size={21} color="#596869" /> 13:00, 2nd
                October, 2021
              </Text>
              <View style={{top: 2}}>
                <Text style={styles.text}>
                  <Icon name="location-arrow" size={21} color="#596869" />{' '}
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#c0c2c1',
                      textAlign: 'right',
                      left: 40,
                    }}>
                    Pick up location{' '}
                  </Text>
                  <Text
                    style={{
                      justifyContent: 'space-around',
                      alignItems: 'stretch',
                    }}>
                    {'      '}- - - -{' '}
                  </Text>
                  <Icon name="circle" color="#d1851a" />
                  <Text
                    style={{
                      color: '#c0c2c1',
                      textAlign: 'right',
                      flexDirection: 'row-reverse',
                    }}>
                    {'      '}
                    Drop off location
                  </Text>
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 12, color: '#454e4d', left: 19}}>
                  2972 Westheimer Rd...
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#454e4d',
                    textAlign: 'right',
                    left: 58,
                  }}>
                  3517 W. Gray St.
                </Text>
              </View>
            </Card.Content>
          </View>
          <View
            style={{
              flex: 1,
              flexWrap: 'wrap',
              padding: 8,
              marginTop: 2,
              height: '100%',
              width: '100%',
              backgroundColor: '#061210',
              bottom: 0,
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
              <View style={{flexDirection: 'row', left: -90, flex: 1, top: 7}}>
                <Button style={{left: 6}}>
                  <Icon name="phone" size={20} color="#33ae93" />
                </Button>
                <Button style={{left: -25}}>
                  <Icon name="envelope-o" size={20} color="#33ae93" />
                </Button>
              </View>
              <View
                style={{
                  top: 9,
                  flexDirection: 'row',
                  right: 9,
                }}>
                <Icon name="star" size={20} color="#f17c02" />
                <Text
                  style={{
                    color: '#505e5e',
                    textAlign: 'right',
                    flexDirection: 'row',
                  }}>
                  {'  '}
                  4.5
                </Text>
              </View>
            </Card.Actions>
          </View>
        </Card>
        <Card style={styles.cards}>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#fff',
                fontSize: 22,
                left: 11,
                top: 12,
                fontFamily: 'Work Sans',
              }}>
              Task name{' '}
            </Text>
            <View style={{flexDirection: 'row-reverse', bottom: 12, right: 4}}>
              <Badge value="Upcoming" status="warning" />
            </View>
          </View>
          <View style={{height: 120}}>
            <Card.Content>
              <Text style={{color: '#353a38'}}>
                <Icon name="calendar" size={21} color="#596869" /> 13:00, 2nd
                October, 2021
              </Text>
              <View style={{top: 2}}>
                <Text style={styles.text}>
                  <Icon name="location-arrow" size={21} color="#596869" />{' '}
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#c0c2c1',
                      textAlign: 'right',
                      left: 40,
                    }}>
                    Pick up location{' '}
                  </Text>
                  <Text
                    style={{
                      justifyContent: 'space-around',
                      alignItems: 'stretch',
                    }}>
                    {'      '}- - - -{' '}
                  </Text>
                  <Icon name="circle" color="#d1851a" />
                  <Text
                    style={{
                      color: '#c0c2c1',
                      textAlign: 'right',
                      flexDirection: 'row-reverse',
                    }}>
                    {'      '}
                    Drop off location
                  </Text>
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 12, color: '#454e4d', left: 19}}>
                  2972 Westheimer Rd...
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#454e4d',
                    textAlign: 'right',
                    left: 58,
                  }}>
                  3517 W. Gray St.
                </Text>
              </View>
            </Card.Content>
          </View>
          <View
            style={{
              flex: 1,
              flexWrap: 'wrap',
              padding: 8,
              marginTop: 2,
              height: '100%',
              width: '100%',
              backgroundColor: '#061210',
              bottom: 0,
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
              <View style={{flexDirection: 'row', left: -90, flex: 1, top: 7}}>
                <Button style={{left: 6}}>
                  <Icon name="phone" size={20} color="#33ae93" />
                </Button>
                <Button style={{left: -25}}>
                  <Icon name="envelope-o" size={20} color="#33ae93" />
                </Button>
              </View>
              <View
                style={{
                  top: 9,
                  flexDirection: 'row',
                  right: 9,
                }}>
                <Icon name="star" size={20} color="#f17c02" />
                <Text
                  style={{
                    color: '#505e5e',
                    textAlign: 'right',
                    flexDirection: 'row',
                  }}>
                  {'  '}
                  4.5
                </Text>
              </View>
            </Card.Actions>
          </View>
        </Card>
        <Card style={styles.cards}>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#fff',
                fontSize: 22,
                left: 11,
                top: 12,
                fontFamily: 'Work Sans',
              }}>
              Task name{' '}
            </Text>
            <View style={{flexDirection: 'row-reverse', bottom: 12, right: 4}}>
              <Badge value="Upcoming" status="warning" />
            </View>
          </View>
          <View style={{height: 120}}>
            <Card.Content>
              <Text style={{color: '#353a38'}}>
                <Icon name="calendar" size={21} color="#596869" /> 13:00, 2nd
                October, 2021
              </Text>
              <View style={{top: 2}}>
                <Text style={styles.text}>
                  <Icon name="location-arrow" size={21} color="#596869" />{' '}
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#c0c2c1',
                      textAlign: 'right',
                      left: 40,
                    }}>
                    Pick up location{' '}
                  </Text>
                  <Text
                    style={{
                      justifyContent: 'space-around',
                      alignItems: 'stretch',
                    }}>
                    {'      '}- - - -{' '}
                  </Text>
                  <Icon name="circle" color="#d1851a" />
                  <Text
                    style={{
                      color: '#c0c2c1',
                      textAlign: 'right',
                      flexDirection: 'row-reverse',
                    }}>
                    {'      '}
                    Drop off location
                  </Text>
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 12, color: '#454e4d', left: 19}}>
                  2972 Westheimer Rd...
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#454e4d',
                    textAlign: 'right',
                    left: 58,
                  }}>
                  3517 W. Gray St.
                </Text>
              </View>
            </Card.Content>
          </View>
          <View
            style={{
              flex: 1,
              flexWrap: 'wrap',
              padding: 8,
              marginTop: 2,
              height: '100%',
              width: '100%',
              backgroundColor: '#061210',
              bottom: 0,
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
              <View style={{flexDirection: 'row', left: -90, flex: 1, top: 7}}>
                <Button style={{left: 6}}>
                  <Icon name="phone" size={20} color="#33ae93" />
                </Button>
                <Button style={{left: -25}}>
                  <Icon name="envelope-o" size={20} color="#33ae93" />
                </Button>
              </View>
              <View
                style={{
                  top: 9,
                  flexDirection: 'row',
                  right: 9,
                }}>
                <Icon name="star" size={20} color="#f17c02" />
                <Text
                  style={{
                    color: '#505e5e',
                    textAlign: 'right',
                    flexDirection: 'row',
                  }}>
                  {'  '}
                  4.5
                </Text>
              </View>
            </Card.Actions>
          </View>
        </Card>
        <Card style={styles.cards}>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#fff',
                fontSize: 22,
                left: 11,
                top: 12,
                fontFamily: 'Work Sans',
              }}>
              Task name{' '}
            </Text>
            <View style={{flexDirection: 'row-reverse', bottom: 12, right: 4}}>
              <Badge value="Upcoming" status="warning" />
            </View>
          </View>
          <View style={{height: 120}}>
            <Card.Content>
              <Text style={{color: '#353a38'}}>
                <Icon name="calendar" size={21} color="#596869" /> 13:00, 2nd
                October, 2021
              </Text>
              <View style={{top: 2}}>
                <Text style={styles.text}>
                  <Icon name="location-arrow" size={21} color="#596869" />{' '}
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#c0c2c1',
                      textAlign: 'right',
                      left: 40,
                    }}>
                    Pick up location{' '}
                  </Text>
                  <Text
                    style={{
                      justifyContent: 'space-around',
                      alignItems: 'stretch',
                    }}>
                    {'      '}- - - -{' '}
                  </Text>
                  <Icon name="circle" color="#d1851a" />
                  <Text
                    style={{
                      color: '#c0c2c1',
                      textAlign: 'right',
                      flexDirection: 'row-reverse',
                    }}>
                    {'      '}
                    Drop off location
                  </Text>
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 12, color: '#454e4d', left: 19}}>
                  2972 Westheimer Rd...
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#454e4d',
                    textAlign: 'right',
                    left: 58,
                  }}>
                  3517 W. Gray St.
                </Text>
              </View>
            </Card.Content>
          </View>
          <View
            style={{
              flex: 1,
              flexWrap: 'wrap',
              padding: 8,
              marginTop: 2,
              height: '100%',
              width: '100%',
              backgroundColor: '#061210',
              bottom: 0,
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
              <View style={{flexDirection: 'row', left: -90, flex: 1, top: 7}}>
                <Button style={{left: 6}}>
                  <Icon name="phone" size={20} color="#33ae93" />
                </Button>
                <Button style={{left: -25}}>
                  <Icon name="envelope-o" size={20} color="#33ae93" />
                </Button>
              </View>
              <View
                style={{
                  top: 9,
                  flexDirection: 'row',
                  right: 9,
                }}>
                <Icon name="star" size={20} color="#f17c02" />
                <Text
                  style={{
                    color: '#505e5e',
                    textAlign: 'right',
                    flexDirection: 'row',
                  }}>
                  {'  '}
                  4.5
                </Text>
              </View>
            </Card.Actions>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

export default Upcoming;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 70,
    backgroundColor: '#131112',
    color: '#131112',
  },

  cards: {
    width: '100%',
    height: 260,
    borderRadius: 2,
    marginBottom: 15,
    color: '#fff',
    backgroundColor: '#040605',
    borderRadius: 10,
    textDecorationColor: '#fff',
    flexDirection: 'row',
    // bottom:0
  },
  text: {
    color: '#fff',
    paddingTop: 15,
    fontSize: 12,
  },
});
