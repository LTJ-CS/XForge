let utils = require("../dist/utils")

utils.executeShellCommandSync("coscmd -d -c ../../../temp.cos.conf upload -rs ./ /test/")