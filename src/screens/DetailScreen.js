import React, { useLayoutEffect } from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {
  ActivityIndicator,
  Subheading,
  Surface,
} from 'react-native-paper';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Octicons';
import styles from './styles';

const { height } = Dimensions.get('window');

const DetailScreen = ({ route: { params }, navigation }) => {
  const { details } = params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: details.name,
      headerStyle: styles.detailsHeader,
      headerTintColor: 'white',
    });
  }, [details]);

  const getColor = (data) => {
    switch (data) {
      case 'C++':
        return '#f34b7d';
      case 'Dockerfile':
        return '#384d54';
      case 'Java':
        return '#b07219';
      case 'JavaScript':
        return '#f1e05a';
      case 'Shell':
        return '#89e051';
      case 'TypeScript':
        return '#2b7489';
      default:
        return '#8c959f';
    };
  };

  const getImage = (data) => {
    let url = '';
    switch (data) {
      case 'rxjs':
        url = require("../images/rxLogo.png");
        break;
      case 'protobuf.js':
        url = require("../images/pbjsLogo.png");
        break;
      case 'upgrade-helper':
        url = require("../images/helperLogo.png");
        break;
      case 'hooks':
        url = require("../images/hooksLogo.jpg");
        break;
      case 'directory':
        url = require("../images/directoryLogo.png");
        break;
      default:
        url = '';
    };

    if (url) {
      return (
        <FastImage
          source={url}
          style={styles.detailsLogo}
          resizeMode={FastImage.resizeMode.contain}
        />
      );
    };
  };

  if (!details) {
    return (
      <SafeAreaView style={styles.containerCenter}>
        <ActivityIndicator animating />
      </SafeAreaView>
    );
  };

  return (
    <SafeAreaView style={styles.detailsContainer}>
      <ScrollView
        style={{ height }}
        contentContainerStyle={styles.detailsScrollView}
        nestedScrollEnabled
      >
        {getImage(details.name)}
        <Subheading style={styles.detailsSubHeader}>
          {details.fullName}
        </Subheading>
        <Surface style={styles.detailsCardContainer}>
          <View style={styles.detailsCardInfoWrapper}>
            <View style={styles.detailsCardDescriptionWrapper}>
              <Text style={styles.detailsCardDescription}>
                {details.description}
              </Text>
              <View style={styles.detailsCardVisibility}>
                <Text>
                  {`(${details.visibility.toUpperCase()})`}
                </Text>
              </View>
            </View>
            <View style={styles.detailsCardRow}>
              {details.language && (
                <View style={styles.detailsCardStatusWrapper}>
                  <View
                    style={[
                      styles.languageIcon,
                      { backgroundColor: getColor(details.language) },
                    ]}
                  />
                  <Text>{details.language}</Text>
                </View>
              )}
              {details.license && (
                <View style={styles.detailsCardStatusWrapper}>
                  <View style={styles.licenseIcon}>
                    <Icon name="law" color="#55a9ff" size={16} />
                  </View>
                  <Text>{details.license}</Text>
                </View>
              )}
            </View>
          </View>
        </Surface>
        <Surface style={styles.detailsCardContainer}>
          <View style={styles.detailsCardInfoWrapper}>
            <View style={styles.detailsCardRow}>
              <Text>Number of Stars</Text>
              <View style={styles.detailsCardStatusWrapper}>
                <Text> {`(${details.numberOfStars}) `}</Text>
                <Icon name="star" color="#55a9ff" size={20} />
              </View>
            </View>
            <View style={styles.detailsCardRow}>
              <Text>Number of Forks</Text>
              <View style={styles.detailsCardStatusWrapper}>
                <Text>{`(${details.numberOfForks}) `}</Text>
                <Icon name="repo-forked" color="#55a9ff" size={20} />
              </View>
            </View>
            <View style={styles.detailsCardRow}>
              <Text>Number of Watchers</Text>
              <View style={styles.detailsCardStatusWrapper}>
                <Text>{`(${details.numberOfWatchers}) `}</Text>
                <Icon name="eye" color="#55a9ff" size={20} />
              </View>
            </View>
          </View>
        </Surface>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;