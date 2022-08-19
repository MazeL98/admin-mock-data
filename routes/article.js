import express from "express";
import {
    getAllArticleList,
    sortArticle,
    deleteArticle,
    getArticleDetail,
    createArticle,
    editArticle,
} from "../db/article.js";

const router = express.Router();

// 获取所有文章
router.get("/list", (req, res) => {
    res.json(getAllArticleList(req));
});

// 文章排序
router.post("/sort", (req, res) => {
    res.json(sortArticle(req));
});

// 删除指定文章
router.get("delete/:id", (req, res) => {
    res.json(deleteArticle(req));
});

// 获取文章详情
router.get("/:id", (req, res) => {
    res.json(getArticleDetail(req));
});

// 创建新文章
router.post("/create", (req, res) => {
    res.json(createArticle(req));
});

// 编辑文章内容
router.post("/edit", (req, res) => {
    res.json(editArticle(req));
});

export default router;
