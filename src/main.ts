import {Document} from "./document"

var order:Document = {CardCode:"C001"};
order.Lines = [];
order.Lines.push({"ItemCode":"I001"});
order.Lines.push({"ItemCode":"I002"});

var json = JSON.stringify(order);

console.debug(json);

var order1:Document = JSON.parse(json);
console.dir(order1);
