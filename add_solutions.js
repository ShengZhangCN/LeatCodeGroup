var rp = require('request-promise');
var assert = require('assert');
var fs = require('fs');
var addProblem = require("./add_problems.js");

var getProblemsFromIssue = (issue) =>{
    const regex = /\- \[.+\]\(.+\)/g;
    var problems = issue.body.match(regex);

    return problems.map(item =>{
        const reg = /\[.+\]/g;
        return item.match(reg)[0].slice(1).slice(0, -1);
    });

}

var createSolutionDirectory = (problems, solutionName) =>{

    problems.forEach(problem => {
        var dirName = problem.split(" ").join("").split(".").join("_");
        // console.log(dirName);

        var path = `./${dirName}/${solutionName}`;

        if (!fs.existsSync(`./${dirName}`)){
            fs.mkdirSync(`./${dirName}`);
        }
        fs.writeFileSync(path, "");
    });

}

var addProblemsLinkToREADME = (issue) => {
    let readme = fs.readFileSync("./README.md", 'utf8');
    const regex = /\- \[.+\]\(.+\)/g;
    let matches = readme.match(regex);
    // console.log(matches);

    var problemLink = `- [${issue.title}](${issue.html_url})`;

    if (!matches.includes(problemLink)){
        var position = readme.indexOf(matches[0]);
        var updatedReadme = [readme.slice(0, position), `${problemLink}\n`,
        readme.slice(position)].join("");
        fs.writeFile("./README.md", updatedReadme, error => {
            if (error) throw error;
            console.log("README updated");
        });
    }


}


var addSolutionsFromLatestProblems = async () =>{
        var latestIssue = await addProblem.getLatestIssue();
        // console.log(latestIssue.body);
        var problems = getProblemsFromIssue(latestIssue);
        console.log(problems);
        addProblemsLinkToREADME(latestIssue);

        // var problems = [];
        createSolutionDirectory(problems, "yicheng_solution.js");
}

if (require.main == module){
    (async () => {
        await addSolutionsFromLatestProblems();
    })();
}
