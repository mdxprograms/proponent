const Utils = {
  byId: id => document.getElementById(id),
  qs: sel => document.querySelector(sel),
  listen: (el, event, cb) => el.addEventListener(event, cb)
};

const { byId, qs, listen } = Utils;

const form = () => {
  const model = {
    name: "",
    age: ""
  };

  const fields = {
    name: byId("name"),
    age: byId("age"),
    save: byId("save")
  };

  const output = {
    name: qs(".user-data__name"),
    age: qs(".user-data__age")
  };

  let state = new Proxy(model, {
    set(obj, prop, newVal) {
      obj[prop] = newVal;

      output[prop].innerHTML = newVal;

      return true;
    }
  });

  const setName = e => (state.name = e.target.value);
  const setAge = e => (state.age = e.target.value);
  const submit = e => {
    e.preventDefault();
    alert(`${state.name} data saved`);
  };

  listen(fields.name, "keyup", setName);
  listen(fields.age, "keyup", setAge);
  listen(fields.save, "click", submit);
};

listen(document, "DOMContentLoaded", () => {
  form();
});
