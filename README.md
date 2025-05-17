# Crypto Tracker MT

**Version:** 1.0.0

Crypto Tracker MT là một ứng dụng web được xây dựng bằng React và Vite, cho phép người dùng theo dõi các loại tiền điện tử hàng đầu. Ứng dụng hiển thị danh sách các đồng tiền với giá, vốn hóa thị trường và thay đổi giá trong 24 giờ, đồng thời cung cấp chế độ xem chi tiết cho từng đồng tiền, bao gồm biểu đồ lịch sử giá trong 30 ngày.

## Tính năng

* **Danh sách Coin:** Xem 100 loại tiền điện tử hàng đầu được xếp hạng theo vốn hóa thị trường, với các chi tiết như giá, vốn hóa thị trường và thay đổi giá trong 24 giờ.
* **Chi tiết Coin:** Truy cập thông tin chi tiết về một đồng tiền cụ thể, bao gồm giá hiện tại, vốn hóa thị trường, thay đổi giá trong 24 giờ và biểu đồ đường hiển thị lịch sử giá trong 30 ngày qua.
* **Thiết kế Responsive:** Ứng dụng được thiết kế giao diện cho cả máy tính để bàn và thiết bị di động.
* **Nguồn dữ liệu:** Lấy dữ liệu thời gian thực từ CoinGecko API.

## Công nghệ sử dụng

* **Frontend:** React, React Router, Axios, Chart.js, react-chartjs-2
* **Công cụ Build:** Vite
* **Styling:** CSS
* **API:** CoinGecko API
* **Quản lý phiên bản:** Git

## Yêu cầu tiên quyết

Trước khi bắt đầu, hãy đảm bảo bạn đã cài đặt các phần mềm sau:

* Node.js (phiên bản 16 trở lên)
* Git
* Một trình quản lý gói như npm (đi kèm với Node.js)

## Cài đặt

1.  **Clone kho lưu trữ:**

    ```bash
    git clone [https://github.com/tuzx0033/crypto_tracker_MT.git](https://github.com/tuzx0033/crypto_tracker_MT.git)
    cd crypto_tracker_MT
    ```

2.  **Cài đặt các dependencies:**

    ```bash
    npm install
    ```

    Lệnh này sẽ cài đặt tất cả các gói cần thiết, bao gồm React, Axios, Chart.js và react-chartjs-2.

3.  **Chạy ứng dụng:**

    ```bash
    npm run dev
    ```

    Lệnh này khởi động máy chủ phát triển Vite. Mở `http://localhost:3000` (hoặc cổng được chỉ định trong terminal của bạn) trong trình duyệt để xem ứng dụng.

## Sử dụng

* **Trang chủ:** Trang chính (/) hiển thị bảng gồm 100 loại tiền điện tử hàng đầu. Nhấp vào tên hoặc hình ảnh của một đồng tiền để xem chi tiết của nó.
* **Trang chi tiết Coin:** Điều hướng đến `/coin/:id` (ví dụ: `/coin/bitcoin`) để xem thông tin chi tiết về một đồng tiền cụ thể, bao gồm biểu đồ giá trong 30 ngày.
* **Xử lý lỗi:** Nếu API không tải được dữ liệu, ứng dụng sẽ hiển thị thông báo lỗi thân thiện với người dùng như "Không thể tải danh sách coin. Vui lòng thử lại sau."

## Cấu trúc dự án
