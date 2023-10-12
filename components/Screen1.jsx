import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, Text, View } from "react-native";

const Screen01 = ({ route }) => {
  const navigation = useNavigation();
  const data = route.params;

  return (
    <View style={styles.container}>
      {/* Phần hiển thị hình ảnh sản phẩm */}
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          source={require(`./../assets/${data?.image ? data.image : 'vs_blue.png'}`)}
          style={styles.image}
        />
      </View>

      {/* Phần thông tin sản phẩm */}
      <View style={styles.productInfo}>
        {/* Tiêu đề sản phẩm */}
        <Text style={styles.productTitle}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>

        {/* Đánh giá và số lượng đánh giá */}
        <View style={styles.rating}>
            <View style={styles.ratingStars}>
                {/* Hiển thị ngôi sao đánh giá */}
                {Array(5).fill(0).map((item, index) => (
                <Image key={index} source={require('./../assets/star.png')} style={styles.starImage} />
                ))}
            </View>
            <Text style={styles.ratingText}>(Xem 828 đánh giá)</Text>
        </View>

        {/* Giá và giá gốc */}
        <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', marginLeft: 15 }}>
            <Text style={{ fontSize: 22, fontWeight: 600 }}>1.790.000 đ</Text>
            <Text style={{ fontSize: 18, color: 'grey', textDecorationLine: 'line-through' }}>1.790.000 đ</Text>
        </View>

        {/* Thông báo giảm giá */}
        <Text style={styles.discountMessage}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>

        {/* Các nút chọn mua sản phẩm */}
        <View style={styles.buttonContainer}>
          {/* Nút xem chi tiết */}
          <Pressable onPress={() => navigation.navigate('Detail')} style={styles.selectButton}>
            <Text style={styles.selectButtonText}>4 Màu-chọn màu</Text>
          </Pressable>

          {/* Nút chọn mua */}
          <Pressable style={styles.buyButton}>
            <Text style={styles.buyButtonText}>Chọn mua</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

// CSS styles cho các phần trong màn hình
const styles = {
  container: {
    width: '100%',
    gap: 15,
    padding: 15,
  },
  imageContainer: {
    height: 300,
  },
  image: {
    width: null,
    height: 300,
  },
  productInfo: {},
  productTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  rating: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ratingStars: {
    flexDirection: "row",
    gap: 5,
  },
  starImage: {
    width: 25,
    height: 25,
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "600",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  price: {
    fontSize: 22,
    fontWeight: "600",
  },
  originalPrice: {
    fontSize: 18,
    color: "grey",
    textDecorationLine: "line-through",
  },
  discountMessage: {
    textTransform: "uppercase",
    color: "red",
    fontWeight: "600",
  },
  buttonContainer: {
    marginTop: 10,
  },
  selectButton: {
    paddingVertical: 15,
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 50,
  },
  selectButtonText: {
    textTransform: "uppercase",
    fontSize: 18,
    textAlign: "center",
  },
  buyButton: {
    backgroundColor: "red",
    paddingVertical: 15,
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 50,
  },
  buyButtonText: {
    textTransform: "uppercase",
    fontSize: 18,
    textAlign: "center",
    color: "white",
  },
};

export default Screen01;
