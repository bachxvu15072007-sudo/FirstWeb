# Portfolio — React + Vite

Trang portfolio cá nhân xây dựng bằng ReactJS (Vite), theo chủ đề **"code editor"**:
toàn bộ giao diện được thiết kế mô phỏng một trình soạn thảo code (tab bar điều hướng,
gutter số dòng ở Hero, tag kỹ năng tô màu cú pháp, footer dạng status bar).
Dark/Light Mode tương ứng với theme "One Dark Pro" và "GitHub Light".

## Cấu trúc thư mục

```
src/
├── components/
│   ├── Header/      # Tab-bar navigation + nút Dark/Light Mode
│   ├── Hero/         # Giới thiệu chung dạng code block
│   ├── About/        # Giới thiệu bản thân + Skills
│   ├── Projects/     # Danh sách dự án + search/filter
│   ├── Contact/      # Form liên hệ (Controlled Component)
│   └── Footer/        # Status bar
├── hooks/
│   └── useDarkMode.js # useState + useEffect + localStorage
├── data/
│   └── projectsData.js
├── App.jsx
├── main.jsx
└── index.css          # Design tokens (biến CSS cho 2 theme)
```

## Cài đặt & chạy thử

```bash
npm install
npm run dev
```

Mở trình duyệt tại địa chỉ hiển thị trong terminal (mặc định `http://localhost:5173`).

## Build production

```bash
npm run build
npm run preview
```

## Tuỳ biến nội dung

- Thay thông tin cá nhân trong `src/components/Hero/Hero.jsx` và `src/components/About/About.jsx`.
- Thay danh sách dự án trong `src/data/projectsData.js` (ảnh, link GitHub, công nghệ).
- Đặt file CV thật vào thư mục `public/cv.pdf` để nút "Tải CV" hoạt động đúng.
- Thay link mạng xã hội trong `src/components/Footer/Footer.jsx`.
