import React, { useState } from 'react';
import { Pressable, Text, View, Image } from 'react-native';
import { Style } from './Style';
import { HeaderProps } from './Interface/HeaderProp';
import Input from '../Input/Input';

const Header: React.FC<HeaderProps> = ({ title, onBackPress, onLogout, showLogout, showSearch, onSearch, keyword, showBack }) => {
    const [showSearchInput, setShowSearchInput] = useState(false);

    const onSearchClick = () => {
        setShowSearchInput(s => !s);
    };

    return (
        <View style={Style.mainContainer}>
            <View style={Style.container}>
                {showBack ? (
                    <Pressable hitSlop={20} onPress={onBackPress}>
                        <Image style={Style.icon} source={require('../../assets/back.png')} />
                    </Pressable>
                ) : showSearch ? (
                    <Pressable hitSlop={20} onPress={onSearchClick}>
                        <Image style={Style.icon} source={require('../../assets/search.png')} />
                    </Pressable>
                ) : <View style={Style.space} />}

                <Text style={Style.title}>{title}</Text>

                {showLogout ? (
                    <Pressable hitSlop={20} onPress={onLogout}>
                        <Image style={Style.icon} source={require('../../assets/logout.png')} />
                    </Pressable>
                ) : <View style={Style.space} />}
            </View>

            {showSearchInput ? (
                <Input onChangeText={onSearch} value={keyword} placeholder="Busque um produto" />
            ) : null}
        </View>
    );
};

export default React.memo(Header);
