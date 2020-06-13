Ext.onReady(function () {

    //  创建“登录”面板
    var loginPanel = new Ext.Panel({
        //  设置面板的位置、宽高、样式
        //  注意：此处我用的是相对布局relative（用于比较两者的区别）
        id: 'loginPan',
        x: 363,
        y: 0,
        width: 396,
        height: 480,
        baseCls: '',
        defaults: {
            border: false
        },
        //  添加面板里面的物品
        items: [
            {
                //  第一件：logo图
                id: 'loginLogo',
                height: 160,
                frame: false,
                bodyStyle: 'padding-top:10px',
                html: '<img src="images/clyde.js.png">'
            },
            {
                //  第二件：登录的表单
                id: 'loginForm',
                defaultType: 'textfield',
                frame: false,
                defaults: {
                    allowBlank: false
                },
                //  添加表单里面的物品：两个输入框
                items: [
                    {
                        id: "username",
                        cls: "text_field",
                        inoutType: 'text',
                        width: 330,
                        height: 28,
                        blankText: '帳號不能為空',
                        emptyText: '請輸入帳號',
                    },
                    {
                        id: "password",
                        cls: "text_field",
                        inputType: 'password',
                        width: 330,
                        height: 28,
                        emptyText: '請輸入密碼',
                        blankText: '密碼不能為空',
                    }]
            },
            {
                //  第三件：忘记密码
                id: 'loginForget',
                html: "<a href='forget_pwd.html'  target='_blank'>忘記密碼？</a>",
            },
            {
                //  第四件：登录按钮
                id: 'loginBtn',
                html: '<button id="btn_login">登入</button>',
            }
        ],
    });

    //  创建“注册”面板
    var registerPanel = new Ext.Panel({
        //  设置面板的位置、宽高、样式
        //  注意：此处我用的是绝对布局absolute（用于比较两者的区别）
        id: 'registerPan',
        x: 0,
        y: 46,
        width: 800,
        height: 389,
        baseCls: '',
        layout: 'absolute',
        defaults: {
            border: false
        },
        //  添加面板里面的物品
        items: [
            {
                //  第一件：标题
                id: 'registerTitleLabel',
                xtype: 'label',
                x: 47,
                y: 50,
                text: '還沒有帳號？',
            }, {
                //  第二件：正文
                id: 'registerContentLabel',
                xtype: 'label',
                x: 47,
                y: 135,
                text: '請點擊註冊或忘記密碼以獲取帳號',
            }, {
                //  第三件：注册按钮
                id: 'registerBtn',
                xtype: 'button',
                x: 47,
                y: 280,
                html: '<button id="btn_register" >馬上註冊</button>'
            }],

    });

    // 创建窗口，从而让内容达到居中效果
    var centerWindow = new Ext.Window({
        baseCls: '',
        width: 800,
        height: 480,
        layout: 'absolute',
        closable: false,
        draggable: false,
        resizable: false,
        shadow: false,
        border: false,
        items: [registerPanel, loginPanel],
    });

    //  显示窗口
    centerWindow.show();

    //  添加浏览器缩放自动居中效果
    Ext.EventManager.onWindowResize(function () {
        centerWindow.center();
    });
});
