

## 1. Xác định vị trí và bản chất lỗi
- **Vị trí lỗi:** Trong vòng lặp `for` dùng để duyệt chuỗi `orderSizes`, tại khối điều kiện kiểm tra ký tự món bị hủy (ký tự `"X"`).
- **Bản chất lỗi (break vs continue):** 
  - Mã nguồn cũ sử dụng lệnh `break` khi gặp ký tự `"X"`. Cơ chế của `break` là **thoát hoàn toàn khỏi vòng lặp hiện tại**. Điều này dẫn đến việc hệ thống ngừng tính toán ngay khi gặp món bị hủy, bỏ qua toàn bộ các món đồ uống hợp lệ phía sau chữ `"X"`.
  - **Hướng khắc phục:** Thay thế lệnh `break` bằng lệnh `continue`. Cơ chế của `continue` là chỉ **bỏ qua lần lặp hiện tại** (không cộng tiền cho ký tự `"X"`) và lập tức chuyển sang lần lặp tiếp theo để tiếp tục xử lý các món đồ uống còn lại trong chuỗi order.

## 2. Bảng Test Case Đối Soát

| Trường hợp kiểm thử (Test Case) | Dữ liệu đầu vào (Input) | Kết quả sai thực tế (Khi dùng `break`) | Kết quả đúng mong đợi (Khi dùng `continue`) |
| :--- | :--- | :--- | :--- |
| **TC01:** Có món hủy (`"X"`) nằm ở giữa chuỗi | `orderSizes = "SXM"`<br>`toppingCount = 0`<br>`isGoldMember = false` | Chỉ tính `"S"` rồi dừng vòng lặp.<br>**Tổng tiền:** 35,000 VNĐ | Bỏ qua `"X"`, tính `"S"` (35k) và `"M"` (41k).<br>**Tổng tiền:** 76,000 VNĐ |
| **TC02:** Món hủy (`"X"`) nằm ở ngay đầu chuỗi | `orderSizes = "XLL"`<br>`toppingCount = 1`<br>`isGoldMember = true` | Gặp `"X"` dừng vòng lặp ngay, chỉ tính 1 topping (8k) - giảm 10%.<br>**Tổng tiền:** 7,200 VNĐ | Bỏ qua `"X"`, tính 2 ly `"L"` (45k x2) + 1 topping (8k) - giảm 10%.<br>**Tổng tiền:** 88,200 VNĐ |
