/* eslint-disable max-len */
import React from 'react';

import Layout from '../../components/Layout';
import ListImages from '../../components/Shared/ListImages';

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

const HomePage = () => {
    return (
        <Layout
            pageTitle="Cơ sở vập chất Moms' House - Trường song ngữ theo phương pháp montessori chất lượng tại Gò Vấp"
            headerStyle="white-background"
        >
            <ListImages
                keyText={csvcMom.key}
                heading={csvcMom.heading}
                subHeading={csvcMom.subHeading}
                items={csvcMom.items}
            />
        </Layout>
    );
};

export default HomePage;
