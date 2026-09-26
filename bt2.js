// Đổi tên hằng số sang chuẩn camelCase theo đúng rubric
const basePriceSizeS = 35000;
const extraPriceSizeM = 6000;
const extraPriceSizeL = 10000;
const toppingPrice = 8000;

const orderSizes = "MLXSM";
const toppingCount = 2;
const isGoldMember = true;

let totalDrinkAmount = 0;

for (let orderIndex = 0; orderIndex < orderSizes.length; orderIndex++) {
    const currentDrinkSize = orderSizes[orderIndex];

    // Khắc phục lỗi: Dùng continue để bỏ qua món hủy, tiếp tục duyệt các món sau
    if (currentDrinkSize === "X") {
        continue;
    }

    // Tối ưu hóa Clean Code: Dùng switch-case để phân nhánh xử lý size rõ ràng
    switch (currentDrinkSize) {
        case "S":
            totalDrinkAmount += basePriceSizeS;
            break;
        case "M":
            totalDrinkAmount += (basePriceSizeS + extraPriceSizeM);
            break;
        case "L":
            totalDrinkAmount += (basePriceSizeS + extraPriceSizeL);
            break;
        default:
            console.warn(`CẢNH BÁO: Ký tự size '${currentDrinkSize}' không hợp lệ!`);
            break;
    }
}

// Tối ưu logic giảm giá bằng toán tử ba ngôi
const discountRate = isGoldMember === true ? 0.9 : 1.0;
const finalBillAmount = (totalDrinkAmount + (toppingCount * toppingPrice)) * discountRate;

console.log("========================================");
console.log("       HOÁ ĐƠN HIGHLANDS COFFEE");
console.log("========================================");
console.log(`Chuỗi order xử lý : ${orderSizes}`);
console.log(`Tổng tiền đồ uống : ${totalDrinkAmount} VNĐ`);
console.log(`Tiền topping      : ${toppingCount * toppingPrice} VNĐ`);
console.log("----------------------------------------");
console.log(`TỔNG TIỀN HÓA ĐƠN : ${finalBillAmount} VNĐ`);
console.log("========================================");

/*
