import React from 'react';

const FOOTER_CONTENT = [
    {
        title: 'infomation',
        contents: [
            'Designer ㅣ 김해우',
            'Phone number ㅣ 010 6229 2117',
            'E-mail | haewooking@gmail.com',
        ],
        hasLink: false
    },
    {
        title: 'CONTACT-US',
        contents: [
            'BI | UI | UX',
            '개발 | 유지보수 | 배포',
            '면접 및 개발 문의하기',
        ],
        hasLink: true
    }
]
const FooterContent = () => {
    return (
        <>
            {FOOTER_CONTENT.map((footerItem, index) => (
                <div className="dp-inline-b" key={index}>
                    <h2>{footerItem.title}</h2>
                    {footerItem.contents.map((content, contentIndex, orignalArr) => ((
                        footerItem.hasLink && contentIndex === orignalArr.length - 1) ?
                        <a key={`${index}_${contentIndex}`} href="/"> <p>{content}</p> </a> :
                        <p key={`${index}_${contentIndex}`}>{content}</p>
                    ))}
                </div>
            ))}
        </>
    );
}

export default FooterContent;
