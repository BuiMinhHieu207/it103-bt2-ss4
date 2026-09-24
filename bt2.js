// solution_ex3.js

const BASE_PRICE_SIZE_S = 35000;
const EXTRA_PRICE_SIZE_M = 6000;
const EXTRA_PRICE_SIZE_L = 10000;
const TOPPING_PRICE = 8000;

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
            totalDrinkAmount += BASE_PRICE_SIZE_S;
            break;
        case "M":
            totalDrinkAmount += (BASE_PRICE_SIZE_S + EXTRA_PRICE_SIZE_M);
            break;
        case "L":
            totalDrinkAmount += (BASE_PRICE_SIZE_S + EXTRA_PRICE_SIZE_L);
            break;
        default:
            console.warn(`CẢNH BÁO: Ký tự size '${currentDrinkSize}' không hợp lệ!`);
            break;
    }
}

// Tối ưu logic giảm giá bằng toán tử ba ngôi
const discountRate = isGoldMember === true ? 0.9 : 1.0;
const finalBillAmount = (totalDrinkAmount + (toppingCount * TOPPING_PRICE)) * discountRate;

console.log("========================================");
console.log("       HOÁ ĐƠN HIGHLANDS COFFEE");
console.log("========================================");
console.log(`Chuỗi order xử lý : ${orderSizes}`);
console.log(`Tổng tiền đồ uống : ${totalDrinkAmount} VNĐ`);
console.log(`Tiền topping      : ${toppingCount * TOPPING_PRICE} VNĐ`);
console.log("----------------------------------------");
console.log(`TỔNG TIỀN HÓA ĐƠN : ${finalBillAmount} VNĐ`);
console.log("========================================");
