import React from 'react';

import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collection-preview/collectionpreview.component';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    return (
      <div>
        <h1>SHOPS PAGE</h1>
        {this.state.collections.map(({ id, ...collection }) => (
          <CollectionPreview key={id} {...collection}/>
        ))}
      </div>
    );
  }

}

export default ShopPage;
