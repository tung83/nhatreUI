/* eslint-disable max-len */
import React from 'react';

import Layout from '../../components/Layout';
import TextImageAside from '../../components/Shared/TextImageAside';

const HomePage = () => {
    return (
        <Layout
            pageTitle="Đội ngũ nhân sự - Trường song ngữ theo phương pháp montessori chất lượng tại Gò Vấp"
            headerStyle="white-background"
        >
            {/* <HomeHeader header={strapiPageHome.header} /> */}
            <TextImageAside
                heading="Đội ngũ nhân sự"
                image="/images/nhansu_1.jpg"
            >
                <div>
                    Đội ngũ nhân sự bao gồm giáo viên chính và trợ tá. Trong đó,
                    giáo viên chính được đào tạo theo chương trình Montessori
                    quốc tế dành cho trẻ từ 2.5 tuổi đến 6 tuổi của Trung tâm
                    đào tạo Montessori ́n Độ IMTC. Trợ tá là những giáo viên mầm
                    non được tuyển dụng theo tiêu chí sẵn sàng học hỏi để tiếp
                    nhận kiến thức mới, văn hóa môi trường mới, đảm bảo theo
                    định hướng Tôn trọng - Tự do - Yêu thương.
                </div>
            </TextImageAside>
        </Layout>
    );
};

export default HomePage;
