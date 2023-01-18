export const getIndexhtml = (req, res) => {
    res.sendFile(process.cwd() + "/src/public/index.html");
};

export const getCss = (req, res) => {
    res.sendFile(process.cwd() + "/src/public/styles/style.css");
};