import React, { useEffect, useMemo, useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';
import {
  Caption,
  Divider,
  Searchbar,
} from 'react-native-paper';
import styles from './styles';
import {
  getList,
} from '../redux/actions';

const ListScreen = ({ onInit, list, navigation }) => {
  useEffect(() => {
    onInit();
  }, []);

  const [searchQuery, setSearchQuery] = useState('');

  const dynamicList = list
    .filter((filter) =>
      filter.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    ).map((item) => item);

  const renderEmptyData = () => {
    return (
      <View style={styles.containerCenter}>
        <FastImage
          source={require('../images/noData.png')}
          style={styles.noDataImage}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text>No Repository Found</Text>
      </View>
    );
  };

  const renderHeader = useMemo(() => {
    return (
      <Searchbar
        placeholder="Search"
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
        iconColor="#55a9ff"
        inputStyle={styles.searchText}
      />
    );
  }, [searchQuery]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listItemWrapper}
      onPress={() => {
        navigation.navigate('DetailScreen', { details: item })
      }}
    >
      <View style={styles.listItemContainer}>
        <Text style={styles.text}>{item.name}</Text>
        <Caption>{item.description}</Caption>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.listContainer}>
      <FlatList
        data={dynamicList}
        contentContainerStyle={styles.flatListContainer}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <Divider />}
        ListHeaderComponent={renderHeader}
        ListHeaderComponentStyle={styles.flatListHeaderContainer}
        stickyHeaderIndices={[0]}
        ListEmptyComponent={renderEmptyData}
      />
    </SafeAreaView>
  );
};

ListScreen.propTypes = {
  onInit: PropTypes.func,
  list: PropTypes.array,
  navigation: PropTypes.object,
};

const mapStateToProps = (state) => ({
  list: state.app.list,
});

const mapDispatchToProps = (dispatch) => ({
  onInit: () => dispatch(getList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);
