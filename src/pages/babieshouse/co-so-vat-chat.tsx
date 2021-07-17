/* eslint-disable max-len */
import React from 'react';

import Layout from '../../components/Layout';
import ListImages from '../../components/Shared/ListImages';

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

const HomePage = () => {
    return (
        <Layout
            pageTitle="Cơ sở vập chất Moms' House - Trường song ngữ theo phương pháp montessori chất lượng tại Gò Vấp"
            headerStyle="white-background"
        >
            <ListImages
                keyText={csvcBaby.key}
                heading={csvcBaby.heading}
                subHeading={csvcBaby.subHeading}
                items={csvcBaby.items}
            />
        </Layout>
    );
};

export default HomePage;
