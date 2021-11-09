import { StyleSheet } from 'react-native';

const textColor = '#55a9ff';
const headerTextColor = '#007eff';

export default StyleSheet.create({
  detailsScrollView: {
    padding: 16,
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  detailsHeader: {
    backgroundColor: '#4a95f5ad',
  },
  detailsLogo: {
    height: 120,
  },
  detailsSubHeader: {
    fontSize: 16,
    fontWeight: '700',
    marginVertical: 4,
    marginLeft: 8,
    color: headerTextColor,
  },
  detailsCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    width: '100%',
    padding: 16,
    elevation: 3,
    marginVertical: 12,
    borderRadius: 4,
  },
  detailsCardInfoWrapper: {
    flex: 1,
    flexDirection: 'column',
  },
  detailsCardDescriptionWrapper: {
    marginVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    justifyContent: 'flex-end',
  },
  detailsCardDescription: {
    fontWeight: '600',
    marginVertical: 8,
    marginRight: 4,
  },
  detailsCardVisibility: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 4,
  },
  detailsCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    marginHorizontal: 4,
  },
  detailsCardStatusWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  languageIcon: {
    width: 14,
    height: 14,
    borderRadius: 14 / 2,
    marginRight: 8,
  },
  licenseIcon: {
    marginRight: 8,
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataImage: {
    width: 128,
    height: 128,
  },
  searchText: {
    color: headerTextColor,
    fontSize: 14,
  },
  text: {
    color: textColor,
    fontWeight: '700',
    fontSize: 16,
  },
  listContainer: {
    flex: 1,
  },
  listItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItemContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
    width: '100%',
    padding: 16,
    elevation: 3,
    marginVertical: 8,
    borderRadius: 4,
    flex: 1,
    justifyContent: 'space-between',
  },
  flatListContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    backgroundColor: '#a2c7f3',
  },
  flatListHeaderContainer: {
    paddingTop: 16,
  },
});