/* eslint-disable max-len */
import React from 'react';

import Layout from '../../components/Layout';
import ListItems from '../../components/Shared/ListItems';

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
const HomePage = () => {
    return (
        <Layout
            pageTitle="Giá trị cốt lõi - Trường song ngữ theo phương pháp montessori chất lượng tại Gò Vấp"
            headerStyle="white-background"
        >
            <ListItems
                keyText={giatri.key}
                heading={giatri.heading}
                subHeading={giatri.subHeading}
                items={giatri.items}
            />
        </Layout>
    );
};

export default HomePage;
