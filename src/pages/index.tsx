/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';

import Layout from '../components/Layout';
import TextImageAside from '../components/Shared/TextImageAside';
import { Highlight } from '../components/Shared/Tags';
import ListItems from '../components/Shared/ListItems';
import ListImages from '../components/Shared/ListImages';
import ListRows from '../components/Shared/ListRows';
import ListImagesParty from '../components/Shared/ListImagesParty';
import ListDinhDuong from '../components/Shared/ListDinhDuong';
import BieuPhi from '../components/Shared/BieuPhi';

const giatri = {
    key: 'gia-tri-cot-loi',
    heading: 'Giá trị cốt lõi',
    subHeading:
        '<span>Áp dụng phương pháp giáo dục Montessori với giá trị cốt lõi: \
    <span class="highlight">TÔN TRỌNG – TỰ DO – YÊU THƯƠNG</span>; Nơi Con \
    được <span class="highlight">LẮNG NGHE VÀ CHIA SẺ</span>.</span>',
    items: [
        {
            heading: 'Tôn trọng',
            text:
                'Trong môi trường, trẻ và người lớn tôn trọng lẫn nhau cũng như tôn \
        trọng mọi vật xung quanh.',
            icon: '/images/tontrong.png',
        },
        {
            heading: 'Tự do',
            text:
                'Trẻ được tự do di chuyển trong môi trường, tự do lựa chọn học cụ phu \
            hợp với năng lực và theo sự sẵn sàng của trẻ cũng như tự do trong việc \
            làm việc cùng học cụ bao lâu tùy theo mong muốn của trẻ.',
            icon: '/images/tudo.png',
        },
        {
            heading: 'Yêu thương',
            text:
                'Môi trường luôn đề cao sự yêu thương. Trẻ và người lớn chung sống hài \
                hòa và thể hiện tình cảm yêu thương, chia sẻ cùng với nhau.',
            icon: '/images/yeuthuong.png',
        },
    ],
};
const csvcMom = {
    key: 'co-so-vat-chat',
    heading: "Cơ sở vật chất Moms' House",
    subHeading:
        "<span>Moms'House là 1 biệt thự xanh mát với ánh sáng tự nhiên và gió trời thông thoáng, \
        đầy đủ khoảng không cho các con vui chơi ngoài trời. Với thiết kế phòng học rộng rãi, cửa sổ thoáng mát là môi trường lý tưởng cho các con làm việc và sinh hoạt tự do.</span>",
    items: [
        {
            icon: '/images/csvc_mom_1.jpg',
        },
        {
            icon: '/images/csvc_mom_2.jpg',
        },
        {
            icon: '/images/csvc_mom_3.jpg',
        },
        {
            icon: '/images/csvc_mom_4.jpg',
        },
        {
            icon: '/images/csvc_mom_5.jpg',
        },
        {
            icon: '/images/csvc_mom_6.jpg',
        },
        {
            icon: '/images/csvc_mom_7.jpg',
        },
        {
            icon: '/images/csvc_mom_8.jpg',
        },
        {
            icon: '/images/csvc_mom_9.jpg',
        },
        {
            icon: '/images/csvc_mom_10.jpg',
        },
        {
            icon: '/images/csvc_mom_11.jpg',
        },
        {
            icon: '/images/csvc_mom_12.jpg',
        },
    ],
};
const csvcBaby = {
    key: 'co-so-vat-chat-babies',
    heading: "Cơ sở vật chất Babies' House",
    subHeading:
        "<span>Babies'House là 1 biệt thự xanh mát với ánh sáng tự nhiên và gió trời thông thoáng, \
        diện tích sàn hơn 350m2 tọa lạc ở khu dân cư yên tĩnh, đường hẻm rộng rãi. \
        Khoảng sân rộng là chỗ đáp ứng nhu cầu vận động ngoài trời của các con mỗi sáng và chiều. Bên cạnh đó, \
        1 vườn rau nho nhỏ với các loại rau thân thuộc kèm các cây gia vị thơm lừng cũng là 1 điểm yêu thích \
        cho các con khi khám phá môi trường.</span>",
    items: [
        {
            icon: '/images/csvc_baby_1.jpg',
        },
        {
            icon: '/images/csvc_baby_2.jpg',
        },
        {
            icon: '/images/csvc_baby_3.jpg',
        },
        {
            icon: '/images/csvc_baby_4.jpg',
        },
        {
            icon: '/images/csvc_baby_5.jpg',
        },
        {
            icon: '/images/csvc_baby_6.jpg',
        },
        {
            icon: '/images/csvc_baby_7.jpg',
        },
        {
            icon: '/images/csvc_baby_8.jpg',
        },
        {
            icon: '/images/csvc_baby_9.jpg',
        },
        {
            icon: '/images/csvc_baby_10.jpg',
        },
        {
            icon: '/images/csvc_baby_11.jpg',
        },
        {
            icon: '/images/csvc_baby_12.jpg',
        },
    ],
};

const dangoai = {
    key: 'gia-ngoai',
    heading: 'Giã ngoại - lễ hội',
    subHeading:
        "<span>Trong năm học Babies’House sẽ tổ chức những lễ hội lớn cho các Bé có trải nghiệm thực tế, cụ thể có 5 lễ hội lớn: \
        Tết Cổ truyền (tháng 01); Ngày hội thể thao (tháng 3-4); Ngày hội gia đình (tháng 06); Tết Trung Thu (15/08  m Lịch); \
        Lễ Giáng Sinh (24/12); </span>\
        <p>Ngoài ra, tùy theo điều kiện thực tế và sự hỗ trợ của các Cơ quan - Đơn vị, Babies' House \
        sẽ có những chuyến trải nghiệm ngoài trời cho các Bé.</p>",
    items: [
        {
            icon: '/images/dangoai_1.jpg',
        },
        {
            icon: '/images/dangoai_2.jpg',
        },
        {
            icon: '/images/dangoai_3.jpg',
        },
        {
            icon: '/images/dangoai_4.jpg',
        },
        {
            icon: '/images/dangoai_5.jpg',
        },
        {
            icon: '/images/dangoai_6.jpg',
        },
        {
            icon: '/images/dangoai_7.jpg',
        },
        {
            icon: '/images/dangoai_8.jpg',
        },
        {
            icon: '/images/dangoai_9.jpg',
        },
        {
            icon: '/images/dangoai_10.jpg',
        },
        {
            icon: '/images/dangoai_11.jpg',
        },
        {
            icon: '/images/dangoai_12.jpg',
        },
        {
            icon: '/images/dangoai_13.jpg',
        },
        {
            icon: '/images/dangoai_14.jpg',
        },
        {
            icon: '/images/dangoai_15.jpg',
        },
        {
            icon: '/images/dangoai_16.jpg',
        },
    ],
};
const tuyensinh = {
    key: 'tuyen-sinh',
    heading: 'Tuyển sinh',
    subHeading:
        "<span>Mầm Non MOMS' HOUSE VÀ BABIES' HOUSE TUYỂN SINH CÁC BÉ TỪ 16 THÁNG TRỞ LÊN – \
        CON BIẾT ĐI VỮNG VÀ ĂN THÔ TỐT- KHU VỰC GÒ VẤP, QUẬN 12, BÌNH THẠNH, PHÚ NHUẬN: </span>",
    items: [
        {
            text:
                'Một môi trường thứ 2 cho Con (ngoài gia đình) mang triết lý giáo dục: \
                TÔN TRỌNG – TỰ DO – YÊU THƯƠNG; Nơi Con được LẮNG NGHE VÀ CHIA SẺ.',
        },
        {
            text:
                'Con được trải nghiệm chu kỳ làm việc liên tục ít nhất 2 tiếng (lớp 0-3) đến 3 tiếng/buổi sáng (lớp 3-6) \
                với sự chuẩn bị đặc biệt của người lớn trong môi trường với đầy đủ các học cụ mang tính khoa học. \
                Chu kỳ đó không bị can thiệp bởi những hoạt động ồn ào bên ngoài hay sự làm phiền của người lớn. ',
        },
        {
            text:
                'Con được dùng thức ăn lành mạnh, ưu tiên rau-củ-quả, hạn chế thịt đỏ và NÓI KHÔNG VỚI DẦU CÔNG NGHIỆP, NƯỚC MẮM CÔNG NGHIỆP, \
            ĐƯỜNG CÔNG NGHIỆP, THỨC ĂN NHANH, NƯỚC NGỌT, NƯỚC ÉP CÔNG NGHIỆP. \
            Nguyên liệu cho bữa ăn chất lượng của các Con được cung cấp chủ yếu bởi chuỗi cửa hàng Nông sản nhà quê. ',
        },
        {
            text:
                'Con được trải nghiệm nấu ăn, làm bánh mỗi chiều thứ 6 hàng tuần.',
        },
        {
            text:
                'Con được trải nghiệm những chuyến đi dã ngoại thật chất lượng mang tính trải nghiệm và tập trung vào chính Con.',
        },
        {
            text:
                'Vì đây là môi trường trộn độ tuổi nên Con luôn có cơ hội được THỰC HÀNH GIÚP ĐỠ, CHIA SẺ cùng nhau',
        },
        {
            text:
                "Con được sống trong môi trường trong lành, tận dụng được nhiều ánh sáng tự nhiên và khí trời vì Moms' House/ Babies' House \
                là một biệt thự với sân chơi rộng trong 1 hẻm rộng, yên tĩnh và nhiều cây xanh",
        },
        {
            text:
                'Môi trường có giáo viên Tiếng Anh giao tiếp cùng con mỗi ngày.',
        },
        {
            text:
                'Con có lộ trình 10 ngày làm quen môi trường, 3 buổi đầu phụ huynh sẽ đi cùng Con để hiểu 1 ngày làm việc của các Con sẽ trải qua như thế nào. \
                Kết thúc 10 ngày, Moms’House/ Babies’House sẽ họp cùng Ba Mẹ để trao đổi về BÁO CÁO QUAN SÁT các Cô ghi nhận được. \
                Nếu môi trường phù hợp cho sự phát triển của con và cũng đúng tiêu chí tìm kiếm của Ba Mẹ, khi đó Con sẽ nhập học chính thức',
        },
        {
            text:
                'Mỗi Bé sẽ nhập học cách nhau ít nhất 1 tuần để đảm bảo Con sẽ được quan sát và hỗ trợ hòa nhập với môi trường mới 1 cách phù hợp \
            nhất. Và còn nhiều nhiều điều nữa mà chỉ khi Ba Mẹ đến tận nơi quan sát và nhìn các Con, lắng nghe những tiếng chào hỏi, \
            trao đổi của các Con thì Ba Mẹ sẽ cảm nhận được đây là gia đình nhỏ của các Con đó ạ.',
        },
    ],
};

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
    ],
};
const chuongtrinh03 = {
    key: 'chuong-trinh-hoc-mon',
    heading: 'Chương trình Montessori lớp 0-3 tuổi',
    subHeading:
        '<span>Các bé làm quen với môi trường Montessori với nhiều hoạt động thú vị và làm việc thoải mái trên thảm của mình, <b>chương trình tiếng anh mỗi ngày</b> với giáo viên Tiếng anh tương tác nguyên ngày tại môi trường</span>',
    items: [
        {
            icon: '/images/chuongtrinh_03_1.jpg',
        },
        {
            icon: '/images/chuongtrinh_03_2.jpg',
        },
        {
            icon: '/images/chuongtrinh_03_3.jpg',
        },
        {
            icon: '/images/chuongtrinh_03_4.jpg',
        },
        {
            icon: '/images/chuongtrinh_03_5.jpg',
        },
        {
            icon: '/images/chuongtrinh_03_6.jpg',
        },
        {
            icon: '/images/chuongtrinh_03_7.jpg',
        },
        {
            icon: '/images/chuongtrinh_03_8.jpg',
        },
        {
            icon: '/images/chuongtrinh_03_9.jpg',
        },
        {
            icon: '/images/chuongtrinh_03_10.jpg',
        },
        {
            icon: '/images/chuongtrinh_03_11.jpg',
        },
        {
            icon: '/images/chuongtrinh_03_12.jpg',
        },
    ],
};

const chuongtrinh36 = {
    key: 'chuong-trinh-hoc-mon',
    heading: 'Chương trình Montessori lớp 3-6 tuổi',
    subHeading:
        '<span>Các bé làm quen với môi trường Montessori với nhiều môn học  \
        <ul><li>Thực hành cuộc sống</li> <li>Cảm quan</li> \
        <li>Toán học </li>\
        <li>Ngôn ngữ </li></ul>\
        </span>',
    items: [
        {
            icon: '/images/chuongtrinh_36_1.jpg',
        },
        {
            icon: '/images/chuongtrinh_36_2.jpg',
        },
        {
            icon: '/images/chuongtrinh_36_3.jpg',
        },
        {
            icon: '/images/chuongtrinh_36_4.jpg',
        },
        {
            icon: '/images/chuongtrinh_36_5.jpg',
        },
        {
            icon: '/images/chuongtrinh_36_6.jpg',
        },
        {
            icon: '/images/chuongtrinh_36_7.jpg',
        },
        {
            icon: '/images/chuongtrinh_36_8.jpg',
        },
        {
            icon: '/images/chuongtrinh_36_9.jpg',
        },
        {
            icon: '/images/chuongtrinh_36_10.jpg',
        },
        {
            icon: '/images/chuongtrinh_36_11.jpg',
        },
        {
            icon: '/images/chuongtrinh_36_12.jpg',
        },
    ],
};
const HomePage = () => {
    return (
        <Layout
            pageTitle="Trường song ngữ theo phương pháp montessori chất lượng tại Gò Vấp"
            headerStyle="white-background"
        >
            {/* <HomeHeader header={strapiPageHome.header} /> */}
            <TextImageAside
                heading="Về chúng tôi"
                image="/images/montessori_hinh1.jpg"
            >
                <div>
                    Moms' House và Babies' House là Ngôi nhà chung của 3 gia
                    đình có cùng tâm huyết và mong muốn: chung tay xây dựng một
                    cộng đồng giáo dục cho các Bé trong những năm đầu đời theo
                    Phương pháp Montessori từ năm 2015. Môi trường được xây dựng
                    dựa theo kim chỉ nam –{' '}
                    <Highlight>"TÔN TRỌNG - TỰ DO - YÊU THƯƠNG"</Highlight>.
                </div>
            </TextImageAside>
            <ListItems
                keyText={giatri.key}
                heading={giatri.heading}
                subHeading={giatri.subHeading}
                items={giatri.items}
            />
            <ListImages
                keyText={csvcMom.key}
                heading={csvcMom.heading}
                subHeading={csvcMom.subHeading}
                items={csvcMom.items}
            />
            <ListImages
                keyText={csvcBaby.key}
                heading={csvcBaby.heading}
                subHeading={csvcBaby.subHeading}
                items={csvcBaby.items}
            />
            <ListRows
                keyText={tuyensinh.key}
                heading={tuyensinh.heading}
                subHeading={tuyensinh.subHeading}
                items={tuyensinh.items}
            />
            <ListImagesParty
                keyText={dangoai.key}
                heading={dangoai.heading}
                subHeading={dangoai.subHeading}
                items={dangoai.items}
            />
            <ListDinhDuong
                keyText={dinhduong.key}
                heading={dinhduong.heading}
                subHeading={dinhduong.subHeading}
                items={dinhduong.items}
            />
            <BieuPhi />
            <ListImages
                keyText={chuongtrinh03.key}
                heading={chuongtrinh03.heading}
                subHeading={chuongtrinh03.subHeading}
                items={chuongtrinh03.items}
            />
            <ListImages
                keyText={chuongtrinh36.key}
                heading={chuongtrinh36.heading}
                subHeading={chuongtrinh36.subHeading}
                items={chuongtrinh36.items}
            />
        </Layout>
    );
};

export default HomePage;
