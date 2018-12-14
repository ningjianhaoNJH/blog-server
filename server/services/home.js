const classModel = require('../models/classification');
const userModel = require('../models/user');
const blogModel = require('../models/blog');
const homeService = {
    async getHomeService() {
        // 获取首页用户信息
        // 获取最新文章
        // 获取首页用户分类
        // 获取首页用户归档
        let timeArchive = {};
        let [userInfo, hotBlog, userClass, userArchive] = await Promise.all([
            userModel.getUserById(1),
            blogModel.getHotBlogByUserId({ pageNum: 1, pageSize: 10, orderBy: 'created_time desc'}),
            classModel.getClassById(1),
            blogModel.getBlogByUserId({id: 1, orderBy: 'created_time asc'})
        ]);
        userArchive.forEach((item) => {
            let y = new Date(item.created_time).getFullYear();
            let m = new Date(item.created_time).getMonth() + 1;
            let t = `${y}-${m}`;
            if (timeArchive[t]) {
                timeArchive[t].total ++;
                timeArchive[t].data.push(item);
            } else {
                timeArchive[t] = {};
                timeArchive[t].data = [item];
                timeArchive[t].id = item.id;
            }
        });
        let result = {
            userInfo,
            hotBlog,
            userClass,
            timeArchive
        };
        return result;
    },
    async blogPagination(opt) {
        let result = await  blogModel.getHotBlogByUserId(opt);
        return result;
    }
};
module.exports = homeService;
