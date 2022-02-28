var ListTemplates = (function () {
    function ListTemplates(container) {
        this.container = container;
    }
    ListTemplates.prototype.render = function (item, heading, post) {
        var li = document.createElement('li');
        var h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        var p = document.createElement('p');
        p.innerText = item.tenantfrm();
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
