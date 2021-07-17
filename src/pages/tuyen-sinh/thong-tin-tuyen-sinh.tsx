/* eslint-disable max-len */
import React from 'react';

import Layout from '../../components/Layout';
import ListRows from '../../components/Shared/ListRows';

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

const HomePage = () => {
    return (
        <Layout
            pageTitle="Tuyển sinh - Trường song ngữ theo phương pháp montessori chất lượng tại Gò Vấp"
            headerStyle="white-background"
        >
            <ListRows
                keyText={tuyensinh.key}
                heading={tuyensinh.heading}
                subHeading={tuyensinh.subHeading}
                items={tuyensinh.items}
            />
        </Layout>
    );
};

export default HomePage;
