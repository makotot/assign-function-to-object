const foo = () => {
  return {
    x: 0,
    bar() {
      console.log("bar");
      return this;
    },
    baz() {
      console.log("baz");
      return this;
    }
  };
};

const hoge = () => {
  const obj = foo();

  // Cannot copy function with shallow copy
  obj["foobar"] = function() {
    console.log(this);
    return this;
  };

  return obj;
};

hoge()
  .bar()
  .baz()
  .foobar();
