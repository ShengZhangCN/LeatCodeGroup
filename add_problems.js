var rp = require('request-promise');
var key = require('./api_key.js');
var assert = require('assert');
var fs = require('fs');

const USER_AGENT = key.user_agent;
const TOKEN = key.token;

const GITHUB_URL = "https://api.github.com/repos/ShengZhangCN/LeetCodeGroup"
const LEETCODE_URL = "https://leetcode.com/api";
const LEETCODE_PROBLEMS_URL = "https://leetcode.com/problems";

// Create issue on Github
var createIssue = async (title, body) => {
    const options = {
        url: `${GITHUB_URL}/issues`,
        method: "POST",
        headers: {
            "User-Agent": USER_AGENT,
            "Authorization": `token ${TOKEN}`
        },
        json: {
            "title": title,
            "body": body,
        }
    };

    try {
        await (rp(options));

        console.log(`Issue ${title} is created`);

    } catch (error) {
        console.log(error.message);
    };
}

// Get latest issue on Github
var getLatestIssue = async () => {
    const options = {
        url: `${GITHUB_URL}/issues`,
        method: "GET",
        headers: {
            "User-Agent": USER_AGENT,
        }
    };

    var latestIssue = {};

    try {
        latestIssue = JSON.parse(await (rp(options)))[0];
    } catch (error) {
        console.log(error.message);
    }

    return latestIssue;
}

// Get last problem from probe
var getLastProblem = (problems) => {
    var lastProblem = problems.body.split("- [").filter((item, index, array) => {
        if (index == array.length - 1) {
            return item;
        }
    })[0];

    var lastProblemName = lastProblem.split("]").filter((item, index) => {
        if (index == 0) {
            return item;
        }
    });
    return lastProblemName[0];
}


var getAllProblems = async () => {
    const options = {
        url: `${LEETCODE_URL}/problems/algorithms`,
        method: "GET",
    };

    var problems = [];

    try {
        problems = JSON.parse(await (rp(options))).stat_status_pairs;
    } catch (error) {
        console.log(error.message);
    }

    return problems;
}

// Sort by difficulty first, then by acceptance
var sortProblems = (problems) => {

    problems.sort((problem1, problem2) => {
        var difficultyLevel1 = problem1.difficulty.level;
        var difficultyLevel2 = problem2.difficulty.level;

        var acceptance1 = problem1.stat.total_acs / problem1.stat.total_submitted;
        var acceptance2 = problem2.stat.total_acs / problem2.stat.total_submitted;

        if (difficultyLevel1 < difficultyLevel2) {
            return -1;
        } else if (difficultyLevel1 > difficultyLevel2) {
            return 1;
        } else {
            return acceptance2 - acceptance1;
        }
    });

    problems = problems.filter((item, index) => {
        if (!item.paid_only) {
            return true;
        }
    });

    return problems;
}

var getNewProblems = (allProblems, lastProblem, numOfNewProblems) => {
    var newProblems = [];
    var lastProblemIndex;
    allProblems.forEach((problem, index) => {
        if (problem.stat.question_id == lastProblem.split(".")[0]) {
            lastProblemIndex = index;
            return;
        }
    });

    return allProblems.slice(lastProblemIndex + 1, lastProblemIndex + 1 + numOfNewProblems);
}

// Compose issue body
var composeIssueBody = (problems) => {
    var body = "";

    problems.forEach(problem => {
        let title = `${problem.stat.question_id}. ${problem.stat.question__title}`;
        let link = `${LEETCODE_PROBLEMS_URL}/${problem.stat.question__title_slug}`;

        body += `- [${title}](${link})\n`
    });

    return body;
}


var addNewProblems = async () =>{
    var latestIssue = await getLatestIssue();
    // console.log(`[${lastIssue.title}](${lastIssue.html_url})`);
    var lastProblemName = getLastProblem(latestIssue);
    // console.log(lastProblemName);

    var problems = await getAllProblems();
    // console.log(problems[0].difficulty)
    var sortedProblems = sortProblems(problems);
    // fs.writeFile('sorted_problems.json', JSON.stringify(sortedProblems), error=>{
    //     if (error){
    //         throw error;
    //     }
    //     console.log("File is saved");
    // });
    var newProblems = getNewProblems(sortedProblems, lastProblemName, 5);
    // console.log(newProblems);
    await createIssue(`Week ${parseInt(latestIssue.title.split(" ")[1]) + 1}`, composeIssueBody(newProblems));
}


// var addSolutionsFromLatestProblems = async () =>{
//         var latestIssue = await getLatestIssue();
//         // console.log(latestIssue.body);
//         var problems = getProblemsFromIssue(latestIssue);
//         console.log(problems);
//         // addProblemsLinkToREADME(lastIssue);
//
//         // var problems = [];
//         createSolutionDirectory(problems, "yicheng_solution.js");
// }

if (require.main == module){
    (async () => {
        console.log("haha");
        // await addNewProblems();

        // await addSolutionsFromLatestProblems();

    })();
}


module.exports = {
    getLatestIssue: getLatestIssue
};
