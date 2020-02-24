import React, {Component} from 'react';
import './question.scss'
import Header from '../../views/layout/header/header'

export default class question extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={'qt_wrap'}>
                <Header {...this.props} active={5}></Header>
                <div className={'qt_content'}>
                    <p>常见问题</p>
                    <div>
                        <p>Q:什么是跨境电子商务师？</p>
                        <span>A：跨境电子商务师考试是清华大学国家服务外包人力资源研究院（以下简称“研究院”）联合阿里巴巴集团，基于研究院经过多年在人才标准及认证领域的深入研究，以通过教育部科技成果鉴定的《应用技术型人才标准及认证体系》为基础，结合阿里巴巴集团跨境电商领域急需紧缺人才培养工程，在全范围内开展跨境电子商务师认证项目。</span>
                    </div>
                    <div>
                        <p>Q:什么是跨境电子商务师？</p>
                        <span>A：跨境电子商务师考试是清华大学国家服务外包人力资源研究院（以下简称“研究院”）联合阿里巴巴集团，基于研究院经过多年在人才标准及认证领域的深入研究，以通过教育部科技成果鉴定的《应用技术型人才标准及认证体系》为基础，结合阿里巴巴集团跨境电商领域急需紧缺人才培养工程，在全范围内开展跨境电子商务师认证项目。</span>
                    </div>
                    <div>
                        <p>Q:什么是跨境电子商务师？</p>
                        <span>A：跨境电子商务师考试是清华大学国家服务外包人力资源研究院（以下简称“研究院”）联合阿里巴巴集团，基于研究院经过多年在人才标准及认证领域的深入研究，以通过教育部科技成果鉴定的《应用技术型人才标准及认证体系》为基础，结合阿里巴巴集团跨境电商领域急需紧缺人才培养工程，在全范围内开展跨境电子商务师认证项目。</span>
                    </div>
                </div>
            </div>
        )
    }
}
