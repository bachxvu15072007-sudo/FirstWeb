import { useState } from 'react'
import { Send, CheckCircle2 } from 'lucide-react'
import './Contact.css'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const INITIAL_FORM = { name: '', email: '', message: '' }

/**
 * Contact Section — Form liên hệ dạng Controlled Component.
 * - value/onChange được gắn với state formData (kiểm soát hoàn toàn bởi React).
 * - onSubmit gọi e.preventDefault() để chặn tải lại trang.
 * - Có validate cơ bản và thông báo thành công sau khi gửi hợp lệ.
 */
export default function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // xoá lỗi của field đang gõ để phản hồi tức thời
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const validate = ({ name, email, message }) => {
    const nextErrors = {}
    if (!name.trim()) nextErrors.name = 'Vui lòng nhập họ tên.'
    if (!email.trim()) {
      nextErrors.email = 'Vui lòng nhập email.'
    } else if (!EMAIL_REGEX.test(email.trim())) {
      nextErrors.email = 'Email không hợp lệ.'
    }
    if (!message.trim()) {
      nextErrors.message = 'Vui lòng nhập lời nhắn.'
    } else if (message.trim().length < 10) {
      nextErrors.message = 'Lời nhắn cần ít nhất 10 ký tự.'
    }
    return nextErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault() // chặn hành vi tải lại trang mặc định của form

    const validationErrors = validate(formData)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      setIsSubmitted(false)
      return
    }

    // TODO: thay đoạn này bằng lời gọi API/email thật (vd: EmailJS, Formspree, backend riêng)
    console.log('Gửi liên hệ:', formData)

    setIsSubmitted(true)
    setFormData(INITIAL_FORM)

    setTimeout(() => setIsSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <span className="section-label">04_contact</span>
        <h2 className="contact__heading">Liên hệ với mình</h2>
        <p className="contact__intro">
          Có dự án muốn hợp tác hoặc chỉ đơn giản muốn trò chuyện? Điền form bên dưới,
          mình sẽ phản hồi sớm nhất có thể.
        </p>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="form-field">
            <label htmlFor="name">Họ tên</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nguyễn Văn A"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && <span id="name-error" className="form-error">{errors.name}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ban@email.com"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && <span id="email-error" className="form-error">{errors.email}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="message">Lời nhắn</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Mình muốn trao đổi về..."
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && <span id="message-error" className="form-error">{errors.message}</span>}
          </div>

          <button type="submit" className="btn btn-primary contact__submit">
            Gửi <Send size={16} />
          </button>

          {isSubmitted && (
            <p className="contact__success" role="status">
              <CheckCircle2 size={17} /> Gửi thành công! Cảm ơn bạn đã liên hệ.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
