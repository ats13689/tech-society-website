// 多語言配置文件
const translations = {
    'zh-TW': {
        // 導航
        nav: {
            home: '首頁',
            about: '關於我們',
            activities: '活動',
            projects: '專案',
            team: '團隊',
            contact: '聯絡我們',
            admin: '管理後台',
            login: '登入',
            register: '註冊',
            logout: '登出',
            title: '科技學會'
        },
        // 訊息
        messages: {
            loading: '載入中...',
            loginSuccess: '登入成功！',
            loginError: '登入失敗，請檢查郵箱和密碼',
            registerSuccess: '註冊成功！請等待管理員審核。',
            registerError: '註冊失敗，請稍後再試',
            verificationSent: '驗證碼已發送到您的郵箱',
            verificationError: '驗證碼錯誤或已過期',
            passwordResetError: '重設密碼失敗'
        },
        // 首頁
        hero: {
            title: '歡迎來到科技學會',
            subtitle: '探索科技，創造未來',
            viewActivities: '查看活動',
            joinUs: '加入我們'
        },
        // 關於
        about: {
            title: '關於我們',
            innovation: '創新思維',
            innovationDesc: '培養創新精神，鼓勵成員探索前沿科技，挑戰傳統思維，開創新的可能性。',
            teamwork: '團隊協作',
            teamworkDesc: '打造互助學習的環境，通過團隊項目增進合作能力，共同成長進步。',
            knowledge: '知識分享',
            knowledgeDesc: '定期舉辦講座和工作坊，分享最新技術趨勢和實用技能，促進知識交流。'
        },
        // 活動
        activities: {
            title: '近期活動',
            loading: '載入中...',
            empty: '目前沒有活動',
            learnMore: '了解更多'
        },
        // 專案
        projects: {
            title: '精選專案',
            loading: '載入中...',
            empty: '目前沒有專案',
            status: {
                ongoing: '進行中',
                completed: '已完成',
                planned: '計劃中'
            },
            members: '位成員參與',
            viewProject: '查看專案'
        },
        // 團隊
        team: {
            title: '核心團隊'
        },
        // 聯絡
        contact: {
            title: '聯絡我們',
            name: '姓名',
            namePlaceholder: '請輸入您的姓名',
            email: '電子郵件',
            emailPlaceholder: 'your@email.com',
            subject: '主旨',
            subjectPlaceholder: '請輸入主旨',
            message: '訊息',
            messagePlaceholder: '請輸入您的訊息',
            send: '送出訊息',
            success: '我們已收到你嘅聯絡,並會在三個工作天內回覆你。',
            sendMessageTitle: '發送訊息',
            yourEmail: '您的電郵',
            content: '內容',
            contentPlaceholder: '請輸入您的問題或建議...',
            sendButton: '發送訊息',
            emailLabel: '電子郵件',
            address: '地址',
            hours: '開放時間',
            hoursValue: '週一至週五 9:00-18:00',
            error: '發送失敗，請稍後再試'
        },
        // 登入
        login: {
            title: '管理後台登入',
            subtitle: '請登入以繼續',
            username: '用戶名',
            usernamePlaceholder: '請輸入用戶名',
            email: '電子郵件',
            emailPlaceholder: '請輸入電子郵件',
            password: '密碼',
            passwordPlaceholder: '請輸入密碼',
            loginBtn: '登入',
            forgotPassword: '忘記密碼？',
            forgotUsername: '忘記用戶名？',
            noAccount: '還沒有帳號？',
            registerNow: '立即註冊',
            error: '用戶名或密碼錯誤',
            pending: '您的帳號正在等待管理員審核'
        },
        // 註冊
        register: {
            title: '註冊新帳號',
            subtitle: '加入科技學會管理團隊',
            fullName: '真實姓名',
            fullNamePlaceholder: '請輸入您的真實姓名',
            username: '用戶名',
            usernamePlaceholder: '請設定用戶名',
            email: '電子郵件',
            emailPlaceholder: '請輸入電子郵件',
            password: '密碼',
            passwordPlaceholder: '請設定密碼（至少6位）',
            confirmPassword: '確認密碼',
            confirmPasswordPlaceholder: '請再次輸入密碼',
            registerBtn: '註冊',
            hasAccount: '已有帳號？',
            loginNow: '立即登入',
            success: '註冊成功！請等待管理員審核。',
            passwordMismatch: '兩次密碼輸入不一致',
            emailExists: '此電子郵件已被註冊'
        },
        // 忘記密碼
        forgotPassword: {
            title: '重設密碼',
            subtitle: '我們會發送驗證碼到您的電子郵件',
            email: '電子郵件',
            emailPlaceholder: '請輸入註冊時使用的電子郵件',
            sendCode: '發送驗證碼',
            verificationCode: '驗證碼',
            verificationCodePlaceholder: '請輸入6位驗證碼',
            newPassword: '新密碼',
            newPasswordPlaceholder: '請設定新密碼',
            confirmPassword: '確認新密碼',
            confirmPasswordPlaceholder: '請再次輸入新密碼',
            resetPassword: '重設密碼',
            backToLogin: '返回登入',
            codeSent: '驗證碼已發送到您的郵箱',
            success: '密碼重設成功！',
            invalidCode: '驗證碼錯誤',
            emailNotFound: '找不到此電子郵件'
        },
        // 忘記用戶名
        forgotUsername: {
            title: '忘記用戶名',
            subtitle: '我們會發送驗證碼到您的電子郵件',
            email: '電子郵件',
            sendCode: '發送驗證碼',
            verificationCode: '驗證碼',
            verify: '驗證並顯示',
            found: '找到您的帳號',
            yourUsername: '您的用戶名（電郵）：',
            backToLogin: '返回登入',
            notRegistered: '此電子郵件尚未註冊，請先註冊帳號。'
        },
        // 後台
        admin: {
            welcome: '歡迎回來',
            dashboard: '管理後台',
            returnFront: '返回前台',
            activities: '活動管理',
            projects: '專案管理',
            team: '團隊管理',
            users: '用戶管理',
            settings: '網站設置',
            add: '新增',
            edit: '編輯',
            delete: '刪除',
            save: '儲存',
            cancel: '取消',
            confirm: '確定',
            loading: '載入中...',
            empty: '暫無資料',
            deleteConfirm: '確定要刪除嗎？',
            success: '操作成功！',
            error: '操作失敗',
            // 活動管理
            activityTitle: '活動標題',
            activityDate: '活動日期',
            activityDescription: '活動描述',
            activityLink: '活動連結',
            // 專案管理
            projectTitle: '專案標題',
            projectStatus: '專案狀態',
            projectDescription: '專案描述',
            projectTechnologies: '使用技術',
            projectMembers: '參與成員數',
            projectLink: '專案連結',
            // 團隊管理
            memberName: '成員姓名',
            memberPosition: '職位',
            memberBio: '個人簡介',
            memberAvatar: '頭像連結',
            memberGithub: 'GitHub 連結',
            memberEmail: '電子郵件',
            // 用戶管理
            userName: '用戶名',
            userEmail: '電子郵件',
            userRole: '角色',
            userStatus: '狀態',
            approve: '批准',
            reject: '拒絕',
            pending: '待審核',
            approved: '已批准',
            rejected: '已拒絕',
            // 網站設置
            siteEmail: '聯絡郵箱',
            sitePhone: '聯絡電話',
            siteAddress: '地址',
            siteFacebook: 'Facebook',
            siteTwitter: 'Twitter',
            siteGithub: 'GitHub'
        },
        // 通用
        common: {
            language: '語言',
            loading: '載入中...',
            error: '發生錯誤',
            success: '成功',
            confirm: '確定',
            cancel: '取消',
            save: '儲存',
            delete: '刪除',
            edit: '編輯',
            add: '新增',
            search: '搜尋',
            filter: '篩選',
            all: '全部'
        }
    },
    'zh-CN': {
        nav: {
            home: '首页',
            about: '关于我们',
            activities: '活动',
            projects: '项目',
            team: '团队',
            contact: '联系我们',
            admin: '管理后台',
            login: '登录',
            register: '注册',
            logout: '登出',
            title: '科技学会'
        },
        messages: {
            loading: '加载中...',
            loginSuccess: '登录成功！',
            loginError: '登录失败，请检查邮箱和密码',
            registerSuccess: '注册成功！请等待管理员审核。',
            registerError: '注册失败，请稍后再试',
            verificationSent: '验证码已发送到您的邮箱',
            verificationError: '验证码错误或已过期',
            passwordResetError: '重置密码失败'
        },
        hero: {
            title: '欢迎来到科技学会',
            subtitle: '探索科技，创造未来',
            viewActivities: '查看活动',
            joinUs: '加入我们'
        },
        about: {
            title: '关于我们',
            innovation: '创新思维',
            innovationDesc: '培养创新精神，鼓励成员探索前沿科技，挑战传统思维，开创新的可能性。',
            teamwork: '团队协作',
            teamworkDesc: '打造互助学习的环境，通过团队项目增进合作能力，共同成长进步。',
            knowledge: '知识分享',
            knowledgeDesc: '定期举办讲座和工作坊，分享最新技术趋势和实用技能，促进知识交流。'
        },
        activities: {
            title: '近期活动',
            loading: '加载中...',
            empty: '目前没有活动',
            learnMore: '了解更多'
        },
        projects: {
            title: '精选项目',
            loading: '加载中...',
            empty: '目前没有项目',
            status: {
                ongoing: '进行中',
                completed: '已完成',
                planned: '计划中'
            },
            members: '位成员参与',
            viewProject: '查看项目'
        },
        team: {
            title: '核心团队'
        },
        contact: {
            title: '联系我们',
            name: '姓名',
            namePlaceholder: '请输入您的姓名',
            email: '电子邮件',
            emailPlaceholder: 'your@email.com',
            subject: '主题',
            subjectPlaceholder: '请输入主题',
            message: '消息',
            messagePlaceholder: '请输入您的消息',
            send: '发送消息',
            success: '我们已收到您的联系,并会在三个工作日内回复您。',
            sendMessageTitle: '发送消息',
            yourEmail: '您的邮箱',
            content: '内容',
            contentPlaceholder: '请输入您的问题或建议...',
            sendButton: '发送消息',
            emailLabel: '电子邮件',
            address: '地址',
            hours: '开放时间',
            hoursValue: '周一至周五 9:00-18:00',
            error: '发送失败，请稍后再试'
        },
        login: {
            title: '管理后台登录',
            subtitle: '请登录以继续',
            username: '用户名',
            usernamePlaceholder: '请输入用户名',
            email: '电子邮件',
            emailPlaceholder: '请输入电子邮件',
            password: '密码',
            passwordPlaceholder: '请输入密码',
            loginBtn: '登录',
            forgotPassword: '忘记密码？',
            forgotUsername: '忘记用户名？',
            noAccount: '还没有账号？',
            registerNow: '立即注册',
            error: '用户名或密码错误',
            pending: '您的账号正在等待管理员审核'
        },
        register: {
            title: '注册新账号',
            subtitle: '加入科技学会管理团队',
            fullName: '真实姓名',
            fullNamePlaceholder: '请输入您的真实姓名',
            username: '用户名',
            usernamePlaceholder: '请设定用户名',
            email: '电子邮件',
            emailPlaceholder: '请输入电子邮件',
            password: '密码',
            passwordPlaceholder: '请设定密码（至少6位）',
            confirmPassword: '确认密码',
            confirmPasswordPlaceholder: '请再次输入密码',
            registerBtn: '注册',
            hasAccount: '已有账号？',
            loginNow: '立即登录',
            success: '注册成功！请等待管理员审核。',
            passwordMismatch: '两次密码输入不一致',
            emailExists: '此电子邮件已被注册'
        },
        forgotPassword: {
            title: '重置密码',
            subtitle: '我们会发送验证码到您的电子邮件',
            email: '电子邮件',
            emailPlaceholder: '请输入注册时使用的电子邮件',
            sendCode: '发送验证码',
            verificationCode: '验证码',
            verificationCodePlaceholder: '请输入6位验证码',
            newPassword: '新密码',
            newPasswordPlaceholder: '请设定新密码',
            confirmPassword: '确认新密码',
            confirmPasswordPlaceholder: '请再次输入新密码',
            resetPassword: '重置密码',
            backToLogin: '返回登录',
            codeSent: '验证码已发送到您的邮箱',
            success: '密码重置成功！',
            invalidCode: '验证码错误',
            emailNotFound: '找不到此电子邮件'
        },
        // 忘记用户名
        forgotUsername: {
            title: '忘记用户名',
            subtitle: '我们会发送验证码到您的电子邮件',
            email: '电子邮件',
            sendCode: '发送验证码',
            verificationCode: '验证码',
            verify: '验证并显示',
            found: '找到您的账号',
            yourUsername: '您的用户名（邮箱）：',
            backToLogin: '返回登录',
            notRegistered: '此电子邮件尚未注册，请先注册账号。'
        },
        admin: {
            welcome: '欢迎回来',
            dashboard: '管理后台',
            returnFront: '返回前台',
            activities: '活动管理',
            projects: '项目管理',
            team: '团队管理',
            users: '用户管理',
            settings: '网站设置',
            add: '新增',
            edit: '编辑',
            delete: '删除',
            save: '保存',
            cancel: '取消',
            confirm: '确定',
            loading: '加载中...',
            empty: '暂无资料',
            deleteConfirm: '确定要删除吗？',
            success: '操作成功！',
            error: '操作失败',
            activityTitle: '活动标题',
            activityDate: '活动日期',
            activityDescription: '活动描述',
            activityLink: '活动链接',
            projectTitle: '项目标题',
            projectStatus: '项目状态',
            projectDescription: '项目描述',
            projectTechnologies: '使用技术',
            projectMembers: '参与成员数',
            projectLink: '项目链接',
            memberName: '成员姓名',
            memberPosition: '职位',
            memberBio: '个人简介',
            memberAvatar: '头像链接',
            memberGithub: 'GitHub 链接',
            memberEmail: '电子邮件',
            userName: '用户名',
            userEmail: '电子邮件',
            userRole: '角色',
            userStatus: '状态',
            approve: '批准',
            reject: '拒绝',
            pending: '待审核',
            approved: '已批准',
            rejected: '已拒绝',
            siteEmail: '联系邮箱',
            sitePhone: '联系电话',
            siteAddress: '地址',
            siteFacebook: 'Facebook',
            siteTwitter: 'Twitter',
            siteGithub: 'GitHub'
        },
        common: {
            language: '语言',
            loading: '加载中...',
            error: '发生错误',
            success: '成功',
            confirm: '确定',
            cancel: '取消',
            save: '保存',
            delete: '删除',
            edit: '编辑',
            add: '新增',
            search: '搜索',
            filter: '筛选',
            all: '全部'
        }
    },
    'en': {
        nav: {
            home: 'Home',
            about: 'About',
            activities: 'Activities',
            projects: 'Projects',
            team: 'Team',
            contact: 'Contact',
            admin: 'Admin Panel',
            login: 'Login',
            register: 'Register',
            logout: 'Logout',
            title: 'Tech Society'
        },
        messages: {
            loading: 'Loading...',
            loginSuccess: 'Login successful!',
            loginError: 'Login failed, please check your email and password',
            registerSuccess: 'Registration successful! Please wait for admin approval.',
            registerError: 'Registration failed, please try again later',
            verificationSent: 'Verification code sent to your email',
            verificationError: 'Verification code is incorrect or expired',
            passwordResetError: 'Password reset failed'
        },
        hero: {
            title: 'Welcome to Technology Society',
            subtitle: 'Explore Technology, Create Future',
            viewActivities: 'View Activities',
            joinUs: 'Join Us'
        },
        about: {
            title: 'About Us',
            innovation: 'Innovation',
            innovationDesc: 'Foster innovation, encourage members to explore cutting-edge technology, challenge traditional thinking, and create new possibilities.',
            teamwork: 'Teamwork',
            teamworkDesc: 'Build a collaborative learning environment, enhance cooperation through team projects, and grow together.',
            knowledge: 'Knowledge Sharing',
            knowledgeDesc: 'Regularly hold lectures and workshops, share latest technology trends and practical skills, promote knowledge exchange.'
        },
        activities: {
            title: 'Recent Activities',
            loading: 'Loading...',
            empty: 'No activities available',
            learnMore: 'Learn More'
        },
        projects: {
            title: 'Featured Projects',
            loading: 'Loading...',
            empty: 'No projects available',
            status: {
                ongoing: 'Ongoing',
                completed: 'Completed',
                planned: 'Planned'
            },
            members: 'Members',
            viewProject: 'View Project'
        },
        team: {
            title: 'Core Team'
        },
        contact: {
            title: 'Contact Us',
            name: 'Name',
            namePlaceholder: 'Enter your name',
            email: 'Email',
            emailPlaceholder: 'your@email.com',
            subject: 'Subject',
            subjectPlaceholder: 'Enter subject',
            message: 'Message',
            messagePlaceholder: 'Enter your message',
            send: 'Send Message',
            success: 'We have received your contact and will reply within three business days.',
            sendMessageTitle: 'Send Message',
            yourEmail: 'Your Email',
            content: 'Content',
            contentPlaceholder: 'Please enter your questions or suggestions...',
            sendButton: 'Send Message',
            emailLabel: 'Email',
            address: 'Address',
            hours: 'Opening Hours',
            hoursValue: 'Monday - Friday 9:00-18:00',
            error: 'Failed to send, please try again later'
        },
        login: {
            title: 'Admin Login',
            subtitle: 'Please login to continue',
            username: 'Username',
            usernamePlaceholder: 'Enter username',
            email: 'Email',
            emailPlaceholder: 'Enter email',
            password: 'Password',
            passwordPlaceholder: 'Enter password',
            loginBtn: 'Login',
            forgotPassword: 'Forgot Password?',
            forgotUsername: 'Forgot Username?',
            noAccount: "Don't have an account?",
            registerNow: 'Register Now',
            error: 'Invalid username or password',
            pending: 'Your account is pending admin approval'
        },
        register: {
            title: 'Register New Account',
            subtitle: 'Join Technology Society Management Team',
            fullName: 'Full Name',
            fullNamePlaceholder: 'Enter your full name',
            username: 'Username',
            usernamePlaceholder: 'Set your username',
            email: 'Email',
            emailPlaceholder: 'Enter email',
            password: 'Password',
            passwordPlaceholder: 'Set password (at least 6 characters)',
            confirmPassword: 'Confirm Password',
            confirmPasswordPlaceholder: 'Enter password again',
            registerBtn: 'Register',
            hasAccount: 'Already have an account?',
            loginNow: 'Login Now',
            success: 'Registration successful! Please wait for admin approval.',
            passwordMismatch: 'Passwords do not match',
            emailExists: 'This email is already registered'
        },
        forgotPassword: {
            title: 'Reset Password',
            subtitle: 'We will send a verification code to your email',
            email: 'Email',
            emailPlaceholder: 'Enter your registered email',
            sendCode: 'Send Code',
            verificationCode: 'Verification Code',
            verificationCodePlaceholder: 'Enter 6-digit code',
            newPassword: 'New Password',
            newPasswordPlaceholder: 'Set new password',
            confirmPassword: 'Confirm Password',
            confirmPasswordPlaceholder: 'Enter new password again',
            resetPassword: 'Reset Password',
            backToLogin: 'Back to Login',
            codeSent: 'Verification code sent to your email',
            success: 'Password reset successful!',
            invalidCode: 'Invalid verification code',
            emailNotFound: 'Email not found'
        },
        // Forgot Username
        forgotUsername: {
            title: 'Forgot Username',
            subtitle: 'We will send a verification code to your email',
            email: 'Email',
            sendCode: 'Send Code',
            verificationCode: 'Verification Code',
            verify: 'Verify and Show',
            found: 'Account Found',
            yourUsername: 'Your Username (Email):',
            backToLogin: 'Back to Login',
            notRegistered: 'This email is not registered. Please register first.'
        },
        admin: {
            welcome: 'Welcome back',
            dashboard: 'Admin Dashboard',
            returnFront: 'Return to Site',
            activities: 'Activities',
            projects: 'Projects',
            team: 'Team',
            users: 'Users',
            settings: 'Settings',
            add: 'Add',
            edit: 'Edit',
            delete: 'Delete',
            save: 'Save',
            cancel: 'Cancel',
            confirm: 'Confirm',
            loading: 'Loading...',
            empty: 'No data',
            deleteConfirm: 'Are you sure you want to delete?',
            success: 'Success!',
            error: 'Error occurred',
            activityTitle: 'Activity Title',
            activityDate: 'Activity Date',
            activityDescription: 'Description',
            activityLink: 'Link',
            projectTitle: 'Project Title',
            projectStatus: 'Status',
            projectDescription: 'Description',
            projectTechnologies: 'Technologies',
            projectMembers: 'Members',
            projectLink: 'Link',
            memberName: 'Name',
            memberPosition: 'Position',
            memberBio: 'Bio',
            memberAvatar: 'Avatar URL',
            memberGithub: 'GitHub',
            memberEmail: 'Email',
            userName: 'Username',
            userEmail: 'Email',
            userRole: 'Role',
            userStatus: 'Status',
            approve: 'Approve',
            reject: 'Reject',
            pending: 'Pending',
            approved: 'Approved',
            rejected: 'Rejected',
            siteEmail: 'Contact Email',
            sitePhone: 'Phone',
            siteAddress: 'Address',
            siteFacebook: 'Facebook',
            siteTwitter: 'Twitter',
            siteGithub: 'GitHub'
        },
        common: {
            language: 'Language',
            loading: 'Loading...',
            error: 'Error',
            success: 'Success',
            confirm: 'Confirm',
            cancel: 'Cancel',
            save: 'Save',
            delete: 'Delete',
            edit: 'Edit',
            add: 'Add',
            search: 'Search',
            filter: 'Filter',
            all: 'All'
        }
    }
};

// 語言切換工具
class I18n {
    constructor() {
        // 使用內存變量代替 localStorage
        this.currentLang = 'zh-TW';
    }

    setLanguage(lang) {
        if (translations[lang]) {
            this.currentLang = lang;
            document.documentElement.lang = lang;
            return true;
        }
        return false;
    }

    t(key) {
        const keys = key.split('.');
        let value = translations[this.currentLang];
        
        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                console.warn(`Translation key not found: ${key}`);
                return key;
            }
        }
        
        return value;
    }

    getCurrentLanguage() {
        return this.currentLang;
    }

    getAvailableLanguages() {
        return [
            { code: 'zh-TW', name: '繁體中文' },
            { code: 'zh-CN', name: '简体中文' },
            { code: 'en', name: 'English' }
        ];
    }
}

// 導出供其他腳本使用
if (typeof window !== 'undefined') {
    window.I18n = I18n;
    window.i18n = new I18n();
}
