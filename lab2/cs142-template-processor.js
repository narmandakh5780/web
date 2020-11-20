function Cs142TemplateProcessor(template) {
	this.template = template;
}
Cs142TemplateProcessor.prototype.fillIn = function(dictionary) {
	var a = this.template;
	var b = /{{[^{]*}}/g;
	var m = this.template.match(b);
	var p, key, ar;
  for (var i = 0; i < m.length; i++) {
    p = m[i];
    key = p.replace("{{", "");
    key = key.replace("}}", "");
    ar = dictionary[key] || '';
    a = a.replace(p, ar);
  }
  return a;
};

