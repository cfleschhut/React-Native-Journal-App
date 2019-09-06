import React, { useEffect, useState } from 'react';
import AppNavigator from './js/AppNavigator';

import Store from './js/Store';

export default function App() {
  const [items, setItems] = useState([]);

  const _refreshItems = async () => {
    const items = await Store.loadItems();
    setItems(items);
  };

  useEffect(() => {
    _refreshItems();
  }, []);

  const _addItem = item => {
    let newItems;

    if (item.date) {
      const index = items.findIndex(i => i.date === item.date);
      newItems = [...items.slice(0, index), item, ...items.slice(index + 1)];
    } else {
      item.date = Date.now();
      newItems = [item, ...items];
    }

    setItems(newItems);
    Store.saveItems(newItems);
  };

  return (
    <AppNavigator
      screenProps={{
        items,
        onSubmit: item => _addItem(item),
        refresh: _refreshItems,
      }}
    />
  );
}
