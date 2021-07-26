/* eslint-disable max-len */
import React from 'react';

import Layout from '../../components/Layout';
import ListImagesParty from '../../components/Shared/ListImagesParty';
const dangoai = {
    key: 'gia-ngoai',
    heading: 'Dã ngoại - lễ hội',
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
const HomePage = () => {
    return (
        <Layout
            pageTitle="Lễ hội và dã ngoại - Trường mẫu giáo Montessori tại Gò Vấp"
            headerStyle="white-background"
        >
            <ListImagesParty
                keyText={dangoai.key}
                heading={dangoai.heading}
                subHeading={dangoai.subHeading}
                items={dangoai.items}
            />
        </Layout>
    );
};

export default HomePage;
