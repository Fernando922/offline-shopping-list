import React, { useState, useRef } from 'react';

import MainContainer from '@components/MainContainer';
import { MainInput } from '@components/MainInput';
import * as S from './styles';
import { Alert } from 'react-native';

function Home() {
  const [newItem, setNewItem] = useState('');
  const [productsList, setProductsList] = useState<string[]>([]);

  const handleAddItem = () => {
    setNewItem('');

    const isAlreadyInList = productsList.find(item => item == newItem);

    if (!isAlreadyInList) {
      setProductsList([...productsList, newItem]);
    }
  };

  const deleteItem = (item: string) => {
    const newList = productsList.filter(product => product !== item);

    setProductsList(newList);
  };

  const handleDeleteItem = (item: string) => {
    Alert.alert('Excluir Item', `Deseja excluir ${item} da lista?`, [
      { text: 'Não' },
      { text: 'Sim', onPress: () => deleteItem(item) },
    ]);
  };

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
            <S.ListItem key={item} onPress={() => handleDeleteItem(item)}>
              <S.ListItemText>{item}</S.ListItemText>
            </S.ListItem>
          ))}
        </S.Scroll>
      </S.Content>
    </MainContainer>
  );
}

export default Home;
