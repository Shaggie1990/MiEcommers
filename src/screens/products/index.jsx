import { View, Text, Button, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./styles";
import PRODUCTS from '../../constants/data/productos.json';
import { Input } from '../../components';
import { COLORS } from "../../themes";
import { useState } from "react";

function Product({ onHandleGoBack, categoryId }) {

    const [search, setSearch] = useState('');
    const [borderColor, setBorderColor] = useState(COLORS.primary);
    const onHanleBlur = () => {};
    const onHandleChangeText = (text) => {
        setSearch(text);
    };
    const onHandleFocus = () => {};

    const filteredProducts = PRODUCTS.filter((product) => product.categoryId === categoryId );
    return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.goBack}  onPress={onHandleGoBack}>
            <Ionicons name='arrow-back-circle' size={30} color={COLORS.black}/>
            <Text style={styles.goBackText}>Go back</Text>
        </TouchableOpacity>
    <View style={styles.header}>
            <Input
                onHandleBlur={onHanleBlur}
                onHandleChangeText={onHandleChangeText}
                onHandleFocus={onHandleFocus}
                value={search}
                placeholder="Search"
                borderColor={borderColor}
            />
            <Ionicons name="search-circle" size={40} color={COLORS.text} />
            {search.length > 0 && <Ionicons name="close-circle" size={40} color={COLORS.text} />}
    </View>
    <FlatList
        data={filteredProducts}
        renderItem={({ item}) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()}
    />
    </View>
    );
}

export default Product;