import Mock from "mockjs";
import dayjs from "dayjs";
import { param2Obj, parseFloat2Two } from "./utils.mjs";
import schedule from "node-schedule";

// 90天每日营收数据
let list = [];
let count = 90;
let i = 0;

// 初次生成数据列表
let today = dayjs();
for (i; i < count; i++) {
    list.push(
        Mock.mock({
            date: today.subtract(i, "day").format("YYYY-MM-DD").toString(),
            timePointData: [
                {
                    timeStr: "0点",
                    "income|2-10.2": 1,
                    "expense|2-10.2": 1,
                    balance: function () {
                        return parseFloat2Two(this.income - this.expense);
                    },
                },
                {
                    timeStr: "3点",
                    "income|2-10.2": 1,
                    "expense|2-10.2": 1,
                    balance: function () {
                        return parseFloat2Two(this.income - this.expense);
                    },
                },
                {
                    timeStr: "6点",
                    "income|2-10.2": 1,
                    "expense|2-10.2": 1,
                    balance: function () {
                        return parseFloat2Two(this.income - this.expense);
                    },
                },
                {
                    timeStr: "9点",
                    "income|2-15.2": 1,
                    "expense|2-10.2": 1,
                    balance: function () {
                        return parseFloat2Two(this.income - this.expense);
                    },
                },
                {
                    timeStr: "12点",
                    "income|2-15.2": 1,
                    "expense|2-10.2": 1,
                    balance: function () {
                        return parseFloat2Two(this.income - this.expense);
                    },
                },
                {
                    timeStr: "15点",
                    "income|2-15.2": 1,
                    "expense|2-10.2": 1,
                    balance: function () {
                        return parseFloat2Two(this.income - this.expense);
                    },
                },
                {
                    timeStr: "18点",
                    "income|2-15.2": 1,
                    "expense|2-10.2": 1,
                    balance: function () {
                        return parseFloat2Two(this.income - this.expense);
                    },
                },
                {
                    timeStr: "21点",
                    "income|2-10.2": 1,
                    "expense|2-15.2": 1,
                    balance: function () {
                        return parseFloat2Two(this.income - this.expense);
                    },
                },
            ],
            totalIncome: function () {
                const res = this.timePointData.reduce((total, currentV) => {
                    return total + currentV.income;
                }, 0);
                return parseFloat2Two(res);
            },
            totalExpense: function () {
                const res = this.timePointData.reduce((total, currentV) => {
                    return total + currentV.expense;
                }, 0);
                return parseFloat2Two(res);
            },
            totalBalance: function () {
                const res = this.timePointData.reduce((total, currentV) => {
                    return total + currentV.balance;
                }, 0);
                return parseFloat2Two(res);
            },
        })
    );
}

// 每日00：02更新日期并重新生成数据列表
const generateList = () => {
    schedule.scheduleJob("0 2 0 * * *", () => {
        today = dayjs();
        list = [];
        for (i; i < count; i++) {
            list.push(
                Mock.mock({
                    date: today
                        .subtract(i, "day")
                        .format("YYYY-MM-DD")
                        .toString(),
                    timePointData: [
                        {
                            timeStr: "0点",
                            "income|2-10.2": 1,
                            "expense|2-10.2": 1,
                            balance: function () {
                                return parseFloat2Two(
                                    this.income - this.expense
                                );
                            },
                        },
                        {
                            timeStr: "3点",
                            "income|2-10.2": 1,
                            "expense|2-10.2": 1,
                            balance: function () {
                                return parseFloat2Two(
                                    this.income - this.expense
                                );
                            },
                        },
                        {
                            timeStr: "6点",
                            "income|2-10.2": 1,
                            "expense|2-10.2": 1,
                            balance: function () {
                                return parseFloat2Two(
                                    this.income - this.expense
                                );
                            },
                        },
                        {
                            timeStr: "9点",
                            "income|2-15.2": 1,
                            "expense|2-10.2": 1,
                            balance: function () {
                                return parseFloat2Two(
                                    this.income - this.expense
                                );
                            },
                        },
                        {
                            timeStr: "12点",
                            "income|2-15.2": 1,
                            "expense|2-10.2": 1,
                            balance: function () {
                                return parseFloat2Two(
                                    this.income - this.expense
                                );
                            },
                        },
                        {
                            timeStr: "15点",
                            "income|2-15.2": 1,
                            "expense|2-10.2": 1,
                            balance: function () {
                                return parseFloat2Two(
                                    this.income - this.expense
                                );
                            },
                        },
                        {
                            timeStr: "18点",
                            "income|2-15.2": 1,
                            "expense|2-10.2": 1,
                            balance: function () {
                                return parseFloat2Two(
                                    this.income - this.expense
                                );
                            },
                        },
                        {
                            timeStr: "21点",
                            "income|2-10.2": 1,
                            "expense|2-15.2": 1,
                            balance: function () {
                                return parseFloat2Two(
                                    this.income - this.expense
                                );
                            },
                        },
                    ],
                    totalIncome: function () {
                        const res = this.timePointData.reduce(
                            (total, currentV) => {
                                return total + currentV.income;
                            },
                            0
                        );
                        return parseFloat2Two(res);
                    },
                    totalExpense: function () {
                        const res = this.timePointData.reduce(
                            (total, currentV) => {
                                return total + currentV.expense;
                            },
                            0
                        );
                        return parseFloat2Two(res);
                    },
                    totalBalance: function () {
                        const res = this.timePointData.reduce(
                            (total, currentV) => {
                                return total + currentV.balance;
                            },
                            0
                        );
                        return parseFloat2Two(res);
                    },
                })
            );
        }
    });
};
generateList();

// 返回 数据总览（ 今日数据+累计月收益）
function getOverview(req) {
    const { date } = param2Obj(req.url);
    if (date) {
        const reqItem = list.find((item) => item.date === date);
        const reqIndex = list.indexOf(reqItem);
        const monthList = list.slice(reqIndex, reqIndex + 30);
        const monthlyData = monthList.reduce((total, currentV) => {
            return total + currentV.totalBalance;
        }, 0);

        return {
            success: true,
            code: 200,
            data: {
                monthly: parseFloat2Two(monthlyData),
                todayIncome: reqItem.totalIncome,
                todayExpense: reqItem.totalExpense,
                todayBalance: reqItem.totalBalance,
            },
            message: "Success!",
        };
    } else {
        return {
            success: false,
            code: -999,
            message: "获取失败！",
        };
    }
}

// 返回前三个月的balance数据
function getCalendarData() {
    const calendarList = list.map((item) => {
        const { date, totalBalance } = item;
        return { date, totalBalance };
    });
    return {
        success: true,
        code: 200,
        data: calendarList,
        message: "Success!",
    };
}

// 返回本日每隔三小时的 income expenses balance 数据
function getTimePointData(req) {
    const { date } = param2Obj(req.url);
    if (date) {
        const reqItem = list.find((item) => item.date === date);
        return {
            success: true,
            code: 200,
            data: reqItem.timePointData,
            message: "Success!",
        };
    } else {
        return {
            success: false,
            code: -999,
            message: "获取失败！",
        };
    }
}

// 函数 返回 trend 数据，一周内的 收入与支出
function getTrend(req) {
    const { date } = param2Obj(req.url);
    if (date) {
        const reqItem = list.find((item) => item.date === date);
        const reqIndex = list.indexOf(reqItem);
        const weekList = list.slice(reqIndex, reqIndex + 7);
        const weekIncome = weekList.map((item) => {
            return item.totalIncome;
        });
        const weekExpense = weekList.map((item) => {
            return item.totalExpense;
        });
        return {
            success: true,
            code: 200,
            data: {
                weekIncome: weekIncome,
                weekExpense: weekExpense,
            },
            message: "Success!",
        };
    } else {
        return {
            success: false,
            code: -999,
            message: "获取失败！",
        };
    }
}

export { getOverview, getCalendarData, getTimePointData, getTrend };
