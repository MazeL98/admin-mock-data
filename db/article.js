import Mock from "mockjs";
import { param2Obj, sliceId } from "./utils.js";

let list = [];
let count = 8;
let i = 0;
for (i; i < count; i++) {
    list.push(
        Mock.mock({
            _id: "@id()",
            ranking: i + 1,
            title: "测试文章",
            author: "@name()",
            publicDate: "1629099597000",
            desc: "这是一篇用于测试的文章",
            content: "这是一篇测试文章，这里是文章的正文内容。",
            __v: 0,
        })
    );
}

function getAllArticleList(req) {
    const { page, size } = param2Obj(req.originalUrl);
    const pageList = list.filter(
        (item, index) => index < size * page && index >= size * (page - 1)
    );
    return {
        success: true,
        data: {
            list: pageList,
            total: count,
            page: page,
            size: size,
        },
        message: "成功获取所有文章",
    };
}

function sortArticle(req) {
    const { initRanking, finalRanking } = req.body;
    if (initRanking > finalRanking) {
        list.forEach((item) => {
            if (item.ranking < initRanking && item.ranking >= finalRanking) {
                item.ranking++;
            }
        });
        const deleteList = list.splice(initRanking - 1, 1);
        deleteList[0].ranking = finalRanking;
        list.splice(finalRanking - 1, 0, deleteList[0]);
    } else if (initRanking < finalRanking) {
        list.forEach((item) => {
            if (item.ranking > initRanking && item.ranking <= finalRanking) {
                item.ranking--;
            }
        });
        const deleteList = list.splice(initRanking - 1, 1);
        deleteList[0].ranking = finalRanking;
        list.splice(finalRanking - 1, 0, deleteList[0]);
    } else {
        return {
            success: false,
            code: -999,
            message: "拖拽无效",
        };
    }
    return {
        success: true,
        code: 200,
        message: "排名更新成功",
    };
}

function deleteArticle(req) {
    const articleId = sliceId(req.url);
    if (articleId) {
        list = list.filter((item) => item._id !== articleId);
        return {
            success: true,
            code: 200,
            message: "删除成功",
        };
    } else {
        return {
            success: false,
            code: -999,
            message: "删除失败，请重试",
        };
    }
}

function getArticleDetail(req) {
    const articleId = sliceId(req.url);
    if (articleId) {
        const article = list.find((item) => item._id === articleId);
        return {
            success: true,
            code: 200,
            data: article,
            message: "获取成功",
        };
    } else {
        return {
            success: false,
            code: -999,
            message: "获取失败",
        };
    }
}

function createArticle(req) {
    const { title, content } = req.body;
    if (title && content) {
        list.push(
            Mock.mock({
                _id: "@id()",
                ranking: list.length + 1,
                title: title,
                author: "@name()",
                publicDate: "1629099597000",
                desc: "这是一篇用于测试的文章",
                content: content,
                __v: 0,
            })
        );
        return {
            success: true,
            code: 200,
            message: "创建成功",
        };
    } else {
        return {
            success: false,
            code: -999,
            message: "创建失败",
        };
    }
}

function editArticle(req) {
    const { id, title, content } = req.body;
    if (id && title && content) {
        list.forEach((item) => {
            if (item._id === id) {
                item.title = title;
                item.content = content;
            }
        });
        return {
            success: true,
            code: 200,
            message: "编辑成功",
        };
    } else {
        return {
            success: false,
            code: -999,
            message: "编辑失败",
        };
    }
}

export {
    getAllArticleList,
    sortArticle,
    deleteArticle,
    getArticleDetail,
    createArticle,
    editArticle,
};
