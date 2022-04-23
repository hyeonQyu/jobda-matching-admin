import React from 'react';
import style from '@styles/union.scss';
import classNames from 'classnames';

const Header = () => {
    return (
        <div className={style.jmf_head}>
            <img alt={'상단 배너'} className={style.jmf_web} src="https://www.midashri.com/hubfs/2022JMF/jobda/JMF_TopBannerVer2.png" />
            <img alt={'상단 mop'} className={style.jmf_mob} src="https://www.midashri.com/hubfs/2022JMF/jobda/JMF_Top_mobV2.png" />
            <div className={style.jmf_head_textbox}>
                <p className={style.title_06}>잡다매칭으로 취업하세요</p>
                <p className={style.text_04}>
                    <span className={style.g_bold}>간편</span>합니다. 프로필 등록을 완료한 후, 여러 기업에 원클릭으로 지원하세요.
                </p>
                <p className={classNames(style.text_04, style.mb3)}>
                    <span className={style.g_bold}>기회</span>입니다. 지원하지 않은 포지션에서도 면접제안을 받을 수 있습니다.
                </p>
            </div>
            <img alt={'상단 배너'} src="https://www.midashri.com/hubfs/2022JMF/jobda/JMF_TopBanner2.png" />
        </div>
    );
};

export default Header;
