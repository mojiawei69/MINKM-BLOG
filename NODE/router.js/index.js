const Router = require('express').Router();
const multer = require("multer");
const QiniuUpload = require('../Utils/qiniu');
const C = require('../controller/index');
const storage = multer.diskStorage({ //文件储存路径
    destination: function (req, file, cb) { cb(null, './uploads'); }, //文件存储目录
    filename: function (req, file, cb) { cb(null, `${Date.now()}-${file.originalname}`); } //文件名
});
const upload = multer({ storage: storage }); // 添加配置文件到muler对象。
Router.all('/test', C.testController);
Router.get('/qiniu/upoad', QiniuUpload);
Router.get('/chat/friend/list', C.chatController.findFriendList);
Router.get('/chat/firend/apply', C.chatController.findApply);
Router.get('/chat/friend/msg', C.chatController.findFriendMsg);
Router.get('/chat/golbal/message', C.chatController.findGolbalUserMsg);
Router.get('/blog/get/categorie', C.blogCategorieController.getCategorie);
Router.get('/blog/get/hot/article', C.blogArticleController.getHotArticle);
Router.get('/blog/get/all/article', C.blogArticleController.selectEffectiveArticle);
Router.get('/blog/get/label', C.blogLabelController.selectLabel);
Router.get('/blog/get/recovery/article', C.blogArticleController.selectRecoveryArticle);
Router.get('/chat/upload/img/chat_head/:url', C.UserController.getUserImg);
Router.get('/user/info', C.UserController.userInfo);
Router.get('/client/get/article', C.blogClientController.selectBlogClientArticle);
Router.get('/blog/article/comment/:id', C.blogClientController.selectCommentByArticleId);
Router.get('/blog/comment/parise', C.blogClientController.selectUserPraiseFromArticleId);
Router.get('/blog/detail/article', C.blogArticleController.selectArticleDetails);
Router.get('/blog/get/webshare', C.blogWebShareController.selectWebShare);
Router.get('/blog/get/client/webshare', C.blogWebShareController.getClientWebShare);
Router.get('/blog/detail/comment', C.blogArticleController.selectArticleCommentFromId);
Router.get('/blog/get/banner', C.BlogBannersController.getBlogBanners);
Router.get('/client/get/file', C.blogClientController.selectBlogFile);
Router.get('/blog/leave/msg', C.LeaveMsgController.loadLeaveMsg);
Router.get('/auth/vcode/img', C.UserController.getVcodeImg);
Router.get('/front/admin/info', C.blogClientController.adminInfo);
Router.get('/admin/monitor', C.monitorController.MonitorList);
Router.get('/client/get/detali', C.blogClientController.clientLabelandCategories);
Router.get("/client/home/article", C.blogClientController.HomeBlogArticle);
Router.get("/blog/get/friend", C.blogFriendController.getFriendChain);
Router.get('/blog/get/WebCategories', C.blogWebCategoriesController.getWebCategories);
Router.post('/chat/upload/img/head', upload.single('img'), C.chatController.postUserimg);
Router.post('/blog/post/categorie', C.blogCategorieController.addCategorie);
Router.post('/blog/post/article', C.blogArticleController.addArticle);
Router.post('/blog/post/label', C.blogLabelController.addLabel);
Router.post('/user/regist', C.UserController.userRegist);
Router.post('/user/login', C.UserController.userLogin);
Router.post('/user/verify_name', C.UserController.verifyUsername);
Router.post('/blog/article/comment', C.blogClientController.insertSendBlogArticle);
Router.post('/blog/post/webshare', C.blogWebShareController.addWebShare);
Router.post('/blog/post/banner', C.BlogBannersController.addBlogBanners);
Router.post('/blog/leave/msg', C.LeaveMsgController.postLeaveMsg);
Router.post('/auth/vcode/img', C.UserController.postAuthVcodeImg);
Router.post('/blog/post/friend', C.blogFriendController.addFriendChain);
Router.post('/blog/post/WebCategories', C.blogWebCategoriesController.addWebCategories);
Router.put('/blog/put/categorie', C.blogCategorieController.editCategorie);
Router.put('/blog/put/article', C.blogArticleController.updateOneArticle);
Router.put('/blog/put/label', C.blogLabelController.updateLabe);
Router.put('/blog/put/recovery/:id/article', C.blogArticleController.recoveryArticle);
Router.put('/blog/comment/parise', C.blogClientController.praiseArticleComment);
Router.put('/blog/put/webshare', C.blogWebShareController.updateWebShare);
Router.put('/blog/detail/comment', C.blogArticleController.updateCommentFromId);
Router.put('/blog/put/banner', C.BlogBannersController.updateBlogBanners);
Router.put('/blog/leave/msg', C.LeaveMsgController.putLeaveMsgReply);
Router.put('/blog/put/friend', C.blogFriendController.updateFriendChain);
Router.put('/blog/put/WebCategories', C.blogWebCategoriesController.updateWebCategories);
Router.put('/blog/toggle/leave', C.LeaveMsgController.updateLeaveMsg);
Router.put('/user/info', C.UserController.UpdateUserInfo);
Router.delete('/blog/delete/categorie', C.blogCategorieController.deleteCategorie);
Router.delete('/blog/delete/label', C.blogLabelController.deleteLabel);
Router.delete('/blog/delete/:id/article', C.blogArticleController.deleteArticle);
Router.delete('/blog/delete/webshare', C.blogWebShareController.deleteWebShare);
Router.delete('/blog/delete/banner', C.BlogBannersController.deleteBlogBanners);
Router.delete('/blog/leave/msg', C.LeaveMsgController.deleteLeaveMsg);
Router.delete('/blog/delete/friend', C.blogFriendController.deleteFriendChain);
Router.delete('/blog/delete/WebCategories', C.blogWebCategoriesController.deleteWebCategories);
module.exports = Router;