import React, {Component} from 'react';
import './idCheck.scss'
import {Upload,Dialog} from 'element-react'
export default class idCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogImageUrl: '',
            dialogVisible: false,
            dialogImageUrl1: '',
            dialogVisible1: false,
        };
    }

    render() {
        const { dialogImageUrl, dialogVisible } = this.state;
        const { dialogImageUrl1, dialogVisible1 } = this.state;
        return (
            <div className={'idCheck_content'}>
                <p>身份认证<span>（审核状态：<em>未提交审核</em>）</span></p>
                <div>
                    <p>请拍摄并上传您的身份证照片</p>
                    <div>
                        <div className={'upload'}>
                            <a>上传正面照</a>
                            <Upload
                                // style={{display:this.state.dialogImageUrl === ''?'inline-block':'none'}}
                                action="//jsonplaceholder.typicode.com/posts/"
                                listType="picture-card"
                                limit={1}
                                // onPreview={file => this.handlePictureCardPreview(file)}
                                // onRemove={(file, fileList) => this.handleRemove(file, fileList)}
                            >
                            </Upload>
                            <Dialog
                                visible={dialogVisible}
                                size="tiny"
                                onCancel={() => this.setState({ dialogVisible: false })}
                            >
                                <img width="100%" src={dialogImageUrl} alt="" />
                            </Dialog>
                        </div>
                        <div className={'upload'}>
                            <a>上传正面照</a>
                            <Upload
                                // style={{display:this.state.dialogImageUrl === ''?'inline-block':'none'}}
                                action="//jsonplaceholder.typicode.com/posts/"
                                listType="picture-card"
                                limit={1}
                                // onPreview={file => this.handlePictureCardPreview(file)}
                                // onRemove={(file, fileList) => this.handleRemove(file, fileList)}
                            >
                            </Upload>
                            <Dialog
                                visible={dialogVisible1}
                                size="tiny"
                                onCancel={() => this.setState({ dialogVisible1: false })}
                            >
                                <img width="100%" src={dialogImageUrl1} alt="" />
                            </Dialog>
                        </div>
                    </div>
                    <p>拍摄身份证要求</p>
                    <span>大陆公特有的有效二代身份证；</span>
                    <span>拍摄时确保身份证<strong>边框完整，字体清晰，亮度均匀</strong>；</span>
                    <div>
                        <img src={require('../../../../assets/images/id_check3.png')} />
                        <img src={require('../../../../assets/images/id_check4.png')} />
                        <img src={require('../../../../assets/images/id_check5.png')} />
                        <img src={require('../../../../assets/images/id_check6.png')} />
                    </div>
                </div>
            </div>
        )
    }
}
