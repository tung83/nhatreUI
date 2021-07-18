/* eslint-disable max-len */
import React from 'react';

import Layout from '../../components/Layout';
import ListDinhDuong from '../../components/Shared/ListDinhDuong';

const dinhduong = {
    key: 'dinh-duong',
    heading: 'Dinh dưỡng',
    subHeading:
        '<span>Moms’ House và Babies’House lựa chọn nguồn thực phẩm sạch, an toàn. \
        Tất cả món ăn đều được lưu mẫu theo quy định của Bộ Y tế.</span><p>Nguồn gốc:</p>',
    items: [
        {
            text:
                'Thực phẩm tươi sống mỗi ngày như: Trái cây, rau, củ, thịt, gà, vịt, cá…: \
                hiện được cung cấp chủ yếu từ Cửa hàng thực phẩm <b>Nông sản nhà quê </b>, số ít từ Emart, Vinmart, \
                Coopmart… ưu tiên dùng <b>thực phẩm không hóa chất.</b>',
        },
        {
            text:
                'Các loại hạt ngũ cốc chủ yếu mua từ Nông sản nhà quê, Emart, Vinmart, Coopmart… ưu tiên dùng thực phẩm không hóa chất.',
        },
        {
            text: 'Nước mắm: Nước mắm truyền thống.',
        },
        {
            text: 'Dầu ăn: dầu đậu phộng ép thủ công.',
        },
        {
            text:
                'Đường: sử dụng <b>đường mía, đường thốt nốt, không dùng đường tinh luyện.</b>',
        },
        {
            text:
                'Các Bé sẽ uống <b>sữa hạt, nước ép, sinh tố rau củ quả thay đổi hàng ngày</b>, <b>không nhận gửi sữa công nghiệp cho Bé.</b>',
        },
        {
            text:
                "Babies' House có 1 ngày ăn thuần thực vật – không dùng đạm động vật vào mỗi thứ 3 hàng tuần.",
        },
        {
            text:
                'Các món ăn được đặt vào bàn/ kệ, Bé sẽ tự lấy chén/ muỗng và chọn chỗ ngồi, dùng muỗng chung để lấy đồ ăn vào chén riêng. Bé ăn theo nhu cầu của mình, các Cô chỉ hỗ trợ khi cần thiết.',
        },
        {
            text:
                'Một số nguyên tắc các Bé áp dụng trong bữa ăn: Các Bé có quyền lựa chọn ăn hoặc không ăn, nhưng Bé được \
                khuyến khích thử món ăn đó, nhiều hay ít tùy vào Bé; Bé ăn bao nhiêu lấy bấy nhiêu; \
                Ăn hết phần thức ăn mình đã lấy để thể hiện trách nhiệm với đồ ăn; Khi ăn xong các Bé dọn chén và \
                dọn thức ăn rơi vãi tại khu vực ăn của mình; Bé ngồi ăn tại bàn, không \
                di chuyển khi chưa kết thúc bữa ăn (trừ khi Bé có nhu cầu vệ sinh hoặc cần bổ sung thêm đồ ăn).',
        },
        {
            text:
                'Moms’House và Babies’House khuyến nghị Bé nên có mặt tại lớp trước 8h15 phút để ăn sáng và hoàn tất bữa ăn trước 8h30 phút. \
                Lý do: \
                <ul><li>Để đảm bảo Bé có đủ năng lượng làm việc hiệu quả. </li>\
                <li>Để không ảnh hưởng đến chu kỳ làm việc 3 giờ của Bé từ 3 – 6 tuổi hoặc chu kỳ làm việc 2 giờ của Bé từ 0 – 3 tuổi vào mỗi sáng. </li>\
                <li>Để tất cả các Cô có thể hỗ trợ các Bé tại phòng làm việc.</li></ul>',
        },
    ],
};
const HomePage = () => {
    return (
        <Layout
            pageTitle="Chế độ dinh dưỡng - Trường mẫu giáo Montessori tại Gò Vấp"
            headerStyle="white-background"
        >
            <ListDinhDuong
                keyText={dinhduong.key}
                heading={dinhduong.heading}
                subHeading={dinhduong.subHeading}
                items={dinhduong.items}
            />
        </Layout>
    );
};

export default HomePage;
