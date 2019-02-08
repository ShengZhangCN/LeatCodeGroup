var Naive = {
    numUniqueEmails(emails) {
        var set = new Set();

        for (let email of emails) {
            var simplifiedEmail = this.simplify(email);
            set.add(simplifiedEmail);
        }

        var count = 0;

        set.forEach((item) => {
            if (item != null) {
                count++;
            }
        });
        return count;
    },
    simplify(email) {
        var stringArray = email.split("@");

        if (stringArray.length != 2) {
            return null;
        }

        var simplifiedEmail = "";

        var name = stringArray[0];
        var domain = stringArray[1];

        var indexPlus = name.indexOf("+");
        if (indexPlus != -1) {
            name = name.substring(0, name.indexOf("+"));
        }

        name = name.split(".").join("");

        return name + "@" + domain;
    }
};

var Regex = {
    numUniqueEmails(emails) {
        var set = new Set();

        emails.forEach((email)=>{
            var domain = email.replace(/.*\+.*@/, "");
            var name = email.replace(/\+.*@.+/, "");
            name = name.replace(/\./g, "");
            set.add(name + domain);
        });

        return set.size;
    }
}

var emails = ["test.email+alex@leetcode.com",
    "test.e.mail+bob.cath+y@leetcode.com",
    "testemail+david@lee.tcode.com"
];


// console.log(Naive.numUniqueEmails(emails));
console.log(Regex.numUniqueEmails(emails));
