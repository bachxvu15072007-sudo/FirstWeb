/**
 * Dữ liệu mẫu cho Projects Section.
 * Thay ảnh, mô tả, link GitHub bằng dự án thật của bạn.
 */
export const projectsData = [
  {
    id: 1,
    title: 'TasteBuds — App đặt món ăn',
    description:
      'Ứng dụng đặt món trực tuyến với giỏ hàng realtime, lọc theo danh mục và thanh toán giả lập.',
    tech: ['React', 'JavaScript', 'CSS'],
    image: 'https://picsum.photos/seed/tastebuds/640/420',
    github: 'https://github.com/your-username/tastebuds',
  },
  {
    id: 2,
    title: 'FocusFlow — Quản lý công việc',
    description:
      'Bảng Kanban kéo-thả để theo dõi tiến độ công việc cá nhân, lưu trạng thái vào localStorage.',
    tech: ['React', 'JavaScript', 'HTML'],
    image: 'https://picsum.photos/seed/focusflow/640/420',
    github: 'https://github.com/your-username/focusflow',
  },
  {
    id: 3,
    title: 'WeatherNow — Dự báo thời tiết',
    description:
      'Tra cứu thời tiết theo thành phố qua API công khai, giao diện responsive và biểu đồ nhiệt độ.',
    tech: ['React', 'CSS', 'API'],
    image: 'https://picsum.photos/seed/weathernow/640/420',
    github: 'https://github.com/your-username/weathernow',
  },
  {
    id: 4,
    title: 'PixelShop — Landing page thương mại',
    description:
      'Trang giới thiệu sản phẩm với hiệu ứng cuộn mượt, tối ưu SEO cơ bản và tốc độ tải trang.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: 'https://picsum.photos/seed/pixelshop/640/420',
    github: 'https://github.com/your-username/pixelshop',
  },
  {
    id: 5,
    title: 'DevNotes — Ghi chú cho lập trình viên',
    description:
      'Ứng dụng ghi chú hỗ trợ Markdown, tô sáng cú pháp code và tìm kiếm nhanh theo thẻ.',
    tech: ['React', 'JavaScript'],
    image: 'https://picsum.photos/seed/devnotes/640/420',
    github: 'https://github.com/your-username/devnotes',
  },
  {
    id: 6,
    title: 'ExpenseTracker — Quản lý chi tiêu',
    description:
      'Theo dõi thu chi hàng tháng với biểu đồ trực quan và phân loại theo danh mục tuỳ chỉnh.',
    tech: ['React', 'CSS'],
    image: 'https://picsum.photos/seed/expensetracker/640/420',
    github: 'https://github.com/your-username/expensetracker',
  },
]

/** Danh sách công nghệ duy nhất, dùng để tạo bộ lọc (Filter) */
export const allTechs = ['Tất cả', ...new Set(projectsData.flatMap((p) => p.tech))]
