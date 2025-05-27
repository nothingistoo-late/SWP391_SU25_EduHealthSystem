import React from 'react';
import videoHomePage from '../../assets/video-homepage.mp4'
import './HomePage.css'
const HomePage = () => {
    return (
        <div className="about-container">
            {/* Banner */}
            <section className="banner-section">
                <h1 className="banner-title">Y Tế Học Đường</h1>
                <p className="banner-subtitle">
                    Sức khỏe không phải là tất cả, nhưng không có sức khỏe thì chẳng có gì.
                </p>
            </section>

            {/* About Us */}
            <section className="about-us-section">
                <img
                    src="https://cdn2.tuoitre.vn/thumb_w/480/471584752817336320/2025/5/10/22aa40684bd1444baf85123ea01c08bf-1746842662574138098134.jpg"
                    alt="About us"
                    className="about-us-image"
                />
                <div className="about-us-text">
                    <h2 className="section-title">Chúng tôi là ai?</h2>
                    <p className="section-text">
                        Chúng tôi là đội ngũ chuyên gia y tế và giáo dục, cam kết hỗ trợ chăm sóc sức khỏe học sinh toàn diện. Trang web cung cấp thông tin, tài nguyên và công cụ giúp nhà trường, phụ huynh và cộng đồng tạo môi trường học đường an toàn, lành mạnh, góp phần phát triển thể chất và tinh thần cho thế hệ trẻ.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <h2 className="section-title-m-s">Sứ mệnh và Tầm nhìn</h2>
            <section className="mission-vision-section">

                <div className="mission">
                    <h3 className="subsection-title">Sứ mệnh</h3>
                    <p className="subsection-text">
                        Cung cấp công cụ y tế và mang đến cho học sinh những giải pháp để bảo vệ và cải thiện sức khỏe.
                    </p>
                </div>
                <div className="vision">
                    <h3 className="subsection-title">Tầm nhìn</h3>
                    <p className="subsection-text">
                        Trở thành nền tảng hàng đầu cung cấp thông tin, giải pháp và hỗ trợ toàn diện về chăm sóc sức khỏe học sinh, góp phần xây dựng môi trường giáo dục an toàn, lành mạnh và phát triển bền vững cho thế hệ trẻ.
                    </p>
                </div>
            </section>

            {/* Core Values */}
            <section className="core-values-section">
                <h2 className="section-title">Giá trị cốt lõi</h2>
                <ul className="values-list">
                    <li>Đổi mới và sáng tạo không ngừng</li>
                    <li>Hợp tác và tôn trọng lẫn nhau</li>
                    <li>Minh bạch và chính trực</li>
                    <li>Cam kết chất lượng và hiệu quả</li>
                </ul>
            </section>

            {/* Image */}
            <section className="image-section">
                <img
                    src=""
                    alt=""
                    className="about-image"
                />
            </section>
        </div>
    );
};

export default HomePage;