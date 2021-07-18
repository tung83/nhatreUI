/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';

import Layout from '../../components/Layout';
import TextImageAside from '../../components/Shared/TextImageAside';
import { Highlight } from '../../components/Shared/Tags';

const HomePage = () => {
    return (
        <Layout
            pageTitle="Trường mẫu giáo Montessori tại Gò Vấp"
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
                <br />
                <p>
                    Babies' House được lập ra dựa trên nền tảng của cơ sở đầu
                    tiên Moms' House - Lớp mẫu giáo Nhà của Mẹ - được thành lập
                    vào ngày 12/12/2016, hiện nay các Bé đang sinh hoạt và làm
                    việc tại địa chỉ: 843/11 Nguyễn Kiệm – Phường 3 – Gò Vấp.
                </p>
                <br />
                <p>
                    Sau gần 4 năm hoạt động phát triển và ổn định, kể từ ngày
                    01/10/2019, Moms’House có thêm một ngôi nhà thứ 2 mang tên
                    Babies' House – Lớp mẫu giáo Nhà của Con cho các Bé tại khu
                    vực Gò Vấp ở địa chỉ 668/2A2 Lê Đức Thọ - Phường 15 – Gò
                    Vấp.
                </p>
            </TextImageAside>
        </Layout>
    );
};

export default HomePage;
