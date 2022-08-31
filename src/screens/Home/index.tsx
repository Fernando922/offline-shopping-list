import React, { useState, useEffect } from 'react';

import MainContainer from '@components/MainContainer';
import { MainInput } from '@components/MainInput';
import * as S from './styles';
import { Alert } from 'react-native';
import { Product } from '@database/model/Product';
import snackbarMessage from '@utils/snackbarMessage';
import database from '@database/index';

function Home() {
  const [newItem, setNewItem] = useState('');
  const [productsList, setProductsList] = useState<Product[]>([]);

  const persistProduct = async () => {
    try {
      const newProduct = await database.write(async () => {
        const product = await database
          .get<Product>('products')
          .create(product => {
            product.product_name = newItem;
          });

        return product;
      });

      setProductsList([...productsList, newProduct]);
    } catch {
      Alert.alert('Ops!', 'Ocorreu um erro ao salvar o produto!');
    } finally {
      setNewItem('');
    }
  };

  const handleAddItem = () => {
    const isAlreadyInList = productsList.find(
      item => item.product_name == newItem,
    );
    if (!isAlreadyInList) {
      persistProduct();
    }
  };

  const deleteItem = async (item: Product) => {
    const newList = productsList.filter(product => product.id !== item.id);
    setProductsList(newList);

    try {
      const product = await database.get<Product>('products').find(item.id);

      await database.write(async () => {
        await product.destroyPermanently();
      });
      snackbarMessage('Produto removido com sucesso!');
    } catch {
      Alert.alert('Ops!', 'Ocorreu um erro ao excluir o produto!');
    }
  };

  const handleDeleteItem = (item: Product) => {
    Alert.alert(
      'Excluir Item',
      `Deseja excluir ${item.product_name} da lista?`,
      [{ text: 'Não' }, { onPress: () => deleteItem(item), text: 'Sim' }],
    );
  };

  const fetchProductsList = async () => {
    const productsCollection = database.get<Product>('products');

    const products = await productsCollection.query().fetch();

    setProductsList(products);
  };

  useEffect(() => {
    fetchProductsList();
  }, []);

  return (
    <MainContainer>
      <S.Title>Lista de compras</S.Title>

      <MainInput
        value={newItem}
        onChangeText={setNewItem}
        onSubmitEditing={handleAddItem}
      />
      <S.Content>
        <S.Scroll showsVerticalScrollIndicator={false}>
          {productsList.map(item => (
            <S.ListItem key={item.id} onPress={() => handleDeleteItem(item)}>
              <S.ListItemText>{item.product_name}</S.ListItemText>
            </S.ListItem>
          ))}
        </S.Scroll>
      </S.Content>
    </MainContainer>
  );
}

export default Home;
