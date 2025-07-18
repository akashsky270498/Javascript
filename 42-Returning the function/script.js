function parent() {
  const var_1 = 10;

  function children() {
    const var_2 = 20;

    function grandChildren() {
      console.log("Addition: ", var_1 + var_2);
    }
    return grandChildren;
  }
  return children();
}

const add = parent();
add();
