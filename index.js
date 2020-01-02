const pug = require('pug')

function Init({ path_views }) {

    function Render(req, res, next) {

        res.render = function (templatePath, data) {
            PugResRender(req, res, templatePath, data)
        }
        next();
    }

    function PugResRender(req, res, templatePath, data) {
        res.headers['Content-Type'] = 'text/html; charset=utf-8';
        let html = pug.renderFile(path_views + templatePath + '.pug', data);
        res.end(html);
        return html;
    }

    return Render;
}

module.exports = Init;