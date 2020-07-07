import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors.js';
import './collection.styles.scss';

const CollectionPage = ({ match }) => (
  <div className='collection-page'>
    <h2>${match.params.collectionId}</h2>
  </div>
)

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectiodId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
