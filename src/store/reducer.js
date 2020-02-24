let defaultState = {
    // isLogin:true,
    userInfo:{
        headImg: null,
        id: null,
        roleType: null,
        userName: null,
        nickName: null,
        sex: null,
        email: null,
    },
    test:{
        id:'test1',
        total:100,
        qt:[
            {
                s:1,//题号
                t:0,//类型 0单选 1多选 2填空
                q:'试题一', //题目
                a:[
                    {b:'A',t:'答案一'},
                    {b:'B',t:'答案二'},
                    {b:'C',t:'答案三'},
                    {b:'D',t:'答案四'},
                ],//答案选项
                real:'A',//正确答案
                r:'' ,//作答的答案
                tip:false ,//是否已经作答
                score:10 //分数
            },
            {
                s:2,//题号
                t:0,//类型 0单选 1多选 2填空
                q:'试题二', //题目
                a:[
                    {b:'A',t:'答案一'},
                    {b:'B',t:'答案二'},
                    {b:'C',t:'答案三'},
                    {b:'D',t:'答案四'},
                ],//答案选项
                real:'B',//正确答案
                r:'' ,//作答的答案
                tip:false ,//是否已经作答
                score:10 //分数
            },
            {
                s:3,//题号
                t:0,//类型 0单选 1多选 2填空
                q:'试题三', //题目
                a:[
                    {b:'A',t:'答案一'},
                    {b:'B',t:'答案二'},
                    {b:'C',t:'答案三'},
                    {b:'D',t:'答案四'},
                ],//答案选项
                real:'C',//正确答案
                r:'' ,//作答的答案
                tip:false ,//是否已经作答
                score:10 //分数
            },
            {
                s:4,//题号
                t:1,//类型 0单选 1多选 2填空
                q:'试题四', //题目
                a:[
                    {b:'A',t:'答案一'},
                    {b:'B',t:'答案二'},
                    {b:'C',t:'答案三'},
                    {b:'D',t:'答案四'},
                ],//答案选项
                real:['B','C'],//正确答案
                r:'' ,//作答的答案
                tip:false ,//是否已经作答
                score:10 //分数
            },
            {
                s:5,//题号
                t:1,//类型 0单选 1多选 2填空
                q:'试题五', //题目
                a:[
                    {b:'A',t:'答案一'},
                    {b:'B',t:'答案二'},
                    {b:'C',t:'答案三'},
                    {b:'D',t:'答案四'},
                ],//答案选项
                real:['A','B','C'],//正确答案
                r:'' ,//作答的答案
                tip:false ,//是否已经作答
                score:10 //分数
            },
            {
                s:6,//题号
                t:1,//类型 0单选 1多选 2填空
                q:'试题六', //题目
                a:[
                    {b:'A',t:'答案一'},
                    {b:'B',t:'答案二'},
                    {b:'C',t:'答案三'},
                    {b:'D',t:'答案四'},
                ],//答案选项
                real:['B','C','D'],//正确答案
                r:'' ,//作答的答案
                tip:false ,//是否已经作答
                score:10 //分数
            },
            {
                s:7,//题号
                t:2,//类型 0单选 1多选 2填空
                q:'试题七', //题目
                a:[
                    // {b:'A',t:'答案一'},
                    // {b:'B',t:'答案二'},
                    // {b:'C',t:'答案三'},
                    // {b:'D',t:'答案四'},
                ],//答案选项
                real:'',//正确答案
                r:'' ,//作答的答案
                tip:false ,//是否已经作答
                score:10 //分数
            },
            {
                s:8,//题号
                t:2,//类型 0单选 1多选 2填空
                q:'试题八', //题目
                a:[
                    // {b:'A',t:'答案一'},
                    // {b:'B',t:'答案二'},
                    // {b:'C',t:'答案三'},
                    // {b:'D',t:'答案四'},
                ],//答案选项
                real:'',//正确答案
                r:'' ,//作答的答案
                tip:false ,//是否已经作答
                score:10 //分数
            },
            {
                s:9,//题号
                t:3,//类型 0单选 1多选 2填空
                q:'试题九', //题目
                a:[
                    // {b:'A',t:'答案一'},
                    // {b:'B',t:'答案二'},
                    // {b:'C',t:'答案三'},
                    // {b:'D',t:'答案四'},
                ],//答案选项
                real:'',//正确答案
                r:'' ,//作答的答案
                tip:false ,//是否已经作答
                score:10 //分数
            },
            {
                s:10,//题号
                t:3,//类型 0单选 1多选 2填空
                q:'试题十', //题目
                a:[
                    // {b:'A',t:'答案一'},
                    // {b:'B',t:'答案二'},
                    // {b:'C',t:'答案三'},
                    // {b:'D',t:'答案四'},
                ],//答案选项
                real:'',//正确答案
                r:'' ,//作答的答案
                tip:false ,//是否已经作答
                score:10 //分数
            },
        ]
    }
};
const AllReducers = (state = defaultState, action) => {
    switch (action.type) {
        case 'login':
            return {...state,...{userInfo: {...action.value}}};
            break
        case 'logout':
            return {...state,...{isLogin: false}};
            break
        case 'handleAnswer':
            const {test} = state;
            test.qt[action.index].r = action.value.r;
            test.qt[action.index].tip = action.value.tip;
            return {...state,...{test:{...test}}};
            break
        default :
            return {...state}
    }
};
export default AllReducers
