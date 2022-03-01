var ListTemplates = (function () {
    function ListTemplates(container) {
        this.container = container;
    }
    ListTemplates.prototype.render = function (item, heading, unit, comment, post) {
        var li = document.createElement('li');
        var h4 = document.createElement('h4');
        h4.innerText = "".concat(heading, "/ #").concat(unit);
        li.append(h4);
        var h5 = document.createElement('h5');
        h5.innerText = item.tenantfrm();
        li.append(h5);
        var p = document.createElement('p');
        p.innerText = "".concat(comment);
        li.append(p);
        if (post === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    };
    return ListTemplates;
}());
export { ListTemplates };
