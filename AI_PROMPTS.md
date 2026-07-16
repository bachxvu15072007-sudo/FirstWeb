# AI_PROMPTS.md

Ghi lại các prompt đã sử dụng khi làm bài tập Portfolio với sự hỗ trợ của AI.

## 1. Lên ý tưởng & định hướng thiết kế

> "Xây dựng một website portfolio ReactJS (Vite) đáp ứng yêu cầu: Header với
> điều hướng mượt + dark/light mode, Hero, About & Skills, Projects (card +
> search/filter), Contact form có validate. Hãy đề xuất một hướng thiết kế
> khác biệt, không dùng theme mặc định kiểu 'cream + terracotta' hay 'dark +
> neon', mà gắn với chủ đề của một lập trình viên frontend."

## 2. Tổ chức kiến trúc component

> "Chia nhỏ giao diện portfolio thành các component độc lập theo từng section
> (Header, Hero, About, Projects, Contact, Footer), mỗi component có file CSS
> riêng, đặt trong thư mục components/ có cấu trúc rõ ràng."

## 3. Quản lý state & Dark/Light mode

> "Viết custom hook useDarkMode dùng useState + useEffect, lưu trạng thái
> theme vào localStorage để giữ nguyên chế độ sáng/tối khi người dùng tải
> lại trang."

## 4. Tìm kiếm & lọc dự án

> "Thêm thanh tìm kiếm (search input) và bộ lọc theo công nghệ (filter chip)
> cho Projects Section, dùng useState + useMemo để lọc mảng project theo
> tên/mô tả và theo công nghệ đã chọn."

## 5. Form liên hệ (Controlled Component)

> "Viết Contact form dạng Controlled Component với onChange/onSubmit, gọi
> e.preventDefault() để chặn reload trang, validate họ tên/email/lời nhắn,
> hiển thị lỗi từng field và thông báo thành công sau khi gửi hợp lệ."

## 6. Rà soát & tinh chỉnh

> "Kiểm tra lại toàn bộ code có tuân thủ clean code (camelCase, const/let,
> arrow function, destructuring, template literals) và tối ưu responsive cho
> màn hình di động không."

---